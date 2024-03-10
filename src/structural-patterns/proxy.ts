/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file proxy.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 03/03/2024
  * @brief Explicative implementation of adapter pattern.
  *        Proxy is a structural design pattern.
  * @see {@link https://refactoring.guru/design-patterns/proxy}
  * @see {@link https://www.patterns.dev/vanilla/proxy-pattern/}
  */

/**
 * Defines the common interface for both RealSubject and Proxy so that a
 * Proxy can be used anywhere a RealSubject is expected.
 */
interface PersonInfo {
  getName(): string;
  getAge(): number;
  setName(name: string): void;
  setAge(age: number): void;
}

/// The RealSubject.
class Person implements PersonInfo {
  private name: string = 'Unknown';
  private age: number = -1;
  constructor(name?: string, age?: number) {
    if (name) this.name = name;
    if (age) this.age = age;
  }
  /// Getters and setters
  public getName(): string { return this.name; }
  public getAge(): number { return this.age; }
  public setName(name: string): void { this.name = name; }
  public setAge(age: number): void { this.age = age; }
}

class PersonProxy implements PersonInfo {
  constructor(private person: Person) {}
  /// Getters
  public getName(): string { return this.person.getName(); }
  public getAge(): number { return this.person.getAge(); }
  /// Setters with validation
  public setName(name: string): void {
    if (/[A-Z][a-z]+/.test(name)) {
      this.person.setName(name);
    } else {
      throw new Error('Invalid name');
    }
  }
  public setAge(age: number): void {
    if (!Number.isInteger(age) || age < 0) {
      throw new Error('Invalid age');
    }
    this.person.setAge(age);
  }
}

function mainProxy() {
  const proxy = new PersonProxy(new Person());
  console.log('Before set properties:');
  console.log(proxy.getName()); /// Unkwon
  console.log(proxy.getAge()); /// -1

  proxy.setName('Hugo');
  proxy.setAge(20);
  console.log('After set properties:')
  console.log(proxy.getName()); /// Hugo
  console.log(proxy.getAge()); /// 20

  try {
    proxy.setName('esther'); // Error: Invalid name
  } catch(error: any) {
    console.error('Error:', error.message);
  }
  try {
    proxy.setAge(-1); /// Error: Invalid age
  } catch(error: any) {
    console.error('Error:', error.message);
  }
}

if (require.main === module) {
  mainProxy();
}