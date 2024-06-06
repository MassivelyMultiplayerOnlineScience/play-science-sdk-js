import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';
export type TApiRequestOptions = {
    method?: string;
    url: string;
    parameters?: any;
    data?: any;
};
export declare class Api {
    static get GET(): string;
    static get POST(): string;
    private _host;
    get host(): string;
    private _gameCode;
    get gameCode(): string;
    private _gameVersion;
    get gameVersion(): string;
    private _idToken;
    get idToken(): string;
    private _httpRequestCallback;
    get httpRequestCallback(): (httpOptions: any) => any;
    private _minigames;
    get minigames(): MinigamesApiModule;
    private _mmos;
    get mmos(): MMOSApiModule;
    private _players;
    get players(): PlayersApiModule;
    private _rewards;
    get rewards(): RewardsApiModule;
    private _service;
    get service(): ServiceApiModule;
    init(options: {
        host: string;
        gameVersion: string;
        gameCode: string;
        httpRequestCallback: (httpOptions: any) => any;
    }): void;
    errorToString(response: any): string;
    private buildRequest;
    request(options: {
        httpOptions?: any;
        requestOptions?: TApiRequestOptions;
    }): Promise<any>;
    responseValidator(response?: any, acceptedStatusCode?: number): void;
}
//# sourceMappingURL=Api.d.ts.map