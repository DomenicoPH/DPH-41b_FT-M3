"use strict";

const {
  problemA,
  problemB,
  problemC,
  problemD,
  problemE,
  problemF,
} = require("../exercise-one");

const {
  problemAx,
  problemBx,
  problemCx,
  problemDx,
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

describe("01 | Ejercicios - Callbacks (poem-one)", () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 250));
  });

  beforeEach(() => {
    jest.spyOn(utils, "readFile").mockImplementation((filename, callback) => {
      let stanza = stanzasOne.find((stanza) => stanza.includes(filename));
      callback(null, stanza);
    });
  });

  it("Problem A | Consologuea la primer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemA();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemA | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    readFileCallback(null, stanzasOne[0]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[0]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem B | Consologuea la segunda y tercer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemB();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemB | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[1]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
    readFileCallbackTwo(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem C | Consologuea la segunda y tercer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemC();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemC | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[1]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
    readFileCallbackTwo(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem D | Consologuea la cuarta stanza versión callback o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemD();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemD | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    readFileCallback(null, stanzasOne[3]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem E | Consologuea la tercera stanza y luego la cuarta stanza versión callback o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemE();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemE | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackTwo(null, stanzasOne[3]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    readFileCallbackTwo("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem F | Consologuea la tercera stanza y luego la cuarta stanza versión callback o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemF();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemF | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackTwo(null, stanzasOne[3]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    readFileCallbackTwo("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });
});

describe("02 | Ejercicios - Callbacks (poem-two)", () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 250));
  });

  beforeEach(() => {
    jest.spyOn(utils, "readFile").mockImplementation((filename, callback) => {
      let stanza = stanzasTwo.find((stanza) => stanza.includes(filename));
      callback(null, stanza);
    });
  });

  it("Problem A | Consologuea la primera y segunda stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemAx();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemA | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasTwo[0]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
    readFileCallbackTwo(null, stanzasTwo[1]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem B | Consologuea todos los stanzas que se encuentren en poem-two versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemBx();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemB | No se llamo a readFile"));
    console.log(readFileSpy.mock.calls);
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    const readFileCallbackThree = readFileSpy.mock.calls[2][1];
    const readFileCallbackFour = readFileSpy.mock.calls[3][1];
    const readFileCallbackFive = readFileSpy.mock.calls[4][1];
    const readFileCallbackSix = readFileSpy.mock.calls[5][1];
    const readFileCallbackSeven = readFileSpy.mock.calls[6][1];
    const readFileCallbackEight = readFileSpy.mock.calls[7][1];
    readFileCallback(null, stanzasTwo[0]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
    readFileCallbackTwo(null, stanzasTwo[1]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
    readFileCallbackThree(null, stanzasTwo[2]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[2]);
    readFileCallbackFour(null, stanzasTwo[3]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[3]);
    readFileCallbackFive(null, stanzasTwo[4]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[4]);
    readFileCallbackSix(null, stanzasTwo[5]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[5]);
    readFileCallbackSeven(null, stanzasTwo[6]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[6]);
    readFileCallbackEight(null, stanzasTwo[7]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[7]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem C | Consologuea todos los stanzas que se encuentren en poem-two versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemCx();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemC | No se llamo a readFile"));
    console.log(readFileSpy.mock.calls[0]);
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    const readFileCallbackThree = readFileSpy.mock.calls[2][1];
    const readFileCallbackFour = readFileSpy.mock.calls[3][1];
    const readFileCallbackFive = readFileSpy.mock.calls[4][1];
    const readFileCallbackSix = readFileSpy.mock.calls[5][1];
    const readFileCallbackSeven = readFileSpy.mock.calls[6][1];
    const readFileCallbackEight = readFileSpy.mock.calls[7][1];
    readFileCallback(null, stanzasTwo[0]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
    readFileCallbackTwo(null, stanzasTwo[1]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
    readFileCallbackThree(null, stanzasTwo[2]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[2]);
    readFileCallbackFour(null, stanzasTwo[3]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[3]);
    readFileCallbackFive(null, stanzasTwo[4]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[4]);
    readFileCallbackSix(null, stanzasTwo[5]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[5]);
    readFileCallbackSeven(null, stanzasTwo[6]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[6]);
    readFileCallbackEight(null, stanzasTwo[7]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[7]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem D | Consologuea todos los stanzas que se encuentren en poem-two o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemDx();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemD | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    const readFileCallbackThree = readFileSpy.mock.calls[2][1];
    const readFileCallbackFour = readFileSpy.mock.calls[3][1];
    const readFileCallbackFive = readFileSpy.mock.calls[4][1];
    const readFileCallbackSix = readFileSpy.mock.calls[5][1];
    const readFileCallbackSeven = readFileSpy.mock.calls[6][1];
    const readFileCallbackEight = readFileSpy.mock.calls[7][1];
    readFileCallback(null, stanzasTwo[0]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackTwo(null, stanzasTwo[1]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
    readFileCallbackTwo("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackThree(null, stanzasTwo[2]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[2]);
    readFileCallbackThree("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackFour(null, stanzasTwo[3]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[3]);
    readFileCallbackFour("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackFive(null, stanzasTwo[4]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[4]);
    readFileCallbackFive("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackSix(null, stanzasTwo[5]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[5]);
    readFileCallbackSix("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackSeven(null, stanzasTwo[6]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[6]);
    readFileCallbackSeven("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackEight(null, stanzasTwo[7]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[7]);
    readFileCallbackEight("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });
});
