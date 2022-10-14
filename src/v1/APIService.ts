/* eslint-disable no-template-curly-in-string */

import API from './API';

import { ServiceNotificationType, TServiceNotification } from '@mmos/play-science-types';

export default class APIService {

	public static async handshake():
		Promise<{ uid: string }> {

		const url = 'handshake';

		const response = await API.call({
			requestOptions: {
				url: url
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid
		};

	}

	public static async getNotifications(
		options: { type: ServiceNotificationType, playerCode?: string, projectCode?: string, rewardCode?: string}):
		Promise<{ uid: string, notifications: TServiceNotification[] }> {

		const { type, projectCode, playerCode, rewardCode } = options;

		let url = '';
		switch (type) {
			case ServiceNotificationType.GENERAL:
				url = 'notifications?playerCode=${playerCode}'; break;
			case ServiceNotificationType.PROJECT:
				url = 'notifications/project?playerCode=${playerCode}&projectCode=${projectCode}'; break;
			case ServiceNotificationType.PROJECTS:
				url = 'notifications/projects?playerCode=${playerCode}'; break;
			case ServiceNotificationType.REWARD:
				url = 'notifications/reward?playerCode=${playerCode}&rewardCode=${rewardCode}'; break;
			case ServiceNotificationType.REWARDS:
				url = 'notifications/rewards?playerCode=${playerCode}'; break;
			case ServiceNotificationType.PLAYER:
				url = 'notifications/player?playerCode=${playerCode}'; break;
		}

		const parameters = {
			playerCode: playerCode,
			projectCode: projectCode,
			rewardCode: rewardCode
		};

		const response = await API.call({
			requestOptions: {
				url: url,
				parameters: parameters
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			notifications: response.data.body.notifications
		};
	}

}