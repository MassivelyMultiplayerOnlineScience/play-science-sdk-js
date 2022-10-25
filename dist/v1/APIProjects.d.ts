import { TLocalizedString } from '@mmos/play-science-types';
import { TProject } from '@mmos/play-science-types';
import { ITask } from '@mmos/play-science-types';
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
export default class APIProjects {
    static get(options: {
        projectCode: string;
    }): Promise<{
        uid: string;
        project: TProject;
    }>;
    static getTask(options: {
        projectCode: string;
        difficulty?: number | undefined;
    }): Promise<{
        uid: string;
        task: ITask;
    }>;
    static submitClassification(options: {
        projectCode: string;
        classification: IClassification;
    }): Promise<TClassificationsCreateResponse>;
    static getTips(options: {
        projectCode: string;
        playerCode: string;
    }): Promise<{
        uid: string;
        tips: TLocalizedString[];
    }>;
}
//# sourceMappingURL=APIProjects.d.ts.map