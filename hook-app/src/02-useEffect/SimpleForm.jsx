import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {


    const[formState,setFormState] = useState({
        username:'strider2',
        email:'franco@mail.com'
    })

    const {username,email } = formState

    const onInputChange = ({target})=>{
        const{name,value} = target;
        setFormState({
          ...formState,
          [name]:value
        })

      }

      useEffect(()=>{
        // console.log('Formstate 1');
      },[])

      useEffect(()=>{
        // console.log('Formstate 2');
      },[formState])

      useEffect(()=>{
        // console.log('email cambiado');
      },[email])

      useEffect(() => {
        
         return () => {
        
        }
      },[])

  return (
    <div>
      <h1>Formulario simple</h1>
      <hr />
      <input 
        type="text" 
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      
      />
      <input 
        type="email" 
        className='form-control mt-2'
        placeholder='email@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {
        (username === 'strider2')&& <Message/>
      }
     
    </div>
  )
}


