import {
  EPaymentSourceStatuses,
  EPaymentSourceTypes,
  IPaymentSource,
} from '../../core/domain/PaymentSource'

const PAYMENT_SOURCE: IPaymentSource = {
  data: {
    id: 101473,
    public_data: {
      bin: '424242',
      last_four: '4242',
      exp_month: '06',
      exp_year: '29',
      card_holder: 'Pedro Pérez',
      validity_ends_at: '2026-09-04T00:53:38.222+00:00',
      type: 'CARD',
    },
    token: 'tok_test_88255_F27Ce805EebDEeB188829C6Dc0d8Ce6B',
    type: EPaymentSourceTypes.CARD,
    status: EPaymentSourceStatuses.AVAILABLE,
    customer_email: 'sofia.blanco+7025@wompi.com',
  },
  meta: {},
}

export default PAYMENT_SOURCE
