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
  * @date 02/03/2024
  * @brief Explicative implementation of builder pattern.
  * @see {@link https://refactoring.guru/design-patterns/builder}
  */

class House {
  private walls: number = 0;
  private doors: number = 0;
  private rooms: number = 0;
  private pool: boolean = false;
  private garage: boolean = false;
  private garden: boolean = false;


  // Bad constructor with a lot of parameters
  // constructor(walls: number, doors: number, rooms: number,
  //             pool: boolean, garage: boolean, garden: boolean) {
  //   this.walls = walls;
  //   this.doors = doors;
  //   this.rooms = rooms;
  //   this.pool = pool;
  //   this.garage = garage;
  //   this.garden = garden;
  // }

  // Getters and setters
  public getWalls(): number { return this.walls; }
  public setWalls(walls: number) { this.walls = walls; }

  public getDoors(): number { return this.doors; }
  public setDoors(doors: number) { this.doors = doors; }

  public getRooms(): number { return this.rooms; }
  public setRooms(rooms: number) { this.rooms = rooms; }

  public getPool(): boolean { return this.pool; }
  public setPool(pool: boolean) { this.pool = pool; }

  public getGarage(): boolean { return this.garage; }
  public setGarage(garage: boolean) { this.garage = garage; }

  public getGarden(): boolean { return this.garden; }
  public setGarden(garden: boolean) { this.garden = garden; }

  /**
   * Show the house attributes.
   */
  public show(): void {
    console.log(`Walls: ${this.walls}`);
    console.log(`Doors: ${this.doors}`);
    console.log(`Rooms: ${this.rooms}`);
    console.log(`Pool: ${this.pool}`);
    console.log(`Garage: ${this.garage}`);
    console.log(`Garden: ${this.garden}`);
  }
}

interface Builder {
  setWalls(walls: number): this;
  setDoors(doors: number): this;
  setRooms(rooms: number): this;
  setPool(pool: boolean): this;
  setGarage(garage: boolean): this;
  setGarden(garden: boolean): this;
  build(): House;
}

class HouseBuilder implements Builder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  public setWalls(walls: number): this {
    this.house.setWalls(walls);
    return this;
  }

  public setDoors(doors: number): this {
    this.house.setDoors(doors);
    return this;
  }

  public setRooms(rooms: number): this {
    this.house.setRooms(rooms);
    return this;
  }

  public setPool(pool: boolean): this {
    this.house.setPool(pool);
    return this;
  }

  public setGarage(garage: boolean): this {
    this.house.setGarage(garage);
    return this;
  }

  public setGarden(garden: boolean): this {
    this.house.setGarden(garden);
    return this;
  }

  public build(): House {
    return this.house;
  }
}

/**
 * Manage diferent types of house builds (using generic builder method).
 */
class Director {
  public buildHouseWithPool(): House {
    return new HouseBuilder().setWalls(4)
                             .setDoors(2)
                             .setRooms(4)
                             .setPool(true)
                             .setGarage(false)
                             .setGarden(false)
                             .build();
  }

  public buidlHouseWithGarden(): House {
    return new HouseBuilder().setWalls(4)
                             .setDoors(3)
                             .setRooms(5)
                             .setPool(false)
                             .setGarage(false)
                             .setGarden(true)
                             .build();
  }
}


function mainBuilder(): void {
  const DIRECTOR: Director = new Director();
  const HOUSE_WITH_POOL: House = DIRECTOR.buildHouseWithPool();
  const HOUSE_WITH_GARDEN: House = DIRECTOR.buidlHouseWithGarden();

  console.log('\nHouse with pool:');
  HOUSE_WITH_POOL.show();
  console.log('\nHouse with garden:');
  HOUSE_WITH_GARDEN.show();
}

if (require.main === module) {
  mainBuilder();
}