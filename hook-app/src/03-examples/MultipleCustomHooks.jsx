import React from 'react'

import {useCounter,useFetch} from '../hooks'
import { Quote,LoadingQuote } from './index'


export const MultipleCustomHooks = () => {

    const{counter,increment} = useCounter(1)
    const {data,isLoading,hasError} = useFetch('https://rickandmortyapi.com/api/character/'+counter)
    const {name,species} = !!data && data

  return (
    <>
      <h1>Breakingbad Quotes </h1>
      <hr />

        {
            isLoading 
                ? <LoadingQuote/>
                : <Quote name={name} species={species}
                />
        }

        <button 
        className='btn btn-primary' 
        onClick={ ()=>increment() }
        disabled={isLoading}
        >Siguiente</button>

       
       


    </>
  )
}

