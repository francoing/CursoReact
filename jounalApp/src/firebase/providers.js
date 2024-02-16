import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile,signInWithEmailAndPassword} from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth,googleProvider)
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    const {displayName,email,photoURL,uid} = result.user


    return {
        ok:true,
        displayName,email,photoURL,uid
    }
    
  } catch (error) {
    console.log(error);
    const errorCode =error.code
    const errorMessage = error.errorMessage
    const email = error.customData.email
    const credential = GoogleAuthProvider.credentialFromError(error)
    return{
        ok:false,
        errorMessage
       
    }
  }
}

export const registerUserWithEmailPassword = async({email,password,displayName}) => {
  try {
    console.log({email,password,displayName});
    const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)

    const {uid,photoURL}=resp.user

    await updateProfile(FirebaseAuth.currentUser,{ displayName })
    
    return{
      ok:true,
      uid,
      photoURL,
      email,
      displayName
    }

  } catch (error) {
    
    // console.log(error);

    return{
      ok:false,
      errorMessage:error.message
    }

  }
}

export const loginWithEmailPassword = async({email,password}) => {

  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password)
    const {uid,photoURL,displayName} = resp.user
    return {
      ok:true,
      uid,photoURL,displayName
    }

  } catch (error) {
    return{
      ok:false,
      errorMessage:error.message
    }
  }
  
}

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut()  
}


