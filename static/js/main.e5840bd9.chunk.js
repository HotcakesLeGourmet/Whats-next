(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),l=(n(12),n(0));function i(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(l.jsxs)("h2",{className:"TodoCounter ".concat(!!o&&"loading"),children:["Has completado ",n," de ",t," TODOs"]})}n(14);function s(e){return Object(l.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:e.searchValue,onChange:function(t){console.log(t.target.value),e.setSearchValue(t.target.value)},disabled:e.loading})}n(15);function u(e){var t=e.children||e.render;return Object(l.jsxs)("section",{className:"TodoList-container",children:[e.onError.error&&e.onError.display(),e.onLoading.loading&&e.onLoading.display(),!e.onEmpty.loading&&!e.totalTodos&&e.onEmpty.display(),e.searchValue&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchValue),Object(l.jsx)("ul",{children:e.searchedTodos.map(t)})]})}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function b(e,t){var n=e.title,r=e.titleId,c=j(e,["title","titleId"]);return o.createElement("svg",d({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,f)}var p=o.forwardRef(b);n.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function x(e,t){var n=e.title,r=e.titleId,c=m(e,["title","titleId"]);return o.createElement("svg",O({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,h)}var g=o.forwardRef(x),v=(n.p,n(16),{check:function(e){return Object(l.jsx)(p,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(l.jsx)(g,{className:"Icon-svg Icon-svg--delete",fill:e})}});function y(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(l.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:v[t](o)})}function T(e){var t=e.completed,n=e.onComplete;return Object(l.jsx)(y,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function S(e){var t=e.onDelete;return Object(l.jsx)(y,{type:"delete",onClick:t})}n(17);function I(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)(T,{completed:e.completed,onComplete:e.onComplete}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)(S,{onDelete:e.onDelete})]})}function C(){return Object(l.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(18);function E(){return Object(l.jsxs)("div",{className:"LoadingTodo-container",children:[Object(l.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(l.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(l.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function N(){return Object(l.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}var w=n(2);n(19);function L(e){var t=e.addTodo,n=e.setOpenModal,o=r.a.useState(""),c=Object(w.a)(o,2),a=c[0],i=c[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),n(!1)},children:[Object(l.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(l.jsx)("textarea",{value:a,onChange:function(e){i(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){n(!1)},children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(20);function k(e){return Object(l.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(21);function V(e){var t=e.children;return a.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}var D=function(e){var t=e.children,n=e.loading;return Object(l.jsx)("header",{children:r.a.Children.toArray(t).map((function(e){return r.a.cloneElement(e,{loading:n})}))})},z=n(6);function M(){var e=function(e,t){var n=r.a.useState(!0),o=Object(w.a)(n,2),c=o[0],a=o[1],l=r.a.useState(!1),i=Object(w.a)(l,2),s=i[0],u=i[1],d=r.a.useState(!0),j=Object(w.a)(d,2),f=j[0],b=j[1],p=r.a.useState(t),O=Object(w.a)(p,2),m=O[0],h=O[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),h(n),b(!1),a(!0)}catch(s){u(s)}}),1e3)}),[c]),{item:m,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),h(t)}catch(s){u(s)}},loading:f,error:s,sincronizeItem:function(){b(!0),a(!1)}}}("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.loading,c=e.error,a=e.sincronizeItem,l=r.a.useState(""),i=Object(w.a)(l,2),s=i[0],u=i[1],d=r.a.useState(!1),j=Object(w.a)(d,2),f=j[0],b=j[1],p=t.filter((function(e){return!!e.completed})).length,O=t.length,m=[];m=!s.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=s.toLowerCase();return t.includes(n)}));return{loading:o,error:c,totalTodos:O,completedTodos:p,searchValue:s,setSearchValue:u,searchedTodos:m,addTodo:function(e){var o=Object(z.a)(t);o.push({completed:!1,text:e}),n(o)},completeTodo:function(e){var o=t.findIndex((function(t){return t.text===e})),r=Object(z.a)(t);r[o].completed=!r[o].completed,n(r)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.text===e})),r=Object(z.a)(t);r.splice(o,1),n(r)},openModal:f,setOpenModal:b,sincronizeTodos:a}}var P=function(e){return Object(l.jsxs)("p",{children:["No hay resultados de tu busqueda: ",e.searchValue]})};var B,F=(B=function(e){var t=e.show,n=e.toggleShow;return t?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Actualizando cambios..."}),Object(l.jsx)("button",{onClick:n,children:"Actualizar informaci\xf2n"})]}):Object(l.jsx)("p",{children:"Sin cambios "})},function(e){var t=r.a.useState(!1),n=Object(w.a)(t,2),o=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en: TODOS_V1"),c(!0))})),Object(l.jsx)(B,{show:o,toggleShow:function(){e.sincronize(),c(!1)}})});var J=function(){var e=M(),t=e.error,n=e.loading,o=e.searchedTodos,c=e.completeTodo,a=e.deleteTodo,d=e.openModal,j=e.setOpenModal,f=e.totalTodos,b=e.completedTodos,p=e.searchValue,O=e.setSearchValue,m=e.addTodo,h=e.sincronizeTodos;return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsxs)(D,{loading:n,children:[Object(l.jsx)(i,{totalTodos:f,completedTodos:b}),Object(l.jsx)(s,{searchValue:p,setSearchValue:O})]}),Object(l.jsx)(u,{searchValue:p,totalTodos:f,searchedTodos:o,onError:{error:t,diplay:function(){return Object(l.jsx)(C,{})}},onLoading:{loading:n,display:function(){return Object(l.jsx)(E,{})}},onEmpty:{loading:n,display:function(){return Object(l.jsx)(N,{})}},onEmptySearchResults:function(e){return Object(l.jsx)(P,{searchValue:e})},children:function(e){return Object(l.jsx)(I,{text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return a(e.text)}},e.text)}}),!!d&&Object(l.jsx)(V,{children:Object(l.jsx)(L,{addTodo:m,setOpenModal:j})}),Object(l.jsx)(k,{setOpenModal:j}),Object(l.jsx)(F,{sincronize:h})]})};n(22);a.a.render(Object(l.jsx)(J,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e5840bd9.chunk.js.map