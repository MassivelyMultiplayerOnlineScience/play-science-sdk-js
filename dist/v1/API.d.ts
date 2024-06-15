import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PartnersApiModule from './modules/PartnersApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';
export type TApiRequestOptions = {
    method?: string;
    url: string;
    data?: any;
    params?: any;
};
export declare class ApiEndpoint {
    private _url;
    get url(): string;
    constructor(url: string);
    match(url: string): boolean;
    compile(params: any): string;
}
export declare class Api {
    static readonly GET = "GET";
    static readonly POST = "POST";
    static get HEADER_GAMECODE(): string;
    static get HEADER_GAMEVERSION(): string;
    private _shortcutRequestEvaluator;
    get shortcutRequestEvaluator(): (requestOptions: TApiRequestOptions) => Promise<boolean>;
    private _shortcutRequestCallback;
    get shortcutRequestCallback(): (requestOptions: TApiRequestOptions, expectedStatusCode?: number) => Promise<any>;
    private _idToken;
    get idToken(): string;
    set idToken(value: string);
    private _minigames;
    get minigames(): MinigamesApiModule;
    private _mmos;
    get mmos(): MMOSApiModule;
    private _partners;
    get partners(): PartnersApiModule;
    private _players;
    get players(): PlayersApiModule;
    private _rewards;
    get rewards(): RewardsApiModule;
    private _service;
    get service(): ServiceApiModule;
    constructor();
    init(options: {
        host: string;
        gameVersion: string;
        gameCode: string;
        shortcutRequestEvaluator?: (requestOptions: TApiRequestOptions) => Promise<boolean>;
        shortcutRequestCallback?: (requestOptions: TApiRequestOptions, expectedStatusCode?: number) => Promise<any>;
    }): void;
    request(requestOptions: TApiRequestOptions, expectedStatusCode?: number): Promise<any>;
}
//# sourceMappingURL=Api.d.ts.map