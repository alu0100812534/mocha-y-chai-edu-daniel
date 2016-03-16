var expect = chai.expect;

describe("Medida", function() {
  	describe("constructor", function() {
    	it("Creación de una medida con dos argumentos", function() {
      		var medida = new Medida(32, "Celsius");
      		expect(medida.valor).to.equal(32);
      		expect(medida.tipo).to.equal("Celsius");
    	});
    	it("Creación de una medida omitiendo el segundo argumento", function() {
      		var medida = new Medida("32 Celsius");
      		expect(medida.valor).to.equal(32);
      		expect(medida.tipo).to.equal("Celsius");
    	});
    });
    describe("match", function() {
    	it("Funcionamiento del match", function() {
      		expect(Medida.match("32C to F").medida).to.equal('32');
      		expect(Medida.match("32C to F").from).to.equal('C');
      		expect(Medida.match("32C to F").to).to.equal(' to ');
      		expect(Medida.match("32C to F").to_o).to.equal('F');
    	});
    });
});