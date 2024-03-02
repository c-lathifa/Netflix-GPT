import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON_URL } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid, email, displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [])

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }
  return (
    <div className="z-40 w-full absolute flex justify-between bg-gradient-to-b from-black">
      <img
        className=" w-44 ml-4 py-1"
        src={NETFLIX_LOGO_URL}
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex">
          <button
            onClick={handleGptSearch}
            className="bg-black border border-red-500 text-white  m-4 px-6 py-1 rounded-md"
          >
            {showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <div className="">
            <img
              className="w-10 mx-4 mt-4 py-1"
              src={NETFLIX_USER_ICON_URL}
              alt="user-icon"
            />
            <p className="text-white">{user?.displayName}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white  m-4 px-6 py-1 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
