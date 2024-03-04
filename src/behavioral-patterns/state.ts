/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file state.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 02/03/2024
  * @brief Explicative implementation of state pattern.
  *        State is a behavioral design pattern.
  * @see {@link https://refactoring.guru/design-patterns/chain-of-responsibility}
  * @see {@link https://fireship.io/lessons/typescript-design-patterns/}
  */

interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy';
  }
}

class SadState implements State {
  think() {
    return 'I am sad';
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
  
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());