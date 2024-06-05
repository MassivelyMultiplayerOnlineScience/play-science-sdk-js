import Api from "../Api";

import { TReward } from "@mmos/play-science-types";

export default class RewardsApiModule {
	private _api: Api;

	constructor(api: Api) {
		this._api = api;
	}

	public async getAll(): Promise< { uid: string, minigames: TReward[] } > {

		const response = await this._api.request({
			requestOptions: {
				url: 'rewards',
			}
		});

		this._api.responseValidator(response);

		return {
			uid: response.data.body.uid,
			minigames: response.data.body.minigames
		};
	}
}