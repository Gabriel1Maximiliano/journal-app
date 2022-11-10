import { ImageListItem, ImageList } from '@mui/material';


export const ImageGallery = ({ image }) => {

  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      { image.map((img) => (
        <ImageListItem key={img}>
          <img
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='imgae'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
