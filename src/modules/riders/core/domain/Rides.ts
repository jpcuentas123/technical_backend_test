export enum ERideStatus {
  IDLE = 'IDLE',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

export type TLocationDetails = {
  latitude: string
  longitude: string
}

export interface IRides {
  id: string
  from_location: TLocationDetails
  to_location: TLocationDetails
  ride_status: ERideStatus
  payment_source: string
  created_at: string
  updated_at: string
  user_id: string
}
