import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';
export type TApiRequestOptions = {
    method?: string;
    url: string;
    data?: any;
    params?: any;
};
export declare class Api {
    static get GET(): string;
    static get POST(): string;
    static get HEADER_GAMECODE(): string;
    static get HEADER_GAMEVERSION(): string;
    private _mockRequests;
    get mockRequests(): boolean;
    private _mockResponseProvider;
    get mockResponseProvider(): (requestOptions: TApiRequestOptions) => any;
    private _idToken;
    get idToken(): string;
    set idToken(value: string);
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
        mockRequests?: boolean;
        mockResponseProvider?: (requestOptions: TApiRequestOptions) => any;
    }): void;
    request(requestOptions: TApiRequestOptions, expectedStatusCode?: number): Promise<any>;
}
//# sourceMappingURL=Api.d.ts.map