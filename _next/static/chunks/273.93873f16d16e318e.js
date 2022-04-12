"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{8273:function(e,t,n){n.r(t),n.d(t,{default:function(){return be}});var r=n(7294),i=n(4555),o=n(8603),l=n(5834),s=n(3457),c=n(9499),a=n(6511),u=n(8768),d=n(6594);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,a.A)({palette:{primary:j(j({},u.Z),{},{main:"#5C6BC0"}),error:d.Z},overrides:{MuiPaper:{root:{padding:"10px",marginBottom:"10px"}},MuiSvgIcon:{root:{marginTop:"5px",marginRight:"5px"}},MuiFormControl:{root:{width:"100%"}}}}),h=n(2629),v=(n(8293),n(1749)),f=n(5258),b=n(8358),m=n(2318),Z=n(5893);var g=function(){return(0,Z.jsx)("div",{children:(0,Z.jsx)(f.Z,{position:"static",color:"primary",children:(0,Z.jsx)(b.Z,{color:"inherit",children:(0,Z.jsx)(m.Z,{variant:"h6",color:"inherit",style:{flex:1},children:"texter"})})})})},y=n(9045),k=n(9895),O=n(2302),w=n(9613),P=n(8222),C=n(3750),T=n(7394),I=n(7265),S=n(8428),B=n(7907),$=function(e){return(0,Z.jsxs)(m.Z,{variant:"h5",component:"h2",children:[e.icon,e.text]})},D=n(1709);var L=function(){var e=(0,i.v9)((function(e){return function(e){return e.ValuesTable.vids}(e)})),t=(0,i.v9)((function(e){return e.ValueById})),n=(0,i.I0)();return(0,Z.jsxs)(k.Z,{children:[(0,Z.jsx)($,{text:"Memory Table",icon:(0,Z.jsx)(B.Z,{})}),(0,Z.jsxs)(O.Z,{children:[(0,Z.jsx)(C.Z,{children:(0,Z.jsxs)(T.Z,{children:[(0,Z.jsx)(P.Z,{component:"th",style:{width:"20%"},children:"name"}),(0,Z.jsx)(P.Z,{component:"th",children:"value"}),(0,Z.jsx)(P.Z,{component:"th",children:"manage"})]})}),(0,Z.jsx)(w.Z,{children:e.map((function(e){return(0,Z.jsxs)(T.Z,{children:[(0,Z.jsx)(P.Z,{children:e}),(0,Z.jsx)(P.Z,{children:t[e]}),(0,Z.jsx)(P.Z,{children:(0,Z.jsx)(I.Z,{variant:"outlined",size:"small",onClick:function(){return n(D.c({vid:e}))},children:(0,Z.jsx)(S.Z,{})})})]},e)}))})]})]})},V=n(5889),E=n(6026),A=n.n(E),R=n(64),_=n(3957),F=n(4779),M=function(e,t){return e.ValuesTable.vids.includes(t)&&e.ValueById[t]||""},W=(0,i.$j)((function(e,t){return{vid:t.vid,viewLabel:t.viewLabel||!1,value:M(e,t.vid)}}),{})((function(e){var t=(0,i.I0)();return(0,Z.jsx)(F.Z,{label:e.viewLabel?e.vid:null,InputLabelProps:{shrink:!0},error:!e.value,defaultValue:e.value,onChange:function(n){t((0,y.$)({vid:e.vid,value:n.target.value}))}})})),q=(0,i.$j)((function(e,t){return{vid:t.vid,options:t.options,value:M(e,t.vid)}}),{})((function(e){var t=(0,i.I0)();return(0,Z.jsx)(F.Z,{select:!0,label:e.vid,SelectProps:{native:!0},error:!e.value,defaultValue:e.value,onChange:function(n){t((0,y.$)({vid:e.vid,value:n.target.value}))},children:e.options.map((function(e,t){return(0,Z.jsx)("option",{value:e,children:e},t)}))})})),z={blockText:{margin:"5px",marginTop:"10px",borderRadius:"5px",background:"#ddd",border:"solid 1px #aaa"}},H=function(e){var t=e.block.text.split("\n");return(0,Z.jsx)(r.Fragment,{children:t.map((function(e,n){var i=n<t.length-1,o=function(e){return e.replace(/[\s\u3000]/g,"_")}(e+(i?"\u21a9":""));return(0,Z.jsxs)(r.Fragment,{children:[o&&(0,Z.jsx)(v.Z,{item:!0,style:z.blockText,children:(0,Z.jsx)(m.Z,{variant:"subtitle1",gutterBottom:!0,style:{marginTop:"20px",background:"white"},children:o})},n),i&&(0,Z.jsx)(v.Z,{item:!0,xs:12},"br-".concat(n))]},n)}))})},N=n(665),Q={block:{margin:"5px",marginTop:"10px",borderRadius:"5px",minWidth:"150px",border:"solid 1px #aaa"}},U=(0,i.$j)((function(e){return{valueById:e.ValueById}}),{})((function(e){var t=e.block,n=(0,i.I0)();if("text"===t.type)return(0,Z.jsx)(H,{block:t});if("select"===t.type){var r=e.prefix+t.vid;return(0,Z.jsx)(v.Z,{item:!0,style:Q.block,children:(0,Z.jsx)(q,{vid:r,options:t.texts})})}if("input"===t.type){var o=e.prefix+t.vid;return(0,Z.jsx)(v.Z,{item:!0,style:Q.block,children:(0,Z.jsx)(W,{vid:o,viewLabel:!0})})}return(0,Z.jsxs)(v.Z,{item:!0,xs:12,style:Q.block,children:[(0,Z.jsx)(I.Z,{disabled:t.count<=1,onClick:function(){n(N.Sc({name:t.name,count:t.count-1}))},children:(0,Z.jsx)(R.Z,{})}),(0,Z.jsx)(I.Z,{onClick:function(){n(N.Sc({name:t.name,count:t.count+1}))},children:(0,Z.jsx)(_.Z,{})}),A()(t.count).map((function(e){return(0,Z.jsx)(v.Z,{container:!0,spacing:1,children:t.blocks.map((function(n,r){return(0,Z.jsx)(U,{block:n,prefix:"".concat(t.name).concat(e,"-")},r)}))},e)}))]})})),G=U;function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var K,X=(0,i.$j)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)}),{}),Y=X((function(e){return(0,Z.jsxs)(k.Z,{style:{paddingBottom:"30px"},children:[(0,Z.jsx)($,{text:"Form",icon:(0,Z.jsx)(V.Z,{})}),(0,Z.jsx)(v.Z,{container:!0,spacing:1,children:e.blocks.map((function(t,n){return(0,Z.jsx)(G,{block:t,prefix:e.prefix},n)}))})]})})),ee=n(8186),te=n(3093),ne=n(4409),re=function(e){return(0,Z.jsxs)(k.Z,{children:[(0,Z.jsx)($,{text:"Result",icon:(0,Z.jsx)(ee.Z,{})}),(0,Z.jsx)(F.Z,{id:"interval",type:"text",multiline:!0,disabled:!0,value:e.text,helperText:"",inputProps:{"data-test":"event-interval-time-input",style:{color:"black",background:"#eee"}},"data-test":"text-input",margin:"normal",fullWidth:!0}),(0,Z.jsxs)(I.Z,{variant:"outlined",onClick:e.handleCopy,children:[(0,Z.jsx)(ne.Z,{}),"Copy"]}),(0,Z.jsxs)(I.Z,{variant:"outlined",onClick:e.handleShareTwitter,children:[(0,Z.jsx)(te.Z,{}),"Tweet"]})]})},ie=(0,i.$j)((function(e){return{text:e.HomeContainer.generatedText}}),{handleCopy:N.pI,handleShareTwitter:N.$u})(re),oe=n(4842),le=n(2680),se=n(1383),ce=n(2125).ZP.span(K||(K=(0,se.Z)(["\n\t&[data-hit='true'] {\n\t\tbackground: 'red';\n\t}\n"])));var ae=function(e){return(0,Z.jsxs)("div",{style:{borderBottom:"orange solid 2px"},children:[(0,Z.jsx)(m.Z,{variant:"subtitle1",children:e.text.split("").map((function(t,n){return(0,Z.jsx)(ce,{"data-hit":e.result.hilights.includes(n),children:t},n)}))}),(0,Z.jsxs)(m.Z,{color:"error",variant:"subtitle1",children:["\u30a8\u30e9\u30fc\u3042\u308a: ",e.result.message]})]})},ue="/load?text=\u65e5\u8a18%202018-(\u65e5\u4ed8)%0A----%0A{\u51fa\u6765\u4e8b:[\u3044\u3064:\u671d|\u663c|\u591c]%20-%20(\u5185\u5bb9)%0A}%0A----",de="/load?text=Hello%20my%20name%20is%20(name)[power:.|!|!!|!!!!].%20{comment:I%20love%20[thing:cat|dog|code].}",xe=function(e){return(0,Z.jsxs)(k.Z,{children:[(0,Z.jsxs)("form",{action:"",children:[(0,Z.jsx)($,{text:"Template",icon:(0,Z.jsx)(le.Z,{})}),(0,Z.jsx)(F.Z,{id:"interval",type:"text",multiline:!0,defaultValue:e.text,rows:e.text.split("\n").length,label:"\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b",error:!e.result.ok,onChange:function(t){e.handleChange({text:t.target.value})},inputProps:{"data-test":"event-interval-time-input"},"data-test":"text-input",fullWidth:!0}),!e.result.ok&&(0,Z.jsx)(ae,{result:e.result,text:e.text})]}),(0,Z.jsxs)("div",{style:{display:"flex"},children:[(0,Z.jsx)("div",{style:{flex:1}}),(0,Z.jsx)(I.Z,{variant:"outlined",onClick:e.handleCopy,children:"\u5171\u6709URL\u3092\u30b3\u30d4\u30fc"})]}),(0,Z.jsx)(m.Z,{variant:"subtitle1",children:"\u4f7f\u3044\u65b9\u30fb\u66f8\u304d\u65b9"}),(0,Z.jsxs)(m.Z,{variant:"body1",children:[(0,Z.jsx)("code",{children:"(name)"})," \u5165\u529b\u30d6\u30ed\u30c3\u30af",(0,Z.jsx)("br",{}),(0,Z.jsx)("code",{children:"[name:\u305f\u3051\u306e\u3053|\u304d\u306e\u3053]"})," \u9078\u629e\u30d6\u30ed\u30c3\u30af",(0,Z.jsx)("br",{}),(0,Z.jsx)("code",{children:"{name:\u5185\u5bb9}"})," \u30ea\u30d4\u30fc\u30c8\u30d6\u30ed\u30c3\u30af",(0,Z.jsx)("br",{}),"\u203b \u305d\u308c\u305e\u308c name \u5fc5\u9808",(0,Z.jsx)("br",{}),(0,Z.jsx)(I.Z,{variant:"outlined",href:ue,children:"\u4f8b1"}),(0,Z.jsx)(I.Z,{variant:"outlined",href:de,children:"\u4f8b2"})]})]})},je=(0,i.$j)((function(e){return{text:oe.Q(e),result:oe.S(e)}}),{updateText:N.Zq,handleLike:N.Zq,handleCopy:N.s2,handleChange:N.Q6})(xe);var pe=function(){var e=(0,i.I0)();r.useEffect((function(){console.log("calcText"),e((0,y.P)())}),[e]);var t=(0,i.v9)(oe.S);return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(g,{}),(0,Z.jsx)(v.Z,{container:!0,justify:"center",style:{marginBottom:"100px"},children:(0,Z.jsxs)(v.Z,{item:!0,xs:12,md:10,children:[(0,Z.jsx)(je,{}),t.ok&&(0,Z.jsx)(Y,{blocks:t.blocks,prefix:""}),(0,Z.jsx)(ie,{}),(0,Z.jsx)(L,{})]})})]})},he=(0,h.Z)(),ve=he.store,fe=he.persistor,be=function(){return(0,Z.jsx)(i.zt,{store:ve,children:(0,Z.jsxs)(o.r,{loading:(0,Z.jsx)("h3",{children:"Loading"}),persistor:fe,children:[(0,Z.jsx)(l.ZP,{}),(0,Z.jsx)(s.Z,{theme:p,children:(0,Z.jsx)(pe,{})})]})})}}}]);