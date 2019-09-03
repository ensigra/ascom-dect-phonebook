import ISearchRequest from "./ISearchRequest";

export default class SearchRequest implements ISearchRequest {
    public readonly sn: string;
    public readonly givenName: string;
    public readonly telephoneNumber: string;
    public readonly user: string;

    constructor(query: any) {
        this.sn = SearchRequest.cleanString(query.sn);
        this.givenName = SearchRequest.cleanString(query.givenName);
        this.telephoneNumber = SearchRequest.cleanString(query.telephoneNumber);
        this.user = SearchRequest.cleanString(query.user);
    }

    private static cleanString(parameter: any) {
        return parameter !== undefined ? parameter.toLowerCase().trim() : '';
    }
}

