# ASCOM IP-DECT Phonebook
A phonebook proxy for ASCOM IP DECT gateways.

This proxy can be used to allow IP DECT phonebook lookups using multiple data sources. Data sources can be queried individually in order to
allow private contact lookup.

## Current Status
This project is under development. Custom extensions (Active Directory, Office 365, Microsoft Graph, [tel.search.ch](http://tel.search.ch)) are available on request through ensigra GmbH.

## Example Request and Response
Example Request URL:
```
http://PROXY_IP_ADDRESS/?user=1234&givenName=&sn=Marra&telephoneNumber=
```

Example Response (max 5000 chars):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <entry>
        <givenName>Hans</givenName>
        <sn>Muster</sn>
        <telephoneNumber>0628895026</telephoneNumber>
    </entry>
    <entry>
        <givenName>Fritz</givenName>
        <sn>Eggenberger</sn>
        <telephoneNumber>0628895027</telephoneNumber>
    </entry>
    <entry>
        <givenName>Markus</givenName>
        <sn>Zürcher</sn>
        <telephoneNumber>0628895028</telephoneNumber>
    </entry>
</entries>
```

## Build and Run

Use Visual Studio Code or any other tool which fits your need for development.
Transpile from TypeScript with the following command:

```
tsc -p tsconfig.json
```

Then run the server from <code>dist</code> folder.

```
node ./dist/server.js
```
Or simply run:
```
npm start
```

<hr />
Made with ❤️🎉 in the beautiful Rhine Valley 🚴🗻🏊.