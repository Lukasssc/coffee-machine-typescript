import { Drink } from "../Drink";
import { CoffeeMachine } from "../CoffeeMachine";

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");

    const result = machine.serve(drink, 2, false, 10)
    expect(result).toBe("Serving Coffee (small)");
  });

  it("should cost 50 cent more if it is medium", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "medium");

    const result = machine.serve(drink, 2.5, false, 10)
    expect(result).toBe("Serving Coffee (medium)");
  });

  it("should cost 1 euro  more if it is large", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "large");

    const result = machine.serve(drink, 3, false, 10)
    expect(result).toBe("Serving Coffee (large)");
  });

  it("should add 20 cents if it is with milk", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, true, 0, "large");

    const result = machine.serve(drink, 3.2, false, 10)

    expect(result).toBe("Serving Coffee (large)");
  });

  it("should cost 0.8 * less between 15 and 17 hour", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "large");

    const result = machine.serve(drink, 2.4, false, 15)

    expect(result).toBe("Serving Coffee (large)");
  });

    it("should pay for large coffee with loyalty card", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "large");

    const result = machine.serve(drink, 3, true, 10)

    expect(result).toBe("Serving Coffee (large)");
  });
    it("should not add more than 5 sugars", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 6, "small");

    const result = machine.serve(drink, 2.60, false, 10)

    expect(result).toBe("Error: too much sugar");
  });

  it("should add 10 cents for sugar if more than 2", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 3, "small");

    const result = machine.serve(drink, 2.1, false, 10)

    expect(result).toBe("Serving Coffee (small)");
  });

    it("shouldnt accept negative cost", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", -1, false, 3, "small");

    const result = machine.serve(drink, 2, false, 10)

    expect(result).toBe("Error: invalid price");
  });

     it("shouldnt accept less inserted money than cost", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 3, "small");

    const result = machine.serve(drink, 0, false, 10)

    expect(result).toBe("Not enough money");
  });

   it("shouldnt withdraw a change ", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");

    const result = machine.serve(drink, 3, false, 10)

    expect(result).toBe("Serving Coffee (small) with change 1.00");
  });

    it("5th drink should be free with loyalty card ", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    
    const result = machine.serve(drink, 2, true, 10) 
    const result2 = machine.serve(drink, 2, true, 10) 
    const result3 = machine.serve(drink, 2, true, 10) 
    const result4 = machine.serve(drink, 2, true, 10) 
    const result5 = machine.serve(drink, 0, true, 10) 

    expect(result).toBe("Serving Coffee (small)");
  });



  
});
