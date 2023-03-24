/* eslint-disable no-template-curly-in-string */

import API from './API';

import { TPlayer } from '@mmos/play-science-types';
import { TPlayerProject } from '@mmos/play-science-types';

export default class APIPlayers {

	/**
	* Returns a Player object identified by the oAuthData information
	* @return {Promise}
	* @example
		await api.players.authenticate();
	*/
	public static async login():
		Promise<{ uid: string, player: TPlayer }> {

		const response = await API.call({
			requestOptions: {
				url: "players/self/login"
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			player: response.data.body.player
		};
	}

	/**
	* Creates a Player object identified by the oAuthData information
	* @return {Promise}
	* @example
		await api.players.create();
	*/
	public static async create(
		options: {nick: string}):
		Promise<{ uid: string, player: TPlayer }> {

		const response = await API.call({
			requestOptions: {
				method: "POST",
				url: "players/self/create",
				data: {
					nick: options.nick
				}
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			player: response.data.body.player
		};
	}

	/**
	* Checks whether a providerCode/subjectCode pair is linked
	* with the Player identified by the oAuthData information
	* @param {Object} options
	* @param {Object} options.oAuthData - oAuthData for authentication
	* @param {Object} options.otherProviderCode - other providerCode
	* @param {Object} options.otherSubjectCode - other subjectCode
	* @return {Promise}
	* @example
		await api.players.linked({
			oAuthData,
			providerCode,
			subjectCode
		});
	*/
	public static async linked(
		options: {otherPlayerProviderCode: string, otherPlayerSubjectCode: string}):
		Promise<{ uid: string, linked: boolean }> {

		const { otherPlayerProviderCode, otherPlayerSubjectCode} = options;

		const response = await API.call({
			requestOptions: {
				url: "players/self/linked?otherPlayerProviderCode=${otherPlayerProviderCode}&otherPlayerSubjectCode=${otherPlayerSubjectCode}",
				parameters: {
					otherPlayerProviderCode,
					otherPlayerSubjectCode
				}
			}
		});

		API.responseValidator(response);

		return {
			uid: response.data.body.uid,
			linked: response.data.body.linked
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
