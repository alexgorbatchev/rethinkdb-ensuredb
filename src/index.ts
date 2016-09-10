import * as r from "rethinkdb";

export default function insureDb(connection: r.Connection, db: string): Promise<r.Db> {
  return r.dbList().run(connection)
    .then((dbs: string[]) => {
      if (dbs.indexOf(db) === -1) {
        return r.dbCreate(db).run(connection);
      }
    })
    .then(() => r.db(db))
    ;
}
