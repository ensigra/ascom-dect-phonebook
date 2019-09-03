import ISearchRequest from "../infrastructure/ISearchRequest";

export default class ExpressSearchRequest implements ISearchRequest {
    public readonly sn: string;
    public readonly givenName: string;
    public readonly telephoneNumber: string;
    public readonly user: string;

    constructor(query: any) {
        this.sn = ExpressSearchRequest.cleanString(query.sn);
        this.givenName = ExpressSearchRequest.cleanString(query.givenName);
        this.telephoneNumber = ExpressSearchRequest.cleanString(query.telephoneNumber);
        this.user = ExpressSearchRequest.cleanString(query.user);
    }

    private static cleanString(parameter: any) {
        return parameter !== undefined ? parameter.toLowerCase().trim() : '';
    }
}

