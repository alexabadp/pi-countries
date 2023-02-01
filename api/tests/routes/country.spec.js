/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  id: "PER",
  name: "Republic of Peru",
  image: "https://flagcdn.com/w320/pe.png",
  continent: "South America",
  capital: "Lima",
  subregion: "South America",
  area: 1285216,
  population: 32971846,
};

const activity = {
  name: "Basketball",
  difficulty: 3,
  duration: 15,
  season: "summer",
};

// TEST DE COUNTRIES

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: false }).then(() => Country.create(country))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
});

// TEST DE FILTRO POR ID

describe("GET /countries/:id", () => {
  it("should reply the GET method /countries/ with status code 404 if params is not a valid id", async () => {
    const response = await agent.get("/countries/ANDOR");
    expect(response.statusCode).to.equal(404);
  });
});

// TEST DE ACTIVIDADES

beforeEach(() =>
  Activity.sync({ force: false }).then(() => Activity.create(activity))
);
describe("GET  /activities", () => {
  it("should get 200", () => agent.get("/activities").expect(200));
});

// TEST DE POST

describe("POST /activity", () => {
  it("should reply the POST method /activity whith code 500 if name, difficulty, duration, season is not sent", async () => {
    const res = await agent.post("/activity").send({});
    expect(res.statusCode).to.equal(500);
    const res1 = await agent.post("/activity").send({
      name: "Basketball",
    });
    expect(res1.statusCode).to.equal(500);
  });
  it("should reply the POST method /activity with status code 200 if name, difficulty, duration, season and countries is sent", async () => {
    const res2 = await agent.post("/activity").send({
      name: "Basketball",
      difficulty: 3,
      duration: 15,
      season: "summer",
      countries: ["Republic of Peru", "Argentina"],
    });
    expect(res2.statusCode).to.equal(200);
  });
});
