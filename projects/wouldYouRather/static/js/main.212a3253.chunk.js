(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/question-mark.9d6b40a4.jpeg"},38:function(e,t,a){e.exports=a(60)},43:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),s=a.n(r),l=(a(43),a(5)),c=a(6),i=a(8),u=a(7),m=a(9),d=a(12),p=a(17),h=a(2),v=a(37),b=a(4),f=a(1),O={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},E={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function j(e){return new Promise(function(t,a){var n=e.author,o=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout(function(){E=Object(f.a)({},E,Object(b.a)({},o.id,o)),O=Object(f.a)({},O,Object(b.a)({},n,Object(f.a)({},O[n],{questions:O[n].questions.concat([o.id])}))),t(o)},1e3)})}function w(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise(function(e,o){setTimeout(function(){O=Object(f.a)({},O,Object(b.a)({},t,Object(f.a)({},O[t],{answers:Object(f.a)({},O[t].answers,Object(b.a)({},a,n))}))),E=Object(f.a)({},E,Object(b.a)({},a,Object(f.a)({},E[a],Object(b.a)({},n,Object(f.a)({},E[a][n],{votes:E[a][n].votes.concat([t])}))))),e()},500)})}(e)}var g="RECEIVE_USERS",y="ADD_ANSWER",N="REMOVE_ANSWER",T="ADD_POLL_TO_USER";var x="RECEIVE_POLLS",q="ADD_VOTE",k="REMOVE_VOTE",U="ADD_POLL";var S=a(15),C=a.n(S);function A(e,t){return function(a,n){var o,r=n().authedUser;return a(Object(S.showLoading)()),(o={optionOneText:e,optionTwoText:t,author:r},j(o)).then(function(e){var t,n;a({type:U,poll:e}),a((t=r,n=e.id,{type:T,uid:t,qid:n}))}).catch(function(e){console.log("There was an error of type: ",e),alert("There was an error adding the poll.  Please try again")}).then(a(Object(S.hideLoading)()))}}function R(){return o.a.createElement("ul",{className:"nav-list"},o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{className:"nav-link",to:"/",exact:!0},"Home")),o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{className:"nav-link",to:"/add"},"New Poll")),o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{className:"nav-link",to:"/leaderboard"},"Leader Board")))}var D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.avatar;return o.a.createElement("div",{className:"authed-user"},o.a.createElement("span",{className:"greeting"},"Hello, ",t),o.a.createElement("div",{className:"authed-image"},o.a.createElement("img",{className:"authed-avatar",src:a,alt:"".concat(t)})))}}]),t}(n.Component);var P=Object(h.connect)(function(e){var t=e.users[e.authedUser];return{name:t.name,avatar:t.avatarURL}})(D),L="SET_AUTHED_USER";function z(e){return{type:L,id:e}}var _=Object(p.f)(Object(h.connect)(null,{setAuthedUser:z})(function(e){return o.a.createElement("div",{className:"logout"},o.a.createElement("button",{className:"logout-button",onClick:function(t){t.preventDefault(),(0,e.setAuthedUser)(null),e.history.push("/login")}},"Logout"))}));function I(){return o.a.createElement("nav",{className:"nav"},o.a.createElement(R,null),o.a.createElement("div",{className:"authed-logout"},o.a.createElement(P,null),o.a.createElement(_,null)))}function V(e){return"/login"!==(e.location.state?e.location.state.from:void 0)?o.a.createElement(p.a,{to:{pathname:"/login",state:{from:"/404"}}}):o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("p",null,"The page you are looking for doesn't exist."))}var W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).toPollDetail=function(e,t){e.preventDefault(),a.props.history.push("/questions/".concat(t))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.poll,n=t.author,r=t.avatar;return o.a.createElement("div",{className:"poll"},o.a.createElement("h4",{className:"author"},n," asks:"),o.a.createElement("div",{className:"image"},o.a.createElement("img",{className:"avatar",src:r,alt:"".concat(n)})),o.a.createElement("div",{className:"question-detail"},o.a.createElement("p",{className:"question"},"Would you rather"),o.a.createElement("span",{className:"options"},"...",a.optionOne.text,"..."),o.a.createElement("button",{className:"view-poll",onClick:function(t){return e.toPollDetail(t,a.id)}},"View Poll")))}}]),t}(n.Component);var Y=Object(p.f)(Object(h.connect)(function(e,t){var a=e.polls,n=e.users,o=(e.authedUser,a[t.id]);return{poll:o,author:n[o.author].name,avatar:n[o.author].avatarURL}})(W)),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showUnanswered:!0},a.showUnanswered=function(e){e.preventDefault(),a.setState({showUnanswered:!0})},a.showAnswered=function(e){e.preventDefault(),a.setState({showUnanswered:!1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.authedUser,n=this.props.pollIds,r=this.state.showUnanswered,s=Object.keys(t[a].answers),l=r?n.filter(function(e){return!s.includes(e)}):n.filter(function(e){return s.includes(e)});return o.a.createElement("div",{className:"poll-list"},o.a.createElement("button",{className:this.state.showUnanswered?"filter-polls-selected":"filter-polls-not-selected",onClick:this.showUnanswered},"Unanswered Polls"),o.a.createElement("button",{className:this.state.showUnanswered?"filter-polls-not-selected":"filter-polls-selected",onClick:this.showAnswered},"Answered Polls"),o.a.createElement("ul",{className:"polls"},o.a.createElement("li",null,0===l.length&&(this.state.showUnanswered?"You have no unanswered polls.":"You have not answered any polls.")),l.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(Y,{id:e}))})))}}]),t}(n.Component);var B=Object(h.connect)(function(e){var t=e.polls,a=e.users,n=e.authedUser;return{pollIds:Object.keys(t).sort(function(e,a){return t[a].timestamp-t[e].timestamp}),users:a,authedUser:n}})(M);function J(){return o.a.createElement("p",null,"The poll you are looking for doesn't exist.")}var F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={option:"one",submitted:!1},a.handleChange=function(e){a.setState({option:e.target.value})},a.handleSumbit=function(e){e.preventDefault();var t,n=a.props,o=n.handleAddAnswer,r=n.poll;t="one"===a.state.option?"optionOne":"optionTwo",o(r.id,t)?a.setState({submitted:!0}):alert("There was a problem submitting the form.")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pollExists,a=e.poll,n=e.author,r=e.avatar,s=e.authedUser,l=e.answers;return t?l.includes(a.id)?o.a.createElement("div",{className:"show-results"},o.a.createElement("h4",{className:"author"},"Asked by ",n),o.a.createElement("div",{className:"detail-image"},o.a.createElement("img",{className:"detail-avatar",src:r,alt:"".concat(n)})),o.a.createElement("div",{className:"detail-question-detail"},o.a.createElement("h3",{className:"header"},"Results:"),o.a.createElement("div",{className:"option"},a.optionOne.votes.includes(s)&&o.a.createElement("div",{className:"vote"},"Your Vote"),o.a.createElement("h4",{className:"option-text"},"Would you rather ",a.optionOne.text,"?"),o.a.createElement("div",{className:"percentage"},"".concat((a.optionOne.votes.length/(a.optionOne.votes.length+a.optionTwo.votes.length)*100).toFixed(0),"%")),o.a.createElement("div",{className:"votes"},a.optionOne.votes.length>0&&"".concat(a.optionOne.votes.length," out of ").concat(a.optionOne.votes.length+a.optionTwo.votes.length," votes"))),o.a.createElement("div",{className:"option"},a.optionTwo.votes.includes(s)&&o.a.createElement("div",{className:"vote"},"Your Vote"),o.a.createElement("h4",{className:"option-text"},"Would you rather ",a.optionTwo.text,"?"),o.a.createElement("div",{className:"percentage"},"".concat((a.optionTwo.votes.length/(a.optionOne.votes.length+a.optionTwo.votes.length)*100).toFixed(0),"%")),o.a.createElement("div",{className:"votes"},a.optionTwo.votes.length>0&&"".concat(a.optionTwo.votes.length," out of ").concat(a.optionOne.votes.length+a.optionTwo.votes.length," votes"))))):o.a.createElement("div",{className:"answer-poll"},o.a.createElement("h4",{className:"author"},n," asks:"),o.a.createElement("div",{className:"detail-image"},o.a.createElement("img",{className:"detail-avatar",src:r,alt:"".concat(n)})),o.a.createElement("div",{className:"detail-question-detail"},o.a.createElement("h3",null,"Would You Rather ..."),o.a.createElement("form",{className:"question-form",onSubmit:this.handleSumbit},o.a.createElement("div",{className:"radios"},o.a.createElement("label",null,o.a.createElement("input",{className:"radio",type:"radio",checked:"one"===this.state.option,onChange:this.handleChange,value:"one",id:"optionOne"}),a.optionOne.text)),o.a.createElement("div",{className:"radios"},o.a.createElement("label",null,o.a.createElement("input",{className:"radio",type:"radio",checked:"two"===this.state.option,onChange:this.handleChange,value:"two",id:"optionTwo"}),a.optionTwo.text)),o.a.createElement("button",{className:"submit-poll"},"Submit")))):o.a.createElement(J,null)}}]),t}(n.Component);var H=Object(h.connect)(function(e,t){var a=e.polls,n=e.users,o=e.authedUser,r=t.match.params.question_id,s=Object.keys(a).includes(r),l=s?a[r]:null;return{pollExists:s,poll:l,author:s?n[l.author].name:null,avatar:s?n[l.author].avatarURL:null,authedUser:o,answers:Object.keys(n[o].answers)}},{handleAddAnswer:function(e,t){return function(a,n){var o=n().authedUser;return a(function(e,t,a){return{type:y,uid:e,qid:t,answer:a}}(o,e,t)),a(function(e,t,a){return{type:q,uid:e,qid:t,answer:a}}(o,e,t)),w({authedUser:o,qid:e,answer:t}).catch(function(n){console.log("There was an error of type: ",n),alert("There was an error answering the poll.  Please try again"),a(function(e,t,a){return{type:N,uid:e,qid:t,answer:a}}(o,e,t)),a(function(e,t,a){return{type:k,uid:e,qid:t,answer:a}}(o,e,t))})}}})(F),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={optionOneText:"",optionTwoText:""},a.handleChange=function(e){"one"===e.target.id?a.setState({optionOneText:e.target.value}):a.setState({optionTwoText:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch,n=a.state.optionOneText,o=a.state.optionTwoText;""!==n&&""!==o?(t(A(n,o)),a.setState({optionOneText:"",optionTwoText:""}),a.props.history.push("/")):alert("Please fill in both options.")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.optionOneText,t=this.state.optionTwoText;return o.a.createElement("div",{className:"create-poll"},o.a.createElement("h3",{className:"create"},"Create New Poll"),o.a.createElement("hr",{className:"divider"}),o.a.createElement("p",{className:"complete"},"Complete the poll:"),o.a.createElement("p",{className:"complete"},"Would you rather..."),o.a.createElement("form",{className:"enter-poll",onSubmit:this.handleSubmit},o.a.createElement("input",{id:"one",type:"text",className:"input",placeholder:"Enter option 1 text here.",value:e,onChange:this.handleChange}),o.a.createElement("span",{className:"space"},"OR"),o.a.createElement("input",{id:"two",type:"text",className:"input",placeholder:"Enter option 2 text here.",value:t,onChange:this.handleChange}),o.a.createElement("button",{className:"submit-new-poll"},"Submit")))}}]),t}(n.Component),G=Object(h.connect)()($);var K=Object(h.connect)(function(e,t){var a=e.users[t.id];return{avatar:a.avatarURL,name:a.name,answers:Object.keys(a.answers).length,questions:a.questions.length}})(function(e){var t=e.avatar,a=e.name,n=e.answers,r=e.questions;return o.a.createElement("div",{className:"user"},o.a.createElement("div",{className:"user-detail-image"},o.a.createElement("img",{className:"user-avatar",src:t,alt:"".concat(a)})),o.a.createElement("div",{className:"user-question-detail"},o.a.createElement("h3",{className:"user-name"},a),o.a.createElement("p",{className:"answered-created"},"Answered Polls",o.a.createElement("span",{className:"right"},n)),o.a.createElement("p",{className:"answered-created"},"Created Polls",o.a.createElement("span",{className:"right"},r))),o.a.createElement("div",{className:"score"},o.a.createElement("h4",{className:"score-header"},"Score"),o.a.createElement("p",null,r+n)))}),Q=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.ids;return o.a.createElement("div",{className:"leader-board"},o.a.createElement("ul",{className:"user-list"},e.map(function(e){return o.a.createElement("li",{key:e,className:"user-list-item"},o.a.createElement(K,{id:e}))})))}}]),t}(n.Component);var X=Object(h.connect)(function(e){var t=e.users;return{ids:Object.entries(t).map(function(e){return{id:e[0],sum:Object.keys(e[1].answers).length+e[1].questions.length}}).sort(function(e,t){return t.sum-e.sum}).map(function(e){return e.id})}})(Q),Z=a(34),ee=a.n(Z),te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={authedId:null,redirectToReferrer:!1},a.handleChange=function(e){a.setState({authedId:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch,n=a.state.authedId;null===n||"select"===n?alert("Please select a user."):(t(z(n)),a.setState({redirectToReferrer:!0}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,t=this.state.redirectToReferrer,a=this.props.usersArray;return!0===t?o.a.createElement(p.a,{to:{pathname:e.pathname?e.pathname:"/404",state:{from:"/login"}}}):o.a.createElement("div",{className:"login-container"},o.a.createElement("h4",{className:"welcome"},"Welcome to the Would You Rather App!"),o.a.createElement("p",{className:"login-message"},"Please log in to continue."),o.a.createElement("div",null,o.a.createElement("img",{className:"logo",src:ee.a,alt:"question mark logos"})),o.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},o.a.createElement("select",{className:"dropdown",onChange:this.handleChange,defaultValue:"select"},o.a.createElement("option",{value:"select"},"Select User"),a.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})),o.a.createElement("button",{className:"login-button"},"Login")))}}]),t}(n.Component);var ae=Object(h.connect)(function(e){var t=e.users,a=e.polls;return{pollIds:Object.keys(a),usersArray:Object.values(t)}})(te),ne=a(35),oe=function(e){var t=e.component,a=Object(ne.a)(e,["component"]);return o.a.createElement(p.b,Object.assign({},a,{render:function(e){return null!==a.authedUser?o.a.createElement(t,e):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},re=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.handleInitialData)()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.authedUser;return o.a.createElement(d.a,{basename:"/projects/wouldYouRather"},o.a.createElement(n.Fragment,null,o.a.createElement(C.a,null),o.a.createElement("div",{className:"app"},!0===t?null:o.a.createElement("div",{className:"container"},null===a?null:o.a.createElement(I,null),o.a.createElement(p.d,null,o.a.createElement(oe,{authedUser:a,path:"/",exact:!0,component:B}),o.a.createElement(oe,{authedUser:a,path:"/questions/:question_id",component:H}),o.a.createElement(oe,{authedUser:a,path:"/add",component:G}),o.a.createElement(oe,{authedUser:a,path:"/leaderboard",component:X}),o.a.createElement(p.b,{path:"/login",component:ae}),o.a.createElement(p.b,{component:V}))))))}}]),t}(n.Component);var se=Object(h.connect)(function(e){var t=e.users,a=e.authedUser;return{loading:0===Object.keys(t).length,authedUser:a}},{handleInitialData:function(){return function(e){return e(Object(S.showLoading)()),Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(f.a)({},O))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(f.a)({},E))},1e3)})]).then(function(e){var t=Object(v.a)(e,2);return{users:t[0],polls:t[1]}}).then(function(t){var a=t.users,n=t.polls;e(function(e){return{type:g,users:e}}(a)),e(function(e){return{type:x,polls:e}}(n)),e(Object(S.hideLoading)())})}}})(re),le=a(16);var ce=Object(le.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return t.id;default:return e}},polls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(f.a)({},e,t.polls);case q:return Object(f.a)({},e,Object(b.a)({},t.qid,"optionOne"===t.answer?Object(f.a)({},e[t.qid],{optionOne:Object(f.a)({},e[t.qid].optionOne,{votes:e[t.qid].optionOne.votes.concat([t.uid])})}):Object(f.a)({},e[t.qid],{optionTwo:Object(f.a)({},e[t.qid].optionTwo,{votes:e[t.qid].optionTwo.votes.concat([t.uid])})})));case k:return Object(f.a)({},e,Object(b.a)({},t.qid,"optionOne"===t.answer?Object(f.a)({},e[t.qid],{optionOne:Object(f.a)({},e[t.qid].optionOne,{votes:e[t.qid].optionOne.votes.filter(function(e){return e!==t.uid})})}):Object(f.a)({},e[t.qid],{optionTwo:Object(f.a)({},e[t.qid].optionTwo,{votes:e[t.qid].optionTwo.votes.filter(function(e){return e!==t.uid})})})));case U:return Object(f.a)({},e,Object(b.a)({},t.poll.id,t.poll));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(f.a)({},e,t.users);case y:return Object(f.a)({},e,Object(b.a)({},t.uid,Object(f.a)({},e[t.uid],{answers:Object(f.a)({},e[t.uid].answers,Object(b.a)({},t.qid,t.answer))})));case N:return Object(f.a)({},e,Object(b.a)({},t.uid,Object(f.a)({},e[t.uid],{answers:Object.keys(e[t.uid].answers).reduce(function(a,n){return n!==t.qid?Object(f.a)({},a,Object(b.a)({},n,e[t.uid].answers[n])):a},{})})));case T:return Object(f.a)({},e,Object(b.a)({},t.uid,Object(f.a)({},e[t.uid],{questions:e[t.uid].questions.concat([t.qid])})));default:return e}},loadingBar:S.loadingBarReducer}),ie=a(36),ue=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state is: ",e.getState()),console.groupEnd(),n}}},me=Object(le.a)(ie.a,ue),de=Object(le.d)(ce,me);s.a.render(o.a.createElement(h.Provider,{store:de},o.a.createElement(se,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.212a3253.chunk.js.map