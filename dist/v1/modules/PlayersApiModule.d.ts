import { Api } from '../Api';
import { TPlayer } from '@mmos/play-science-types';
export default class PlayersApiModule {
    private _api;
    constructor(api: Api);
    /**
    * Returns a Player object identified by the oAuthData information
    * @return {Promise}
    * @example
        await api.players.authenticate();
    */
    login(): Promise<{
        uid: string;
        player: TPlayer;
    }>;
    /**
    * Creates a Player object identified by the oAuthData information
    * @return {Promise}
    * @example
        await api.players.create();
    */
    create(options: {
        nick: string;
    }): Promise<{
        uid: string;
        player: TPlayer;
    }>;
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
    linked(options: {
        otherPlayerProviderCode: string;
        otherPlayerSubjectCode: string;
    }): Promise<{
        uid: string;
        linked: boolean;
    }>;
}
//# sourceMappingURL=PlayersApiModule.d.ts.map