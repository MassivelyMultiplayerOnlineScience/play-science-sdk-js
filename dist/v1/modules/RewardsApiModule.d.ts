import { Api, ApiEndpoint } from '../Api';
import { TReward } from "@mmos/play-science-types";
export default class RewardsApiModule {
    private _api;
    constructor(api: Api);
    readonly getAllEndpoint: ApiEndpoint;
    getAll(): Promise<{
        uid: string;
        rewards: TReward[];
    }>;
}
//# sourceMappingURL=RewardsApiModule.d.ts.map