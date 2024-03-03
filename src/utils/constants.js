export const NETFLIX_LOGO_URL =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const NETFLIX_USER_ICON_URL =
  'https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
export const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  },
}
export const IMG_POSTER_URL = 'https://image.tmdb.org/t/p/w500'

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY
