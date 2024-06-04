import API from "./API";

import { TReward } from "@mmos/play-science-types";

export default class APIRewards {
	public static async getAll(): Promise< { uid: string, minigames: TReward[] } > {

		const response = await API.call({
			requestOptions: {
				url: 'rewards',
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			minigames: response.data.body.minigames
		};
	}
}