export interface ITask {
    id: number;
    run: number;
    project: string;
    isTrainingSet: boolean;
    difficulty: number;
    assets: any;
    info: any;
    classificationCount: number;
    votes?: {
        skips: number;
        highScore: number;
    };
}
//# sourceMappingURL=ITask.d.ts.map