(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("div",{className:"radio-button",children:[Object(o.jsx)("input",{type:"radio",id:"radiored",name:"radios",value:"all"}),Object(o.jsx)("label",{htmlFor:"radiored",children:"Red"}),Object(o.jsx)("input",{type:"radio",id:"radiogreen",name:"radios",value:"false"}),Object(o.jsx)("label",{htmlFor:"radiogreen",children:"Green"}),Object(o.jsx)("input",{type:"radio",id:"radioblue",name:"radios",value:"true"}),Object(o.jsx)("label",{htmlFor:"radioblue",children:"Blue"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"#090c56":"white",color:"dark"===e.mode?"white":"black"}})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("converted to uppercase","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("converted to Lowercase","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(""),e.showAlert("Text cleared","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.replace(/\s/g,"");r(t),e.showAlert("Removed spaces","success")},children:"Font Increased Text"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your Text summary Here"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:n.split(" ").length})," Words and ",Object(o.jsx)("strong",{children:n.length})," Characters"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:.008*n.split(" ").length})," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter the text above to preview the text here......"})]})]})}i.defaultProps={title:"Title",aboutText:"Abouttext"};var b=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]})," ",e.alert.msg]})};var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),j=s[0],h=s[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#090c56",u("Dark mode enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("light mode enabled","success"))}}),Object(o.jsx)(b,{alert:j}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:u,heading:"Enter the text below to analyze below",mode:a})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.2eb3f6fb.chunk.js.map