const bash = require('../bash');
describe('01 | Ejercicios', () => {
  describe("Función printOutput", () => {
    let writeSpy;
    beforeEach(() => {
      writeSpy = jest.spyOn(process.stdout, 'write');
    });
    
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('printOutput debe invocar el método "write" de "process.stdout" con el parámetro recibido', () => {
      bash.print('Hola');
      expect(writeSpy.mock.calls[0][0]).toEqual('Hola');
    });
    
    it('printOutput debe invocar al método "write" de "process.stdout" con el valor "\nprompt > "', () => {
      bash.print('');
      // Atento al espacio al final del string
      expect(writeSpy.mock.calls[1][0]).toEqual('\nprompt > ');
    });
  });
  describe("Función Bash", () => {
    let printOutputSpy, onSpy;
    beforeEach(() => {
      printOutputSpy = jest.spyOn(process.stdout, 'write');
      onSpy = jest.spyOn(process.stdin, 'on');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('Bash debe invocar el método "write" de "process.stdout" con el valor "prompt > "', () => {
      bash.bash();
      expect(printOutputSpy).toHaveBeenCalledWith('prompt > ');
    });

    it('Bash debe invocar el método "on" de "process.stdin" con los parámetros "data" y un callback', () => {
      bash.bash();
      expect(onSpy).toHaveBeenCalled();
      expect(onSpy.mock.calls[0][0]).toEqual('data');
      expect(onSpy.mock.calls[0][1]).toBeInstanceOf(Function);
    });

    it('Bash debe funcionar correctamente cuando se ingresa un comando válido', () => {
      bash.bash();
      const onCallback = onSpy.mock.calls[0][1];
      onCallback('echo Buenas Tardes Estudiantes');
      expect(printOutputSpy.mock.calls[1][0]).toEqual('Buenas Tardes Estudiantes');
      //ATENTOS A ESTE TEST, si utilizan algun metodo de "console", va a romper el test.
      // Debido a que utiliza process.stdout.write y esto interfiere con las llamada que espera el test
    });

    it('Bash debe imprimir el mensaje "command not found: <nombreComando>" cuando el comando ingresado es incorrecto', () => {
      bash.bash();
      const onCallback = onSpy.mock.calls[0][1];
      onCallback('Henry');
      expect(printOutputSpy.mock.calls[1][0]).toEqual('command not found: Henry');
      //ATENTOS A ESTE TEST, si utilizan algun metodo de "console", va a romper el test.
      // Debido a que utiliza process.stdout.write y esto interfiere con las llamada que espera el test
    });
  });
});
