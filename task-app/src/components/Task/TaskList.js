import React, { Component } from 'react';
import Navbar from "./NaviBar"
import Grid from '@material-ui/core/Grid';
import './TaskList.css';
import axios from "axios";
import {Form, Button, Container, Badge, Nav} from 'react-bootstrap';
import TagsInput from 'react-tagsinput-special'
import moment from 'moment'

//Material Table
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







class TaskList extends Component {
  constructor(props) {
    super(props)
      this.state = {
        // axios get will be stored in tasks
        tasks: [],
        // form fields
        title: "",
        description: "",
        start_time: moment().format("YYYY-MM-DDTHH:mm"),
        deadline: "",
        tags: [],
        //data is the filtered tasks records
        data: [],
        //use to check what table records need to be rendered. default is Not completed. 
        key: "NotCompleted" 
      }
  }

  componentDidMount() {
    this.getTasks();
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
      this.setState({tasks: response.data});
      this.state.key === "NotCompleted" ? this.onSelectNotCompleted()
        : this.state.key === "Overdue" ? this.onSelectOverdue() : this.onSelectCompleted();
      
    })
  }

  //Table view change
  //Notice that 8 hours is subtracted. This is due to the typing of datetime in material table. The edit field shows a different time due to timezone issue.
  onSelectNotCompleted = () => {
    this.setState({data: this.state.tasks.filter((item) => 
      item.completed !== true && !moment(item.deadline).isBefore(moment().format()))
        .map(({id, title, deadline,start_time, completed_time, tags, completed}) => 
          ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags, completed, start_time: moment(start_time).subtract(8, "hours").utc().format(), completed_time}))});
    this.setState({key: "NotCompleted"})
  }

  onSelectOverdue = () => {
    this.setState({data: this.state.tasks.filter((item) => 
      moment(item.deadline).isBefore(moment().format()) &&   item.completed !== true)
        .map(({id, title, deadline,start_time, completed_time, tags, completed}) =>  
          ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags, completed, start_time: moment(start_time).subtract(8, "hours").utc().format(), completed_time}))});
    this.setState({key: "Overdue"})
  } 

  
  onSelectCompleted = () => {
    this.setState({data: this.state.tasks.filter((item) => 
      item.completed === true)
        .map(({id, title, deadline,start_time, completed_time, tags, completed}) => 
          ({id, title, deadline: moment(deadline).subtract(8, "hours").utc().format(), tags, completed, start_time: moment(start_time).subtract(8, "hours").utc().format(), completed_time}))});
    this.setState({key: "Completed"})
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

  //8 hours is added back to negate the subtraction in time.
  updateTask = (newData, oldData, resolve) => {
    axios.patch(`https://task-api-2021.herokuapp.com/api/v1/tasks/`+newData.id, {task: {title: newData.title, description: newData.description, start_time: moment(newData.start_time).add(8, "hours").format(), 
      deadline: moment(newData.deadline).add(8, "hours").format(),
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
  }



  submitHandler = event => {
    event.preventDefault()
    axios.post('https://task-api-2021.herokuapp.com/api/v1/tasks', {task: {title: this.state.title, description: this.state.description, start_time: this.state.start_time, deadline: this.state.deadline, 
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

  //form change handler
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

  render() {
    //dark theme for Material table
    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark',
      }
    });
    
    return (
      <div className="BGImage">
        <Navbar/>

        <Grid container spacing={0} justify="center" alignItems="center" direction="column">
          <Grid item xs={7}>
            <Form className="InputForm" onSubmit ={this.submitHandler}>
              <Form.Row>
                <Form.Group controlId="formTitle">
                  <Form.Label className="FormLabel">Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" value={this.state.title} onChange={this.titleChangeHandler} />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label className="FormLabel">Description</Form.Label>
                  <Form.Control type="text" placeholder="Description"  value={this.state.description} onChange={this.descriptionChangeHandler}/>
                </Form.Group>

                <Form.Group controlId="formStartDate">
                  <Form.Label className="FormLabel">Start Date</Form.Label>
                  <Form.Control type="datetime-local" placeholder="StartDate"  value={this.state.start_time} onChange={this.start_timeChangeHandler} />
                </Form.Group>

                <Form.Group controlId="formDeadline">
                  <Form.Label className="FormLabel">Deadline</Form.Label>
                  <Form.Control type="datetime-local" placeholder="Deadline"  value={this.state.deadline} onChange={this.deadlineChangeHandler} />
                </Form.Group>

                <Form.Group controlId="formTags" className="TagsInput">
                  <Form.Label className="TagsLabel">Tags</Form.Label>
                  <TagsInput value={this.state.tags} onChange={this.tagsChangeHandler}/>
                </Form.Group>

                <div>
                  <Button className="SubmitButton"variant="primary"  size="sm" type="submit">Submit</Button>
                </div>
              </Form.Row>
            </Form>
          </Grid>

          <Grid item xs={11}>
            <ThemeProvider theme={darkTheme}>
              <MaterialTable
                icons={tableIcons} 
                title="Task List"
  
                columns={[
                  { title: 'Title', field: 'title', type: 'string' },
                  { title: 'Description', field: 'description', type: 'string' },
                  { title: 'Start time', field: 'start_time', type: "datetime", render: rowData =>  moment(String(rowData.start_time)).format('DD/MM/YY hh:mm') },
                  { title: 'Deadline', field: 'deadline', type: "datetime", render: rowData =>  moment(String(rowData.deadline)).format('DD/MM/YY hh:mm') },
                  { title: 'Completed time', field: 'completed_time', type: "datetime", render: rowData => typeof(rowData.completed_time) === "object" ? "" : moment(String(rowData.completed_time)).format('DD/MM/YY hh:mm') },
                  { title: 'Tags', field: 'tags', render:  rowData => typeof(rowData.tags) === "object" ? "" : rowData.tags.split(",").map((tags, index) => <Container key={index}><Badge pill variant="success">{tags}</Badge> </Container>) },
                  { title: 'Completed?', field: 'completed', type: 'boolean' }
                ]}

                //this is the button to render different views onClick.
                components={{
                  Toolbar: props => (
                    <div>
                      <MTableToolbar {...props} />
                      <div style={{padding: '0px 10px'}} >
                        <Nav variant="pills" activeKey={this.state.key}  onSelect={(selectedKey) => selectedKey === "NotCompleted" ? this.onSelectNotCompleted() 
                                                                          : selectedKey === "Completed" ? this.onSelectCompleted() : this.onSelectOverdue()}>
                          <Nav.Item>
                            <Nav.Link eventKey="NotCompleted">Not Completed</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="Overdue">Overdue</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="Completed">Completed</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>
                  ),
                }}

                data = {this.state.data}
                actions={[
                  rowData => ({ 
                    icon: () => <DeleteOutline />,
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => 
                    {
                      window.confirm("You want to delete " + rowData.title);
                      this.deleteTask(rowData.id);
                    },
                  })
                ]}

                options={{
                  actionsColumnIndex: -1,
                  pageSize: 10
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
          </Grid>
        </Grid>
      </div>
  
    )     
  }

}
export default TaskList
