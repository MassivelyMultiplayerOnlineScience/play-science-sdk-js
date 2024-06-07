import { TMinigame } from '@mmos/play-science-types';
import { Api } from '../Api';

export default class MinigamesApiModule {

	private _api: Api;

	constructor(api: Api) { this._api = api; }

	public async getAll(): Promise<{ uid: string, minigames: TMinigame[] }> {

		const response = await this._api.request({
			url: 'minigames',
		});

		return {
			uid: response.data.uid,
			minigames: response.data.minigames
		};
	}

}