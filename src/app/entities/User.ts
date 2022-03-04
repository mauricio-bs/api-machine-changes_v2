import { v4 } from 'uuid'

export class User {
  public readonly id?: string
  public id8: number
  public name: string
  public email?: string
  public birthDate: Date
  public password: string
  public isActive: boolean

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) this.id = v4()
  }
}
