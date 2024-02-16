import { singInWithGoogle ,registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase} from "../../firebase/providers"
import { loadNotes } from "../../helpers/loadNotes"
import { clearNotesLogout, setNotes } from "../journal/journalSlice"
import { chekingCredentials, login, logout } from "./"

export const checkingAuthentication = (email,password) => {
  return async(dispatch)=>{
    dispatch(chekingCredentials())
  }
}

export const startGoogleSingIn = () => {
    return async (dispatch)=>{
        dispatch(chekingCredentials())
        const result = await singInWithGoogle()

        if (!result.ok) {
          return dispatch(logout(result.errorMessage))
        }

        dispatch(login(result))

        console.log({result});

    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) => {
  return async(dispatch) =>{
    dispatch(chekingCredentials())
    const {ok,uid,photoURL,errorMessage}= await registerUserWithEmailPassword({email,password,displayName})
    if(!ok) return dispatch(logout({errorMessage}))

    dispatch(login({uid,displayName,email,photoURL}))
  }
}

export const startLoginWithEmailPassword = ({email,password}) => {

  return async(dispatch)=>{

    dispatch(chekingCredentials())

    const result = await loginWithEmailPassword({email,password})
    if (!result.ok) {
      return dispatch(logout(result))
    }
    dispatch(login(result))

  }
}

export const  startLogout = () => {
  return async (dispatch)=>{
    await logoutFirebase()
    dispatch(clearNotesLogout())
    dispatch(logout())
  }
}

export const startLoadingNotes = () => {

  return async(dispatch, getState)=>{

    const {uid} = getState().auth

    if (!uid) {
      throw new Error('El UID del usuario no existe')
    }
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
  
}

