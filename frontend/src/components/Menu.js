
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LocalMall from '@material-ui/icons/LocalMall'
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));
const MenuList = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Shopping Mall', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><LocalMall /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>)
}

export default MenuList