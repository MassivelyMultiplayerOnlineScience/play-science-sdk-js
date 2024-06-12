import { Api, ApiEndpoint } from '../Api';

import { TVideogame } from '@mmos/play-science-types';

export default class PartnersApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly getAllVideogamesEndpoint = new ApiEndpoint('partners/videogames');
	public async getAllVideogames(): Promise<{ uid: string, videogames: TVideogame[] }> {

		const response = await this._api.request({
			url: this.getAllVideogamesEndpoint.url,
		});

		return {
			uid: response.data.uid,
			videogames: response.data.videogames
		};
	}

}