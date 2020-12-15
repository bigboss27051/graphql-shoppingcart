import React from 'react'
import { useRecoilValueLoadable } from "recoil"
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'
import { getProducts } from '../../store/product'
import ProductCard from '../../components/ProductCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const ProducList = () => {
  const classes = useStyles();
  const productState = useRecoilValueLoadable(getProducts)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {productState.state === "loading" ? (
          <Paper className={classes.card}>Loading...</Paper>
        ) : productState.contents.length === 0 ? (
          <Paper className={classes.card}>No product list</Paper>
        ) : (
              productState.contents.data.map((item) => {
                return (
                  <Grid key={item._id} item xs={4}>
                    <ProductCard
                      title={item.name}
                      description={item.detail}
                      quantity={item.quantity}
                      imageUrl={item.imageUrl}
                      price={item.price} />
                  </Grid>
                )
              })
            )}
      </Grid>
    </div>
  )
}

export default ProducList