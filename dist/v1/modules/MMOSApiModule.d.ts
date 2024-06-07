import { Api, ApiEndpoint } from '../Api';
import { IClassification, ITask, TClassificationsCreateResponse } from '@mmos/play-science-types';
export default class MMOSApiModule {
    private _api;
    constructor(api: Api);
    readonly getTaskEndpoint: ApiEndpoint;
    getTask(options: {
        projectCode: string;
        difficulty?: number | undefined;
    }): Promise<{
        uid: string;
        task: ITask;
    }>;
    readonly submitClassificationEndpoint: ApiEndpoint;
    submitClassification(options: {
        projectCode: string;
        classification: IClassification;
    }): Promise<TClassificationsCreateResponse>;
}
//# sourceMappingURL=MMOSApiModule.d.ts.map