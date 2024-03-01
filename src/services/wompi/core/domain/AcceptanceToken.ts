interface IPresignedAcceptance {
  data: {
    presigned_acceptance: {
      acceptance_token: string
      permalink: string
      type: 'END_USER_POLICY' | string
    }
  }
}

export { IPresignedAcceptance }
