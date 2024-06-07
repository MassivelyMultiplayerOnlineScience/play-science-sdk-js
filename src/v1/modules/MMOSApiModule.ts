import { Api } from '../Api';

import { IClassification, ITask, TClassificationsCreateResponse } from '@mmos/play-science-types';

export default class MMOSApiModule {

	private _api: Api;

	constructor(api: Api) { this._api = api; }

	public async getTask(
		options: { projectCode: string, difficulty?: number | undefined }):
		Promise<{ uid: string, task: ITask }> {

		const { projectCode } = options;
		const response = await this._api.request({
			url: 'mmos-api/projects/${projectCode}/tasks',
			params: { projectCode: projectCode }
		}, 201);

		return {
			uid: response.data.uid,
			task: response.data.task
		};
	}

	public async submitClassification(
		options: { projectCode: string, classification: IClassification}):
		Promise<TClassificationsCreateResponse> {

		const { projectCode, classification } = options;
		const response = await this._api.request({
			method: Api.POST,
			url: `mmos-api/projects/${projectCode}/tasks/${classification.task.id}/classifications`,
			params: { projectCode: projectCode },
			data: classification
		});

		return {
			uid: response.data.uid,
			player: response.data.player
		};
	}

}