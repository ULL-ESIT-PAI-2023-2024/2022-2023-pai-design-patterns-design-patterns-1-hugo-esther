/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file chain-of-responsability.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 02/03/2024
  * @brief Explicative implementation of chain of responsability pattern.
  *        Chain of responsability is a behavioral design pattern.
  * @see {@link https://refactoring.guru/design-patterns/chain-of-responsibility}
  * @see {@link https://medium.com/@vahid.vdn/learn-the-chain-of-responsibility-pattern-in-depth-with-typescript-4336f8fb4afb}
  * @see {@link https://dev.to/akramsmahmoud/design-pattern-chain-of-responsibility-in-typescript-with-real-world-example-2d4e}
  * @see {@link https://sbcode.net/typescript/chain_of_responsibility/}
  */

// The Chain Of Responsibility Pattern Concept

interface IHandler {
  // The Handler Interface that the Successors should implement
  handle(payload: number): number;
}

class Successor1 implements IHandler {
  // A Concrete Handler
  public handle(payload: number) {
    console.log(`Successor1 payload = ${payload}`)
    const test = Math.floor(Math.random() * 2) + 1;
    if (test === 1) {
      payload += 1;
      payload = new Successor1().handle(payload)
    } else {
      payload -= 1;
      payload = new Successor2().handle(payload);
    }
    return payload;
  }
}

class Successor2 implements IHandler {
  // A Concrete Handler
  public handle(payload: number) {
    console.log(`Successor2 payload = ${payload}`);
    const test = Math.floor(Math.random() * 3) + 1;
    if (test === 1) {
      payload = payload * 2;
      payload = new Successor1().handle(payload)
    } else if (test === 2) {
      payload = payload / 2;
      payload = new Successor2().handle(payload);
    } // if test = 3 then assign no further successors
    return payload;
  }
}

class Chain {
  // A chain with a default first successor
  public start(payload: number) {
    // Setting the first successor that will modify the payload
    return new Successor1().handle(payload);
  }
}

// The Client
const CHAIN: Chain = new Chain();
const PAYLOAD: number = 1;
const OUT = CHAIN.start(PAYLOAD);
console.log(`Finished result = ${OUT}`);