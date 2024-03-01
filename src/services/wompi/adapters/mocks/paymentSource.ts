import {
  EPaymentSourceStatuses,
  EPaymentSourceTypes,
  IPaymentSource,
} from '../../core/domain/PaymentSource'

const PAYMENT_SOURCE: IPaymentSource = {
  data: {
    id: 3891,
    public_data: {
      type: EPaymentSourceTypes.CARD,
    },
    type: EPaymentSourceTypes.CARD,
    status: EPaymentSourceStatuses.AVAILABLE,
  },
}

export default PAYMENT_SOURCE
