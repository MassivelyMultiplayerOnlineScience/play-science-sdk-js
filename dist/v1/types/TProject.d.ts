import { TAchievement } from "./TAchievement";
import { TLocalizedString } from "./TLocalizedString";
import { TProjectActivity } from "./TProjectActivity";
export declare type TProject = {
    id: number;
    code: string;
    category: TLocalizedString;
    url: TLocalizedString;
    imageURLList: string[];
    name: TLocalizedString;
    description: TLocalizedString;
    researchPartner: TLocalizedString;
    researchGoal: TLocalizedString;
    researchPI: string;
    sponsor: TLocalizedString;
    isListed: boolean;
    isPlayable: boolean;
    availabilityInfo: TLocalizedString;
    activities?: TProjectActivity[];
    achievements?: TAchievement[];
};
//# sourceMappingURL=TProject.d.ts.map