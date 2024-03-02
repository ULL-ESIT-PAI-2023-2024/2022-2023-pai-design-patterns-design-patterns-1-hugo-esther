/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file builder.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 01/03/2024
  * @brief Explicative implementation of builder pattern.
  * @see {@link https://refactoring.guru/design-patterns/builder}
  * @see {@link https://dev.to/jmalvarez/builder-pattern-in-typescript-3on0}
  * @see {@link https://github.com/josemiguel-alvarez/design-patterns-typescript}
  */

/**
 * Builder interface
 */
interface Builder {
  setSeats(seats: number): this;
  setEngine(engine: string): this;
}

/**
 * Class that represent a car.
 */
class Car {
  private seats: number;
  private engine: string;

  public setSeats(seats: number): void {
    this.seats = seats;
  }

  public setEngine(engine: string): void {
    this.engine = engine;
  }

  public show(): void {
    console.log(`Seats: ${this.seats}`);
    console.log(`Engine: ${this.engine}`);
  }
}

/**
 * Class that represent a motorcycle.
 */
class Motorcycle {
  private seats: number;
  private engine: string;

  public setSeats(seats: number): void {
    if (seats > 2) {
      throw new Error("Motorcycle can not have more than 2 seats");
    }
    this.seats = seats;
  }

  public setEngine(engine: string): void {
    this.engine = engine;
  }

  public show(): void {
    console.log(`Seats: ${this.seats}`);
    console.log(`Engine: ${this.engine}`);
  }
}

/**
 * Car builder, implement builder methods for car.
 */
class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  public setSeats(seats: number): this {
    this.car.setSeats(seats);
    return this;
  }

  public setEngine(engine: string): this {
    this.car.setEngine(engine);
    return this;
  }

  public getResult(): Car {
    return this.car;
  }
}

/**
 * Motorcycle builder, implement builder methods for motorcycle.
 */
class MotorcycleBuilder implements Builder {
  private motorcycle: Motorcycle;

  constructor() {
    this.motorcycle = new Motorcycle();
  }

  public setSeats(seats: number): this {
    this.motorcycle.setSeats(seats);
    return this;
  }

  public setEngine(engine: string): this {
    this.motorcycle.setEngine(engine);
    return this;
  }

  public getResult(): Motorcycle {
    return this.motorcycle;
  }
}

/**
 * Manage diferent types of car and motorcycle builds (using generic builder methods).
 */
class Director {
  public buildFerrari(): Car {
    return new CarBuilder().setSeats(2).setEngine("V-12").getResult();
  }

  public buildToyota(): Car {
    return new CarBuilder().setSeats(7).setEngine("V-6").getResult();
  }

  public buildHonda(): Motorcycle {
    return new MotorcycleBuilder().setSeats(2).setEngine("V-4").getResult();
  }

  public buildYamaha(): Motorcycle {
    return new MotorcycleBuilder().setSeats(1).setEngine("V-2").getResult();
  }
}

// Example code using directly the builders
const car = new CarBuilder().setSeats(2).setEngine("V-12").getResult();
const motorcycle = new MotorcycleBuilder()
  .setSeats(2)
  .setEngine("V-4")
  .getResult();

// Example code using the director
const director = new Director();
director.buildFerrari();
director.buildToyota();

director.buildHonda();
director.buildYamaha();