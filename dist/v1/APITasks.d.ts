import { ITask } from '@mmos/play-science-types';
export default class APITasks {
    static get(options: {
        projectCode: string;
        difficulty?: number | undefined;
    }): Promise<{
        uid: string;
        task: ITask;
    }>;
}
//# sourceMappingURL=APITasks.d.ts.map