import { Api, ApiEndpoint } from '../Api';

import { TReward } from "@mmos/play-science-types";

export default class RewardsApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly getAllEndpoint = new ApiEndpoint('rewards');
	public async getAll(): Promise< { uid: string, rewards: TReward[] } > {

		const response = await this._api.request({
			url: this.getAllEndpoint.url,
		});

		return {
			uid: response.data.uid,
			rewards: response.data.rewards
		};
	}
}