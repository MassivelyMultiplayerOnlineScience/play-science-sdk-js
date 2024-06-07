import axios from 'axios';
import { match, compile } from 'path-to-regexp';

import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';

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

	private _mockRequests: boolean; public get mockRequests() { return this._mockRequests; };
	private _mockResponseProvider: (requestOptions: TApiRequestOptions, expectedStatusCode?: number) => Promise<any>; public get mockResponseProvider() { return this._mockResponseProvider; };

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
	private _players: PlayersApiModule; public get players() { return this._players; }
	private _rewards: RewardsApiModule; public get rewards() { return this._rewards; }
	private _service: ServiceApiModule; public get service() { return this._service; }

	public init(options: {
		host: string;
		gameVersion: string,
		gameCode: string,

		mockRequests?: boolean,
		mockResponseProvider?: (requestOptions: TApiRequestOptions, expectedStatusCode?: number) => Promise<any>
	}) {

		this._minigames = new MinigamesApiModule(this);
		this._mmos = new MMOSApiModule(this);
		this._players = new PlayersApiModule(this);
		this._rewards = new RewardsApiModule(this);
		this._service = new ServiceApiModule(this);


		const { host, gameVersion, gameCode, mockRequests, mockResponseProvider } = options;

		axios.defaults.baseURL = host;
		axios.defaults.headers.common['content-type'] = 'application/json';
		axios.defaults.headers.common['X-PlayScience-GameCode'] = gameCode;
		axios.defaults.headers.common['X-PlayScience-GameVersion'] = gameVersion;

		this._mockRequests = mockRequests || false;
		this._mockResponseProvider = mockResponseProvider;
	}

	public async request(requestOptions: TApiRequestOptions, expectedStatusCode: number = 200): Promise<any> {

		let response;

		if (this._mockRequests) {
			response = await this._mockResponseProvider(requestOptions);
		} else {
			response = await axios(requestOptions);
		}

		if (!response || !response.data || !response.data.body || response.status !== expectedStatusCode) {
			throw new Error(`ERR ${response!.status}: ${response!.data?.body?.message}`, {
				cause: requestOptions
			});}

		return response;
	}

}