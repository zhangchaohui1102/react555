(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{104:function(e,t,n){},109:function(e,t,n){},178:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),l=n.n(o),r=n(14),i=n(15),s=n(17),u=n(16),m=function(e){return c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",{key:e.id},e.title)})))},h=function(e){return c.a.createElement("div",null,[1,2,3,4,5].map((function(t){return c.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},p=(a.Component,n(12)),g=n(13),d=(n(104),n(109),n(10)),f=function(e){return c.a.createElement("h1",null,e.match.params.type)},E=(Object(g.g)((function(e){return console.log(e),c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},c.a.createElement(g.b,{path:"/doc/:type",component:f}),c.a.createElement(g.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(p.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/doc/hooks"},"Hooks"))))})),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(d.g,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(d.g.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wode"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(d.g.Item,{icon:c.a.createElement("i",{className:"iconfont icon-tubiaozhizuomoban-01"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-tubiaozhizuomoban-01"}),title:"\u6536\u85cf",key:"cart",selected:"yellowTab"==this.selectedTab,onPress:function(){e.props.history.push("/login")},"data-seed":"logId1"}),c.a.createElement(d.g.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){}}),c.a.createElement(d.g.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}})))}}]),n}(c.a.Component)),b=Object(g.g)(E),y=n(32),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={imgObj:[]},a.componentDidMount=function(){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.data;a.setState({imgObj:t}),a.props.dispatch({type:"aaa",value:t}),a.props.dispatch({type:"bbb",value:t})}))},a}return Object(i.a)(n,[{key:"getImage",value:function(e){for(var t=this,n=this.state.imgObj,a=e;a<n.length;a++)return c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{style:{width:"190px",height:"190px"},onClick:function(){t.props.dispatch({type:"item11",index:a}),t.props.history.push("./List1")},src:n[a].img}),c.a.createElement("p",null,n[a].price),c.a.createElement("p",null,n[a].title)),c.a.createElement(d.c.Item,null,c.a.createElement("img",{style:{width:"190px",height:"190px"},onClick:function(){t.props.dispatch({type:"aaa",index:a+1}),t.props.history.push("/List1")},src:n[a+1].img}),c.a.createElement("p",null,n[a+1].price),c.a.createElement("p",null,n[a+1].title)))}},{key:"render",value:function(){return console.log("zhangcahohui:",this.props.userinfo),c.a.createElement("div",null,c.a.createElement("div",{className:"ggg"},c.a.createElement("div",{className:"ooo"},this.getImage(0),this.getImage(2),this.getImage(4),this.getImage(6),this.getImage(8))))}}]),n}(c.a.Component),k=Object(y.b)((function(e){return{mydata:e.todo,change:e.change,userinfo:e.login}}))(Object(g.g)(v)),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3"],imgHeight:176},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]})}),3e3)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"name1111"},c.a.createElement(d.i,null,c.a.createElement(d.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/".concat(t,".png"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))))}}]),n}(c.a.Component),O=Object(g.g)(j),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:"\u5bfb\u627e\u5e97\u94fa\u5b9d\u8d1d"},e.onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e.handleClick=function(){e.manualFocusInst.focus()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{width:"100%",height:"40px",backgroundColor:"#FFAA33"}},c.a.createElement("i",{style:{fontSize:40,color:"red",float:"left"},className:"iconfont icon-taobao-"}),c.a.createElement(d.a,{onClick:function(t){e.props.history.push("./Page")},style:{width:"330px",height:"30px",top:"7px",left:"3px",backgroundColor:"\t#FF5511"}},c.a.createElement("span",{style:{position:"relative",top:"-4px"}},"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa")))}}]),n}(c.a.Component),I=Object(g.g)(C),x=Object(g.g)((function(){return c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(I,null),c.a.createElement(O,null),c.a.createElement(k,null),"home pages")})),w=function(e){return c.a.createElement("div",null,"\u6536\u85cf\u5546\u54c1",c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return e.history.push("/Login")}},"\u5220\u9664"))},F=Object(y.b)((function(e){return{mydata:e.todo,change:e.change,userinfo:e.login}}))((function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"\u60a8\u9700\u8981\u767b\u5f55\u624d\u80fd\u7ee7\u7eed\u8bbf\u95ee"),c.a.createElement(d.i,null,c.a.createElement(d.e,null,c.a.createElement(d.d,null,"\u7528\u6237\u540d"),c.a.createElement(d.d,{type:"password"},"\u5bc6\u7801")),c.a.createElement(d.h,null),c.a.createElement(d.a,{onClick:function(){return e.dispatch({type:"Delete",userinfo:"zhangchaohui"}),e.history.push("./Cart")},type:"primary"},"\u767b\u5f55")))})),z=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(d.g,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(d.g.Item,{title:"\u5e97\u94fa",key:"dianpu",icon:c.a.createElement("i",{className:"iconfont icon-taobaodianpu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-taobaodianpu"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(d.g.Item,{title:"\u5ba2\u670d",key:"kefu",icon:c.a.createElement("i",{className:"iconfont icon-taobaokefu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-taobaokefu"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(d.g.Item,{title:"\u6536\u85cf",key:"shoucang",icon:c.a.createElement("i",{className:"iconfont icon-tubiaozhizuomoban-01"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-tubiaozhizuomoban-01"}),selected:"yellowTab"==this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})},"data-seed":"logId"}),c.a.createElement(d.g.Item,{key:"jiaru",icon:c.a.createElement("div",{style:{width:"120px",height:"30px",backgroundColor:"orange"}},c.a.createElement("p",{style:{display:"inline-block",color:"white",marginTop:"8px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"))}),c.a.createElement(d.g.Item,{key:"jiaru",icon:c.a.createElement("div",{style:{width:"120px",height:"30px",backgroundColor:"red",marginRight:"8px"}},c.a.createElement("p",{style:{display:"inline-block",color:"white",marginTop:"8px"}},"\u7acb\u5373\u8d2d\u4e70"))})))}}]),n}(c.a.Component),N=Object(g.g)(z),S=Object(y.b)((function(e){return{mydata:e.todo,change:e.change}}))(Object(g.g)((function(e){console.log(e);var t=e.change,n=e.mydata[t].img+"";return console.log(n),c.a.createElement("div",null,c.a.createElement("span",{onClick:function(){return e.history.goBack("/Home")}},"\u8fd4\u56de"),c.a.createElement("div",{className:"ggg"},c.a.createElement("div",{className:"ooo"}),c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{src:n})))),c.a.createElement(N,null))}))),T=n(36),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{username:t.username};default:return e}},H=[];var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;return"aaa"==t.type?t.value:e},X=[];var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;return"aaa"==t.type?t.index:e};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"Delete"!=t.type?e:t.userinfo},K=n(80);var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("SC"==t.type)return[].concat(Object(K.a)(e),[t.shoucang]);if("DEL"==t.type){var n=Object(K.a)(e);return n.splice(t.idx,1),n}return e},Q=Object(T.c)({todo:W,home:D,change:Y,login:G,shoucang:P});var _=Object(T.e)(Q,Object(T.d)(Object(T.a)((function(e){var t=e.getState;return function(e){return function(n){console.log("will dispatch",n);var a=e(n);return console.log("state after dispatch",t()),a}}}),(function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return console.log("thunk"),"function"===typeof a?a(t,n):e(a)}}})))),A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:"\u7f8e\u98df"},e.onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e.handleClick=function(){e.manualFocusInst.focus()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d.i,null,c.a.createElement("div",{className:"sub-title"},"\u7b2c\u4e8c\u4e2a\u9875\u9762")),c.a.createElement(d.f,{value:this.state.value,onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onBlur:function(e){return console.log("onBlur")},onCancel:function(){return e.props.history.go(-1)},showCancelButton:!0,onChange:this.onChange}))}}]),n}(c.a.Component),L=Object(g.g)(A),B=(n(178),Object(g.g)((function(e){return c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"sub-title"},"\u5546\u54c1\u5217\u8868"),c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"})),c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"}))),c.a.createElement(d.h,{size:"zch"}),c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"})),c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"}))),c.a.createElement(d.h,{size:"zch"}),c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"})),c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"}))),c.a.createElement(d.h,{size:"zch"}),c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"})),c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"}))),c.a.createElement(d.h,{size:"zch"}),c.a.createElement(d.c,null,c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"})),c.a.createElement(d.c.Item,null,c.a.createElement("img",{onClick:function(){e.history.push("./Details")},src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335759615,2430430870&fm=26&gp=0.jpg"}))),c.a.createElement(d.h,{size:"zch"}))}))),M=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"zhangchaohui"},c.a.createElement("p",{onClick:function(){e.props.history.goBack()}},"\u8fd4\u56de"),c.a.createElement("h1",null,"   "),c.a.createElement("img",{style:{width:"350px"},src:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg"}),c.a.createElement(N,null))}}]),n}(c.a.Component),R=Object(g.g)(M),J=function(){return c.a.createElement(y.a,{store:_},c.a.createElement(p.a,null,c.a.createElement(g.d,null,c.a.createElement(g.b,{exact:!0,path:"/",component:x}),c.a.createElement(g.b,{path:"/cart",component:w}),c.a.createElement(g.b,{path:"/Mytab",component:b}),c.a.createElement(g.b,{path:"/Page",component:L}),c.a.createElement(g.b,{path:"/things",component:B}),c.a.createElement(g.b,{path:"/details",component:R}),c.a.createElement(g.b,{path:"/login",component:F}),c.a.createElement(g.b,{path:"/list1",component:S}),c.a.createElement(g.b,{component:x}))))};n(179);l.a.render(c.a.createElement(J,null),document.getElementById("root"))},99:function(e,t,n){e.exports=n(180)}},[[99,1,2]]]);
//# sourceMappingURL=main.1939f86e.chunk.js.map