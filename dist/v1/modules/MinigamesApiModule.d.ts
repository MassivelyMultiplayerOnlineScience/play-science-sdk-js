import { TMinigame } from '@mmos/play-science-types';
import { Api } from '../Api';
export default class MinigamesApiModule {
    private _api;
    constructor(api: Api);
    getAll(): Promise<{
        uid: string;
        minigames: TMinigame[];
    }>;
}
//# sourceMappingURL=MinigamesApiModule.d.ts.map