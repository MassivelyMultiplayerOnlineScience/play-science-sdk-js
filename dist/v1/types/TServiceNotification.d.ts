import { TLocalizedString } from "./TLocalizedString";
export declare enum ServiceNotificationType {
    GENERAL = 0,
    GAME = 1,
    PROJECT = 2,
    PROJECTS = 3,
    REWARD = 4,
    REWARDS = 5,
    PLAYER = 6
}
export declare type TServiceNotification = {
    id: string;
    type: ServiceNotificationType;
    date: Date;
    priority: number;
    title?: TLocalizedString;
    description?: TLocalizedString;
    url?: TLocalizedString;
    gameId?: string;
    projectId?: string;
};
//# sourceMappingURL=TServiceNotification.d.ts.map