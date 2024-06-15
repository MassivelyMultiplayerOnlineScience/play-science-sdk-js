import { Api, ApiEndpoint } from '../Api';
import { TVideogame } from '@mmos/play-science-types';
export default class PartnersApiModule {
    private _api;
    constructor(api: Api);
    readonly getAllVideogamesEndpoint: ApiEndpoint;
    getAllVideogames(): Promise<{
        uid: string;
        videogames: TVideogame[];
    }>;
    getVideogame(id: number): Promise<{
        uid: string;
        videogames: TVideogame;
    }>;
}
//# sourceMappingURL=PartnersApiModule.d.ts.map