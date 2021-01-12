import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

class TaskCalendar extends Component {
  constructor(props) {
    super(props)
      this.state = {
          tasks: []
      }
  }


  getTasks() {
    axios.get('https://task-api-2021.herokuapp.com/api/v1/tasks', { 
      headers: {
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
        'token-type': localStorage.getItem('token-type')
      }}
    )
    .then(response => {
      this.setState({tasks: response.data})
      this.renameFieldsforCalendar()
    })
  }

  componentDidMount() {
    this.getTasks()
  }

  //fields need to be renamed for Fullcalendar
  renameFieldsforCalendar = () => {
    this.setState({tasks: this.state.tasks.map(({ title, start_time, deadline  }) => 
      ({ title: title, start: moment(start_time).utc().format(), end: moment(deadline).utc().format() }))})
  }









  render() {
    return (
      <FullCalendar 
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        timeZone= 'UTC'
        handleWindowResize = "true"
        height= "auto"  
        contentHeight= "auto"
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={this.state.tasks}
        eventTimeFormat= {{                  
          hour: '2-digit',
          minute: '2-digit',
        }}
      />
    )
  }
}
  

export default TaskCalendar
