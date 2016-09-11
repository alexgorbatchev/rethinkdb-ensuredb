# rethinkdb-ensuredb

A helper method to ensure RethinkDB database exists.

* If database is not present, creates and returns it
* If database present, returns it

## Installation

```
npm install rethinkdb-ensuredb
```

## Usage

```js
import ensureDb from "rethinkdb-ensuredb";
ensureDb(connection, "db_name").then(db => db.tableCreate(...));
```

## License

MIT
