const server = require("../server");
const request = require("supertest");
const fs = require("fs");

describe("03 | Ejercicios", () => {
  it("GET /allDogs, debe responder con un error o con un html", async () => {
    const response = await request(server).get("/allDogs");
    if (response.statusCode === 200) {
      expect(response.type).toBe("text/html");
      expect(response.text).toEqual(
        fs.readFileSync("./utils/allDogs.html", "UTF8")
      );
    } else {
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe("html not found");
    }
  });
});
