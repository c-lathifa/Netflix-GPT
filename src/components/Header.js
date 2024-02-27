import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
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
  return (
    <div className="flex justify-between ">
      <img
        className="z-40 w-44 ml-4 py-1"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex">
          <div className="w-24 overflow-hidden">
            <img
              className="w-10 mx-4 mt-4 py-1"
              src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
              alt="user-icon"
            />
            <p>{user?.displayName}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white  m-4 p-4 w-32 h-16 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
