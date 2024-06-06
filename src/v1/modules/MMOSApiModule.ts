import { Api } from '../Api';

import { IClassification, ITask, TClassificationsCreateResponse } from '@mmos/play-science-types';

export default class MMOSApiModule {

	private _api: Api;

	constructor(api: Api) {
		this._api = api;
	}

	public async getTask(
		options: { projectCode: string, difficulty?: number | undefined }):
		Promise<{ uid: string, task: ITask }> {

		const { projectCode } = options;
		const response = await this._api.request({
			requestOptions: {
				url: 'mmos-api/projects/${projectCode}/tasks',
				parameters: { projectCode: projectCode }
			}
		});

		this._api.responseValidator(response, 201);

		return {
			uid: response.data.body.uid,
			task: response.data.body.task
		};
	}

	public async submitClassification(
		options: { projectCode: string, classification: IClassification}):
		Promise<TClassificationsCreateResponse> {

		const { projectCode, classification } = options;
		const response = await this._api.request({
			requestOptions: {
				method: Api.POST,
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