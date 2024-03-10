/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file adapter.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 02/03/2024
  * @brief Explicative implementation of adapter pattern.
  *        Adapter is a structural design pattern.
  * @see {@link https://refactoring.guru/design-patterns/adapter}
  * @see {@link https://www.geeksforgeeks.org/adapter-pattern/}
  */

/// Target interface (new interface that the client uses)
interface Printer {
  print(): void;
}

/// Existing service (existing interface that needs adapting)
class LegacyPrinter {
  /// Print with Legacy Printer
  public printString(): void {
    console.log('Printing with Legacy Printer');
  }
}

/// Adapter (class that adapts the new interface to the existing interface
class PrinterAdapter implements Printer {
  private legacyPrinter: LegacyPrinter = new LegacyPrinter();
  /// Print with the new interface using the existing interface
  public print(): void {
    this.legacyPrinter.printString();
  }
}

function mainAdapter(): void {
  let printerAdapter: PrinterAdapter = new PrinterAdapter();
  printerAdapter.print();
}

if (require.main === module) {
  mainAdapter();
}