export const formValidation = (email, password, name = null) => {
  const emailValidation =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if (!emailValidation) return 'Enter valid Email address'
  if (!passwordValidation) return 'Password is not valid'

  if (name !== null) {
    const usernameValidation = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)
    if (!usernameValidation) return 'Username is not valid'
  }

  return null
}
