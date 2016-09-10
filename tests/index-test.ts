import { expect } from "chai";
import * as r from "rethinkdb";
import insureDb from "../src";

const DB = "rethinkdb_insuredb_test_db";

describe("rethinkdb-insuredb", () => {
  let connection: r.Connection;

  beforeEach(() =>
    r.connect({ host: "localhost", port: 28015 })
      .then(actual => connection = actual)
  );

  after(() => r.dbDrop(DB).run(connection));

  it("does not have the db", () =>
    r.dbList().run(connection).then((dbs: string[]) => expect(dbs.indexOf(DB)).to.equal(-1))
  );

  it("creates db", () => insureDb(connection, DB));

  it("has the db", () =>
    r.dbList().run(connection).then((dbs: string[]) => expect(dbs.indexOf(DB)).to.not.equal(-1))
  );

  it("returns db", () => insureDb(connection, DB).then(db => expect(db).to.be.ok));
});
