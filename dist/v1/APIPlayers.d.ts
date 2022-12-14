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
    static authenticate(): Promise<{
        uid: string;
        player: TPlayer;
    }>;
    static getProjects(options: {
        playerCode: string;
    }): Promise<{
        uid: string;
        projects: TPlayerProject[];
    }>;
    static projectReset(options: {
        playerCode: string;
        projectCode: string;
    }): Promise<{
        uid: string;
    }>;
}
//# sourceMappingURL=APIPlayers.d.ts.map