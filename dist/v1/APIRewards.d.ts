import { TReward } from "@mmos/play-science-types";
export default class APIRewards {
    static getAll(): Promise<{
        uid: string;
        minigames: TReward[];
    }>;
}
//# sourceMappingURL=APIRewards.d.ts.map