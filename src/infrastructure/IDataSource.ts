import ISearchRequest from "./ISearchRequest";
import ISearchResult from "./ISearchResult";

export default interface IDataSource {
    init() : void;
    retrieve(request: ISearchRequest) : ISearchResult[];
}
