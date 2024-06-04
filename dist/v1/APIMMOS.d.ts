import { IClassification, ITask, TClassificationsCreateResponse } from '@mmos/play-science-types';
export default class APIMMOS {
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
}
//# sourceMappingURL=APIMMOS.d.ts.map