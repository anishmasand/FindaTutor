import React,{useEffect} from 'react';
import {Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';
import  {useDispatch} from 'react-redux' ; //without hooks it is very difficult to use redux, usedispatch is hook that allows us to dispatch an action 
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import FindaTutor from './images/FindaTutor.png'
import useStyles from './styles'; 

const App = () => {
    const classes = useStyles();  
    const dispatch = useDispatch();
    //now we have to find a way to dispatch this action and the best way would inside the useEffect
    return(
        // containers center everything
            // Typography for texts but with a good font
                //Grow component provides some basic animation
                    // in grid we can give screen size for different device sizes for example xs = {12} sm ={7}
       <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant='h2' align="center">FindaTutor</Typography> 
            <img className={classes.images} src={FindaTutor} alt = "FindaTutor" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
            <Grid container justify="space-between" alignItems="stretch " spacing={3} >
                <Grid item xs ={12} sm={7}>
                    <Posts />
                </Grid>
                <Grid item xs ={12} sm={4}>
                    <Form />
                </Grid>


            </Grid>
            </Container> 

        </Grow>

       </Container>
    );
}

export default App;