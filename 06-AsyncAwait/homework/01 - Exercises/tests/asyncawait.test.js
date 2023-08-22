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

describe("01 | Ejercicios - Async Await (poem-one)", () => {
  afterAll(async () => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Problem A | Consologuea la primer stanza versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    try{
      await problemA();

      expect(blue).toHaveBeenCalledWith(stanzasOne[0]);
      expect(promisifiedReadFileSpy).toHaveBeenCalled(); // problemA | No se llamó a promisifiedReadFile
    } catch(error) {
      throw new Error("problemA | No se llamó a la stanza correcta");
    } finally {
      blue.mock.calls.forEach(
        (call, index) => { 
          expect(call[0]).toBe(stanzasOne[index]) // problemA | No se llamó a la stanza correcta
        }
      );
    };;
  });

  it("Problem B | Consologuea la segunda y tercer stanza versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemB();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemB | No se llamo a promisifiedReadFile");
    try {
      expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
      expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    } catch (error) {
      throw new Error("problemB | No se llamó a la stanza correcta");
    };
  });

  it("Problem C | Consologuea la segunda y tercer stanza versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemC();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemC | No se llamo a promisifiedReadFile");
    try {
      expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
      expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    } catch (error) {
      throw new Error("problemC | No se llamó a la stanza correcta");
    }
  });

  it("Problem D | Consologuea la cuarta stanza versión Async Await o un error", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");

    await problemD();

    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemD | No se llamo a promisifiedReadFile");
    if(blue.mock.calls.length) {
      expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    }

    expect(magenta).toHaveBeenCalled();
  });

  it("Problem E | Consologuea la tercer stanza y luego la cuarta stanza o su respectivo error, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemE();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemD | No se llamo a promisifiedReadFile");

      if (blue.mock.calls.length > 1) {
        expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
        expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
      }

      if (
        (blue.mock.calls[0] && blue.mock.calls[0][0] !== stanzasOne[2]) ||
        (blue.mock.calls[1] && blue.mock.calls[1][0] !== stanzasOne[3])
      ) throw new Error("problemD | No se llamó a la stanza correcta");

      expect(magenta).toHaveBeenCalled();
  });

  it("Problem F | Consologuea la tercer stanza y luego la cuarta stanza o un error para cualquiera de los casos, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemF();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemF | No se llamo a promisifiedReadFile");

    if (blue.mock.calls.length >= 1) {
      expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
      expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    }

    if (
      (blue.mock.calls[0] && blue.mock.calls[0][0] !== stanzasOne[2]) ||
      (blue.mock.calls[1] && blue.mock.calls[1][0] !== stanzasOne[3])
    ) throw new Error("problemF | No se llamó a la stanza correcta");
  
    expect(magenta).toHaveBeenCalled();
  });
});

describe("02 | Ejercicios - Async Await (poem-two)", () => {
  afterAll(async () => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Problem A | Consologuea la primer y segunda stanza versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");

    await problemAx();

    expect(blue).toHaveBeenCalledWith(stanzasTwo[0])
    expect(blue).toHaveBeenCalledWith(stanzasTwo[1])

    expect(promisifiedReadFileSpy).toHaveBeenCalled(); // problemA | No se llamó a promisifiedReadFile
  });

  it("Problem B | Consologuea todas las stanzas de poem-two en cualquier orden, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");

    await problemBx();
    
    stanzasTwo.forEach(
      stanza =>{ expect(blue).toHaveBeenCalledWith(stanza) }
    )

    expect(promisifiedReadFileSpy).toHaveBeenCalled(); // problemB | No se llamó a promisifiedReadFile
  });

  it("Problem C | Consologuea todas las stanzas de poem-two en orden, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");

    await problemCx();
    
    stanzasTwo.forEach(
      stanza =>{ expect(blue).toHaveBeenCalledWith(stanza) }
    )

    expect(promisifiedReadFileSpy).toHaveBeenCalled(); // problemC | No se llamó a promisifiedReadFile
  });

  it("Problem D | Consologuea todas las stanzas de poem-two en orden o un error, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");

    await problemDx();

    try{
      stanzasTwo.forEach(
        stanza => { expect(blue).toHaveBeenCalledWith(stanza) }
      )
    }
    catch(error){
      expect(promisifiedReadFileSpy).toHaveBeenCalled(); // problemD | No se llamó a promisifiedReadFile
      expect(magenta).toHaveBeenCalled();
    }

  });
});
