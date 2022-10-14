import { ServiceNotificationType, TServiceNotification } from '@mmos/play-science-types';
export default class APIService {
    static handshake(): Promise<{
        uid: string;
    }>;
    static getNotifications(options: {
        type: ServiceNotificationType;
        playerCode?: string;
        projectCode?: string;
        rewardCode?: string;
    }): Promise<{
        uid: string;
        notifications: TServiceNotification[];
    }>;
}
//# sourceMappingURL=APIService.d.ts.map