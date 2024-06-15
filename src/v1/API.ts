import axios from 'axios';
import { match, compile } from 'path-to-regexp';

import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PartnersApiModule from './modules/PartnersApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';
import NodeCache from 'node-cache';

export type TApiRequestOptions = {
	method?: string;
	url: string;
	data?: any;
	params?: any;
}

export class ApiEndpoint {

	private _url: string; public get url() { return this._url; }

	constructor(url: string) {
		this._url = url;
	}

	public match(url: string): boolean {
		return match(this._url, { decode: decodeURIComponent })(url) !== false;
	}

	public compile(params: any): string {
		return compile(this._url, { encode: encodeURIComponent })(params);
	}

}

export class Api {

	public static readonly GET = 'GET';
	public static readonly POST = 'POST';

	public static get HEADER_GAMECODE(): string { return 'X-PlayScience-GameCode'; }
	public static get HEADER_GAMEVERSION(): string { return 'X-PlayScience-GameVersion'; }

	private _cacheTtlInformation: { endpoint: ApiEndpoint, ttlInSeconds: number }[];
	private _shortcutRequestEvaluator: (requestOptions: TApiRequestOptions) => Promise<boolean>; public get shortcutRequestEvaluator() { return this._shortcutRequestEvaluator; };
	private _shortcutRequestCallback: (requestOptions: TApiRequestOptions, expectedStatusCode?: number) => Promise<any>; public get shortcutRequestCallback() { return this._shortcutRequestCallback; };

	private cache: NodeCache;

	private _idToken: string;
	public get idToken() {
		return this._idToken;
	};
	public set idToken(value: string) {
		this._idToken = value;

		if (value) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
		} else {
			delete axios.defaults.headers.common['Authorization'];
		}
	}


	private _minigames: MinigamesApiModule; public get minigames() { return this._minigames; }
	private _mmos: MMOSApiModule; public get mmos() { return this._mmos; }
	private _partners: PartnersApiModule; public get partners() { return this._partners; }
	private _players: PlayersApiModule; public get players() { return this._players; }
	private _rewards: RewardsApiModule; public get rewards() { return this._rewards; }
	private _service: ServiceApiModule; public get service() { return this._service; }

	constructor() {
		this.cache = new NodeCache();

		this._minigames = new MinigamesApiModule(this);
		this._mmos = new MMOSApiModule(this);
		this._partners = new PartnersApiModule(this);
		this._players = new PlayersApiModule(this);
		this._rewards = new RewardsApiModule(this);
		this._service = new ServiceApiModule(this);
	}

	public init(options: {
		host: string;
		gameVersion: string,
		gameCode: string,

		cacheTtlInformation?: { endpoint: ApiEndpoint, ttlInSeconds: number }[],
		shortcutRequestEvaluator?: (requestOptions: TApiRequestOptions) => Promise<boolean>,
		shortcutRequestCallback?: (requestOptions: TApiRequestOptions, expectedStatusCode?: number) => Promise<any>
	}) {

		const { host, gameVersion, gameCode, shortcutRequestEvaluator, shortcutRequestCallback } = options;

		axios.defaults.baseURL = host;
		axios.defaults.headers.common['content-type'] = 'application/json';
		axios.defaults.headers.common['X-PlayScience-GameCode'] = gameCode;
		axios.defaults.headers.common['X-PlayScience-GameVersion'] = gameVersion;

		this._cacheTtlInformation = options.cacheTtlInformation || [];
		this._shortcutRequestEvaluator = shortcutRequestEvaluator || (async () => false);
		this._shortcutRequestCallback = shortcutRequestCallback;
	}

	public async request(requestOptions: TApiRequestOptions, expectedStatusCode: number = 200): Promise<any> {

		const { method, url, params } = requestOptions;

		let response;

		const cacheTtlInformation = this._cacheTtlInformation.find(cacheTtlInformation => cacheTtlInformation.endpoint.match(requestOptions.url));
		let cacheKey;

		// (i) Check cache

		if (method == Api.GET && cacheTtlInformation) {
			cacheKey = `${method}|${url}|${JSON.stringify(params)}`;
			response = this.cache.get(cacheKey);
		}

		if (!response) {

			// (ii) Check if client probvides data by shortcut request

			const shortcutRequest = await this._shortcutRequestEvaluator(requestOptions);

			// (iii) Make request

			if (shortcutRequest) {
				response = await this._shortcutRequestCallback(requestOptions, expectedStatusCode);
			} else {
				response = await axios(requestOptions);
			}

			if (!response || !response.data || response.status !== expectedStatusCode) {
				throw new Error(`ERR ${response!.status}: ${response!.data?.message}`, {
					cause: requestOptions
				});
			}

			// (iv) Cache response

			if (method == Api.GET && cacheTtlInformation) {
				this.cache.set(cacheKey, response, cacheTtlInformation.ttlInSeconds);
			}

		}

		return response;
	}

}