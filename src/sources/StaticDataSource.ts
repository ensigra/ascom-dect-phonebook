import IDataSource from "../infrastructure/IDataSource";
import ISearchRequest from "../infrastructure/ISearchRequest";
import ISearchResult from "../infrastructure/ISearchResult";

export default class StaticDataSource implements IDataSource {

    private readonly entries: ISearchResult[];

    constructor() {
        this.entries = new Array<ISearchResult>();
    }

    init(): void {
        this.entries.push({ givenName: 'Hans', sn: 'Muster', telephoneNumber: '0628895026' });
        this.entries.push({ givenName: 'Fritz', sn: 'Eggenberger', telephoneNumber: '0628895027' });
        this.entries.push({ givenName: 'Markus', sn: 'Zürcher', telephoneNumber: '0628895028' });
    }

    retrieve(request: ISearchRequest): ISearchResult[] {
        return this.entries.filter(x =>
            x.givenName.toLowerCase().indexOf(request.givenName) > -1 &&
            x.sn.toLowerCase().indexOf(request.sn) > -1
        );
    }
}