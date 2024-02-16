import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, sEtcoords] = useState({x:0,y:0});

    useEffect(() => {

        const OnMouseMove = ({x,y}) =>{
            // const coords = {x,y}
            // console.log(coords);
            sEtcoords({x,y})
        }
        window.addEventListener('mousemove',OnMouseMove)

        // console.log('Message Mounted');
         return () => {
            window.removeEventListener('mousemove',OnMouseMove)
            // console.log('Message UnMounted');
        }
    },[])

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  )
}

