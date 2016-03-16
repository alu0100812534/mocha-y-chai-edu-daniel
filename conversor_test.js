var expect = chai.expect;

describe("Medida", function() {
  	describe("constructor", function() {
    	it("Creación de una medida con dos argumentos", function() {
      		var medida = new Medida(32, Celsius);
      		expect(medida.valor).to.equal(32);
      		expect(medida.tipo).to.equal("Celsius");
    	});
    });
});