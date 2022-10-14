import { IClassification } from '@mmos/play-science-types';
export declare type TClassificationsCreateResponse = {
    uid: string;
    player: {
        score: number;
        scoreChange: number;
        points: number;
        pointsChange: number;
        rank: number;
        rankChange: number;
        classificationCount: number;
        classificationCountChange: number;
        classificationQuality: number;
        rankPointPercentage: number;
        rankPointPercentageChange: number;
        scoredAt: Date;
    };
};
export default class APIClassifications {
    static create(options: {
        projectCode: string;
        classification: IClassification;
    }): Promise<TClassificationsCreateResponse>;
}
//# sourceMappingURL=APIClassifications.d.ts.map