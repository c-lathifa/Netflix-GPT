import { useRef, useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  const handleSignIn = () => {
    const message = formValidation(
      email.current.value,
      password.current.value,
      name?.current?.value,
    )
    setErrorMessage(message)
    if (message) return
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser
              dispatch(addUser({ uid, email, displayName }))
            })
            .catch((error) => {
              setErrorMessage(error.message)
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorMessage)
        })
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorMessage)
        })
    }
  }
  return (
    <div className="">
      <div className="w-full h-full">
        <Header />
        <div className="fixed -z-10">
          <img
            className="h-screen object-cover md:h-full"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
        </div>
        <div className="w-11/12 md:w-4/12 bg-black/65 p-6 text-white mx-auto absolute top-28 right-0 left-0 md:p-14 rounded-md">
          <p className="text-4xl mb-6 font-bold">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <input
                ref={name}
                type="name"
                placeholder="Username"
                className="p-2 my-2 w-full rounded-sm h-14 bg-black/55 border border-white"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="p-2 my-2 w-full rounded-sm h-14 bg-black/55 border border-white"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 my-2 w-full h-14 rounded-sm bg-black/55 border border-white"
            />
            <p className="text-red-600">{errorMessage}</p>
            <button
              onClick={handleSignIn}
              className="w-full my-3 h-14 bg-red-600 rounded-sm"
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
            <p
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignIn
                ? 'New to Netflix? Sign Up Now!'
                : 'Already registered? Sign In Now.'}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
