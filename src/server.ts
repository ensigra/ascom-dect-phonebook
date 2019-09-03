import express = require('express');
import StaticDataSource from './sources/StaticDataSource';
import SearchRequest from './infrastructure/SearchRequest';
import PhoneBook from './sources/PhoneBook';

// Create a new express application instance
const app: express.Application = express();
const phoneBook: PhoneBook = new PhoneBook();

// Install all possible sources
phoneBook.registerDataSource(new StaticDataSource());


app.get('/', function (request: any, response: any) {

    response.setHeader('Content-Type', 'text/xml');
    response.setHeader('Connection', 'close');
    response.removeHeader('X-Powered-By');
    response.removeHeader('Date');

    let searchRequest = new SearchRequest(request.query);
    let result = phoneBook
        .query(searchRequest)
        .take(5)
        .toXmlResponse();

    response.send(result);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
