import { TMinigame } from '@mmos/play-science-types';
import API from './API';

export default class APIMinigames {

	public static async getAll(): Promise< { uid: string, minigames: TMinigame[] } > {

		const response = await API.call({
			requestOptions: {
				url: 'minigames',
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			minigames: response.data.body.minigames
		};
	}

}