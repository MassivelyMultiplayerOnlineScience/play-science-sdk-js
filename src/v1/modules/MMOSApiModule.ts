import { Api, ApiEndpoint } from '../Api';

import { IClassification, ITask, TClassificationsCreateResponse } from '@mmos/play-science-types';

export default class MMOSApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly getTaskEndpoint = new ApiEndpoint('mmos-api/projects/:projectCode/tasks');
	public async getTask(
		options: { projectCode: string, difficulty?: number | undefined }):
		Promise<{ uid: string, task: ITask }> {

		const { projectCode } = options;
		const response = await this._api.request({
			url: this.getTaskEndpoint.compile({ projectCode }),
			params: { projectCode }
		}, 201);

		return {
			uid: response.data.uid,
			task: response.data.task
		};
	}

	public readonly submitClassificationEndpoint = new ApiEndpoint('mmos-api/projects/:projectCode/tasks/:taskId/classifications');
	public async submitClassification(
		options: { projectCode: string, classification: IClassification}):
		Promise<TClassificationsCreateResponse> {

		const { projectCode, classification } = options;
		const response = await this._api.request({
			method: Api.POST,
			url: this.submitClassificationEndpoint.compile({ projectCode, taskId: classification.task.id }),
			params: { projectCode },
			data: classification
		});

		return {
			uid: response.data.uid,
			player: response.data.player
		};
	}

}