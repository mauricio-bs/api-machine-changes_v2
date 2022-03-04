import { v4 } from 'uuid'

export class Rotation {
  public readonly id?: number
  public name: string
  public startTime: string | Date
  public endTime: string | Date
  public isActive: boolean

  constructor(props: Omit<Rotation, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
