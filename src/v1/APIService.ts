import API from './API';

export default class APIService {

	public static async handshake():
		Promise<{ uid: string }> {

		const url = 'service/handshake';

		const response = await API.call({
			requestOptions: {
				url: url
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid
		};

	}

}