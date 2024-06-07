import { Api, ApiEndpoint } from '../Api';

export default class ServiceApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly handshakeEndpoint = new ApiEndpoint('service/handshake');
	public async handshake():
		Promise<{ uid: string }> {

		const response = await this._api.request({
			url:  this.handshakeEndpoint.url
		});

		return {
			uid: response.data.uid
		};

	}

}