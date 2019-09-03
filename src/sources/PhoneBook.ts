import IDataSource from "../infrastructure/IDataSource";
import ISearchRequest from "../infrastructure/ISearchRequest";
import ISearchResult from "../infrastructure/ISearchResult";
import PhoneBookQueryResult from "./PhoneBookQueryResult";

export default class PhoneBook {

    private readonly dataSources: IDataSource[];

    constructor() {
        this.dataSources = new Array<IDataSource>();
    }

    public registerDataSource(dataSource: IDataSource) {

        let newDataSource = dataSource;
        newDataSource.init();

        // Add to internal array
        this.dataSources.push(newDataSource);
    }

    public query(request: ISearchRequest): PhoneBookQueryResult {

        // Query all data sources
        const searchResults: ISearchResult[] = new Array<ISearchResult>();
        this.dataSources.forEach(x => {
            searchResults.push(...x.retrieve(request));
        });

        // Reverse sort
        searchResults.sort(function (a, b) {
            let rankSort = (b.rank !== undefined ? b.rank : 0) - (a.rank !== undefined ? a.rank : 0);
            if (rankSort) {
                // Items are not equal
                return rankSort;
            }

            // String comparison for last names according to German language
            return a.sn.localeCompare(b.sn, 'de', { sensitivity: 'base' });
        });

        return new PhoneBookQueryResult(searchResults);
    }
}