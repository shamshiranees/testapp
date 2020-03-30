import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Menu , NotificationsNone,MailOutline,Search} from '@material-ui/icons';
import Colors from '../Colors/Colors'
import { Badge } from '@material-ui/core';
import AppIcon from '../Assests/Images/appIcon.png'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },badge:{
    marginRight:15
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'white',color:Colors.primary}}>
        <Toolbar>


          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Search />
          </IconButton>
          <IconButton edge="start" className={classes.title} color="inherit" aria-label="menu">
          <img style={{height:40,width:40}}  alt="complex" src={AppIcon} />
          
          </IconButton>

          <Badge className={classes.badge} color="secondary" variant="dot">
  <MailOutline />
</Badge>
 <Badge color="secondary" variant="dot">
  <NotificationsNone />
</Badge>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}