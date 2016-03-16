var expect = chai.expect;

describe("Medida", function() {
  	describe("constructor", function() {
    	it("Creación de un objeto Medida con dos argumentos", function() {
      		var medida = new Medida(32, "Celsius");
      		expect(medida.valor).to.equal(32);
      		expect(medida.tipo).to.equal("Celsius");
    	});
    	/*it("Creación de un objeto Medida omitiendo el segundo argumento", function() {
      		var medida = new Medida("32 Celsius");
      		expect(medida.valor).to.equal(32);
      		expect(medida.tipo).to.equal("Celsius");
    	});*/
    });
    describe("match", function() {
    	it("Funcionamiento del match", function() {
      		expect(Medida.match("32C to F").medida).to.equal("32");
      		expect(Medida.match("32C to F").from).to.equal("C");
      		expect(Medida.match("32C to F").to).to.equal(" to ");
      		expect(Medida.match("32C to F").to_o).to.equal("F");
    	});
    });
    describe("convertir", function() {
    	it("Conversiones desde Celsius", function() {
      		expect(Medida.convertir("32C to F")).to.equal("89.60 Fahrenheit");
      		expect(Medida.convertir("32C to K")).to.equal("305.15 Kelvin");
    	});
    	it("Conversiones desde Fahrenheit", function() {
      		expect(Medida.convertir("32F to C")).to.equal("0.00 Celsius");
      		expect(Medida.convertir("32F to K")).to.equal("273.15 Kelvin");
    	});
    	it("Conversiones desde Kelvin", function() {
      		expect(Medida.convertir("32K to C")).to.equal("-241.15 Celsius");
      		expect(Medida.convertir("32K to F")).to.equal("-402.07 Fahrenheit");
    	});
    	it("Conversiones con error de sintaxis de entrada", function() {
      		expect(Medida.convertir("Sintaxis Incorrecta")).to.equal("ERROR! Try something like '4F to K or 50e1K C or 30C TO K' instead");
    	});
    });
});

describe("Temperatura", function() {
  	describe("constructor", function() {
    	it("Creación de un objeto Temperatura", function() {
      		var temperatura = new Temperatura(32, "Celsius");
      		expect(temperatura.valor).to.equal(32);
      		expect(temperatura.tipo).to.equal("Celsius");
    	});
    });
});
