/* eslint-disable no-template-curly-in-string */

import API from './API';

import { TLocalizedString } from '@mmos/play-science-types';
import { TProject } from '@mmos/play-science-types';
import { ITask } from '@mmos/play-science-types';
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

export default class APIProjects {

	public static async get(
		options: { projectCode: string }):
		Promise< { uid: string, project: TProject } > {

		const { projectCode } = options;
		const response = await API.call({
			requestOptions: {
				url: 'projects/${projectCode}',
				parameters: { projectCode: projectCode}
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			project: response.data.body.project
		};
	}

	public static async getTask(
		options: { projectCode: string, difficulty?: number | undefined }):
		Promise<{ uid: string, task: ITask }> {

		const { projectCode } = options;
		const response = await API.call({
			requestOptions: {
				url: 'projects/${projectCode}/tasks',
				parameters: { projectCode: projectCode }
			}
		});

		API.responseValidator(response, 201);

		return {
			uid: response.data.body.uid,
			task: response.data.body.task
		};
	}

	public static async submitClassification(
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

		console.log(response);

		return {
			uid: response.data.body.uid,
			player: response.data.body.player
		};
	}

	public static async getTips(
		options: { projectCode: string, playerCode: string }):
		Promise< { uid: string, tips: TLocalizedString[] } > {

		const { projectCode, playerCode } = options;
		const response = await API.call({
			requestOptions: {
				url: 'projects/${projectCode}/tips?playerCode=${playerCode}',
				parameters: { projectCode: projectCode, playerCode: playerCode}
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			tips: response.data.body.tips
		};
	}

}