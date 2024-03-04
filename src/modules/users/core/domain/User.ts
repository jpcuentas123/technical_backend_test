export enum EUserType {
  RIDER = 'RIDER',
  DRIVER = 'DRIVER',
}

export interface IUser {
  id: string
  name: string
  created_at: Date
  updated_at: Date
  user_type: EUserType
}
