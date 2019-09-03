import xmlescape = require('xml-escape');
import ISearchResult from '../infrastructure/ISearchResult';

export default class PhoneBookQueryResult {

    private readonly results: ISearchResult[];
    private count: number;

    constructor(results: ISearchResult[]) {
        this.results = results;
        this.count = 0;
    }

    public take(count: number) {
        this.count = count;

        // Allow fluent access
        return this;
    }

    public toXmlResponse() {

        let responseResults = this.results;
        if (this.count > 0) {
            responseResults = responseResults.slice(0, Math.min(responseResults.length, this.count));
        }

        var results = responseResults
            .map(x => PhoneBookQueryResult.toXml(x))
            .join('');

        return '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<entries>' +
            results +
            '</entries>';
    }

    private static toXml(result: ISearchResult): string {
        return '<entry>' +
            '<givenName>' + xmlescape(result.givenName) + '</givenName>' +
            '<sn>' + xmlescape(result.sn) + '</sn>' +
            '<telephoneNumber>' + xmlescape(result.telephoneNumber) + '</telephoneNumber>' +
            '</entry>';
    }
}