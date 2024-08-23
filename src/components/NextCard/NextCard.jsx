import * as React from 'react';
import {Card, CardActions , CardContent, CardMedia, Button, Typography  } from '@mui/material';
import { motion } from "framer-motion";


function NextCard({img,imgtitle,cardTitle, cardBody, href,className, mScale}){
    return (
        <Card className={className}>
            <motion.div
              className="box"
              whileHover={{ scale: mScale }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <CardMedia
              className='next-card-img-title'
              image={img}
              title={imgtitle}
            />
          </motion.div>
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