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

        const searchResults: ISearchResult[] = new Array<ISearchResult>();

        this.dataSources.forEach(x => {
            searchResults.push(...x.retrieve(request));
        });

        // Reverse sort
        searchResults.sort(function (a, b) {
            return (b.rank !== undefined ? b.rank : 0) - (a.rank !== undefined ? a.rank : 0);
        });

        return new PhoneBookQueryResult(searchResults);
    }
}