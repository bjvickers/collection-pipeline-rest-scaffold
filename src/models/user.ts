import IUser from "./i-user"

export default class User implements IUser {
  protected id: number
  protected firstName: string
  protected lastName: string
  protected email: string
  protected password: string
  protected encPassword: string

  // @TODO: DbC to enforce validation of inputs?
  public update(user: IUser): void {
    // @TODO: Implement setters and getters
    /*
    this.id = user.id || this.id
    this.firstName = user.firstName || this.firstName
    this.lastName = user.lastName || this.lastName
    */
  }
}
