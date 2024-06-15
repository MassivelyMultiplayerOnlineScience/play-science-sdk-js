import { Api, ApiEndpoint } from '../Api';

import { TMinigame } from '@mmos/play-science-types';

export default class MinigamesApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly getAllEndpoint = new ApiEndpoint('minigames');
	public async getAll(): Promise<{ uid: string, minigames: TMinigame[] }> {

		const response = await this._api.request({
			url: this.getAllEndpoint.url,
		});

		return {
			uid: response.data.uid,
			minigames: response.data.minigames
		};
	}

	// Assuming the caching of minigames
	public async get(id: number): Promise<{ uid: string, minigames: TMinigame }> {
		return this.getAll().then(response => {
			return {
				uid: response.uid,
				minigames: response.minigames.find(minigame => minigame.id === id)
			};
		});
	};

}