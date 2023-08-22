const server = require("../server");
const request = require("supertest");

describe("04 | Ejercicios", () => {
  it("Cuando no ingresemos una ruta válida, debe responder con un error", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe("Route not found");
    const response2 = await request(server).get("/henry");
    expect(response2.statusCode).toBe(404);
    expect(response2.text).toBe("Route not found");
  });
});
