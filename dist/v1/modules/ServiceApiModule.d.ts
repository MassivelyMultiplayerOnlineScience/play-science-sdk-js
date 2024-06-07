import { Api, ApiEndpoint } from '../Api';
export default class ServiceApiModule {
    private _api;
    constructor(api: Api);
    readonly handshakeEndpoint: ApiEndpoint;
    handshake(): Promise<{
        uid: string;
    }>;
}
//# sourceMappingURL=ServiceApiModule.d.ts.map