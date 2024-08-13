import { Api, ApiEndpoint } from '../Api';

import { TVideogame } from '@mmos/play-science-types';

export default class PartnersApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly getAllVideogamesEndpoint = new ApiEndpoint('partners/videogames');
	public async getAllVideogames(): Promise<{ uid: string, videogames: TVideogame[] }> {

		const response = await this._api.request({
			url: this.getAllVideogamesEndpoint.urlPattern,
		});

		return {
			uid: response.data.uid,
			videogames: response.data.videogames
		};
	}

	// Assuming the caching of videogames
	public async getVideogame(id: number): Promise<{ uid: string, videogame: TVideogame }> {
		return this.getAllVideogames().then(response => {
			return {
				uid: response.uid,
				videogame: response.videogames.find(videogame => videogame.id === id)
			};
		});
	};

}