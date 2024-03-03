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
  * @date 03/03/2024
  * @brief Explicative implementation of adapter pattern.
  * Facade is a structural design pattern.
  * @see {@link https://refactoring.guru/design-patterns/facade}
  * @see {@link https://github.com/josemiguel-alvarez/design-patterns-typescript.git}
  */

/**
 * Complex System class that we want to simplify using a facade.
 * It is a cloud provider service that allows to log in, convert files, upload files and get file links.
 */
class CloudProviderService {
  /**
   * Simulate a user login.
   */
  public isLoggedIn(): boolean {
    return Math.random() > 0.5 ? true : false;
  }

  /**
   * Simulate a user login.
   */
  public logIn(): void {
    console.log("Logging in...");
  }

  /**
   * Simulate a file conversion.
   * @param file - The file to convert.
   * @returns The converted file.
   */
  public convertFile(file: string): string {
    console.log("Converting file...", file);
    return file + ".converted";
  }

  /**
   * Simulate a file upload.
   * @param file - The file to upload.
   */
  public uploadFile(file: string): void {
    console.log("Uploading file...", file);
  }

  /**
   * Simulate getting a file link.
   * @param file The file to get the link for.
   * @returns link to the file.
   */
  public getFileLink(file: string): string {
    return `https://example.com/${file}`;
  }
}

/**
 * Facade class that simplifies the complex system.
 * It provides a simple method to upload a file.
 */
class CloudProviderFacade {
  private service: CloudProviderService;

  constructor() {
    this.service = new CloudProviderService();
  }

  /**
   * Simulates an upload of a file to the cloud.
   * @param file File to upload.
   * @returns Link to the uploaded file on the cloud.
   */
  public uploadFile(file: string): string {
    if (!this.service.isLoggedIn()) {
      this.service.logIn();
    }

    const convertedFile = this.service.convertFile(file);
    this.service.uploadFile(convertedFile);

    return this.service.getFileLink(convertedFile);
  }
}

// // Client code that uses the complex system directly.
// function badMainExample() {
//   const CLOUD_SERVICE: CloudProviderService = new CloudProviderService();
//   if (!CLOUD_SERVICE.isLoggedIn()) {
//     CLOUD_SERVICE.logIn();
//   }
//   const CONVERTED_FILE: string = CLOUD_SERVICE.convertFile("file.txt");
//   CLOUD_SERVICE.uploadFile(CONVERTED_FILE);
//   const FILE_LINK: string = CLOUD_SERVICE.getFileLink(CONVERTED_FILE);
// }

// On the client code we can now use the facade to upload 
// a file without having to worry about the complex system.
function mainFacade() {
  const facade = new CloudProviderFacade();
  const fileLink = facade.uploadFile("file.txt");
  console.log("File link:", fileLink);
}

if (require.main === module) {
  mainFacade();
}