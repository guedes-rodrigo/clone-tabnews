const calculadora = require("../../models/calculadora");

test("somar 2+2 igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
