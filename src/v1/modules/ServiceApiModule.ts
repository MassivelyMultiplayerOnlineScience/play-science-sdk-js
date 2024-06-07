import { Api } from '../Api';

export default class ServiceApiModule {

	private _api: Api;

	constructor(api: Api) { this._api = api; }

	public async handshake():
		Promise<{ uid: string }> {

		const response = await this._api.request({
			url: 'service/handshake'
		});

		return {
			uid: response.data.uid
		};

	}

}