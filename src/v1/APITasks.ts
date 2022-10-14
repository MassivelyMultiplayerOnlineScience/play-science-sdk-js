/* eslint-disable no-template-curly-in-string */

import API from './API';

import { ITask } from '@mmos/play-science-types';

export default class APITasks {

	public static async get(
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

}