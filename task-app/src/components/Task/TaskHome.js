import React, { Component } from 'react';
import axios from "axios";
import { Container, Badge} from 'react-bootstrap';
import './TaskHome.css';

import moment from 'moment'
import MaterialTable, {MTableToolbar} from 'material-table'


import 'react-tagsinput/react-tagsinput.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'




import Navbar from "./NaviBar"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Nav from 'react-bootstrap/Nav'
import Grid from '@material-ui/core/Grid';






import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


class Taskindex extends Component {
  constructor(props) {
    super(props)
      this.state = {
          tasks: [],
          title: "",
          description: "",
          start_time: "",
          deadline: "",
          tags: [],
          data: [],
          key: "Today"


      }
  }


getTasks() {
  axios.get('http://localhost:3001/api/v1/tasks', { 
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
    this.onSelectToday()

  })
        
}

submitHandler = event => {
  event.preventDefault()
  axios.post('http://localhost:3001/api/v1/tasks', {task: {title: this.state.title, description: this.state.description, start_time: this.state.start_time, deadline: this.state.deadline, 
    tags: this.state.tags.join(",")} }, 
    { 
      headers: {
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
        'token-type': localStorage.getItem('token-type')
      }
    }
  )
  .then(() => {this.getTasks()})
        
}

titleChangeHandler = event => {
  this.setState({ title: event.target.value }) 
}

descriptionChangeHandler = event => {
  this.setState({ description: event.target.value }) 
}

start_timeChangeHandler = event => {
  this.setState({ start_time: event.target.value }) 
}

deadlineChangeHandler = event => {
  this.setState({ deadline: event.target.value }) 
}

tagsChangeHandler = tags => {
  this.setState({tags})
  
}


componentDidMount() {
  this.onSelectToday()
  this.getTasks()
  
}

onSelectWeek = () => {
  this.setState({data: this.state.tasks.filter((item) => 
    moment(item.deadline).isBetween(moment().format(), moment().add(7, "days"), undefined, '[]') && item.completed !== true)
      .map(({id, title, deadline, tags, completed}) => 
        ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags, completed}))});
  this.setState({key: "Week"})
}

onSelectToday =  () => {
  this.setState({data: this.state.tasks.filter((item) => (String(moment(item.deadline).utc().format("DDMMYY")) === String(moment().utc().format("DDMMYY")) && item.completed !== true))
    .map(({id, title, deadline, tags, completed}) => 
      ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags, completed}))});
      this.setState({key: "Today"});
}

onSelectOverdue = () => {
  this.setState({data: this.state.tasks.filter((item) => 
    moment(item.deadline).isBefore(moment().format()) && item.completed !== true )
      .map(({id, title, deadline, tags, completed}) =>  
        ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags, completed}))});
  this.setState({key: "Overdue"})
} 





deleteTask = id => {
  axios.delete(`http://localhost:3001/api/v1/tasks/${id}`, 
    { 
      headers: {
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
        'token-type': localStorage.getItem('token-type')
      }
    }
  )
  .then( () => 
    {
      this.getTasks();
    }

  )
}


    
updateTask = (newData, oldData, resolve) => {
  // //validation
  let errorList = []
  // if(newData.first_name === ""){
  //   errorList.push("Please enter first name")
  // }
  // if(newData.last_name === ""){
  //   errorList.push("Please enter last name")
  // }
  // if(newData.email === "" || validateEmail(newData.email) === false){
  //   errorList.push("Please enter a valid email")
  // }

  if (errorList.length < 1){
    axios.patch(`http://localhost:3001/api/v1/tasks/`+newData.id, {task: {title: newData.title, description: newData.description, start_time: newData.start_time, deadline: moment(newData.deadline).add(8, "hours").format(),
    completed_time: newData.completed_time, completed: newData.completed, tags: newData.tags}},
      { 
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'client': localStorage.getItem('client'),
          'expiry': localStorage.getItem('expiry'),
          'uid': localStorage.getItem('uid'),
          'token-type': localStorage.getItem('token-type')
        }
      }
    )
    .then(() => {
      this.getTasks();
      resolve()

    })
    // .catch(error => {
    //   setErrorMessages(["Update failed! Server error"])
    //   setIserror(true)
    //   resolve()
      
    // })
  // }else{
  //   setErrorMessages(errorList)
  //   setIserror(true)
  //   resolve()

  }

}






    render() {

      const renamedKeysForCalendar = this.state.tasks.map(({ title, start_time, deadline  }) => ({ title: title, start: moment(start_time).utc().format(), end: moment(deadline).utc().format() }));
      //let data = this.state.tasks.filter((item) => String(moment(item.start_time).utc().format("DDMMYY")) === String(moment().utc().format("DDMMYY"))  ).map(({id, title, deadline, tags}) => ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags}));

      // const changeTasksToToday = () => {data = this.state.tasks.filter((item) => 
      //   String(moment(item.start_time).utc().format("DDMMYY")) === String(moment().utc().format("DDMMYY")))
      //     .map(({id, title, deadline, tags}) => 
      //       ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags}))};

      // 

      const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
      });

      return (

        
        <div className="BackgroundImage">
          <div>
            <Navbar/>
          </div>



    
              <Grid container spacing={10} justify="center" direction="column"  align-items= "center">
              <Grid item xs={5} >
                <Container className="FullCalendar" >
                  <FullCalendar 
                  
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}

                    timeZone= 'UTC'
                    handleWindowResize = "true"
                    height= "auto"  
                    contentHeight= "auto"
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"

                    events={renamedKeysForCalendar}
                    eventTimeFormat= {{                  
                      hour: '2-digit',
                      minute: '2-digit',
                    }}
                  />
                </Container>
              </Grid>
              <Grid item xs={5} >
              <Container className="TodayWeekTable">
                <ThemeProvider theme={darkTheme}>
                <MaterialTable className="MaterialTable"
                  
                  icons={tableIcons}
                  title="Task List"
                  columns={[
                    { title: 'Title', field: 'title', type: 'string' },
                    { title: 'Deadline', field: 'deadline', type: "datetime", render: rowData =>  moment(String(rowData.deadline)).format('DD/MM/YY hh:mm') },
                    { title: 'Tags', field: 'tags', render:  rowData => typeof(rowData.tags) === "object" ? "" : rowData.tags.split(",").map(tags => <Container><Badge pill variant="success">{tags}</Badge> </Container>)},
                    { title: 'Completed?', field: 'completed', type: 'boolean' } 
                  ]}
                  data = {this.state.data}
                  components={{
                    Toolbar: props => (
                      <div>
                        <MTableToolbar {...props} />
                        <div style={{padding: '0px 10px'}} >
                          <Nav variant="pills" activeKey={this.state.key}  onSelect={(selectedKey) => selectedKey === "Today" ? this.onSelectToday() 
                                                                            : selectedKey === "Week" ? this.onSelectWeek() : this.onSelectOverdue()}>
                            <Nav.Item>
                              <Nav.Link eventKey="Today">Today</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="Week">This Week</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="Overdue">Overdue</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </div>
                    ),
                  }}

                  actions={[
                    rowData => ({ 
                      icon: () => <DeleteOutline />,
                      tooltip: 'Delete User',
                      onClick: (event, rowData) => 
                      {
                        window.confirm("You want to delete " + rowData.title);
                        this.deleteTask(rowData.id);
                      }
                    })
                  ]}


                  options={{
                    actionsColumnIndex: -1,
                    pageSize: 10,

                  }}

                  editable={{
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                        this.updateTask(newData, oldData, resolve);
                      })
                  }}

                  localization={{ toolbar: { searchPlaceholder: 'Search any columns here' } }} 
                  
                  
                />
                
                </ThemeProvider>
              </Container>
              </Grid>

              </Grid>
   
        </div>

      )
    }
}

export default Taskindex
