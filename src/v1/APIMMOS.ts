import API from './API';

import { IClassification, ITask, TClassificationsCreateResponse } from '@mmos/play-science-types';

export default class APIMMOS {

	public static async getTask(
		options: { projectCode: string, difficulty?: number | undefined }):
		Promise<{ uid: string, task: ITask }> {

		const { projectCode } = options;
		const response = await API.call({
			requestOptions: {
				url: 'mmos-api/projects/${projectCode}/tasks',
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
				url: `mmos-api/projects/${projectCode}/tasks/${classification.task.id}/classifications`,
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

}