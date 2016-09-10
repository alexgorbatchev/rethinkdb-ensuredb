# rethinkdb-insuredb

Insures that a RethinkDB database is present.

* If database is not present, creates and returns it
* If database present, returns it

## Installation

```
npm install rethinkdb-insuredb
```

## Usage

```js
import insureDb from "rethinkdb-insuredb";
insureDb(connection, "db_name").then(db => db.tableCreate(...));
```

## License

MIT
