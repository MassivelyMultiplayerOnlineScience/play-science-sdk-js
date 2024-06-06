import { Api } from '../Api';

import { TPlayer } from '@mmos/play-science-types';

export default class PlayersApiModule {

	private _api: Api;

	constructor(api: Api) {
		this._api = api;
	}

	/**
	* Returns a Player object identified by the oAuthData information
	* @return {Promise}
	* @example
		await api.players.authenticate();
	*/
	public async login():
		Promise<{ uid: string, player: TPlayer }> {

		const response = await this._api.request({
			requestOptions: {
				url: 'players/self/login'
			}
		});

		this._api.responseValidator(response);

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
	public async create(
		options: {nick: string}):
		Promise<{ uid: string, player: TPlayer }> {

		const response = await this._api.request({
			requestOptions: {
				method: "POST",
				url: "players/self/create",
				data: {
					nick: options.nick
				}
			}
		});

		this._api.responseValidator(response);

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
	public async linked(
		options: {otherPlayerProviderCode: string, otherPlayerSubjectCode: string}):
		Promise<{ uid: string, linked: boolean }> {

		const { otherPlayerProviderCode, otherPlayerSubjectCode} = options;

		const response = await this._api.request({
			requestOptions: {
				url: "players/self/linked?otherPlayerProviderCode=${otherPlayerProviderCode}&otherPlayerSubjectCode=${otherPlayerSubjectCode}",
				parameters: {
					otherPlayerProviderCode,
					otherPlayerSubjectCode
				}
			}
		});

		this._api.responseValidator(response);

		return {
			uid: response.data.body.uid,
			linked: response.data.body.linked
		};
	}

}
