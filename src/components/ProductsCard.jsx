import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import { SAVE_LIKE, SAVE_PRODUCT } from '../redux/types';

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  return (
    <li>
      <Card className='w-[350px] h-[400px] ml-[12px] p-[10px] bg-white rounded-lg flex flex-col justify-between'>
        <CardContent>
          <Typography className='text-center text-[14px]'>
            {item.title.length > 14 ? item.title.slice(4) : item.title}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={item.image ? item.image : 'defaultImage.jpg'}
          className='!w-[150px] !m-auto object-cover'
          alt={item.title}
        />
        <div className='flex space-x-2 mx-auto'>
          <Button
            variant='contained'
            onClick={() => dispatch({ type: SAVE_LIKE, payload: item })}
            color='error'
            startIcon={<FavoriteIcon />}
          >
            Like
          </Button>
          <Button 
            variant='contained' 
            color='warning' 
            onClick={() => dispatch({ type: SAVE_PRODUCT, payload: item })} 
            startIcon={<BookmarkIcon />}
          >
            Save
          </Button>
        </div>
      </Card>
    </li>
  );
}
