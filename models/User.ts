"use strict"

export default class User {
  protected id: number
  protected firstName: string
  protected lastName: string
  
  public constructor(id?: number, firstName?: string, lastName?: string) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
  }

  // @TODO: DbC to enforce validation of inputs?
  public update(user: User): void {
    this.id = user.id || this.id
    this.firstName = user.firstName || this.firstName
    this.lastName = user.lastName || this.lastName
  }
}
