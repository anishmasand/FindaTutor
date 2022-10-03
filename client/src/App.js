import React from 'react';
import {Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import FindaTutor from './images/FindaTutor.png'

const App = () => {
    return(
        // containers center everything
            // Typography for texts but with a good font
                //Grow component provides some basic animation
                    // in grid we can give screen size for different device sizes for example xs = {12} sm ={7}
       <Container maxidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant='h2' align="center">FindaTutor</Typography> 
            <img src={FindaTutor} alt = "FindaTutor" height="60"/>
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