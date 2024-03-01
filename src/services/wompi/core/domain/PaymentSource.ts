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
      bin: string
      last_four: string
      exp_month: string
      exp_year: string
      card_holder: string
      validity_ends_at: string
      type: 'NEQUI' | 'CARD'
      phone_number?: string
    }
    token: string
    type: EPaymentSourceTypes
    status: EPaymentSourceStatuses
    customer_email: string
  }
  meta: {}
}

export interface IPaymentSourceProps {
  customer_email: string
  type: EPaymentSourceTypes
  token: string
  acceptance_token: string
}
