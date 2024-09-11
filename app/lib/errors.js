export const ResultCode = {
  InvalidCredentials: 'INVALID_CREDENTIALS',
  InvalidSubmission: 'INVALID_SUBMISSION',
  UserAlreadyExists: 'USER_ALREADY_EXISTS',
  UserDoesNotExist: 'USER_DOES_NOT_EXIST',
  UnknownError: 'UNKNOWN_ERROR',
  UserCreated: 'USER_CREATED',
  UserLoggedIn: 'USER_LOGGED_IN',
  InvalidPassword: 'INVALID_PASSWORD',
  Verification : 'CONFIRMATION_EMAIL_SENT',
  TokenExisting : "TOKEN_EXISTING",
  ExpiredToken: "EXPIRED_TOKEN",
  EmailVerified: "EMAIL_VERIFIED",
  ResetPassword: "RESET_PSSSWORD"
};

export const getMessageFromCode = (resultCode) => {
    switch (resultCode) {
      case ResultCode.InvalidCredentials:
        return 'Invalid credentials!'
      case ResultCode.InvalidSubmission:
        return 'Invalid submission, please try again!'
      case ResultCode.UserAlreadyExists:
        return 'User already exists, please log in!'
      case ResultCode.UserDoesNotExist:
        return 'Email does not exist...!'
      case ResultCode.UserCreated:
        return 'User created, welcome!'
      case ResultCode.UnknownError:
        return 'Something went wrong, please try again!'
      case ResultCode.InvalidPassword:
        return 'Use atleast one uppercase and one symbol!'
      case ResultCode.Verification:
        return 'Confirmation Email Sent...!'
      case ResultCode.TokenExisting:
        return 'Email already veried'
      case ResultCode.ExpiredToken:
        return 'Token is Expired...!'
      case ResultCode.EmailVerified:
        return 'Your Email is Verified'
      case ResultCode.ResetPassword:
        return 'Reset Email Sent!'
      case ResultCode.UserLoggedIn:
        return 'Logged in!'
    }
  }