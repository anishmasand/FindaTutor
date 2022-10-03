import React from 'react';
import {Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';

import FindaTutor from './images/FindaTutor.png'

const App = () => {
    return(
        // containers center everything
            // Typography for texts but with a good font
       <Container maxidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant='h2' align="center">FindaTutor</Typography> 
            <img src={FindaTutor} alt = "FindaTutor" height="60"/>
        </AppBar>

       </Container>
    );
}

export default App;