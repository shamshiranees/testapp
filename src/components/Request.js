import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, Avatar, Typography, Button, IconButton } from '@material-ui/core';
import Colors from '../Colors/Colors'
import LocationIcon from '@material-ui/icons/LocationOn'
import FileCopy from '@material-ui/icons/FileCopy'

import Timing from '@material-ui/icons/Timer'
import Hand from '@material-ui/icons/DoneAll'
import More from '@material-ui/icons/MoreHoriz'
import HorizontalStepper from './Stepper';
import * as moment from 'moment';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },personTitle:{
      fontWeight:'bold',
      color:Colors.primary,margin:0,fontSize:16
  },personSecondary:{
      fontWeight:'600',
      margin:0,color:'black'
  },pendingTitle:{
      color:Colors.secondary,fontWeight:'bold'
  },pendingDate:{
      color:'Grey'
  },availableTitle:{
    color:'Grey',fontSize:16
  },timingIcon:{
      color:Colors.primary,backgroundColor:'white'
  },submitButton:{
    //   marginLeft:70,
      color:Colors.primary,
  },submitButtonContained:{
      backgroundColor:Colors.primary,
      color:'white',
      marginLeft:5
  },amount:{
    fontWeight:'600',
    marginLeft:70,color:'black'
}
}));

export default function Request({requestData,accept,status,invoice}) {
  const classes = useStyles();



const acceptRequest = (data)=>{
  accept(data)
}
const generateInvoice = (data)=>{
  console.log("invoice");
  
  invoice(data)
}

const getStatusIndex=()=>{
  const tabArray =["requests","services","payments"]
  console.log(tabArray.indexOf(status));
  
return tabArray.indexOf(status)
}


  return(
<div>
    <Card style={{border:'1px solid #ddd',padding:10 ,margin:10,marginTop:0}}>
        <CardContent>
            <Grid container>
            <Grid item xs={12}>
            <Grid container  spacing={3}>
         
         <Grid  key={4} item>
            <Typography variant="h6" className={classes.pendingTitle}>
           Pending Request
                </Typography>
                <Typography variant="body2" className={classes.pendingDate}>
                {moment(requestData.time).format('LLLL')}
                </Typography>
                </Grid>
                <Grid   item>
                    <div style={{width:500}}>
                    <HorizontalStepper stepperIndex={getStatusIndex()}/>
                    </div>
           
                </Grid>
                </Grid>
        <Grid container  spacing={3}>
         
            <Grid  key={4} item>
        
              
      <CardHeader
        avatar={
          <Avatar src={requestData.userImage} aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
    
      title={<p className={classes.personTitle}>{requestData.username}</p>}
      subheader={<p className={classes.personSecondary}>{requestData.place}</p>}
      />


              {/* <Paper className={classes.paper} /> */}
            </Grid>
            <Grid  key={5} item>
               
            <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.timingIcon}>
           <Hand/>
          </Avatar>
        }
      
        title={<p className={classes.personSecondary}>You two had {requestData.deals} deals Before</p>}
      /> 

            </Grid>
 
        </Grid>

{status != "payments" ? <>

        <h2 className={classes.availableTitle}>{status == "requests" ? "This customer is available at:":"Check in here or scan customer's QR Code to check in when the service is about to start"}</h2>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.timingIcon}>
           <Timing/>
          </Avatar>
        }
      
        title={
        status == "requests"?<>
        
        <p className={classes.personSecondary}>Sunday,December 22nd 2019<span style={{marginLeft:50}}>9:00 am - 2:00 pm</span></p>
      </>:<>
        <p className={classes.personSecondary}>{moment(requestData.selectedTime).format('LLLL')}</p>
      </>
      }
        subheader={
          status == "requests"?<>
         <p className={classes.personSecondary}>Sunday,December 22nd 2019<span style={{marginLeft:50}}>9:00 am - 2:00 pm</span></p>
        </>:<></>
        
      }
      /> 
     <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.timingIcon}>
           <LocationIcon/>
          </Avatar>
        }
      title={<p className={classes.personTitle}>{requestData.address}</p>}
       
      /> 
      
<>{status != 'requests' ? <>
<Button variant="contained" className={classes.submitButtonContained} >Check In</Button>
<Button variant="contained" className={classes.submitButtonContained} onClick={() => { generateInvoice(requestData)}}>Generate Invoice</Button>
</>
:
<>
<Button variant="outlined" className={classes.submitButton}>Reshedhule</Button>
<Button variant="contained" className={classes.submitButtonContained} onClick={() => { acceptRequest(requestData)}}>Accept Request</Button>
</>
}</>
</>:<>

<h2 className={classes.availableTitle}>Service is complete.Please complete payment amount</h2>
<CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.timingIcon}>
           <FileCopy/>
          </Avatar>
        }
      title={<p className={classes.personTitle}>Invoice Item:</p>}
       
      /> 
      <p className={classes.amount}>Session Price :<span style={{marginLeft:70,color:Colors.secondary}}>$80.00</span></p>
        
<Button variant="outlined" className={classes.submitButton}>Start a Chat</Button>
<Button variant="contained" className={classes.submitButtonContained}>Resend Invoice</Button>



</>}
<Button
        // variant="contained"
        color="primary"
        className={classes.submitButton}
        startIcon={<More />}
      >
        more
      </Button>


      </Grid>
        </Grid>
        </CardContent>
    </Card>
    </div>
  )
}