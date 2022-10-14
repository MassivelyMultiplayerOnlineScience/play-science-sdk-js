/* eslint-disable no-template-curly-in-string */

import API from './API';

import { IClassification } from '@mmos/play-science-types';

export type TClassificationsCreateResponse = {
	uid: string, player: {
		score: number;
		scoreChange: number;
		points: number;
		pointsChange: number;
		rank: number,
		rankChange: number,
		classificationCount: number,
		classificationCountChange: number,
		classificationQuality: number,
		rankPointPercentage: number,
		rankPointPercentageChange: number,
		scoredAt: Date;
	}
}

export default class APIClassifications {

	public static async create(
		options: { projectCode: string, classification: IClassification}):
		Promise<TClassificationsCreateResponse> {

		const { projectCode, classification } = options;
		const response = await API.call({
			requestOptions: {
				method: API.POST,
				url: `projects/${projectCode}/tasks/${classification.task.id}/classifications`,
				parameters: { projectCode: projectCode },
				data: classification
			}
		});

		return {
			uid: response.data.body.uid,
			player: response.data.body.player
		};
	}

}