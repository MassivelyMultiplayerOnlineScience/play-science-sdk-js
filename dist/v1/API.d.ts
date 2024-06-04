import APIMinigames from './APIMinigames';
import APIPlayers from './APIPlayers';
import APIRewards from './APIRewards';
import APIService from './APIService';
import APIMMOS from './APIMMOS';
type TAPIRequestOptions = {
    method?: string;
    url: string;
    parameters?: any;
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
    static get minigames(): typeof APIMinigames;
    static get players(): typeof APIPlayers;
    static get rewards(): typeof APIRewards;
    static get mmos(): typeof APIMMOS;
    static get service(): typeof APIService;
    static errorToString(response: any): string;
    private static buildRequest;
    static call(options: {
        httpOptions?: any;
        requestOptions?: TAPIRequestOptions;
    }): Promise<any>;
    static responseValidator(response?: any, acceptedStatusCode?: number): void;
}
export {};
//# sourceMappingURL=API.d.ts.map