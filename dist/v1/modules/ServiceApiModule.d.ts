import { Api } from '../Api';
export default class ServiceApiModule {
    private _api;
    constructor(api: Api);
    handshake(): Promise<{
        uid: string;
    }>;
}
//# sourceMappingURL=ServiceApiModule.d.ts.map