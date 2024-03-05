import * as cryptoJs from 'crypto-js'

const generateSignature = ({ amount_in_cents, currency, secret }): string => {
  var cadenaConcatenada = `sk8-438k4-xmxm392-sn2m${amount_in_cents}${currency}${secret}`

  const hashDigest = cryptoJs.SHA256(cadenaConcatenada).toString()
  return hashDigest
}

export default generateSignature
