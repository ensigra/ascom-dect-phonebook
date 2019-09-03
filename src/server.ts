import express = require('express');
import StaticDataSource from './sources/StaticDataSource';
import PhoneBook from './sources/PhoneBook';
import ExpressSearchRequest from './models/ExpressSearchRequest';

// Create a new express application instance
const listeningPort: number = 3001;
const app: express.Application = express();
const phoneBook: PhoneBook = new PhoneBook();

// Install all possible sources
phoneBook.registerDataSource(new StaticDataSource());


app.get('/', function (request: any, response: any) {

    response.setHeader('Content-Type', 'text/xml; charset=utf-8');
    response.setHeader('Connection', 'close');
    response.removeHeader('X-Powered-By');
    response.removeHeader('Date');

    let searchRequest = new ExpressSearchRequest(request.query);
    let result = phoneBook
        .query(searchRequest)
        .take(5)
        .toXmlResponse();

    response.send(result);

});

app.listen(listeningPort, function () {
    console.log(`Phonebook proxy listening on port ${listeningPort}`);
});
