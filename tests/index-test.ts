import { expect } from "chai";
import * as r from "rethinkdb";
import ensureDb from "../src";

const DB = "rethinkdb_ensuredb_test_db";

describe("rethinkdb-ensuredb", () => {
  let connection: r.Connection;

  beforeEach(() =>
    r.connect({ host: "localhost", port: 28015 })
      .then(actual => connection = actual)
  );

  after(() => r.dbDrop(DB).run(connection));

  it("does not have the db", () =>
    r.dbList().run(connection).then((dbs: string[]) => expect(dbs.indexOf(DB)).to.equal(-1))
  );

  it("creates db", () => ensureDb(connection, DB));

  it("has the db", () =>
    r.dbList().run(connection).then((dbs: string[]) => expect(dbs.indexOf(DB)).to.not.equal(-1))
  );

  it("returns db", () => ensureDb(connection, DB).then(db => expect(db).to.be.ok));
});
