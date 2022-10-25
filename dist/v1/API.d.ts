import APIGames from './APIGames';
import APIPlayers from './APIPlayers';
import APIProjects from './APIProjects';
import APIRewards from './APIRewards';
import APIService from './APIService';
declare type APIRequestOptions = {
    method?: string;
    url: string;
    parameters?: {
        projectCode?: string;
        playerCode?: string;
        id?: number;
    };
    data?: any;
};
export default class API {
    static host: string;
    static gameVersion: string;
    static gameCode: string;
    static idToken: string;
    static httpRequestCallback: (httpOptions: any) => any;
    static get GET(): string;
    static get POST(): string;
    static init(options: {
        host: string;
        gameVersion: string;
        gameCode: string;
        httpRequestCallback: (httpOptions: any) => any;
    }): void;
    static get games(): typeof APIGames;
    static get players(): typeof APIPlayers;
    static get rewards(): typeof APIRewards;
    static get projects(): typeof APIProjects;
    static get service(): typeof APIService;
    static errorToString(response: any): string;
    private static buildRequest;
    static call(options: {
        httpOptions?: any;
        requestOptions?: APIRequestOptions;
    }): Promise<any>;
    static responseValidator(response?: any, acceptedStatusCode?: number): void;
}
export {};
//# sourceMappingURL=API.d.ts.map