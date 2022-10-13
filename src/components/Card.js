import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import imag from './image1.jpg';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Visibility } from '@mui/icons-material';



export default function RecipeReviewCard() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
  
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyYVoiOs_j0L2UTWrQiXXoH-M8XjM2B3zxlo-3vJaSw&s"
        // image = {imag}
      />
      <div className='flex flex-1 justify-end'>
      <CardActions disableSpacing>

        <button><FavoriteIcon/></button>
          &nbsp;&nbsp;&nbsp;
          <button><Visibility /></button>
      </CardActions>
      </div>
    </Card>
    
    
    
    
    
  );
}
