var expect=chai.expect;describe("Medida",function(){describe("constructor",function(){it("Creación de un objeto Medida con dos argumentos",function(){var e=new Medida(32,"Celsius");expect(e.valor).to.equal(32),expect(e.tipo).to.equal("Celsius")})}),describe("match",function(){it("Funcionamiento del match",function(){expect(Medida.match("32C to F").medida).to.equal("32"),expect(Medida.match("32C to F").from).to.equal("C"),expect(Medida.match("32C to F").to).to.equal(" to "),expect(Medida.match("32C to F").to_o).to.equal("F")})}),describe("convertir",function(){it("Conversiones desde Celsius",function(){expect(Medida.convertir("32C to F")).to.equal("89.60 Fahrenheit"),expect(Medida.convertir("32C to K")).to.equal("305.15 Kelvin")}),it("Conversiones desde Fahrenheit",function(){expect(Medida.convertir("32F to C")).to.equal("0.00 Celsius"),expect(Medida.convertir("32F to K")).to.equal("273.15 Kelvin")}),it("Conversiones desde Kelvin",function(){expect(Medida.convertir("32K to C")).to.equal("-241.15 Celsius"),expect(Medida.convertir("32K to F")).to.equal("-402.07 Fahrenheit")}),it("Conversiones con error de sintaxis de entrada",function(){expect(Medida.convertir("Sintaxis Incorrecta")).to.equal("ERROR! Try something like '4F to K or 50e1K C or 30C TO K' instead")})})}),describe("Temperatura",function(){describe("constructor",function(){it("Creación de un objeto Temperatura",function(){var e=new Temperatura(32,"Celsius");expect(e.valor).to.equal(32),expect(e.tipo).to.equal("Celsius")})})}),describe("Celsius",function(){describe("constructor",function(){it("Creación de un objeto Celsius",function(){var e=new Celsius(32);expect(e.valor).to.equal(32)})}),describe("funciones to...",function(){it("Conversión a Fahrenheit (toFahrenheit)",function(){var e=new Celsius(32);expect(e.toFahrenheit()).to.equal(89.6)}),it("Conversión a Kelvin (toKelvin)",function(){var e=new Celsius(32);expect(e.toKelvin()).to.equal(305.15)})})}),describe("Fahrenheit",function(){describe("constructor",function(){it("Creación de un objeto Fahrenheit",function(){var e=new Fahrenheit(32);expect(e.valor).to.equal(32)})}),describe("funciones to...",function(){it("Conversión a Celsius (toCelsius)",function(){var e=new Fahrenheit(32);expect(e.toCelsius()).to.equal(0)}),it("Conversión a Kelvin (toKelvin)",function(){var e=new Fahrenheit(32);expect(e.toKelvin()).to.equal(273.15)})})}),describe("Kelvin",function(){describe("constructor",function(){it("Creación de un objeto Kelvin",function(){var e=new Kelvin(32);expect(e.valor).to.equal(32)})}),describe("funciones to...",function(){it("Conversión a Celsius (toCelsius)",function(){var e=new Kelvin(32);expect(e.toCelsius()).to.equal(-241.14999999999998)}),it("Conversión a Fahrenheit (toFahrenheit)",function(){var e=new Kelvin(32);expect(e.toFahrenheit()).to.equal(-402.07)})})});