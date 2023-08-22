"use strict";

const {
  problemA,
  problemB,
  problemC
} = require("../exercise-one");

const {
  problemAx,
  problemBx
} = require("../exercise-two");

let fs = require("fs");
let path = require("path");
let utils = require("../utils");
let dirpathOne = path.join(__dirname, "../poem-one");
let dirpathTwo = path.join(__dirname, "../poem-two");

let stanzasOne = fs
  .readdirSync(dirpathOne)
  .filter((filename) => {
    return filename[0] !== ".";
  })
  .map((filename) => {
    return fs.readFileSync(path.join(dirpathOne, filename)).toString();
  });

let stanzasTwo = fs
  .readdirSync(dirpathTwo)
  .filter((filename) => {
    return filename[0] !== ".";
  })
  .map((filename) => {
    return fs.readFileSync(path.join(dirpathTwo, filename)).toString();
  });

describe("01 | Ejercicios - Promises (poem-one)", () => {
  afterAll(async () => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Problem A | Consologuea la segunda y tercer stanza versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemA();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      return done(new Error("problemA | No se llamo a promisifiedReadFile"));
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then(() => {
        expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then(() => {
        expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
        done();
      })
      .catch((err) => {
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
        return done(new Error(err));
      });
  });

  it("Problem B | Consologuea la cuarta stanza versión promisificada o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemB();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      return done(new Error("problemB | No se llamo a promisifiedReadFile"));
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then((stanza) => {
        expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
        expect(stanza).toEqual(stanzasOne[3]);
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        expect(magenta).toHaveBeenCalledWith(new Error(error));
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      });
  });

  it("Problem C | Consologuea la tercer stanza y luego la cuarta stanza o su respectivo error, versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemC();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      return done(new Error("problemC | No se llamo a promisifiedReadFile"));
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then((stanza) => {
        expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
        expect(stanza).toEqual(stanzasOne[2]);
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then((stanza) => {
        expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
        expect(stanza).toEqual(stanzasOne[3]);
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        expect(magenta).toHaveBeenCalledWith(new Error(error));
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      });
  });
});

describe("02 | Ejercicios - Promises (poem-two)", () => {
  afterAll(async () => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Problem A | Consologuea la primer y segunda stanza versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemAx();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      return done(new Error("problemA | No se llamo a promisifiedReadFile"));
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    let thisStanzas = [stanzasTwo[0], stanzasTwo[1]];
    promisifiedReadfileAux
      .then((stanza) => {
        expect(blue).toHaveBeenCalledWith(stanza);
        expect(thisStanzas.includes(stanza)).toBeTruthy();
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then((stanza) => {
        expect(blue).toHaveBeenCalledWith(stanza);
        expect(thisStanzas.includes(stanza)).toBeTruthy();
        promisifiedReadFileSpy.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
        return done(new Error(error));
      });
  });

  it("Problem B | Consologuea todas las stanzas de poem-two en orden o un error, versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemBx();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      return done(new Error("problemC | No se llamo a promisifiedReadFile"));
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[0]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[1]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[2].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[2]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[3].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[3]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[4].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[4]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[5].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[5]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[6].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[6]);
        expect(blue).toHaveBeenCalledWith(stanza);
        return promisifiedReadFileSpy.mock.results[7].value;
      })
      .then((stanza) => {
        expect(stanza).toEqual(stanzasTwo[7]);
        expect(blue).toHaveBeenCalledWith(stanza);
        promisifiedReadFileSpy.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        expect(magenta).toHaveBeenCalledWith(new Error(error));
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      });
  });
});
