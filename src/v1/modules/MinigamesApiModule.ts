import { TMinigame } from '@mmos/play-science-types';
import { Api } from '../Api';

export default class MinigamesApiModule {

	private _api: Api;

	constructor(api: Api) {
		this._api = api;
	}

	public async getAll(): Promise< { uid: string, minigames: TMinigame[] } > {

		const response = await this._api.request({
			requestOptions: {
				url: 'minigames',
			}
		});

		this._api.responseValidator(response);

		return {
			uid: response.data.body.uid,
			minigames: response.data.body.minigames
		};
	}

}