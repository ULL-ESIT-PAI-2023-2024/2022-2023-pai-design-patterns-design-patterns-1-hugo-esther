/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * 
  * Design Patterns Presentation.
  * Programación de Interfaces Interactivas
  * 
  * @file mediator.ts
  * @author Hugo Hernández Martín (alu0101481227)
  * @author Esther Medina Quintero (alu0101434780)
  * @date 03/03/2024
  * @brief Explicative implementation of adapter pattern.
  *        Mediator is a behavioral design pattern.
  * @see {@link https://refactoring.guru/design-patterns/mediator}
  * @see {@link https://www.patterns.dev/vanilla/mediator-pattern}
  */

/**
 * The Mediator interface declares a method used by components.
 * In this case, the method is used to send a message to the mediator.
 * (Simulating a chat room)
 */
class ChatRoom {

  /**
   * @desc Log a message from a user.
   * @param user User that sends the message.
   * @param message Message sent by the user.
   */
  logMessage(user: User, message: string): void {
    const SENDER = user.getName();
    console.log(`${new Date().toLocaleString()} [${SENDER}]: ${message}`);
  }
}

/// Component class that sends messages to the mediator.
class User {
  constructor(private name: string, private chatroom: ChatRoom) {}
  /// Getter
  getName() { return this.name; }

  /**
   * @desc Send a message to the chatroom.
   * @param message The message to send.
   */
  send(message: string): void {
    this.chatroom.logMessage(this, message);
  }
}

function mainMediator(): void {
  const CHATROOM: ChatRoom = new ChatRoom();
  const USER_HUGO: User = new User('Hugo', CHATROOM);
  const USER_ESTHER: User = new User('Esther', CHATROOM);

  USER_HUGO.send("Hi there!");
  USER_ESTHER.send("Hey!");
}

if (require.main === module) {
  mainMediator();
}