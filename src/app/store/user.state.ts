
import {User} from './../models/user.model'

export interface UserState {
  actualUser: User | null
  users: User[]
  error: Error | null
}
