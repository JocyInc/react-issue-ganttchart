(this["webpackJsonpreact-issue-ganttchart"]=this["webpackJsonpreact-issue-ganttchart"]||[]).push([[0],{103:function(e,t,n){},124:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(11),o=n.n(u),i=n(54),s=n(12),l=(n(90),n(32)),c=n(73),d=n(4),f=n(165),g=n(72),p=n.n(g),m=n(167),h=n(129),v=n(166),b=n(70),_=n(168),k={multiselectContainer:{width:"30%",display:"inline-block",verticalAlign:"middle",padding:"4px",alignItems:"flex-end"},chips:{background:"light blue",fontSize:"15px"},searchBox:{border:"none"}},w=Object(d.a)((function(e){return{root:{"& > *":{fontSize:"13px",marginRight:"4px"}}}}))((function(e){var t=e.classes;return r.a.createElement("form",{noValidate:!0},r.a.createElement(m.a,{className:t.root,required:!0,placeholder:"https://github.com/lamact/react-issue-ganttchart",label:"Git Repository URL",style:{width:"25%",verticalAlign:"middle"},onChange:function(t){e.onGitURLChange(t.target.value)},inputRef:e.register,name:"git_url"}),r.a.createElement(m.a,{className:t.root,type:"password",placeholder:"Access Token",label:"Access Token",style:{width:"10%",verticalAlign:"middle"},onChange:function(t){e.onTokenChange(t.target.value)},inputRef:e.register,name:"token"}),r.a.createElement(b.Multiselect,{className:t.root,options:e.labels,selectedValues:e.selected_labels,onSelect:function(t){e.onSelectedLabelChange(t)},onRemove:function(t){e.onSelectedLabelChange(t)},displayValue:"name",style:k,placeholder:"filter by labels",hidePlaceholder:"false",emptyRecordMsg:"No Labels",closeIcon:"cancel"}),r.a.createElement(_.a,{className:t.root,size:"small",options:e.member_list,getOptionLabel:function(e){return e.name},value:e.selected_assignee,onChange:function(t,n){e.onSelectedAssigneeChange(n)},style:{width:"15%",verticalAlign:"middle",display:"inline-block",marginRight:"15px"},renderInput:function(e){return r.a.createElement(m.a,Object.assign({},e,{className:t.root,label:"Assignee",variant:"standard"}))}}),r.a.createElement(v.a,{size:"small",style:{height:"34px"}},r.a.createElement(h.a,{onClick:function(t){e.onZoomChange("Weeks")}},"Weeks"),r.a.createElement(h.a,{onClick:function(t){e.onZoomChange("Days")}},"Days")),r.a.createElement(f.a,{color:"primary",style:{verticalAlign:"middle"}},r.a.createElement(p.a,{onClick:function(t){e.onUpdateClick()}})))})),y=(n(103),w),j=n(21),C=(n(104),n(7)),A=n.n(C),D=n(13),O=n(51),S=n.n(O),E=function(e){return null!==e&&e!==[]&&void 0!==e&&""!==e||!!Array.isArray(e)&&e.length>0},L=function(e){return E(e)&&"id"in e&&"name"in e},x=function(e,t){var n=new Date(e);return S()(n).add(t-1,"d").toDate().toLocaleDateString("ja-JP")},I=function(e,t,n){return null!=e&&null!=t?e.toLocaleDateString("ja-JP"):new Date(n).toLocaleDateString("ja-JP")},R=function(e,t,n){return null!=e&&null!=t?new Date(t).toISOString().split("T")[0]:new Date(n).toISOString().split("T")[0]},z=function(e,t){return null!=e&&null!=t?function(e,t){var n=S()(e);return S()(t).diff(n,"days")+1}(e,t):1},P=function(e,t){var n=[];n.push(e),t(n={data:n,links:[]})},B=function(e){return e.length>1&&/\/$/.test(e)&&(e=e.slice(0,-1)),e},N=function(e){return e.length>1&&/ +$/.test(e)&&(e=e.slice(0,-1)),e},U=function(e){var t=e;return t=B(t),t=N(t),t=B(t),t=N(t)},J=function(e){if(null==e)return null;var t=e.match(/start_date: \d{4}\/\d{1,2}\/\d{1,2}/);return null==t?null:(t=t[0].match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],new Date(t))},T=function(e,t){return null!=J(e)?e.replace(/start_date: \d{4}\/\d{1,2}\/\d{1,2}/,"start_date: "+t):"start_date: "+t+"  \n"+e},F=function(e){if(null==e)return null;var t=e.match(/due_date: \d{4}\/\d{1,2}\/\d{1,2}/);return null==t?null:(t=t[0].match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],new Date(t))},Z=function(e){if(null==e)return null;var t=e.match(/progress: \d{1}\.\d{1}/);return null==t?.1:(t=t[0].match(/\d{1}\.\d{1}/)[0],parseFloat(t))},M=function(e,t){var n=Z(e),a=Math.round(10*t)/10;return"1"===t&&(t="1.0"),null!=n?e.replace(/progress: \d{1}\.\d{1}/,"progress: "+a):"progress: "+a+"  \n"+e},V=function(e){var t="";return E(e)&&e.map((function(e){return L(e)&&(t+=e.id+":"+e.name+",",console.log(t)),null})),t},G=function(e){var t=[];if(E(e)){var n=e.split(",");n.forEach((function(e,a,r){if(a<n.length-1){var u=e.split(":"),o={id:u[0],name:u[1]};t.push(o)}}))}else t=[{id:0,name:""}];return t},W="https://api.github.com/repos/",$=function(e){return/github\.com/.test(e)},H=function(e){var t=e.split("/");if(t.length>=5)return t[3]},Q=function(e){var t=e.split("/");if(t.length>=5)return t[4]},Y=function(e,t){var n=U(e);return W+H(n)+"/"+Q(n)+"/issues/"+t},q=function(e,t,n){var a="";E(t)&&(a+="?labels=",t.map((function(e){return L(e)&&(a+=e.name+","),null}))),L(n)&&""!==n.name&&(a+="&assignee="+n.name);var r=U(e);return W+H(r)+"/"+Q(r)+"/issues"+a},K=function(e){var t=U(e);return W+H(t)+"/"+Q(t)+"/labels"},X=function(e){var t=U(e);return W+H(t)+"/"+Q(t)+"/collaborators"},ee=function(e,t){var n=U(e);return"https://github.com/"+H(n)+"/"+Q(n)+"/issues/"+t},te=function(e){return/gitlab\.com/.test(e)},ne=function(e){if($)return null;var t=e.split("/");return t.length>=3?t[2]:null},ae=function(e){var t=null,n=ne(e);return null!==n&&(t="https://"+n+"/"),te(e)&&(t="https://gitlab.com/"),t},re=function(e){return ae(e)},ue=function(e){return ae(e)+"api/v4/projects/"},oe=function(e){var t=e.split("/");if(t.length>=5)return t[3]},ie=function(e){var t=e.split("/");if(t.length>=5)return t[4]},se=function(e){var t="";return E(e)&&"Tokens that have not yet been entered"!==e?t+="?access_token="+e+"&":t+="?",t},le=function(e,t,n,a){var r=se(t);E(n)&&(r+="labels=",n.map((function(e){return L(e)&&(r+=e.name+","),null}))),L(a)&&""!==a.name&&(r+="&assignee_id="+a.id);var u=U(e);return ue(e)+oe(u)+"%2F"+ie(u)+"/issues"+r},ce=function(e,t){var n=se(t),a=U(e);return ue(e)+oe(a)+"%2F"+ie(a)+"/labels"+n},de=function(e,t){var n=se(t),a=U(e);return ue(e)+oe(a)+"%2F"+ie(a)+"/members/all"+n},fe=n(20),ge=n.n(fe),pe=function(e){return null!==e.assignee?e.assignee.login:""},me=function(e,t){var n=J(e),a=F(e);return{id:t.number,text:t.title,start_date:I(n,a,t.created_at),due_date:R(n,a,t.created_at),duration:z(n,a),progress:Z(e),assignee:pe(t)}},he=function(e,t){var n=new Date(t.start_date).toLocaleDateString("ja-JP"),a=x(n,t.duration);return e=function(e,t){return null!=F(e)?e.replace(/due_date: \d{4}\/\d{1,2}\/\d{1,2}/,"due_date: "+t):"due_date: "+t+"  \n"+e}(e=M(e,t.progress),a),e=T(e,n)},ve=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a,r){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge.a.get(q(n,a,r)).then((function(e){e.data.map((function(e){return ge.a.get(Y(n,e.number)).then((function(n){var a=me(n.data.body,e);P(a,t)})),null}))}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),be=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge.a.get(K(n)).then((function(e){var n=[];e.data.map((function(e){return n.push({id:e.id,name:e.name}),null})),t(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),_e=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(a)&&"Tokens that have not yet been entered"!==a?ge.a.get(X(n),{headers:{Authorization:"token ".concat(a)},data:{}}).then((function(e){var n=[];e.data.map((function(e){return n.push({id:e.id,name:e.login}),null})),t(n)})):console.warn("token is not valid!");case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),ke=function(e,t){var n="";n+="start_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%0D%0A",n+="due_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%0D%0A",n+="progress:%200.1%0D%0A",window.open(function(e){var t=U(e);return"https://github.com/"+H(t)+"/"+Q(t)+"/issues/new?assignees=&labels=&title=&body="}(t)+n,"_blank")},we=function(e){return null!==e.assignee?e.assignee.name:""},ye=function(e){var t=J(e.description),n=new Date(e.due_date).toLocaleDateString("ja-JP");return{id:e.iid,text:e.title,start_date:I(t,n,e.created_at),due_date:R(t,n,e.created_at),duration:z(t,n),progress:Z(e.description),assignee:we(e)}},je=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a,r,u){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge.a.get(le(n,a,r,u)).then((function(e){e.data.map((function(e){var n=ye(e);return P(n,t),null}))}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r,u){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge.a.get(ce(n,a)).then((function(e){var n=[];e.data.map((function(e){return n.push(e),null})),t(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ge.a.get(de(n,a)).then((function(e){var n=[];e.data.map((function(e){return n.push({id:e.id,name:e.name}),null})),t(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),De=function(e,t,n,a){ge.a.get(function(e,t,n){var a=se(t),r=U(e);return ue(e)+oe(r)+"%2F"+ie(r)+"/issues"+a}(a,t)).then((function(r){r.data.map((function(r){if(r.iid===e.id){var u=function(e,t){var n=new Date(t.start_date).toLocaleDateString("ja-JP");return e=M(e,t.progress),e=T(e,n),encodeURIComponent(e)}(r.description,e),o=new Date(e.start_date).toLocaleDateString("ja-JP"),i=x(o,e.duration),s=function(e,t,n){var a=se(t),r=U(e);return ue(e)+oe(r)+"%2F"+ie(r)+"/issues/"+n+a}(a,t,e.id)+"&description="+u+"&due_date="+i;ge.a.put(s).then((function(e){console.log("success update issue")})).catch((function(e){alert("failed update GitLab issue. check your token."),je(n,a)}))}return null}))}))},Oe=function(e,t){window.open(function(e,t){var n=U(e);return re(e)+oe(n)+"/"+ie(n)+"/-/issues/"+t}(t,e),"_blank")},Se=function(e,t){var n="";n+="start_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%20%20%0D%0A",n+="progress:%200.1%0D%0A",window.open(function(e){var t=U(e);return re(e)+oe(t)+"/"+ie(t)+"/issues/new?issue[description]="}(t)+n,"_blank")},Ee=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a,r,u){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(n)){e.next=2;break}return e.abrupt("return",null);case 2:$(n)&&ve(t,n,r,u),(te(n)||null!==ne(n))&&je(t,n,a,r,u);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r,u){return e.apply(this,arguments)}}(),Le=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(n)){e.next=2;break}return e.abrupt("return",null);case 2:$(n)&&be(t,n,a),(te(n)||null!==ne(n))&&Ce(t,n,a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),xe=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(n)){e.next=2;break}return e.abrupt("return",null);case 2:$(n)&&_e(t,n,a),(te(n)||null!==ne(n))&&Ae(t,n,a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Ie=function(e,t,n,a){if(!E(a))return null;$(a)&&function(e,t,n,a){var r=Y(a,e.id);ge.a.get(r).then((function(u){ge.a.post(r,{body:he(u.data.body,e)},{headers:{Authorization:"token ".concat(t)}}).then((function(e){console.log("success update issue")})).catch((function(e){alert("failed update GitHub issue. check your token."),ve(n,a)}))}))}(e,t,n,a),(te(a)||null!==ne(a))&&De(e,t,n,a)},Re=function(e,t){if(!E(t))return null;$(t)&&function(e,t){console.log(ee(t,e)),window.open(ee(t,e),"_blank")}(e,t),(te(t)||null!==ne(t))&&Oe(e,t)},ze={levels:[{name:"Days",scale_height:60,min_column_width:70,scales:[{unit:"week",step:1,format:"%M, %d week"},{unit:"day",step:1,format:"%d %M",css:function(e){var t=new Date,n=j.gantt.date.date_to_str("%y"),a=j.gantt.date.date_to_str("%m"),r=j.gantt.date.date_to_str("%d"),u=j.gantt.date.date_to_str("%D");return n(t)==n(e)&&a(t)==a(e)&&r(t)==r(e)?"todayline":"Sun"==u(e)||"Sat"==u(e)?"updColor":""}}]},{name:"Weeks",scale_height:60,min_column_width:70,scales:[{unit:"month",step:1,format:"%Y %F"},{unit:"week",step:1,format:"%M, %d week"}]}]},Pe=function(e){e.config.xml_date="%Y/%m/%d %H:%i",e.config.order_branch=!0,e.config.order_branch_free=!0,e.config.keep_grid_width=!0,e.config.grid_resize=!0,e.config.sort=!0,e.config.columns=[{name:"id",label:"No.",align:"left",tree:!0,width:"*"},{name:"start_date",label:"Start ",align:"center",width:"90"},{name:"due_date",label:"due ",align:"center",width:"90"},{name:"assignee",label:"Assignee",align:"center",width:"160"},{name:"add",label:""}],e.ext.zoom.init(ze)},Be=function(e,t){e.attachEvent("onTaskDblClick",(function(e,n){t.openIssueAtBrowser(e)})),e.attachEvent("onTaskCreated",(function(e,n){t.openNewIssueAtBrowser(e)})),e.attachEvent("onAfterTaskUpdate",(function(n,a){t.updateIssueByAPI(a,e)}))},Ne=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){Pe(j.gantt),Be(j.gantt,e),j.gantt.init(t.current),j.gantt.ext.zoom.setLevel(e.zoom)}),[]),Object(a.useEffect)((function(){j.gantt.ext.zoom.setLevel(e.zoom)}),[e.zoom]),Object(a.useEffect)((function(){j.gantt.clearAll(),Ee((function(e){j.gantt.parse(e),j.gantt.sort("start_date",!1)}),e.git_url,e.token,e.selected_labels,e.selected_assignee)}),[e.git_url,e.token,e.selected_labels,e.selected_assignee,e.update]),r.a.createElement("div",{ref:t,style:{width:"100%",height:"100%"}})},Ue=(n(124),Ne),Je=n(41),Te=n(29),Fe={currentZoom:"Days",update:0,git_url:"",token:"Tokens that have not yet been entered",labels:[],selected_labels:[],member_list:[],selected_assignee:{id:0,name:""}},Ze=function(e,t){switch(t.type){case"zoomChange":return Object(Te.a)({},e,{currentZoom:t.value});case"gitURLChange":return Object(Te.a)({},e,{git_url:We(t.value.props,t.value.git_url,e.selected_labels)});case"tokenChange":return Object(Te.a)({},e,{token:$e(t.value)});case"labelChange":return Object(Te.a)({},e,{labels:t.value});case"selectedLabelsChange":return Object(Te.a)({},e,{selected_labels:He(t.value.props,e.git_url,t.value.selected_labels,e.selected_assignee)});case"memberListChange":return Object(Te.a)({},e,{member_list:t.value});case"selectedAssigneeChange":return Object(Te.a)({},e,{selected_assignee:Qe(t.value.props,e.git_url,e.selected_labels,t.value.selected_assignee)});case"updateClick":return Object(Te.a)({},e,{update:e.update+1});case"openIssueAtBrowser":return Me(e,t);case"openNewIssueAtBrowser":return Ve(e,t);case"updateIssueByAPI":return Ge(e,t);case"setStateFromURLQueryString":return qe(e,t.value.props,t.value.setValue);default:return e}},Me=function(e,t){return Re(t.value,e.git_url),e},Ve=function(e,t){return function(e,t){if(!E(t))return null;$(t)&&ke(0,t),(te(t)||null!==ne(t))&&Se(0,t)}(t.value,e.git_url),e},Ge=function(e,t){return Ie(t.value.gantt_task,e.token,t.value.gantt,e.git_url),e},We=function(e,t,n,a){return Ye(e,t,n,a),t},$e=function(e){return Object(Je.bake_cookie)("git_token",e),e},He=function(e,t,n,a){return Ye(e,t,n,a),n},Qe=function(e,t,n,a){return Ye(e,t,n,a),a},Ye=function(e,t,n,a){var r=new URLSearchParams(e.location.search);return r.set("giturl",t),r.set("labels",V(n)),r.set("assignee",V([a])),e.history.push({search:r.toString()}),null},qe=function(e,t,n){var a=new URLSearchParams(t.location.search);e.git_url=a.get("giturl");var r=G(a.get("labels"));""!==r[0].name&&(e.selected_labels=r);var u=G(a.get("assignee"));return E(u)&&(e.selected_assignee=u[0]),n("git_url",e.git_url),e},Ke=Object(s.e)((function(e){var t=Object(a.useReducer)(Ze,Fe),n=Object(l.a)(t,2),u=n[0],o=n[1],i=Object(c.a)({git_url:"",token:""}),s=i.register,d=i.setValue;return Object(a.useEffect)((function(){d("token",Object(Je.read_cookie)("git_token")),o({type:"tokenChange",value:Object(Je.read_cookie)("git_token")})}),[]),Object(a.useEffect)((function(){o({type:"setStateFromURLQueryString",value:{props:e,setValue:d}})}),[e.location]),Object(a.useEffect)((function(){Le((function(e){o({type:"labelChange",value:e})}),u.git_url,u.token),xe((function(e){o({type:"memberListChange",value:e})}),u.git_url,u.token)}),[u.git_url,u.token,u.selected_assignee]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"zoom-bar"},r.a.createElement(y,{zoom:u.currentZoom,onZoomChange:function(e){return o({type:"zoomChange",value:e})},onGitURLChange:function(t){return o({type:"gitURLChange",value:{props:e,git_url:t}})},token:u.token,onTokenChange:function(e){return o({type:"tokenChange",value:e})},onUpdateClick:function(){return o({type:"updateClick"})},labels:u.labels,selected_labels:u.selected_labels,onSelectedLabelChange:function(t){return o({type:"selectedLabelsChange",value:{props:e,selected_labels:t}})},member_list:u.member_list,selected_assignee:u.selected_assignee,onSelectedAssigneeChange:function(t){return o({type:"selectedAssigneeChange",value:{props:e,selected_assignee:t}})},register:s})),r.a.createElement("div",{className:"gantt-container"},r.a.createElement(Ue,{zoom:u.currentZoom,git_url:u.git_url,token:u.token,selected_labels:u.selected_labels,selected_assignee:u.selected_assignee,update:u.update,openIssueAtBrowser:function(e){return o({type:"openIssueAtBrowser",value:e})},openNewIssueAtBrowser:function(e){return o({type:"openNewIssueAtBrowser",value:e})},updateIssueByAPI:function(e,t){return o({type:"updateIssueByAPI",value:{gantt_task:e,gantt:t}})}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null,r.a.createElement(s.a,{render:function(e){return r.a.createElement(Ke,null)}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,n){e.exports=n(128)},90:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.7978d2a0.chunk.js.map