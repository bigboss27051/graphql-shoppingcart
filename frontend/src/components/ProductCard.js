import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import numeral from 'numeral'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  handleOnClick,
  quantity
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" color="primary" component="h6">
                {quantity ?? 0} Quantity
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" color="primary" component="h6">
                {numeral(price ?? '0').format('0,0.00')} Baht
              </Typography>
            </Grid>
          </Grid>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOnClick}>
          Add to Cart
      </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard