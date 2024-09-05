export const ResultCode = {
  InvalidCredentials: 'INVALID_CREDENTIALS',
  InvalidSubmission: 'INVALID_SUBMISSION',
  UserAlreadyExists: 'USER_ALREADY_EXISTS',
  UnknownError: 'UNKNOWN_ERROR',
  UserCreated: 'USER_CREATED',
  UserLoggedIn: 'USER_LOGGED_IN',
  InvalidPassword: 'INVALID_PASSWORD',
  Verification : 'CONFIRMATION_EMAIL_SENT'
};

export const getMessageFromCode = (resultCode) => {
    switch (resultCode) {
      case ResultCode.InvalidCredentials:
        return 'Invalid credentials!'
      case ResultCode.InvalidSubmission:
        return 'Invalid submission, please try again!'
      case ResultCode.UserAlreadyExists:
        return 'User already exists, please log in!'
      case ResultCode.UserCreated:
        return 'User created, welcome!'
      case ResultCode.UnknownError:
        return 'Something went wrong, please try again!'
      case ResultCode.InvalidPassword:
        return 'Use atleast one uppercase and one symbol!'
      case ResultCode.Verification:
        return 'Confirmation Email Sent...!'
      case ResultCode.UserLoggedIn:
        return 'Logged in!'
    }
  }