import React, { Component } from 'react';
import './TaskHome.css';

import { Container} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';


import Navbar from "./NaviBar"

import MediaQuery from 'react-responsive'

import TaskTable from "./TaskHomeTable"
import TaskCalendar from "./TaskHomeCalendar"


//Mediaquery is use to generate two different views. When it gets bellow 1000, it will render column view else row view.
class Taskindex extends Component {
    render() {
      return (
        <div className="BackgroundImage">

          <div>
            <Navbar/>
          </div>

          <MediaQuery maxWidth={1000}> 
            <Grid container spacing={10} justify="center" direction="column"  align-items= "center">
              <Grid item xs={12} >
                <Container  className="FullCalendar" >
                  <TaskCalendar/>
                </Container>
              </Grid>
              <Grid item xs={12} >
                  <TaskTable/>
              </Grid>
            </Grid>
          </MediaQuery> 

          <MediaQuery minWidth={1001}>
            <Grid container spacing={10} justify="center" direction="row"  align-items= "center">
              <Grid item xs={5} >
                  <TaskTable/>
              </Grid>
              <Grid item xs={5} >
                <Container  className="FullCalendar" >
                  <TaskCalendar/>
                </Container>
              </Grid>
            </Grid>
          </MediaQuery>
        </div>

      )
    }
}

export default Taskindex
