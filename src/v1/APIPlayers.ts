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
	public static async authenticate():
		Promise<{ uid: string, player: TPlayer }> {

		const response = await API.call({
			requestOptions: {
				url: "players/self/authenticate"
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
				url: "players/${playerCode}/projects",
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
		options: { playerCode: string, projectCode: string }):
		Promise< { uid: string } > {

		const { playerCode, projectCode } = options;
		const response = await API.call({
			requestOptions: {
				url: 'players/${playerCode}/projects/${projectCode}/reset',
				parameters: {
					playerCode: playerCode,
					projectCode: projectCode
				}
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid
		};
	}

}
