import { TPlayer } from '@mmos/play-science-types';
export default class APIPlayers {
    /**
    * Returns a Player object identified by the oAuthData information
    * @return {Promise}
    * @example
        await api.players.authenticate();
    */
    static login(): Promise<{
        uid: string;
        player: TPlayer;
    }>;
    /**
    * Creates a Player object identified by the oAuthData information
    * @return {Promise}
    * @example
        await api.players.create();
    */
    static create(options: {
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
    static linked(options: {
        otherPlayerProviderCode: string;
        otherPlayerSubjectCode: string;
    }): Promise<{
        uid: string;
        linked: boolean;
    }>;
}
//# sourceMappingURL=APIPlayers.d.ts.map