import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment'

import { Container, Badge, Nav} from 'react-bootstrap';

import MaterialTable, {MTableToolbar} from 'material-table'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



//Below are all icons for material table
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


class TaskTable extends Component {
  constructor(props) {
    super(props)
      this.state = {
          tasks: [],
          data: [],
          key: "Today"


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
    this.state.key === "Today" ? this.onSelectToday()
    : this.state.key === "Overdue" ? this.onSelectOverdue() : this.onSelectWeek();

  })
        
}



componentDidMount() {
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
  axios.delete(`https://task-api-2021.herokuapp.com/api/v1/tasks/${id}`, 
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
    axios.patch(`https://task-api-2021.herokuapp.com/api/v1/tasks/`+newData.id, {task: {title: newData.title, description: newData.description, start_time: newData.start_time, deadline: moment(newData.deadline).add(8, "hours").format(),
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
      const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
      });

      return (
        <div>
          <ThemeProvider theme={darkTheme}>
            <MaterialTable className="MaterialTable"
              icons={tableIcons}

              title="Task List"

              columns={[
                { title: 'Title', field: 'title', type: 'string' },
                { title: 'Deadline', field: 'deadline', type: "datetime", render: rowData =>  moment(String(rowData.deadline)).format('DD/MM/YY hh:mm') },
                { title: 'Tags', field: 'tags', render:  rowData => typeof(rowData.tags) === "object" ? "" : rowData.tags.split(",").map((tags, index) => <Container key={index}><Badge pill variant="success">{tags}</Badge> </Container>)},
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




        </div>

      )
    }
}

export default TaskTable
