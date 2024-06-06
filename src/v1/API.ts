import { interpolateTemplate } from '../lib/tools';

import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';

type TApiRequestOptions = {
	method?: string;
	url: string;
	parameters?: any,
	data?: any;
}

export default class Api {

	public static get GET(): string { return 'GET'; }
	public static get POST(): string { return 'POST'; }

	private _host: string; public get host() { return this._host; };

	private _gameCode: string; public get gameCode() { return this._gameCode; };
	private _gameVersion: string; public get gameVersion() { return this._gameVersion; };

	private _idToken: string; public get idToken() { return this._idToken; };
	private _httpRequestCallback: (httpOptions: any) => any; public get httpRequestCallback() { return this._httpRequestCallback; };


	private _minigames: MinigamesApiModule;  public get minigames() { return this._minigames; }
	private _mmos: MMOSApiModule;  public get mmos() { return this._mmos; }
	private _players: PlayersApiModule;  public get players() { return this._players; }
	private _rewards: RewardsApiModule;  public get rewards() { return this._rewards; }
	private _service: ServiceApiModule;  public get service() { return this._service; }

	public init(options: {
		host: string;
		gameVersion: string,
		gameCode: string,
		httpRequestCallback: (httpOptions: any) => any,
	}) {

		this._minigames = new MinigamesApiModule(this);
		this._mmos = new MMOSApiModule(this);
		this._players = new PlayersApiModule(this);
		this._rewards = new RewardsApiModule(this);
		this._service = new ServiceApiModule(this);

		const {host, gameVersion, gameCode, httpRequestCallback } = options;

		this._host = host;

		this._gameVersion = gameVersion;
		this._gameCode = gameCode;

		this._httpRequestCallback = httpRequestCallback;
	}




	public errorToString(response: any) {
		return `ERR ${response?.status}: ${response?.data?.body?.message}`;
	}

	private buildRequest(idToken: string | undefined, options: TApiRequestOptions): any {

		let { url } = options;
		const { parameters, method, data } = options;

		const params: any =  { ...parameters };
		params.gameVersion = this._gameVersion;
		params.gameCode = this._gameCode;

		url = interpolateTemplate(url, params);

		const queryString = `gameCode=${params.gameCode}&gameVersion=${params.gameVersion}`;
		url += (!url.includes('?')) ? '?' : '&';
		url += queryString;

		url = `${this._host}/${url}`;

		return {
			url: url,
			method: method || Api.GET,
			headers: {
				Authorization: `Bearer ${idToken}`,
				'content-type': 'application/json'
			},
			data: data
		};
	}

	public async request(options: {httpOptions?: any, requestOptions?: TApiRequestOptions}): Promise<any> {

		const { httpOptions, requestOptions } = options;

		let callOptions = httpOptions;

		if (!callOptions) callOptions = this.buildRequest(this.idToken, requestOptions!);
		return this.httpRequestCallback(callOptions);
	}

	public responseValidator(response?: any, acceptedStatusCode = 200) {
		if (!response || !response.data || !response.data.body || response.status !== acceptedStatusCode) {
			throw new Error(`[Error ${response!.status}]: ${response!.data.message}`);
		}
	}

}