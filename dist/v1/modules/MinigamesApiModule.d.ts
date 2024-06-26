import { Api, ApiEndpoint } from '../Api';
import { TMinigame } from '@mmos/play-science-types';
export default class MinigamesApiModule {
    private _api;
    constructor(api: Api);
    readonly getAllEndpoint: ApiEndpoint;
    getAll(): Promise<{
        uid: string;
        minigames: TMinigame[];
    }>;
    get(id: number): Promise<{
        uid: string;
        minigame: TMinigame;
    }>;
}
//# sourceMappingURL=MinigamesApiModule.d.ts.map