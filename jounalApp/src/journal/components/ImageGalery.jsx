import { ImageList, ImageListItem } from "@mui/material";


export const ImageGalery = ({images})=> {
  return (
      <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
        {images && images.map((image) => (
          <ImageListItem key={image}>
            <img
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              alt='imagen de prueba'
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      );
   
    
}

   
   
   