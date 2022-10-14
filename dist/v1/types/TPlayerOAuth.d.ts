export declare enum OAuthProviderCode {
    GOOGLE = "google",
    FACEBOOK = "facebook",
    APPLE = "apple"
}
export declare type TPlayerOAuth = {
    id: number;
    playerID: number;
    subjectCode: string;
    providerCode: OAuthProviderCode;
    profileData: any;
};
//# sourceMappingURL=TPlayerOAuth.d.ts.map