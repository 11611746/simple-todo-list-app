(this["webpackJsonpsimple-todo-list-app"]=this["webpackJsonpsimple-todo-list-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),r=a.n(l),o=a(9),i=a(5),s=a(2),m=a(3),u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{class:"list-group-item d-flex border-0 p-1 text-dark"},c.a.createElement("span",{className:e.display},c.a.createElement(s.a,{icon:m.d,className:"text-danger","data-toggle":"tooltip","data-placement":"right",title:"Remove",onClick:function(){return e.onSelect(e.id)}})),c.a.createElement("span",{className:e.display},c.a.createElement(s.a,{icon:m.a,className:"text-success","data-toggle":"tooltip","data-placement":"right",title:"Completed",onClick:function(){return e.onClicked(e.id,e.propsValue)}})),c.a.createElement("span",{onClick:e.onDoubleClicked,onDoubleClick:e.onShowMenu},e.propsValue)))},d=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{class:"list-group-item d-flex border-0 p-1"},c.a.createElement("del",{className:"text-danger"},e.propsValue),c.a.createElement("span",{className:"ml-3"},c.a.createElement(s.a,{icon:m.d,className:"text-danger","data-toggle":"tooltip","data-placement":"right",title:"Remove",onClick:function(){return e.onSelect(e.id)}}))))},p=function(){var e,t,a=Object(n.useState)(""),l=Object(i.a)(a,2),r=l[0],p=l[1],f=Object(n.useState)([]),E=Object(i.a)(f,2),b=E[0],g=E[1],h=function(e){g((function(t){return t.filter((function(t,a){return a!==e}))}))},y=Object(n.useState)([]),N=Object(i.a)(y,2),k=N[0],x=N[1],v=function(e,t){g((function(t){return t.filter((function(t,a){return a!==e}))})),x((function(e){return[].concat(Object(o.a)(e),[t])}))},C=function(e){x((function(t){return t.filter((function(t,a){return a!==e}))}))},j=Object(n.useState)("mr-3 d-none"),w=Object(i.a)(j,2),O=w[0],S=w[1],V=function(){S("mr-3")},D=function(){S("mr-3 d-none")};return 0===b.length&&0===k.length&&(e="Your Bucket Is Empty"),k.length>0&&(t="Completed List"),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container py-5"},c.a.createElement("h4",{className:"display-4 text-center"},"Todo-App"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7 mx-auto bg-white text-center my-5"},c.a.createElement("div",{className:"card rounded shadow"},c.a.createElement("h5",{class:"card-header"},c.a.createElement(s.a,{icon:m.b})," Create Your List"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row my-4 d-flex justify-content-sm-center"},c.a.createElement("div",{className:"col-sm-9 my-1"},c.a.createElement("input",{type:"text",placeholder:"Add item",class:"form-control form-control card-title shadow-none border-top-0 border-left-0 border-right-0 border-bottom",name:"list",onChange:function(e){p(e.target.value)},value:r})),c.a.createElement("div",{className:"col-sm-1 p-0 my-1"},c.a.createElement("button",{className:"btn btn btn-primary rounded-circle shadow ",onClick:function(){g((function(e){return[].concat(Object(o.a)(e),[r])})),p("")}},c.a.createElement(s.a,{icon:m.c})))),c.a.createElement("ol",{className:"list-group list-unstyled lead text-dark"},b.map((function(e,t){return c.a.createElement(u,{key:t,id:t,propsValue:e,onSelect:h,onClicked:v,onShowMenu:V,onDoubleClicked:D,display:O})})),c.a.createElement("li",{className:"mt-5 mb-3"},t),k.map((function(e,t){return c.a.createElement(d,{key:t,id:t,propsValue:e,onSelect:C})}))),c.a.createElement("p",{class:"card-text py-4"},e)))))))};a(22);r.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3c422f47.chunk.js.map