import { TLocalizedString } from '@mmos/play-science-types';
import { TProject } from '@mmos/play-science-types';
export default class APIProjects {
    static get(options: {
        projectCode: string;
    }): Promise<{
        uid: string;
        project: TProject;
    }>;
    static playerReset(options: {
        projectCode: string;
    }): Promise<{
        uid: string;
    }>;
    static getTips(options: {
        projectCode: string;
        playerCode: string;
    }): Promise<{
        uid: string;
        tips: TLocalizedString[];
    }>;
}
//# sourceMappingURL=APIProjects.d.ts.map