import React, { useState } from 'react'
import { GifGrid,AddCategory } from './components'


export const GifExpertApp = () => {

  const [categories ,setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory)=>{

    if (categories.includes(newCategory) ) return

    setCategories([newCategory,...categories])
  }
  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory
        // setCategories ={setCategories}
        onNewCategory = {(value)=>onAddCategory(value)}
        />
        <button onClick={ onAddCategory }>Agregar</button>

        {categories.map((category) => (
                <GifGrid 
                key={category} 
                category={category}
                />
            ))
        }

    </>
  )
}

export default GifExpertApp
