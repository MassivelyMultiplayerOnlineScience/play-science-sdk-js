/* eslint-disable no-template-curly-in-string */

import API from './API';

import { TLocalizedString } from '@mmos/play-science-types';
import { TProject } from '@mmos/play-science-types';

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