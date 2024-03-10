/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file prototype.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 02/03/2024
  * @brief Explicative implementation of builder pattern.
  *        Prototype is a creational design pattern.
  * @see {@link https://refactoring.guru/design-patterns/prototype}
  * @see {@link https://www.geeksforgeeks.org/prototype-pattern-c-design-patterns/}
  */

/// Interface for the Shape classes.
interface Shape {
  clone(): any; /// Clone method for creating copies. Use any because it will return different types.
  draw(): void; /// Draw method for rendering the shape.
}

/// Class for the Circle shape.
class Circle implements Shape {
  private radius: number;

  /**
   * @desc Constructor of the Circle class.
   * @param radius The radius of the circle.
   */
  public constructor(radius?: number) {
    if (radius !== undefined) {
      this.radius = radius;
    } else {
      this.radius = 1;
    }
  }

  /**
   * @desc Copy the Circle object.
   * @returns A new Circle object with the same radius.
   */
  public clone(): Circle { return new Circle(this.radius); }

  /// Draws the Circle object.
  public draw(): void {
    console.log(`Drawing a circle of radius ${this.radius}`);
  }

  /// Setter and getter
  public setRadius(radius: number): void { this.radius = radius; }
  public getRadius(): number { return this.radius; }
}

/// Class for the Rectangle shape.
class Rectangle implements Shape {
  private width: number;
  private height: number;

  /**
   * @desc Constructor of the Rectangle class.
   * @param width The width of the rectangle.
   * @param height The height of the rectangle.
   */
  public constructor(width?: number, height?: number) {
    if (width === undefined) {
      width = 1;
    }
    if (height === undefined) {
      height = 1;
    }
    this.width = width;
    this.height = height;
  }

  /**
   * @desc Copy the Rectangle object.
   * @return A new Rectangle object with the same width and height.
   */
  public clone(): Rectangle { return new Rectangle(this.width, this.height); }

  /// Draws the Rectangle object.
  public draw(): void {
    console.log(`Drawing a rectangle of width ${this.width} and height ${this.height}`);
  }

  /// Setters and Getters
  public setWidth(width: number): void { this.width = width; }
  public getWidth(): number { return this.width; }
  public setHeight(height: number): void { this.height = height; }
  public getHeight(): number { return this.height; }
}

// /// Bad example of cloning objects
// function mainBadExample(): void {
//   let rectangle: Rectangle = new Rectangle(10, 20);
//   let clonedRectangle: Rectangle = new Rectangle();
//   clonedRectangle.setHeight(rectangle.getHeight());
//   clonedRectangle.setWidth(rectangle.getWidth());
// }

function mainPrototype(): void {
  let circle: Circle = new Circle(10);
  let rectangle: Rectangle = new Rectangle(10, 20);

  let clonedCircle: Circle = circle.clone();
  let clonedRectangle: Rectangle = rectangle.clone();

  console.log('\nOriginal objects:');
  circle.draw();
  rectangle.draw();
  console.log('\nCloned objects:');
  clonedCircle.draw();
  clonedRectangle.draw();

  /// Modify the cloned objects to verify that they are independent
  /// This is not a good practice, but it is useful for the example
  clonedCircle.setRadius(20);
  clonedRectangle.setWidth(20);
  clonedRectangle.setHeight(40);

  console.log('\nOriginal objects:');
  circle.draw();
  rectangle.draw();
  console.log('\nCloned objects:');
  clonedCircle.draw();
  clonedRectangle.draw();
}

if (require.main === module) {
  mainPrototype();
}