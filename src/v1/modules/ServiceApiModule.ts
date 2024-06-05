import Api from '../Api';

export default class ServiceApiModule {

	private _api: Api;

	constructor(api: Api) {
		this._api = api;
	}

	public async handshake():
		Promise<{ uid: string }> {

		const url = 'service/handshake';

		const response = await this._api.request({
			requestOptions: {
				url: url
			}
		});

		this._api.responseValidator(response);

		return {
			uid: response.data.body.uid
		};

	}

}