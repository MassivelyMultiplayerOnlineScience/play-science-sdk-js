import { TLocalizedString } from "./TLocalizedString";
export declare type TReward = {
    id: number;
    code: string;
    providerId: number;
    projectId?: string;
    gameId?: string;
    category: TLocalizedString;
    url: TLocalizedString;
    imageURL: TLocalizedString;
    title: TLocalizedString;
    description: TLocalizedString;
    price: number;
    isListed: boolean;
    isAvailable: boolean;
    availabilityInfo?: TLocalizedString;
    availabilityDateFrom?: Date;
    availabilityDateTill?: Date;
};
//# sourceMappingURL=TReward.d.ts.map