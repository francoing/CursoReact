import { useRef } from "react"

export function FocusScreen() {

    const inputRef = useRef();
   

    const onClick = ()=>{
        // document.querySelector('input').select()
        console.log(inputRef);
        inputRef.current.select()
    }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef} 
      />
      

      <button
      className="btn btn-primary mt-2"
      onClick={ onClick }
      > Set Focus </button>
    </>
  )
}


