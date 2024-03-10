/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file composite.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 02/03/2024
  * @brief Explicative implementation of composite pattern.
  *        Composite is a structural design pattern.
  * @see {@link https://refactoring.guru/design-patterns/composite}
  * @see {@link https://www.netguru.com/blog/top-5-most-used-patterns-in-oop-with-typescript}
  */


interface Component {
  operation: Function;
}

abstract class Leaf implements Component {
  public operation() {}
}

abstract class Composite implements Component {
  protected childs: Component[] = [];
  public operation() {
    this.childs.forEach(child => {
      child.operation();
    });
  }
  public add(component: Component) {
    this.childs.push(component);
  }
  public remove(component: Component) {
    this.childs.splice(this.childs.indexOf(component), 1);
  }
  public getChild() {
    return this.childs;
  }
}

class Duck extends Composite {
  public constructor(childs: Component[]) {
    super();
    this.childs = childs;
  }
}

class DuckVoice extends Leaf {
  public operation() {
    console.log('Quack.');
  }
}

class DuckFly extends Composite {
  public operation() {
    console.log('It flies.');
    super.operation();
  }
  public add(component: Component) {
    super.add(component);
    return this;
  }
}

class Wing extends Leaf {
  public operation() {
    console.log('Flap-flap-flap');
  }
}

const wings = [new Wing(), new Wing()];
const flyAbility = new DuckFly().add(wings[0]).add(wings[1]);
const voiceAbility = new DuckVoice();

const duck = new Duck([flyAbility, voiceAbility]);

duck.operation();