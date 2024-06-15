import { Api, ApiEndpoint } from '../Api';

import { TActivity, TPlayer } from '@mmos/play-science-types';

export default class PlayersApiModule {
	private _api: Api;
	constructor(api: Api) { this._api = api; }

	public readonly loginEndpoint = new ApiEndpoint('players/self/login');
	/**
	* Returns a Player object identified by the oAuthData information
	* @return {Promise}
	* @example
		await api.players.authenticate();
	*/
	public async login():
		Promise<{ uid: string, player: TPlayer }> {

		const response = await this._api.request({
			url: this.loginEndpoint.url
		});

		return {
			uid: response.data.uid,
			player: response.data.player
		};
	}

	public readonly createEndpoint = new ApiEndpoint('players/self/create');
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
			method: Api.POST,
			url: this.createEndpoint.url,
			data: {
				nick: options.nick
			}
		});

		return {
			uid: response.data.uid,
			player: response.data.player
		};
	}

	public readonly linkedEndpoint = new ApiEndpoint('players/self/linked');
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
		options: { otherPlayerProviderCode: string, otherPlayerSubjectCode: string }):
		Promise<{ uid: string, linked: boolean }> {

		const { otherPlayerProviderCode, otherPlayerSubjectCode} = options;

		const response = await this._api.request({
			url: this.linkedEndpoint.url,
			params: {
				otherPlayerProviderCode,
				otherPlayerSubjectCode
			}
		});

		return {
			uid: response.data.uid,
			linked: response.data.linked
		};
	}

	public readonly getActivitiesCommonEndpoint = new ApiEndpoint('players/activities');
	public async getActivitiesCommon(options: { limit?: number, offset?: number }):
		Promise<{ uid: string, activities: TActivity[] }> {

		const { limit, offset } = options;
		const response = await this._api.request({
			url: this.getActivitiesCommonEndpoint.url,
			params: { limit, offset }
		});

		return {
			uid: response.data.uid,
			activities: response.data.activities
		};
	}

	public readonly getActivitiesEndpoint = new ApiEndpoint('players/self/activities');
	public async getActivities(options: { limit?: number, offset?: number }):
		Promise<{ uid: string, activities: TActivity[] }> {

		const { limit, offset } = options;
		const response = await this._api.request({
			url: this.getActivitiesEndpoint.url,
			params: { limit, offset }
		});

		return {
			uid: response.data.uid,
			activities: response.data.activities
		};
	}

}
