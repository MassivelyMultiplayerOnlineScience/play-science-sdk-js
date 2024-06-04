import { TMinigame } from '@mmos/play-science-types';
export default class APIMinigames {
    static getAll(): Promise<{
        uid: string;
        minigames: TMinigame[];
    }>;
}
//# sourceMappingURL=APIMinigames.d.ts.map