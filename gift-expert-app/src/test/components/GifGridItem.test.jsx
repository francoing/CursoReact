import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../components"

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/'

    test('debe hacer match con el snapshot ', () => {
        const {container}=render(<GifGridItem title ={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
      
        render(<GifGridItem title ={title} url={url}/>)
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //console.log(screen.getByRole('img').src);
        const {src,alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)

    })

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title ={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()

    })
    
    
  
})
