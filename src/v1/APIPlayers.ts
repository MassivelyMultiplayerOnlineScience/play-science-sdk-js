/* eslint-disable no-template-curly-in-string */

import API from './API';

import { TPlayer } from '@mmos/play-science-types';
import { TPlayerProject } from '@mmos/play-science-types';

export default class APIPlayers {

	/**
	* Returns a Player object identified by the oAuthData information. Creates the Player in the database if necessary.
	* @param {Object} options
	* @param {Object} options.oAuthData - oAuthData for authentication
	* @return {Promise}
	* @example
		await api.players.get({
			oAuthData: oAuthData
		});
	*/
	public static async get():
		Promise<{ uid: string, player: TPlayer }> {

		const response = await API.call({
			requestOptions: {
				url: "players/get"
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			player: response.data.body.player
		};
	}

	public static async getProjects(
		options: {playerCode: string}):
		Promise<{ uid: string, projects: TPlayerProject[] }> {

		const { playerCode } = options;
		const response = await API.call({
			requestOptions: {
				url: "players/projects",
				parameters: { playerCode: playerCode }
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			projects: response.data.body.projects
		};
	}

	public static async projectReset(
		options: { projectCode: string }):
		Promise< { uid: string } > {

		const { projectCode } = options;
		const response = await API.call({
			requestOptions: {
				url: 'players/projects/${projectCode}/reset',
				parameters: { projectCode: projectCode}
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid
		};
	}

}
