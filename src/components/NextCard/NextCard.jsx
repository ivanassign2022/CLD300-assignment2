import * as React from 'react';
import {Card, CardActions , CardContent, CardMedia, Button, Typography  } from '@mui/material';



function NextCard({img,imgtitle,cardTitle, cardBody, href,className}){
    return (
        <Card className={className}>
          <CardMedia
            className='next-card-img-title'
            image={img}
            title={imgtitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardBody}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><a href={href}>Learn More</a></Button>
          </CardActions>
        </Card>
      );
}

export default NextCard;