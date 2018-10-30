"use strict"

export default class User {
  protected id: number = 0
  protected firstName: string = ""
  protected lastName: string = ""

  // @TODO: DbC to enforce validation of inputs?
  public update(user: User): void {
    this.id = user.id || this.id
    this.firstName = user.firstName || this.firstName
    this.lastName = user.lastName || this.lastName
  }
}
