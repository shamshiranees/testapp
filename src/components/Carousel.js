import React from 'react';
import Carousel from '../components/react-material-ui-carousel'
import {Paper, Button, makeStyles, Grid, Typography} from '@material-ui/core'
import Yoga from '../Assests/Images/yoga.jpg'
import Colors from '../Colors/Colors'


const useStyles =  makeStyles(theme => ({

    paper: {
        height: '300px',
        width: '100%',objectFit: 'cover'
      },grid:{
          padding:10 
      },root:{
          margin:10,
          border:'1px solid #ddd'
      },title:{
          fontSize:20,
          fontWeight:'800',
          color:Colors.primary
      },textGrid:{
          paddingLeft:'30px !important',
          textAlign:'left'
      },priceTag:{
          color:Colors.secondary,marginTop:-38,float:'right',width:'50%',fontSize:18
      },subtitle:{
          fontWeight:'bold',
      }

}))

export default function CarouselView(props)
{

  const onTap=(val)=>{
props.onItemChange(props.data[val].id)
  }

    return (
        <Carousel onClick={onTap} autoPlay={false} animation={"slide"}>
            {
                props.data.map( item => (
                    <Item item={item} />
                ))
            }
        </Carousel>
    )
}

 function Item(props){
    const classes = useStyles()

    const getImagePath=(name)=>{
        console.log(name);
        
        return '../Assests/Images/'+name
    }
    const item = props.item
    return (
        <Paper className={classes.root}>
             <Grid item xs={12}  >
        <Grid container  spacing={3} className={classes.grid}>
          
            <Grid item xs={4}>
              {/* <Paper className={classes.paper} > */}
              <img className={classes.paper} alt="complex" src={item.image} />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={8} className={classes.textGrid}>
            <Typography variant="h6" className={classes.title}>
            {item.name}
                </Typography>
                <Typography variant="h6" className={classes.subtitle} >
                {item.type}
                </Typography>
             
                
               <p>{item.description}
                   </p> 
                   <p style={{color:Colors.lightGrey}}>for one session
                      
                   </p>
                   <h4 className={classes.priceTag}>{item.cost}</h4>
               
              {/* <Paper className={classes.paper} /> */}
            </Grid>
        
        </Grid>
      </Grid>
            
        </Paper>
    )
}
