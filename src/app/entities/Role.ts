import { v4 } from 'uuid'

export class Role {
  public readonly id?: number
  public name: string
  public isActive: boolean

  constructor(props: Omit<Role, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
