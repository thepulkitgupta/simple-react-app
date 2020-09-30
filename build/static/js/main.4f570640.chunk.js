(this["webpackJsonpsimple-react-app"]=this["webpackJsonpsimple-react-app"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=a(2),s=a(3),o=a(1),u=a(5),m=a(4),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:0},n.incHandle=n.incHandle.bind(Object(o.a)(n)),n.decHandle=n.decHandle.bind(Object(o.a)(n)),n.clrHandle=n.clrHandle.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"incHandle",value:function(e){this.setState((function(e){return{value:e.value+1}}))}},{key:"decHandle",value:function(e){this.setState((function(e){return{value:e.value-1}}))}},{key:"clrHandle",value:function(e){this.setState({value:0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"bg-info d-flex flex-column align-items-center",style:{height:"100vh",fontSize:"15vmin"}},l.a.createElement("div",{className:"mt-5",style:{height:"50vh"}},this.state.value),l.a.createElement("div",{style:{height:"50vh"},className:"d-flex justify-content-center align-items-center"},l.a.createElement("button",{onClick:this.incHandle,style:{fontSize:"8vmin"},className:"btn btn-outline-dark"},"+"),l.a.createElement("button",{onClick:this.clrHandle,style:{fontSize:"8vmin"},className:"mx-5 btn btn-outline-dark"},"CLR"),l.a.createElement("button",{onClick:this.decHandle,style:{fontSize:"8vmin"},className:"btn btn-outline-dark px-3"},"-")))}}]),a}(l.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center align-items-center bg-danger",style:{height:"100vh"}},l.a.createElement("div",{style:{fontSize:"15vmin"}},this.state.date.toLocaleTimeString()))}}]),a}(l.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isToggleOn:!0,isColor:"success"},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.color="success",n}return Object(s.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isToggleOn:!e.isToggleOn,isColor:e.isToggleOn?"danger":"success"}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center bg-warning",style:{height:"100vh"}},l.a.createElement("button",{className:"btn btn-"+this.state.isColor,onClick:this.handleClick},l.a.createElement("span",{style:{fontSize:"15vmin"}},this.state.isToggleOn?"ON":"OFF")))}}]),a}(l.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={fcolor:"black",red:!1,rstate:!1,blue:!1,bstate:!1,yellow:!1,ystate:!1},n.handleBlue=n.handleBlue.bind(Object(o.a)(n)),n.handleRed=n.handleRed.bind(Object(o.a)(n)),n.handleYellow=n.handleYellow.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleRed",value:function(){this.setState((function(e){return{red:!e.red,rstate:!e.rstate}}))}},{key:"handleBlue",value:function(){this.setState((function(e){return{blue:!e.blue,bstate:!e.bstate}}))}},{key:"handleYellow",value:function(){this.setState((function(e){return{yellow:!e.yellow,ystate:!e.ystate}}))}},{key:"render",value:function(){var e,t,a=this.state.red,n=this.state.blue,c=this.state.yellow;return a&&n&&c?(e="white",t="White"):a&&n?(e="violet",t="Purple"):a&&c?(e="orange",t="Orange"):c&&n?(e="green",t="Green"):a?(e="red",t="Red"):n?(e="blue",t="Blue"):c?(e="yellow",t="Yellow"):(e="black",t="Black"),l.a.createElement("div",{className:"d-flex justify-content-between",style:{height:"100vh"}},l.a.createElement("div",{className:"d-flex flex-column justify-content-around align-items-center bg-dark w-50"},l.a.createElement("div",null,l.a.createElement("button",{style:{fontSize:"8vmin"},className:this.state.rstate?"btn btn-danger":"btn btn-light",onClick:this.handleRed},"Red")),l.a.createElement("div",null,l.a.createElement("button",{style:{fontSize:"8vmin"},className:this.state.bstate?" btn btn-primary ":"btn btn-light",onClick:this.handleBlue},"Blue")),l.a.createElement("div",null,l.a.createElement("button",{style:{fontSize:"8vmin"},className:this.state.ystate?"btn btn-warning":" btn btn-light ",onClick:this.handleYellow},"Yellow"))),l.a.createElement("div",{className:"w-50",style:{backgroundColor:e}},l.a.createElement("div",{className:"d-flex justify-content-center align-items-center text-white",style:{height:"100%"}},l.a.createElement("span",{style:{fontSize:"10vmin",color:"Black"!==t?"black":"white"}},t))))}}]),a}(l.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={mul:10},n.incHandle=n.incHandle.bind(Object(o.a)(n)),n.decHandle=n.decHandle.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"incHandle",value:function(){this.setState((function(e){return{mul:e.mul+1}}))}},{key:"decHandle",value:function(){this.setState((function(e){return{mul:e.mul-1}}))}},{key:"render",value:function(){var e=this.state.mul;return l.a.createElement("div",{style:{height:"100vh"},className:"d-flex flex-column justify-content-center bg-success align-items-center"},l.a.createElement("div",{style:{fontSize:"2em"},className:"m-2 text-center"},[1,2,3,4,5,6,7,8,9,10].map((function(t){return l.a.createElement("div",{key:e+""+t},e," x ",t," =  ",t*e)}))),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{style:{fontSize:"2em"},onClick:this.incHandle,className:"btn btn-dark mx-1 "},"+"),l.a.createElement("button",{style:{fontSize:"2em"},onClick:this.decHandle,className:"btn btn-dark mx-1 "},"-")))}}]),a}(l.a.Component),p=a(6),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={submitFlag:!1,name:"",cont:"Asia",fttd:""},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n.onlyForm=n.onlyForm.bind(Object(o.a)(n)),n.finalOutput=n.finalOutput.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState((function(e){return{submitFlag:!e.submitFlag}}))}},{key:"onlyForm",value:function(){return l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center bg-info",style:{height:"100vh",fontSize:"1.5em"}},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Name")),l.a.createElement("input",{className:"form-control form-control-lg",type:"text",name:"name",autoComplete:"off",placeholder:"Name",value:this.state.name,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Continent")),l.a.createElement("select",{className:"form-control form-control-lg",name:"cont",value:this.state.cont,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"Asia"},"Asia"),l.a.createElement("option",{value:"Africa"},"Africa"),l.a.createElement("option",{value:"North America"},"North America"),l.a.createElement("option",{value:"South America"},"South America"),l.a.createElement("option",{value:"Antartica"},"Antartica"),l.a.createElement("option",{value:"Europe"},"Europe"),l.a.createElement("option",{value:"Australia"},"Australia"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("b",null,"Favorite Thing To Do")),l.a.createElement("textarea",{wrap:"hard",className:"form-control form-control-lg",rows:"4",placeholder:"drink beer or watch movies",value:this.state.fttd,name:"fttd",onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-success mt-2"},"Submit"))))}},{key:"finalOutput",value:function(){return l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center bg-info p-1",style:{height:"100vh",fontSize:"1.5em"}},l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item list-group-item-success"},"Hello, ",l.a.createElement("b",null,this.state.name)," "),l.a.createElement("li",{className:"list-group-item list-group-item-danger"},"You live in ",l.a.createElement("b",null,this.state.cont," ")),l.a.createElement("li",{className:"list-group-item list-group-item-primary",style:{wordBreak:"break-word"}},"You like to ",l.a.createElement("b",null,this.state.fttd)," ")),l.a.createElement("button",{className:"btn btn-danger btn-lg mt-2",onClick:this.handleSubmit},"Refill"))}},{key:"render",value:function(){return this.state.submitFlag?l.a.createElement(this.finalOutput,null):l.a.createElement(this.onlyForm,null)}}]),a}(l.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.temp,t=this.props.scale,a="c"===t?"celsius":"k"===t?"kelvin":"fahrenheit";return l.a.createElement("div",{style:{fontFamily:"Times New Roman"}},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{className:"form-control form-control-lg input-lg p-1",type:"text",placeholder:a,value:e,onChange:this.handleChange,autoFocus:"c"===t}),l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"\xb0"+t.toUpperCase()))))}}]),a}(l.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={temp:"",scale:"c"},n.handleCelsiusChange=n.handleCelsiusChange.bind(Object(o.a)(n)),n.handleFahrenheitChange=n.handleFahrenheitChange.bind(Object(o.a)(n)),n.handleKelvinChange=n.handleKelvinChange.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleCelsiusChange",value:function(e){this.setState({scale:"c",temp:e})}},{key:"handleFahrenheitChange",value:function(e){this.setState({scale:"f",temp:e})}},{key:"handleKelvinChange",value:function(e){this.setState({scale:"k",temp:e})}},{key:"convertTemp",value:function(e,t,a){if(""===e)return"";if(t===a)return e;if(!1===isNaN(e)){var n,l=parseFloat(e);return"c"===t&&"f"===a?n=9*l/5+32:"c"===t&&"k"===a?n=273+l:"f"===t&&"c"===a?n=5*(l-32)/9:"f"===t&&"k"===a?n=5*(l-32)/9+273:"k"===t&&"c"===a?n=l-273:"k"===t&&"f"===a&&(n=9*(l-273)/5+32),n.toPrecision(5)}return"Wrong"}},{key:"render",value:function(){var e=!1,t="",a=this.state.temp,n=this.state.scale,c=this.convertTemp(a,n,"c"),r=this.convertTemp(a,n,"f"),i=this.convertTemp(a,n,"k");return i<0?(e=!0,t="Beyond Absolute Zero!","c"===n?i=r="":c="k"===n?r="":i=""):"Wrong"!==i&&"Wrong"!==c&&"Wrong"!==r||(e=!0,t="Wrong Temperature!","c"===n?i=r="":c="k"===n?r="":i=""),l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center bg-warning text-dark",style:{height:"100vh",fontFamily:"Cambria",fontSize:"5vmax"}},l.a.createElement("div",null,"KELVIN  "),l.a.createElement(y,{temp:i,onTemperatureChange:this.handleKelvinChange,scale:"k"}),l.a.createElement("div",{className:"mt-4"},"CELSIUS"),l.a.createElement(y,{temp:c,onTemperatureChange:this.handleCelsiusChange,scale:"c"}),l.a.createElement("div",{className:"mt-4"},"FAHRENHEIT"),l.a.createElement(y,{temp:r,onTemperatureChange:this.handleFahrenheitChange,scale:"f"}),l.a.createElement("div",{className:" text-center text-danger px-2 mt-5"},!0===e?t:null))}}]),a}(l.a.Component),k=[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}],O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("b",null,this.props.cat))}}]),a}(l.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row",style:{color:this.props.flag?"black":"red"}},l.a.createElement("div",{className:"col"},this.props.name),l.a.createElement("div",{className:"col"},this.props.price)))}}]),a}(l.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.query;return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{value:e,name:"query",onChange:this.props.handleChange,className:"form-control",type:"text"})," ","Only show products in stock"," ",l.a.createElement("input",{type:"checkbox",name:"checkbox",value:this.props.checkbox,onChange:this.props.handleChange})))}}]),a}(l.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=null,a=[];return a.push(l.a.createElement(j,{name:"Name",price:"Price",flag:!0})),k.forEach((function(n){e.props.onlyInStock&&!n.stocked||-1!==n.name.indexOf(e.props.query)&&(n.category!==t&&a.push(l.a.createElement(O,{cat:n.category})),a.push(l.a.createElement(j,{name:n.name,price:n.price,flag:n.stocked})),t=n.category)})),l.a.createElement("div",null,a)}}]),a}(l.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={query:"football",checkbox:!1},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState(Object(p.a)({},t,a))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"100vh"}},l.a.createElement(C,{query:this.state.query,checkbox:this.state.checkbox,handleChange:this.handleChange}),l.a.createElement(N,{onlyInStock:this.state.checkbox,query:this.state.query}))}}]),a}(l.a.Component);r.a.render(l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(b,null),l.a.createElement(d,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.4f570640.chunk.js.map