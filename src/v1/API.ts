import { interpolateTemplate } from '../lib/tools';

import APIGames from './APIGames';
import APIPlayers from './APIPlayers';
import APIProjects from './APIProjects';
import APIRewards from './APIRewards';
import APIService from './APIService';

type APIRequestOptions = {
	method?: string;
	url: string;
	parameters?: any,
	data?: any;
}

export default class API {

	public static host: string;

	public static gameVersion: string;
	public static gameCode: string;

	public static idToken: string;
	public static httpRequestCallback: (httpOptions: any) => any;

	public static get GET(): string { return 'GET'; }
	public static get POST(): string { return 'POST'; }

	public static init(options: {
		host: string;
		gameVersion: string,
		gameCode: string,
		httpRequestCallback: (httpOptions: any) => any,
	}) {

		const {host, gameVersion, gameCode, httpRequestCallback } = options;

		API.host = host;

		API.gameVersion = gameVersion;
		API.gameCode = gameCode;

		API.httpRequestCallback = httpRequestCallback;
	}


	public static get games() { return APIGames; }
	public static get players() { return APIPlayers; }

	public static get rewards() { return APIRewards; }

	public static get projects() { return APIProjects; }

	public static get service() { return APIService; }


	public static errorToString(response: any) {
		return `ERR ${response?.status}: ${response?.data?.body?.message}`;
	}

	private static buildRequest(idToken: string | undefined, options: APIRequestOptions): any {

		let { url } = options;
		const { parameters, method, data} = options;

		const params: any =  {...parameters};

		params.gameVersion = API.gameVersion;
		params.gameCode = API.gameCode;


		url = interpolateTemplate(url, params);

		const queryString = `gameCode=${params.gameCode}&gameVersion=${params.gameVersion}`;
		url += (!url.includes('?')) ? '?' : '&';
		url += queryString;

		url = `${API.host}/${url}`;

		return {
			url: url,
			method: method || API.GET,
			headers: {
				Authorization: `Bearer ${idToken}`,
				'content-type': 'application/json'
			},
			data: data
		};
	}

	public static async call(options: {httpOptions?: any, requestOptions?: APIRequestOptions}): Promise<any> {

		const { httpOptions, requestOptions } = options;

		let callOptions = httpOptions;

		if (!callOptions) callOptions = API.buildRequest(this.idToken, requestOptions!);
		return  API.httpRequestCallback(callOptions);
	}

	public static responseValidator(response?: any, acceptedStatusCode = 200) {
		if (!response || !response.data || !response.data.body || response.status !== acceptedStatusCode) {
			throw new Error(`[Error ${response!.status}]: ${response!.data.message}`);
		}
	}

}