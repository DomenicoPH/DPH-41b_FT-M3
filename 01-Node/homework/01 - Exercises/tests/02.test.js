const commands = require('../commands/index')
const index = require('../bash')
const fs = require('fs')
const utils = require('../utils/request')
const axios = require('axios')

// Importante: Los test funcionarán apropiadamente si finalizaste el ejercicio anterior.
describe('02 | Ejercicios', () => {
	let printSpy, readFileSpy
	beforeEach(() => {
		printSpy = jest.spyOn(index, 'print')
		readFileSpy = jest.spyOn(fs, 'readFile')
	})

	afterEach(() => {
		jest.restoreAllMocks()
	})

	it('PWD - Debe imprimir el directorio actual', () => {
		const pwdSpy = jest.spyOn(process, 'cwd')
		commands.pwd(index.print)
		expect(pwdSpy).toHaveBeenCalled()
	})

	it('DATE - Debe imprimir la fecha actual', () => {
		Date = jest.fn()
		Date.mockImplementation(() => '10/11/2022')
		commands.date(index.print)
		expect(Date).toHaveBeenCalled()
	})

	it('ECHO - Debe imprimir el mensaje escrito en la terminal', () => {
		commands.echo(index.print, 'Henry Bash')
		expect(printSpy).toHaveBeenCalledWith('Henry Bash')
	})

	it('LS - Debe imprimir los directorios y archivos en la ruta actual', () => {
		const readdirSpy = jest.spyOn(fs, 'readdir')
		commands.ls(index.print)
		const readdirCallback = readdirSpy.mock.calls[0][1]
		readdirCallback(null, ['bash.js', 'commands', 'node_modules', 'package-lock.json', 'package.json', 'README.md', 'tests'])
		expect(printSpy).toHaveBeenCalledWith(`bash.js commands node_modules package-lock.json package.json README.md tests`)
	})

	it('CAT - Debe imprimir el archivo provisto', (done) => {
		commands.cat(index.print, 'testingAux.js')
		const readFileCallback = readFileSpy.mock.calls[0][2]
		readFileCallback(
			null,
			`(function (args) {
      return function() {
        for (let i = 0; i < Math.ceil(Math.random() * 100) + args.length; i += 1) {
          return Math.pow(i, Infinity);
        }
      }
    })()();`
		)

		expect(printSpy).toHaveBeenCalledWith(`(function (args) {
      return function() {
        for (let i = 0; i < Math.ceil(Math.random() * 100) + args.length; i += 1) {
          return Math.pow(i, Infinity);
        }
      }
    })()();`)
		done()
		// El done() soluciona el error de open handles
	})

	it('HEAD - Debe imprimir las primeras lineas del archivo provisto', (done) => {
		commands.head(index.print, 'testingAux.js')
		const readFileCallback = readFileSpy.mock.calls[0][2]
		readFileCallback(
			null,
			`(function (args) {
      return function() {
        for (let i = 0; i < Math.ceil(Math.random() * 100) + args.length; i += 1) {
          return Math.pow(i, Infinity);
        }
      }
    })()();`
		)
		expect(printSpy).toHaveBeenCalledWith(`(function (args) {`)
		done()
	})

	it('TAIL - Debe imprimir la ultima linea del archivo provisto', (done) => {
		commands.tail(index.print, 'testingAux.js')
		const readFileCallback = readFileSpy.mock.calls[0][2]
		readFileCallback(
			null,
			`(function (args) {
      return function() {
        for (let i = 0; i < Math.ceil(Math.random() * 100) + args.length; i += 1) {
          return Math.pow(i, Infinity);
        }
      }
    })()();`
		)
		expect(printSpy).toHaveBeenCalledWith(`})()();`)
		done()
	})

	it('CURL - Debe realizar una request a una URL', async () => {
		const mockAxios = jest.spyOn(axios, 'get')
		mockAxios.mockResolvedValue({
			data: `<html>
      <head>
      <title>HOME</title>
      </head>
      <body bgcolor="#000000" text="#c0c0c0">
      <font face="arial, geneva, helvetica" size=3>
      <p><br><br><br><br>
      <center>UNDER CONSTRUCTION<br><center>
      <p><br>
      </body>
      </html>`
		})

		await commands.curl(index.print, 'http://sarasa.com')
		expect(printSpy).toHaveBeenCalledWith(`<html>
      <head>
      <title>HOME</title>
      </head>
      <body bgcolor="#000000" text="#c0c0c0">
      <font face="arial, geneva, helvetica" size=3>
      <p><br><br><br><br>
      <center>UNDER CONSTRUCTION<br><center>
      <p><br>
      </body>
      </html>`)

		// Limpia el mock después de usarlo
		mockAxios.mockRestore()
	})
})
