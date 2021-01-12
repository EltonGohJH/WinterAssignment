(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{350:function(e,t,a){},443:function(e,t,a){},508:function(e,t,a){},509:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),c=a(21),o=a.n(c),s=a(69),i=a(70),l=a(75),d=a(74),j=a(37),u=a.n(j),b=a(530),m=a(545),p=a(546),h=a(543),f=a(531),O=(a(349),a(350),a.p+"static/media/moonview.0ceb7687.jpg"),g=a(58),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).emailChangeHandler=function(e){n.setState({email:e.target.value})},n.passwordChangeHandler=function(e){n.setState({password:e.target.value})},n.submitHandler=function(e){e.preventDefault(),u.a.post("https://task-api-2021.herokuapp.com/api/v1/auth/sign_in",{email:n.state.email,password:n.state.password}).then((function(e){localStorage.setItem("access-token",e.headers["access-token"]),localStorage.setItem("client",e.headers.client),localStorage.setItem("expiry",e.headers.expiry),localStorage.setItem("uid",e.headers.uid),localStorage.setItem("token-type",e.headers["token-type"]),n.props.history.push("/home")})).catch((function(e){n.getError(e.response.data.errors),n.setState({gotError:!0})}))},n.getError=function(e){n.setState({error:e})},n.state={email:"",password:"",gotError:!1,error:""},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{backgroundImage:"url(".concat(O,")"),backgroundSize:"cover",height:"100vh"},children:[this.state.gotError&&Object(n.jsx)(b.a,{children:Object(n.jsxs)(m.a,{variant:"danger",children:[Object(n.jsx)(m.a.Heading,{children:"Oh snap! You got an error!"}),this.state.error.map((function(e,t){return Object(n.jsx)("div",{children:e},t)}))]})}),Object(n.jsx)(b.a,{className:"LoginContainer",children:Object(n.jsx)(p.a,{border:"primary",className:"Border",children:Object(n.jsxs)(h.a,{onSubmit:this.submitHandler,children:[Object(n.jsxs)(h.a.Group,{controlId:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email Address "}),Object(n.jsx)(h.a.Control,{type:"email",placeholder:"example@gmail.com",value:this.state.email,onChange:this.emailChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"password",children:[Object(n.jsx)(h.a.Label,{children:"Password"}),Object(n.jsx)(h.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:this.passwordChangeHandler}),Object(n.jsx)(h.a.Text,{className:"text-muted",children:"Please do not use password that you use for your other accounts."})]}),Object(n.jsx)(g.b,{to:"/Signup",children:"Create account"}),Object(n.jsx)(f.a,{variant:"primary",type:"submit",className:"LoginButton",children:"Login"})]})})})]})}}]),a}(r.Component),k=(a(443),a(539)),y=a(396),S=a(165),v=a(34);var C=function(){var e=Object(v.g)();return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(y.a,{bg:"dark",variant:"dark",children:Object(n.jsxs)(S.a,{className:"mr-auto",children:[Object(n.jsx)(S.a.Link,{as:g.b,to:"/home",children:"Home"}),Object(n.jsx)(S.a.Link,{as:g.b,to:"/tasks",children:"All Tasks"}),Object(n.jsx)(S.a.Link,{onClick:function(){u.a.delete("https://task-api-2021.herokuapp.com/api/v1/auth/sign_out",{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(t){e.push("/")}))},children:" Sign out"})]})})})},w=a(278),I=a.n(w),T=a(11),R=a(25),D=a.n(R),_=a(542),N=a(110),L=a.n(N),H=a(123),P=a(535),M=a(221),Y=a.n(M),E=a(230),F=a.n(E),G=a(222),B=a.n(G),W=a(228),A=a.n(W),z=a(141),K=a.n(z),U=a(139),V=a.n(U),J=a(140),Z=a.n(J),q=a(223),Q=a.n(q),X=a(225),$=a.n(X),ee=a(226),te=a.n(ee),ae=a(227),ne=a.n(ae),re=a(231),ce=a.n(re),oe=a(224),se=a.n(oe),ie=a(229),le=a.n(ie),de=a(232),je=a.n(de),ue={Add:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(Y.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(B.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(V.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(Z.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(K.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(Q.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(se.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(n.jsx)($.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(te.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(ne.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(K.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(A.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(V.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(le.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(F.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(ce.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(je.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))}))},be=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSelectWeek=function(){n.setState({data:n.state.tasks.filter((function(e){return D()(e.deadline).isBetween(D()().format(),D()().add(7,"days"),void 0,"[]")&&!0!==e.completed})).map((function(e){var t=e.id,a=e.title,n=e.deadline,r=e.tags,c=e.completed;return{id:t,title:a,deadline:D()(n).subtract(8,"hours").utc().format(),tags:r,completed:c}}))}),n.setState({key:"Week"})},n.onSelectToday=function(){n.setState({data:n.state.tasks.filter((function(e){return String(D()(e.deadline).utc().format("DDMMYY"))===String(D()().utc().format("DDMMYY"))&&!0!==e.completed})).map((function(e){var t=e.id,a=e.title,n=e.deadline,r=e.tags,c=e.completed;return{id:t,title:a,deadline:D()(n).subtract(8,"hours").utc().format(),tags:r,completed:c}}))}),n.setState({key:"Today"})},n.onSelectOverdue=function(){n.setState({data:n.state.tasks.filter((function(e){return D()(e.deadline).isBefore(D()().format())&&!0!==e.completed})).map((function(e){var t=e.id,a=e.title,n=e.deadline,r=e.tags,c=e.completed;return{id:t,title:a,deadline:D()(n).subtract(8,"hours").utc().format(),tags:r,completed:c}}))}),n.setState({key:"Overdue"})},n.deleteTask=function(e){u.a.delete("https://task-api-2021.herokuapp.com/api/v1/tasks/".concat(e),{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(){n.getTasks()}))},n.updateTask=function(e,t,a){[].length<1&&u.a.patch("https://task-api-2021.herokuapp.com/api/v1/tasks/"+e.id,{task:{title:e.title,description:e.description,start_time:e.start_time,deadline:D()(e.deadline).add(8,"hours").format(),completed_time:e.completed_time,completed:e.completed,tags:e.tags}},{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(){n.getTasks(),a()}))},n.state={tasks:[],data:[],key:"Today"},n}return Object(i.a)(a,[{key:"getTasks",value:function(){var e=this;u.a.get("https://task-api-2021.herokuapp.com/api/v1/tasks",{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(t){e.setState({tasks:t.data}),"Today"===e.state.key?e.onSelectToday():"Overdue"===e.state.key?e.onSelectOverdue():e.onSelectWeek()}))}},{key:"componentDidMount",value:function(){this.getTasks()}},{key:"render",value:function(){var e=this,t=Object(H.a)({palette:{type:"dark"}});return Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{theme:t,children:Object(n.jsx)(L.a,{className:"MaterialTable",icons:ue,title:"Task List",columns:[{title:"Title",field:"title",type:"string"},{title:"Deadline",field:"deadline",type:"datetime",render:function(e){return D()(String(e.deadline)).format("DD/MM/YY hh:mm")}},{title:"Tags",field:"tags",render:function(e){return"object"===typeof e.tags?"":e.tags.split(",").map((function(e,t){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(_.a,{pill:!0,variant:"success",children:e})," "]},t)}))}},{title:"Completed?",field:"completed",type:"boolean"}],data:this.state.data,components:{Toolbar:function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(N.MTableToolbar,Object(T.a)({},t)),Object(n.jsx)("div",{style:{padding:"0px 10px"},children:Object(n.jsxs)(S.a,{variant:"pills",activeKey:e.state.key,onSelect:function(t){return"Today"===t?e.onSelectToday():"Week"===t?e.onSelectWeek():e.onSelectOverdue()},children:[Object(n.jsx)(S.a.Item,{children:Object(n.jsx)(S.a.Link,{eventKey:"Today",children:"Today"})}),Object(n.jsx)(S.a.Item,{children:Object(n.jsx)(S.a.Link,{eventKey:"Week",children:"This Week"})}),Object(n.jsx)(S.a.Item,{children:Object(n.jsx)(S.a.Link,{eventKey:"Overdue",children:"Overdue"})})]})})]})}},actions:[function(t){return{icon:function(){return Object(n.jsx)(Z.a,{})},tooltip:"Delete User",onClick:function(t,a){window.confirm("You want to delete "+a.title),e.deleteTask(a.id)}}}],options:{actionsColumnIndex:-1,pageSize:10},editable:{onRowUpdate:function(t,a){return new Promise((function(n){e.updateTask(t,a,n)}))}},localization:{toolbar:{searchPlaceholder:"Search any columns here"}}})})})}}]),a}(r.Component),me=a(397),pe=a(235),he=a(399),fe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).renameFieldsforCalendar=function(){n.setState({tasks:n.state.tasks.map((function(e){var t=e.title,a=e.start_time,n=e.deadline;return{title:t,start:D()(a).utc().format(),end:D()(n).utc().format()}}))})},n.state={tasks:[]},n}return Object(i.a)(a,[{key:"getTasks",value:function(){var e=this;u.a.get("https://task-api-2021.herokuapp.com/api/v1/tasks",{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(t){e.setState({tasks:t.data}),e.renameFieldsforCalendar()}))}},{key:"componentDidMount",value:function(){this.getTasks()}},{key:"render",value:function(){return Object(n.jsx)(me.a,{headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek"},timeZone:"UTC",handleWindowResize:"true",height:"auto",contentHeight:"auto",plugins:[pe.b,he.a],initialView:"dayGridMonth",events:this.state.tasks,eventTimeFormat:{hour:"2-digit",minute:"2-digit"}})}}]),a}(r.Component),Oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"BackgroundImage",children:[Object(n.jsx)("div",{children:Object(n.jsx)(C,{})}),Object(n.jsx)(I.a,{maxWidth:1e3,children:Object(n.jsxs)(k.a,{container:!0,spacing:10,justify:"center",direction:"column","align-items":"center",children:[Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{className:"FullCalendar",children:Object(n.jsx)(fe,{})})}),Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(be,{})})]})}),Object(n.jsx)(I.a,{minWidth:1001,children:Object(n.jsxs)(k.a,{container:!0,spacing:10,justify:"center",direction:"row","align-items":"center",children:[Object(n.jsx)(k.a,{item:!0,xs:5,children:Object(n.jsx)(be,{})}),Object(n.jsx)(k.a,{item:!0,xs:5,children:Object(n.jsx)(b.a,{className:"FullCalendar",children:Object(n.jsx)(fe,{})})})]})})]})}}]),a}(r.Component),ge=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).emailChangeHandler=function(e){n.setState({email:e.target.value})},n.passwordChangeHandler=function(e){n.setState({password:e.target.value})},n.passwordConfirmationChangeHandler=function(e){n.setState({passwordConfirmation:e.target.value})},n.submitHandler=function(e){e.preventDefault(),u.a.post("https://task-api-2021.herokuapp.com/api/v1/auth",{email:n.state.email,password:n.state.password,passwordConfirmation:n.state.passwordConfirmation}).then((function(){n.props.history.push("/")})).catch((function(e){n.getError(e.response.data.errors.full_messages),n.setState({gotError:!0})}))},n.getError=function(e){n.setState({error:e}),console.log(n.state.error)},n.state={email:"",password:"",passwordConfirmation:"",gotError:!1,error:""},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{backgroundImage:"url(".concat(O,")"),backgroundSize:"cover",height:"100vh"},children:[this.state.gotError&&Object(n.jsx)(b.a,{children:Object(n.jsxs)(m.a,{variant:"danger",children:[Object(n.jsx)(m.a.Heading,{children:"Oh snap! You got an error!"}),this.state.error.map((function(e,t){return Object(n.jsx)("div",{children:e},t)}))]})}),Object(n.jsx)(b.a,{className:"LoginContainer",children:Object(n.jsx)(p.a,{border:"primary",className:"Border",children:Object(n.jsxs)(h.a,{onSubmit:this.submitHandler,children:[Object(n.jsxs)(h.a.Group,{controlId:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email Address "}),Object(n.jsx)(h.a.Control,{type:"email",placeholder:"example@gmail.com",value:this.state.email,onChange:this.emailChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"password",children:[Object(n.jsx)(h.a.Label,{children:"Password"}),Object(n.jsx)(h.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:this.passwordChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"passwordConfirmation",children:[Object(n.jsx)(h.a.Label,{children:"Password Confirmation"}),Object(n.jsx)(h.a.Control,{type:"password",placeholder:"Password Confirmation",value:this.state.passwordConfirmation,onChange:this.passwordConfirmationChangeHandler}),Object(n.jsx)(h.a.Text,{className:"text-muted",children:"Please do not use password that you use for your other accounts."})]}),Object(n.jsx)(g.b,{to:"/",children:"Sign in instead"}),Object(n.jsx)(f.a,{variant:"primary",type:"submit",className:"SignUpButton",children:"Sign up"})]})})})]})}}]),a}(r.Component),xe=(a(508),a(394)),ke=a.n(xe),ye={Add:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(Y.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(B.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(V.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(Z.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(K.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(Q.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(se.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(n.jsx)($.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(te.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(ne.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(K.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(A.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(V.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(le.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(F.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(ce.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(n.jsx)(je.a,Object(T.a)(Object(T.a)({},e),{},{ref:t}))}))},Se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSelectNotCompleted=function(){n.setState({data:n.state.tasks.filter((function(e){return!0!==e.completed&&!D()(e.deadline).isBefore(D()().format())})).map((function(e){var t=e.id,a=e.title,n=e.deadline,r=e.start_time,c=e.completed_time,o=e.tags,s=e.completed;return{id:t,title:a,deadline:D()(n).subtract(8,"hours").utc().format(),tags:o,completed:s,start_time:D()(r).subtract(8,"hours").utc().format(),completed_time:c}}))}),n.setState({key:"NotCompleted"})},n.onSelectOverdue=function(){n.setState({data:n.state.tasks.filter((function(e){return D()(e.deadline).isBefore(D()().format())&&!0!==e.completed})).map((function(e){var t=e.id,a=e.title,n=e.deadline,r=e.start_time,c=e.completed_time,o=e.tags,s=e.completed;return{id:t,title:a,deadline:D()(n).subtract(8,"hours").utc().format(),tags:o,completed:s,start_time:D()(r).subtract(8,"hours").utc().format(),completed_time:c}}))}),n.setState({key:"Overdue"})},n.onSelectCompleted=function(){n.setState({data:n.state.tasks.filter((function(e){return!0===e.completed})).map((function(e){var t=e.id,a=e.title,n=e.deadline,r=e.start_time,c=e.completed_time,o=e.tags,s=e.completed;return{id:t,title:a,deadline:D()(n).subtract(8,"hours").utc().format(),tags:o,completed:s,start_time:D()(r).subtract(8,"hours").utc().format(),completed_time:c}}))}),n.setState({key:"Completed"})},n.deleteTask=function(e){u.a.delete("https://task-api-2021.herokuapp.com/api/v1/tasks/".concat(e),{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(){n.getTasks()}))},n.updateTask=function(e,t,a){u.a.patch("https://task-api-2021.herokuapp.com/api/v1/tasks/"+e.id,{task:{title:e.title,description:e.description,start_time:D()(e.start_time).add(8,"hours").format(),deadline:D()(e.deadline).add(8,"hours").format(),completed_time:e.completed_time,completed:e.completed,tags:e.tags}},{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(){n.getTasks(),a()}))},n.submitHandler=function(e){e.preventDefault(),u.a.post("https://task-api-2021.herokuapp.com/api/v1/tasks",{task:{title:n.state.title,description:n.state.description,start_time:n.state.start_time,deadline:n.state.deadline,tags:n.state.tags.join(",")}},{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(){n.getTasks()}))},n.titleChangeHandler=function(e){n.setState({title:e.target.value})},n.descriptionChangeHandler=function(e){n.setState({description:e.target.value})},n.start_timeChangeHandler=function(e){n.setState({start_time:e.target.value})},n.deadlineChangeHandler=function(e){n.setState({deadline:e.target.value})},n.tagsChangeHandler=function(e){n.setState({tags:e})},n.state={tasks:[],title:"",description:"",start_time:D()().format("YYYY-MM-DDTHH:mm"),deadline:"",tags:[],data:[],key:"NotCompleted"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getTasks()}},{key:"getTasks",value:function(){var e=this;u.a.get("https://task-api-2021.herokuapp.com/api/v1/tasks",{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(t){e.setState({tasks:t.data}),"NotCompleted"===e.state.key?e.onSelectNotCompleted():"Overdue"===e.state.key?e.onSelectOverdue():e.onSelectCompleted()}))}},{key:"render",value:function(){var e=this,t=Object(H.a)({palette:{type:"dark"}});return Object(n.jsxs)("div",{className:"BGImage",children:[Object(n.jsx)(C,{}),Object(n.jsxs)(k.a,{container:!0,spacing:0,justify:"center",alignItems:"center",direction:"column",children:[Object(n.jsx)(k.a,{item:!0,xs:7,children:Object(n.jsx)(h.a,{className:"InputForm",onSubmit:this.submitHandler,children:Object(n.jsxs)(h.a.Row,{children:[Object(n.jsxs)(h.a.Group,{controlId:"formTitle",children:[Object(n.jsx)(h.a.Label,{className:"FormLabel",children:"Title"}),Object(n.jsx)(h.a.Control,{type:"text",placeholder:"Title",value:this.state.title,onChange:this.titleChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"formDescription",children:[Object(n.jsx)(h.a.Label,{className:"FormLabel",children:"Description"}),Object(n.jsx)(h.a.Control,{type:"text",placeholder:"Description",value:this.state.description,onChange:this.descriptionChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"formStartDate",children:[Object(n.jsx)(h.a.Label,{className:"FormLabel",children:"Start Date"}),Object(n.jsx)(h.a.Control,{type:"datetime-local",placeholder:"StartDate",value:this.state.start_time,onChange:this.start_timeChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"formDeadline",children:[Object(n.jsx)(h.a.Label,{className:"FormLabel",children:"Deadline"}),Object(n.jsx)(h.a.Control,{type:"datetime-local",placeholder:"Deadline",value:this.state.deadline,onChange:this.deadlineChangeHandler})]}),Object(n.jsxs)(h.a.Group,{controlId:"formTags",className:"TagsInput",children:[Object(n.jsx)(h.a.Label,{className:"TagsLabel",children:"Tags"}),Object(n.jsx)(ke.a,{value:this.state.tags,onChange:this.tagsChangeHandler})]}),Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{className:"SubmitButton",variant:"primary",size:"sm",type:"submit",children:"Submit"})})]})})}),Object(n.jsx)(k.a,{item:!0,xs:11,children:Object(n.jsx)(P.a,{theme:t,children:Object(n.jsx)(L.a,{icons:ye,title:"Task List",columns:[{title:"Title",field:"title",type:"string"},{title:"Description",field:"description",type:"string"},{title:"Start time",field:"start_time",type:"datetime",render:function(e){return D()(String(e.start_time)).format("DD/MM/YY hh:mm")}},{title:"Deadline",field:"deadline",type:"datetime",render:function(e){return D()(String(e.deadline)).format("DD/MM/YY hh:mm")}},{title:"Completed time",field:"completed_time",type:"datetime",render:function(e){return"object"===typeof e.completed_time?"":D()(String(e.completed_time)).format("DD/MM/YY hh:mm")}},{title:"Tags",field:"tags",render:function(e){return"object"===typeof e.tags?"":e.tags.split(",").map((function(e,t){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(_.a,{pill:!0,variant:"success",children:e})," "]},t)}))}},{title:"Completed?",field:"completed",type:"boolean"}],components:{Toolbar:function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(N.MTableToolbar,Object(T.a)({},t)),Object(n.jsx)("div",{style:{padding:"0px 10px"},children:Object(n.jsxs)(S.a,{variant:"pills",activeKey:e.state.key,onSelect:function(t){return"NotCompleted"===t?e.onSelectNotCompleted():"Completed"===t?e.onSelectCompleted():e.onSelectOverdue()},children:[Object(n.jsx)(S.a.Item,{children:Object(n.jsx)(S.a.Link,{eventKey:"NotCompleted",children:"Not Completed"})}),Object(n.jsx)(S.a.Item,{children:Object(n.jsx)(S.a.Link,{eventKey:"Overdue",children:"Overdue"})}),Object(n.jsx)(S.a.Item,{children:Object(n.jsx)(S.a.Link,{eventKey:"Completed",children:"Completed"})})]})})]})}},data:this.state.data,actions:[function(t){return{icon:function(){return Object(n.jsx)(Z.a,{})},tooltip:"Delete User",onClick:function(t,a){window.confirm("You want to delete "+a.title),e.deleteTask(a.id)}}}],options:{actionsColumnIndex:-1,pageSize:10},editable:{onRowUpdate:function(t,a){return new Promise((function(n){e.updateTask(t,a,n)}))}},localization:{toolbar:{searchPlaceholder:"Search any columns here"}}})})})]})]})}}]),a}(r.Component),ve=a(280),Ce=a.n(ve),we=a(395),Ie=a(281),Te=a(398);var Re=function(e){var t=e.component,a=Object(Te.a)(e,["component"]),c=Object(r.useState)(!0),o=Object(Ie.a)(c,2),s=o[0],i=o[1],l=Object(r.useState)(!1),d=Object(Ie.a)(l,2),j=d[0],b=d[1];return Object(r.useEffect)((function(){(function(){var e=Object(we.a)(Ce.a.mark((function e(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://task-api-2021.herokuapp.com/api/v1/auth/validate_token",{headers:{"access-token":localStorage.getItem("access-token"),client:localStorage.getItem("client"),expiry:localStorage.getItem("expiry"),uid:localStorage.getItem("uid"),"token-type":localStorage.getItem("token-type")}}).then((function(e){b(e.data.success),i(!1)})).catch((function(e){b(!1),i(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j,s]),Object(n.jsx)(v.b,Object(T.a)(Object(T.a)({},a),{},{render:function(e){return s?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Loading..."})}):j?Object(n.jsx)(t,{}):Object(n.jsx)(v.a,{to:"/401"})}}))},De=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"404 Not found!"}),Object(n.jsxs)("p",{children:["Please proceed to ",Object(n.jsx)(g.b,{to:"/home",children:"home"})," if you are logged in. To login/sign up click ",Object(n.jsx)(g.b,{to:"/",children:"here"}),". "]})]})},_e=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"401 You are not authorised!"}),Object(n.jsxs)("p",{children:["Please login or sign up ",Object(n.jsx)(g.b,{to:"/",children:"here"}),". "]})]})};var Ne=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(g.a,{children:Object(n.jsxs)(v.d,{children:[Object(n.jsx)(v.b,{exact:!0,path:"/",component:x}),Object(n.jsx)(Re,{exact:!0,path:"/home",component:Oe}),Object(n.jsx)(v.b,{exact:!0,path:"/signup",component:ge}),Object(n.jsx)(Re,{exact:!0,path:"/tasks",component:Se}),Object(n.jsx)(v.b,{exact:!0,path:"/401",component:_e}),Object(n.jsx)(v.b,{exact:!0,path:"/404",component:De}),Object(n.jsx)(v.a,{to:"/404"})]})})})};o.a.render(Object(n.jsx)("div",{children:Object(n.jsx)(Ne,{})}),document.getElementById("root"))}},[[509,1,2]]]);
//# sourceMappingURL=main.07ccf7ec.chunk.js.map