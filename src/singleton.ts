/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file singleton.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 01/03/2024
  * @brief Explicative implementation of singleton pattern.
  * @see {@link https://refactoring.guru/design-patterns/singleton}
  * @see {@link https://youtu.be/GGq6s7xhHzY?si=lAgYYmwW5ay6tfik}
  */

/**
 * Academic exaple of singleton class
 */
class SingletonClass {
  private static singletonInstance: SingletonClass;
  
  /**
   * Public static function to get the unique singleton instance.
   * If it exists, returns it. Else, create the unique singleton instance.
   * @param exampleParameter An example parameter to show that there is 
   * only one unique instance. 
   * @return Unique singleton instance.
   */
  static getInstance(exampleParameter: string): SingletonClass {
    if (!this.singletonInstance) {
      this.singletonInstance = new SingletonClass(exampleParameter);
    }
    return this.singletonInstance;
  }

  /**
   * Getter method for the example attribute of the class.
   * @return Value of the example attribute.
   */
  GetExampleAttribute(): string { return this.exampleAttribute; }

  // Private constructor to avoid undesired instantiations
  private constructor(private exampleAttribute: string) {}
}


function main(): void {
  // You can't do: myInstance = new SingletonClass('my example');
  const MY_FIRST_INSTANCE: SingletonClass = SingletonClass.getInstance('My Singleton Class');
  console.log(MY_FIRST_INSTANCE.GetExampleAttribute());
  const MY_SECOND_INSTANCE: SingletonClass = SingletonClass.getInstance('Nothing done here');
  console.log(MY_SECOND_INSTANCE.GetExampleAttribute());
}

if (require.main === module) {
  main();
}