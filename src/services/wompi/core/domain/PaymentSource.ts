export enum EPaymentSourceTypes {
  NEQUI = 'NEQUI',
  CARD = 'CARD',
}

export enum EPaymentSourceStatuses {
  AVAILABLE = 'AVAILABLE',
}

export interface IPaymentSource {
  data: {
    id: number
    public_data: {
      type: 'NEQUI' | 'CARD'
      phone_number?: string
    }
    type: EPaymentSourceTypes
    status: EPaymentSourceStatuses
  }
}

export interface IPaymentSourceProps {
  customer_email: string
  type: EPaymentSourceTypes
  token: string
  acceptance_token: string
}
