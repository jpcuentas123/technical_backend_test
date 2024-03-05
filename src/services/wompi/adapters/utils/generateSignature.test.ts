import generateSignature from './generateSignature'

describe('generate signature', () => {
  it('should generate signature', () => {
    const result = generateSignature({
      amount_in_cents: 2490000,
      currency: 'COP',
      secret: 'prod_integrity_Z5mMke9x0k8gpErbDqwrJXMqsI6SFli6',
    })

    expect(result).toBe(
      '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5'
    )
  })
})
