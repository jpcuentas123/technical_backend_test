import { IPresignedAcceptance } from '../../core/domain/AcceptanceToken'

const PRESIGNED_ACCEPTANCE_TOKEN: IPresignedAcceptance = {
  data: {
    presigned_acceptance: {
      acceptance_token:
        'eyJhbGciOiJIUzI1NiJ9.eyJjb250cmFjdF9pZCI6MSwicGVybWFsaW5rIjoiaHR0cHM6Ly93b21waS5jby93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9URVJNSU5PUy1ZLUNPTkRJQ0lPTkVTLURFLVVTTy1VU1VBUklPUy1XT01QSS5wZGYiLCJmaWxlX2hhc2giOiIzZGNkMGM5OGU3NGFhYjk3OTdjZmY3ODExNzMxZjc3YiIsImppdCI6IjE1ODEwOTIzNjItMzk1NDkiLCJleHAiOjE1ODEwOTU5NjJ9.JwGfnfXsP9fbyOiQXFtQ_7T4r-tjvQrkFx0NyfIED5s',
      permalink:
        'https://wompi.co/wp-content/uploads/2019/09/TERMINOS-Y-CONDICIONES-DE-USO-USUARIOS-WOMPI.pdf',
      type: 'END_USER_POLICY',
    },
  },
}

export { PRESIGNED_ACCEPTANCE_TOKEN }
