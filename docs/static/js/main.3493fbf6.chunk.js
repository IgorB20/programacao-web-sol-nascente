(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),i=t(10),r=t.n(i),a=(t(24),t(2));function o(){return Object(a.jsx)("header",{className:"w-100 px-5 py-2 d-flex justify-content-center align-items-center",style:{borderBottom:"1px solid #d4d4d4"},children:Object(a.jsx)("div",{className:"w-100",children:Object(a.jsx)("img",{alt:"",src:"http://imoveiscj.com.br/site/images/logo-sol-nascente.png",style:{width:"100px"}})})})}var j=t(7),d=t.n(j),l=t(9),h=t(6),b=t(4);function u(e){var n=e.condominium,t=e.isOpen,c=e.handleClose,s=e.handleFinishSaving;function i(){return(i=Object(l.a)(d.a.mark((function e(){var t,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.zion.lucasbatista.me/condominiums/".concat(n.id),{method:"DELETE",headers:{"Content-type":"application/json"}});case 2:return t=e.sent,e.next=5,t.text();case 5:i=e.sent,console.log(i),c(),s();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(b.h,{isOpen:t,children:[Object(a.jsx)(b.k,{toggle:c,children:"Tem certeza?"}),Object(a.jsx)(b.i,{children:"Tem certeza que deseja excluir este condom\xednio?"}),Object(a.jsxs)(b.j,{children:[Object(a.jsx)(b.a,{color:"link",onClick:c,children:"Cancelar"}),Object(a.jsx)(b.a,{color:"primary",onClick:function(){return i.apply(this,arguments)},children:"Confirmar"})]})]})}var O=t(12),m=t(11);function x(e){var n=e.condominium,t=e.isOpen,s=e.handleClose,i=e.handleFinishSaving,r=Object(c.useState)({name:n.name,cnpj:n.document,street:n.address.street,neighborhood:n.address.neighborhood,number:n.address.number,zipCode:n.address.zipCode,city:n.address.city}),o=Object(h.a)(r,2),j=o[0],u=o[1];function x(e){u(Object(m.a)(Object(m.a)({},j),{},Object(O.a)({},e.target.name,e.target.value)))}function p(){return(p=Object(l.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()){e.next=3;break}return alert("Por favor preencha todos os campos"),e.abrupt("return");case 3:return e.next=5,fetch("https://api.zion.lucasbatista.me/condominiums/".concat(n.id),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({name:j.name,document:j.cnpj,address:{street:j.street,neighborhood:j.neighborhood,number:j.number,zipCode:j.zipCode,city:j.zipCode}})});case 5:return t=e.sent,e.next=8,t.json();case 8:c=e.sent,console.log(c),s(),i();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){for(var e in j)if(console.log(j[e]),""===j[e])return!0;return!1}return Object(a.jsxs)(b.h,{isOpen:t,size:"lg",children:[Object(a.jsx)(b.k,{toggle:s,children:"Editar condom\xednio"}),Object(a.jsx)(b.i,{children:Object(a.jsxs)(b.b,{children:[Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Nome: "}),Object(a.jsx)(b.d,{name:"name",value:j.name,onChange:x})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"CNPJ: "}),Object(a.jsx)(b.d,{name:"cnpj",value:j.cnpj,onChange:x})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Rua: "}),Object(a.jsx)(b.d,{name:"street",value:j.street,onChange:x})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"N\xfamero: "}),Object(a.jsx)(b.d,{name:"number",value:j.number,onChange:x})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Bairro: "}),Object(a.jsx)(b.d,{name:"neighborhood",value:j.neighborhood,onChange:x})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Cidade: "}),Object(a.jsx)(b.d,{name:"city",value:j.city,onChange:x})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"CEP: "}),Object(a.jsx)(b.d,{name:"zipCode",value:j.zipCode,onChange:x})]})]})}),Object(a.jsxs)(b.j,{children:[Object(a.jsx)(b.a,{color:"link",onClick:s,children:"Cancelar"}),Object(a.jsx)(b.a,{color:"primary",onClick:function(){return p.apply(this,arguments)},children:"Salvar"})]})]})}t(29);var p=t(5);function f(e){var n=e.isOpen,t=e.handleClose,s=e.handleFinishSaving,i=Object(c.useState)({name:"",cnpj:"",street:"",neighborhood:"",number:"",zipCode:"",city:""}),r=Object(h.a)(i,2),o=r[0],j=r[1];function u(e){j(Object(m.a)(Object(m.a)({},o),{},Object(O.a)({},e.target.name,e.target.value)))}function x(){return(x=Object(l.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p()){e.next=3;break}return alert("Por favor preencha todos os campos"),e.abrupt("return");case 3:return e.next=5,fetch("https://api.zion.lucasbatista.me/condominiums",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:o.name,document:o.cnpj,address:{street:o.street,neighborhood:o.neighborhood,number:o.number,zipCode:o.zipCode,city:o.zipCode}})});case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,console.log(c),f(),t(),s();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){for(var e in o)if(console.log(o[e]),""===o[e])return!0;return!1}function f(){j({name:"",cnpj:"",street:"",neighborhood:"",number:"",zipCode:"",city:""})}return Object(a.jsxs)(b.h,{isOpen:n,size:"lg",children:[Object(a.jsx)(b.k,{toggle:t,children:"Adicionar condom\xednio"}),Object(a.jsx)(b.i,{children:Object(a.jsxs)(b.b,{children:[Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Nome: "}),Object(a.jsx)(b.d,{name:"name",value:o.name,onChange:u})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"CNPJ: "}),Object(a.jsx)(b.d,{name:"cnpj",value:o.cnpj,onChange:u})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Rua: "}),Object(a.jsx)(b.d,{name:"street",value:o.street,onChange:u})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"N\xfamero: "}),Object(a.jsx)(b.d,{name:"number",value:o.number,onChange:u})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Bairro: "}),Object(a.jsx)(b.d,{name:"neighborhood",value:o.neighborhood,onChange:u})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Cidade: "}),Object(a.jsx)(b.d,{name:"city",value:o.city,onChange:u})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"CEP: "}),Object(a.jsx)(b.d,{name:"zipCode",value:o.zipCode,onChange:u})]})]})}),Object(a.jsxs)(b.j,{children:[Object(a.jsx)(b.a,{color:"link",onClick:t,children:"Cancelar"}),Object(a.jsx)(b.a,{color:"primary",onClick:function(){return x.apply(this,arguments)},children:"Salvar"})]})]})}function g(){var e=Object(c.useState)(!1),n=Object(h.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)([]),r=Object(h.a)(i,2),o=r[0],j=r[1],u=Object(c.useState)(!0),O=Object(h.a)(u,2),m=O[0],x=O[1];return console.log(o),Object(c.useEffect)((function(){function e(){return e=Object(l.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.zion.lucasbatista.me/condominiums");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,j(t),x(!1);case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}m&&function(){e.apply(this,arguments)}()}),[m]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"container mt-4",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"w-100 px-3 py-2 mb-4",placeholder:"Pesquise por um condom\xednio",style:{borderRadius:"9999px",border:"1px solid #d4d4d4"}})}),Object(a.jsx)(b.f,{children:o.map((function(e){return Object(a.jsx)(v,{condominium:e,handleFinishSaving:function(){return x(!0)}})}))}),Object(a.jsx)(b.a,{color:"primary",style:{position:"absolute",bottom:"32px",right:"32px"},onClick:function(){return s(!0)},children:"Adicionar condom\xednio"})]}),Object(a.jsx)(f,{isOpen:t,handleClose:function(){return s(!1)},handleFinishSaving:function(){return x(!0)}})]})}function v(e){var n=e.condominium,t=e.handleFinishSaving,s=Object(c.useState)(!1),i=Object(h.a)(s,2),r=i[0],o=i[1],j=Object(c.useState)(!1),d=Object(h.a)(j,2),l=d[0],O=d[1],m=Object(p.f)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(b.g,{className:"d-flex justify-content-between",onClick:function(){m("/condominio/".concat(n.id))},children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{style:{fontWeight:"bold",color:"#3d3d3d"},children:[n.name," - "]}),Object(a.jsx)("span",{style:{color:"#696969"},children:n.document})]}),Object(a.jsxs)("div",{className:"d-flex gap-2",children:[Object(a.jsx)(b.a,{color:"warning",onClick:function(e){e.stopPropagation(),o(!0)},children:Object(a.jsx)("i",{className:"fas fa-pen"})}),Object(a.jsx)(b.a,{color:"danger",onClick:function(e){e.stopPropagation(),O(!0)},children:Object(a.jsx)("i",{className:"fas fa-trash-alt text-sm"})})]})]}),Object(a.jsx)(x,{isOpen:r,handleClose:function(){return o(!1)},condominium:n,handleFinishSaving:t}),Object(a.jsx)(u,{isOpen:l,handleClose:function(){return O(!1)},condominium:n,handleFinishSaving:t})]})}var C=t(15);function y(e){var n=e.isOpen,t=e.handleClose,s=e.handleFinishSaving,i=e.condominium,r=Object(c.useState)({name:""}),o=Object(h.a)(r,2),j=o[0],u=o[1];function x(){return(x=Object(l.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p()){e.next=3;break}return alert("Por favor preencha todos os campos"),e.abrupt("return");case 3:return e.next=5,fetch("https://api.zion.lucasbatista.me/residents",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:j.name,email:"".concat(j.name.split(" ")[0],"@gmail.com"),condominium:{id:i.id}})});case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,console.log(c),f(),t(),s();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){for(var e in j)if(console.log(j[e]),""===j[e])return!0;return!1}function f(){u({name:""})}return Object(a.jsxs)(b.h,{isOpen:n,size:"lg",children:[Object(a.jsx)(b.k,{toggle:t,children:"Adicionar residente"}),Object(a.jsx)(b.i,{children:Object(a.jsx)(b.b,{children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.e,{children:"Nome: "}),Object(a.jsx)(b.d,{name:"name",value:j.name,onChange:function(e){u(Object(m.a)(Object(m.a)({},j),{},Object(O.a)({},e.target.name,e.target.value)))}})]})})}),Object(a.jsxs)(b.j,{children:[Object(a.jsx)(b.a,{color:"link",onClick:t,children:"Cancelar"}),Object(a.jsx)(b.a,{color:"primary",onClick:function(){return x.apply(this,arguments)},children:"Salvar"})]})]})}function k(){var e=Object(p.g)().id,n=Object(c.useState)(null),t=Object(h.a)(n,2),s=t[0],i=t[1],r=Object(c.useState)(!1),o=Object(h.a)(r,2),j=o[0],u=o[1],O=Object(c.useState)(!0),m=Object(h.a)(O,2),x=m[0],f=m[1];return console.log(s),Object(c.useEffect)((function(){function n(){return n=Object(l.a)(d.a.mark((function n(){var t,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.zion.lucasbatista.me/condominiums/".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:c=n.sent,i(c),f(!1);case 8:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}x&&function(){n.apply(this,arguments)}()}),[e,x]),null===s?"Carregando...":Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"container",children:[Object(a.jsxs)("div",{className:"py-3 d-flex flex-column",children:[Object(a.jsxs)("span",{style:{fontWeight:"bold",color:"#3d3d3d"},children:[s.name," "]}),Object(a.jsx)("span",{style:{color:"#696969"},children:s.document})]}),Object(a.jsx)("h3",{children:"Moradores: "}),Object(a.jsx)(b.f,{children:s.residents.length>0?s.residents.map((function(e){return Object(a.jsx)(S,{resident:e})})):Object(a.jsx)("div",{children:"Nenhum morador cadastrado ainda"})}),Object(a.jsx)(b.a,{color:"primary",style:{position:"absolute",bottom:"32px",right:"32px"},onClick:function(){return u(!0)},children:"Adicionar residente"})]}),Object(a.jsx)(y,{isOpen:j,handleClose:function(){return u(!1)},handleFinishSaving:function(){return f(!0)},condominium:s})]})}function S(e){var n=e.resident;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(b.g,{className:"d-flex justify-content-between",children:[Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("img",{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",className:"",style:{width:"40px",height:"40px",marginRight:"12px",border:"1px solid #d4d4d4",borderRadius:"9999px"}}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)("span",{style:{fontWeight:"bold",color:"#3d3d3d"},children:n.name})})})]}),Object(a.jsxs)("div",{className:"d-flex gap-2",children:[Object(a.jsx)(b.a,{color:"warning",children:Object(a.jsx)("i",{className:"fas fa-pen"})}),Object(a.jsx)(b.a,{color:"danger",children:Object(a.jsx)("i",{className:"fas fa-trash-alt text-sm"})})]})]})})}var N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{path:"/",element:Object(a.jsx)(g,{})}),Object(a.jsx)(p.a,{path:"/condominio/:id",element:Object(a.jsx)(k,{})})]})})]})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),z()}},[[30,1,2]]]);
//# sourceMappingURL=main.3493fbf6.chunk.js.map