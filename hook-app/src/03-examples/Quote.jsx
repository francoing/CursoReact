
export const Quote = ({name,species}) => {
  return (
    <blockquote className='blockquote text-end'>
        <p className='mb-1'>{species}</p>
        <footer className='blockquote-footer'>{name}</footer>
    </blockquote>
  )
}

