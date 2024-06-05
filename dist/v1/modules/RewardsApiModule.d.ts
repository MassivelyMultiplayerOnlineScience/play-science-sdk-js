import Api from "../Api";
import { TReward } from "@mmos/play-science-types";
export default class RewardsApiModule {
    private _api;
    constructor(api: Api);
    getAll(): Promise<{
        uid: string;
        minigames: TReward[];
    }>;
}
//# sourceMappingURL=RewardsApiModule.d.ts.map