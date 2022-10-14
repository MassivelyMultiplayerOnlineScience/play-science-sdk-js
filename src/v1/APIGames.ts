/* eslint-disable no-template-curly-in-string */

import API from './API';

export default class APIGames {

	public static async getSettings():
		Promise< { uid: string, settings: any } > {

		const response = await API.call({
			requestOptions: {
				url: 'games/${gameCode}/getSettings',
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			settings: response.data.body.settings
		};
	}
}