(this["webpackJsonpjh-school-english"]=this["webpackJsonpjh-school-english"]||[]).push([[0],{113:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),s=n.n(c),i=(n(113),n(34)),o=n.n(i),u=n(51),l=n(16),d=n(17),j=n(31),h=n(30),p=n(98),b=n(187),O=n(65),f=n(188),m=(n(42),n(171)),g=n(174),x=n(90),v=n.n(x),S=n(73),w=n.n(S),y=n(2),C=function(e){return Object(y.jsxs)(m.a,{showLabels:!0,style:{position:"fixed",bottom:0,width:"100%"},value:e.currentPage,onChange:function(t,n){e.changeCurrentPage(n),localStorage.setItem("currentPage",n)},children:[Object(y.jsx)(g.a,{label:"Word",value:"WordPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(g.a,{label:"WordTrans",value:"WordTransPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(g.a,{label:"Grammer",value:"GrammerPage",icon:Object(y.jsx)(v.a,{})})]})},W=n(23),k=n(7),P=n(175),I=n(63),T=n.n(I),N=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setWordData",value:function(){var e=[];return T.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/new_horizon_j1_word?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],word:t[2],plural:t[3],partOfSpeech:t[4],trans:t[5],sentence:t[6],sentenceTrans:t[7]})})),sessionStorage.setItem("WORDS",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getWordData",value:function(){var e=sessionStorage.getItem("WORDS"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,word:e.word,plural:e.plural,partOfSpeech:e.partOfSpeech,trans:e.trans,sentence:e.sentence,sentenceTrans:e.sentenceTrans})})),t}},{key:"getFavoriteWordData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("favorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("WORDS"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Word"===e.category){var n=a.filter((function(t){return t.id===e.id}));n.length>0&&t.push({id:n[0].id,part:n[0].part,word:n[0].word,plural:n[0].plural,partOfSpeech:n[0].partOfSpeech,trans:n[0].trans,sentence:n[0].sentence,sentenceTrans:n[0].sentenceTrans})}})),t):t}},{key:"getFirstPart",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getWordData().reduce((function(e,t){var n={id:t.id,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),D=n(176),L=n(66),F=n(194),A=n(189),R=n(179),E=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"speech",value:function(e,t,n){var r=window.speechSynthesis.getVoices().filter((function(e){return e.lang===t}))[0],a=new SpeechSynthesisUtterance;a.text=e,a.lang=t,a.voice=r,a.rate=n,window.speechSynthesis.speak(a)}}]),e}(),G=n(21),U=n.n(G),J=n(40),z=n.n(J),M=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(D.a,{container:!0,children:[Object(y.jsx)(D.a,{item:!0,xs:10,children:Object(y.jsx)(L.a,{variant:"subtitle1",children:this.props.trans})}),Object(y.jsx)(D.a,{item:!0,xs:2,children:Object(y.jsx)(F.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(L.a,{variant:"h4",className:this.props.visibleWord,children:this.props.word}),Object(y.jsx)("br",{}),Object(y.jsx)(D.a,{container:!0,direction:"row",children:Object(y.jsx)(A.a,{error:!this.props.isInputWordCompleted,label:this.props.isInputWordCompleted?"OK":"input word",fullWidth:!0,value:this.props.inputWordString,variant:"outlined",onChange:function(t){e.props.changeInputWord(t.target.value.toLowerCase()),e.props.word.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputWordCompleted(!0),e.props.onClick(),E.speech("OK. "+e.props.word,"en-US",1)):e.props.changeInputWordCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(z.a,{})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),K=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};this.props.partOfSpeech.length&&this.props.partOfSpeech;return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(L.a,{variant:"h4",className:this.props.visiblePlural,children:this.props.plural}),Object(y.jsx)("br",{}),Object(y.jsx)(D.a,{container:!0,direction:"row",children:Object(y.jsx)(A.a,{error:!this.props.isInputPluralCompleted,label:this.props.isInputPluralCompleted?"OK":"input plural",fullWidth:!0,value:this.props.inputPluralString,variant:"outlined",onChange:function(t){e.props.changeInputPlural(t.target.value.toLowerCase()),e.props.plural.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputPluralCompleted(!0),e.props.onClick(),E.speech("OK. "+e.props.plural,"en-US",1)):e.props.changeInputPluralCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(z.a,{})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.plural,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),_=n(190),X=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)("div",{onClick:function(){return e.props.onClick()},children:Object(y.jsx)("p",{className:"word",children:this.props.trans})}),Object(y.jsx)(L.a,{component:"div",children:Object(y.jsx)(_.a,{className:this.props.visibleSentence,m:1,children:this.props.sentence})}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",color:"primary",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(z.a,{fontSize:"small"})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.sentence,"en-US",e.props.speechSpeedRate)},children:Object(y.jsx)(U.a,{fontSize:"small"})})})]})]})})}}]),n}(r.Component),Y=n(91),H=n.n(Y),V=n(92),B=n.n(V),Q=function(e){return Object(y.jsxs)(D.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickPrev()},disabled:0===e.index,children:Object(y.jsx)(H.a,{})}),Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickNext()},disabled:e.index>=e.maxPage-1,children:Object(y.jsx)(B.a,{})})]})},q=n(93),Z=n.n(q),$=n(94),ee=n.n($);function te(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.id),i=Object(k.a)(s,2),l=(i[0],i[1],function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,JSON.parse(null!==(n=localStorage.getItem("favorite"))&&void 0!==n?n:"{}");case 3:if(r=t.sent,!Array.isArray(r)){t.next=8;break}return t.abrupt("return",r.filter((function(t){return t.category===e.category&&t.id===e.id})).length>0);case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),d=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(null!==(n=localStorage.getItem("favorite"))&&void 0!==n?n:"{}");case 2:if(r=t.sent,!Array.isArray(r)){t.next=8;break}return t.next=6,l().then((function(t){t?(r=r.filter((function(t){return t.category!==e.category||t.id!==e.id})),c(!1)):(r=r.concat(e),c(!0)),localStorage.setItem("favorite",JSON.stringify(r))}));case 6:t.next=10;break;case 8:localStorage.setItem("favorite",JSON.stringify([e])),c(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){l().then((function(e){c(e)}))})),Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:d,children:a?Object(y.jsx)(Z.a,{}):Object(y.jsx)(ee.a,{})})}var ne=n(182),re=n(192),ae=n(178),ce=n(183),se=n(195),ie=n(180),oe=n(193),ue=n(181),le=n(184),de=n(185),je=n(95),he=n.n(je),pe=n(97),be=n.n(pe),Oe=n(96),fe=n.n(Oe),me=n(186),ge=function(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),a=n[0],c=n[1],s=e.parts,i="50vw",o=Object(ie.a)((function(e){return Object(oe.a)({header:{minHeight:"4vh",backgroundColor:"#7A7A7A",marginBottom:"1vh"},open:{width:i},close:{width:"100%"},closeIcon:{marginTop:"16px",marginLeft:"16px"},hide:{display:"none"},list:{width:i}})}))();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(ue.a,{className:"".concat(a?o.open:o.close," ").concat(o.header),children:[Object(y.jsx)(L.a,{variant:"h6",noWrap:!0,style:{flexGrow:1,textAlign:"center"},children:e.currentPart}),Object(y.jsx)(ne.a,{color:"inherit",className:a?o.hide:"","aria-label":"open drawer",edge:"end",onClick:function(){c(!a)},children:Object(y.jsx)(he.a,{})})]}),Object(y.jsx)(re.a,{anchor:"right",open:a,onClose:function(){return c(!1)},children:Object(y.jsxs)("div",{className:o.list,children:[Object(y.jsx)(fe.a,{className:o.closeIcon,onClick:function(){return c(!1)}}),Object(y.jsxs)(ae.a,{component:"nav","aria-label":"secondary part",children:[s.map((function(t){return Object(y.jsxs)(ce.a,{button:!0,onClick:function(){e.changeCurrentPart(t),c(!1)},children:[Object(y.jsx)(le.a,{primary:t}),Object(y.jsx)(de.a,{children:t===e.currentPart&&Object(y.jsx)(be.a,{})})]},t)})),Object(y.jsx)(ce.a,{button:!0,onClick:function(){e.changeCurrentPart("favorite"),c(!1)},children:Object(y.jsx)(le.a,{primary:"favorite"})},"favorite")]}),Object(y.jsx)(me.a,{}),Object(y.jsx)(ae.a,{component:"nav","aria-label":"thirdry speechSpeed",children:Object(y.jsx)(ce.a,{children:Object(y.jsx)(se.a,{min:.1,max:1,step:.1,value:e.speechSpeedRate,"aria-labelledby":"speech-speed-rate",valueLabelDisplay:"auto",onChange:function(t,n){var r=e.speechSpeedRate;"number"===typeof n&&(r=n),e.changeSpeechSpeedRate(r)}})})})]})})]})},xe=n(41),ve=function(){var e,t=function(){if(d>0){var e=d-1;j(e),localStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),C("word-hidden"),L("word-hidden"),E(!1),V(""),$("")}},n=null!==(e=localStorage.getItem("wordCurrentPart"))&&void 0!==e?e:N.getFirstPart(),a=localStorage.getItem("wordWordIndex")?Number(localStorage.getItem("wordWordIndex")):0,c=Object(r.useState)(N.getWordData().filter((function(e){return e.part===n}))),s=Object(k.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(a),l=Object(k.a)(u,2),d=l[0],j=l[1],h=Object(r.useState)(n),p=Object(k.a)(h,2),b=p[0],O=p[1],f=Object(r.useState)("word-hidden"),m=Object(k.a)(f,2),g=m[0],x=m[1],v=Object(r.useState)("word-hidden"),S=Object(k.a)(v,2),w=S[0],C=S[1],I=Object(r.useState)("word-hidden"),T=Object(k.a)(I,2),D=T[0],L=T[1],F=Object(r.useState)(!1),A=Object(k.a)(F,2),R=A[0],E=A[1],G=Object(r.useState)(!1),U=Object(k.a)(G,2),J=U[0],z=U[1],_=Object(r.useState)(""),Y=Object(k.a)(_,2),H=Y[0],V=Y[1],B=Object(r.useState)(""),q=Object(k.a)(B,2),Z=q[0],$=q[1],ee=Object(r.useState)(.8),ne=Object(k.a)(ee,2),re=ne[0],ae=ne[1],ce=function(){if(d<i.length-1){var e=d+1;j(e),localStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),C("word-hidden"),L("word-hidden"),E(!1),V(""),$("")}},se=function(e){var t=[];b!==e&&(t="favorite"===e?N.getFavoriteWordData():N.getWordData().filter((function(t){return t.part===e})),o(t),O(e),localStorage.setItem("wordCurrentPart",e),j(0),localStorage.setItem("wordWordIndex","0"),x("word-hidden"),L("word-hidden"),E(!1),V(""),$(""))},ie=Object(xe.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&ce()},onSwipedRight:function(e){e.absX>=140&&t()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){se(n)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ge,{parts:N.getParts(),currentPart:b,changeCurrentPart:function(e){return se(e)},speechSpeedRate:re,changeSpeechSpeedRate:function(e){return function(e){ae(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(Q,{index:d,maxPage:i.length,onClickPrev:t,onClickNext:ce}),Object(y.jsx)("hr",{}),0==i.length&&Object(y.jsx)("p",{children:"no data"}),i.length>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",Object(W.a)(Object(W.a)({},ie),{},{children:[Object(y.jsx)(M,{word:i[d].word,partOfSpeech:i[d].partOfSpeech,trans:i[d].trans,visibleWord:g,isInputWordCompleted:R,inputWordString:H,onClick:function(){return x("word-visible")},changeInputWordCompleted:function(e){return function(e){E(e)}(e)},changeInputWord:function(e){return function(e){V(e)}(e)}}),i[d].plural&&Object(y.jsx)(K,{plural:i[d].plural,partOfSpeech:i[d].partOfSpeech,trans:i[d].trans,visiblePlural:w,isInputPluralCompleted:J,inputPluralString:Z,onClick:function(){return C("word-visible")},changeInputPluralCompleted:function(e){return function(e){z(e)}(e)},changeInputPlural:function(e){return function(e){$(e)}(e)}})]})),Object(y.jsx)("hr",{}),Object(y.jsx)(X,{sentence:i[d].sentence,trans:i[d].sentenceTrans,visibleSentence:D,speechSpeedRate:re,onClick:function(){return L("word-visible")}}),Object(y.jsx)("hr",{}),Object(y.jsx)(te,{category:"Word",part:b,id:i[d].id})]})]})]})},Se=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(D.a,{container:!0,children:[Object(y.jsx)(D.a,{item:!0,xs:10,children:Object(y.jsx)(L.a,{variant:"subtitle1",children:this.props.word})}),Object(y.jsx)(D.a,{item:!0,xs:2,children:Object(y.jsx)(F.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(L.a,{variant:"h5",className:this.props.visibleWord,children:this.props.trans}),Object(y.jsx)("br",{}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(z.a,{})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),we=function(){var e,t=null!==(e=localStorage.getItem("wordTransCurrentPart"))&&void 0!==e?e:N.getFirstPart(),n=Object(r.useState)(N.getWordData().filter((function(e){return e.part===t}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)("word-hidden"),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(t),O=Object(k.a)(b,2),f=O[0],m=O[1],g=Object(r.useState)("word-hidden"),x=Object(k.a)(g,2),v=(x[0],x[1]),S=Object(r.useState)(!1),w=Object(k.a)(S,2),C=w[0],I=w[1],T=Object(r.useState)(""),D=Object(k.a)(T,2),L=D[0],F=D[1],A=Object(r.useState)(.8),R=Object(k.a)(A,2),E=R[0],G=R[1],U=function(){if(u>0){var e=u-1;l(e),localStorage.setItem("wordTransWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),F("")}},J=function(){if(u<c.length-1){var e=u+1;l(e),localStorage.setItem("wordTransWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),F("")}},z=Object(xe.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&J()},onSwipedRight:function(e){e.absX>=140&&U()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ge,{parts:N.getParts(),currentPart:f,changeCurrentPart:function(e){return function(e){if(f!==e){var t=N.getWordData().filter((function(t){return t.part===e}));s(t),m(e),localStorage.setItem("wordTransCurrentPart",e),l(0),localStorage.setItem("wordTransWordIndex","0"),p("word-hidden"),v("word-hidden"),I(!1),F("")}}(e)},speechSpeedRate:E,changeSpeechSpeedRate:function(e){return function(e){G(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(Q,{index:u,maxPage:c.length,onClickPrev:U,onClickNext:J}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},z),{},{children:Object(y.jsx)(Se,{word:c[u].word,partOfSpeech:c[u].partOfSpeech,trans:c[u].trans,visibleWord:h,isInputWordCompleted:C,inputWordString:L,onClick:function(){return p("word-visible")},changeInputWordCompleted:function(e){return function(e){I(e)}(e)},changeInputWord:function(e){return function(e){F(e)}(e)}})})),Object(y.jsx)("hr",{})]})]})},ye=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={minHeight:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(D.a,{container:!0,children:Object(y.jsx)(L.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(D.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(R.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(D.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(D.a,{container:!0,children:Object(y.jsx)(R.a,{style:{display:"inline-block",width:"100%",height:"20%"},variant:"outlined",onClick:function(){E.speech(e.sentence,"en-US",e.speechSpeedRate)},children:Object(y.jsx)(U.a,{fontSize:"small"})})})})]})},Ce=function(){var e,t=null!==(e=localStorage.getItem("grammerCurrentPart"))&&void 0!==e?e:N.getFirstPart(),n=Object(r.useState)(N.getSentences().filter((function(e){return e.part===N.getFirstPart()}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(t),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(c[u].sentence.toLocaleLowerCase().slice(0,-1).split(" ")),O=Object(k.a)(b,2),f=O[0],m=O[1],g=Object(r.useState)(!1),x=Object(k.a)(g,2),v=x[0],S=x[1],w=Object(r.useState)(f.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))),C=Object(k.a)(w,2),I=C[0],T=C[1],D=Object(r.useState)([]),L=Object(k.a)(D,2),F=L[0],A=L[1],R=Object(r.useState)(.8),G=Object(k.a)(R,2),U=G[0],J=G[1],z=function(){if(u>0){var e=u-1,t=K(c[e].sentence);l(e),m(t),T(_(t)),A([]),S(!1)}},M=function(){if(u<c.length-1){var e=u+1,t=K(c[e].sentence);l(e),m(t),T(_(t)),A([]),S(!1)}},K=function(e){return e.toLocaleLowerCase().slice(0,-1).split(" ")},_=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},X=Object(xe.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&M()},onSwipedRight:function(e){e.absX>=140&&z()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ge,{parts:N.getParts(),currentPart:h,changeCurrentPart:function(e){return function(e){if(h!==e){var t=N.getSentences().filter((function(t){return t.part===e}));s(t),p(e),l(0),localStorage.setItem("grammerCurrentPart",e),localStorage.setItem("grammerWordIndex","0");var n=K(t[0].sentence);m(n),T(_(n)),A([]),S(!1)}}(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){J(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(Q,{index:u,maxPage:c.length,onClickPrev:z,onClickNext:M}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},X),{},{children:Object(y.jsx)(ye,{answer:f,stockWords:I,ansWords:F,sentence:c[u].sentence,translate:c[u].sentenceTrans,isAnsComplated:v,speechSpeedRate:U,moveAnsWords:function(e,t){return function(e,t){var n=F,r=I.filter((function(e,n){return n!==t}));n.push(e),A(n),T(r),E.speech(e,"en-US",1),f.length===n.length&&f.every((function(e,t){return e===n[t]}))?(S(!0),E.speech("OK."+c[u].sentence,"en-US",U)):S(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var n=I,r=F.filter((function(e,n){return n!==t}));n.push(e),T(n),A(r),f.length===r.length&&f.every((function(e,t){return e===r[t]}))?(S(!0),E.speech("OK."+c[u].sentence,"en-US",U)):S(!1)}(e,t)}})}))]})]})},We=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={minHeight:"10vh",paddingBottom:"40px"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(D.a,{container:!0,children:Object(y.jsx)(L.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(D.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(R.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(D.a,{container:!0,style:{borderTop:"1px dashed #8c8b8b"},children:t.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsxs)(D.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(R.a,{variant:"outlined",onClick:function(){E.speech(e.sentence,"en-US",1)},children:Object(y.jsx)(U.a,{fontSize:"small"})}),Object(y.jsx)(te,{category:"Grammer",part:e.currentPart,id:e.id})]})})]})},ke=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setGrammerData",value:function(){var e=[];return T.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/csv_new_horizon_j1?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],sentence:t[2],sentenceTrans:t[3],dummyWord:t[4]})})),sessionStorage.setItem("SENTENCES",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getGrammerData",value:function(){var e=sessionStorage.getItem("SENTENCES"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,sentence:e.sentence,sentenceTrans:e.sentenceTrans,dummyWord:e.dummyWord})})),t}},{key:"getFavoriteSentenceData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("favorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("SENTENCES"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Grammer"===e.category){var n=a.filter((function(t){return t.id===e.id}));if(n.length>0){var r=n[0];t.push({id:r.id,part:r.part,sentence:r.sentence,sentenceTrans:r.sentenceTrans,dummyWord:r.dummyWord})}}})),t):t}},{key:"getFirstPart",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getGrammerData().reduce((function(e,t){var n={id:t.id,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans,dummyWord:t.dummyWord};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),Pe=function(){var e,t=null!==(e=localStorage.getItem("grammerCurrentPart"))&&void 0!==e?e:ke.getFirstPart(),n=localStorage.getItem("grammerWordIndex")?Number(localStorage.getItem("grammerWordIndex")):0,a=Object(r.useState)(ke.getSentences().filter((function(e){return e.part===t}))),c=Object(k.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(n),u=Object(k.a)(o,2),l=u[0],d=u[1],j=Object(r.useState)(""),h=Object(k.a)(j,2),p=h[0],b=h[1],O=Object(r.useState)([]),f=Object(k.a)(O,2),m=f[0],g=f[1],x=Object(r.useState)(!1),v=Object(k.a)(x,2),S=v[0],w=v[1],C=(m.slice(),Object(r.useState)([])),I=Object(k.a)(C,2),T=I[0],N=I[1],D=Object(r.useState)([]),L=Object(k.a)(D,2),F=L[0],A=L[1],R=Object(r.useState)(.8),G=Object(k.a)(R,2),U=G[0],J=G[1],z=function(){if(l>0){var e=l-1,t=_(s[e].sentence);d(e),localStorage.setItem("grammerWordIndex",e.toString()),g(t);var n=t.slice();n.push(s[e].dummyWord.toLocaleLowerCase()),N(X(n)),A([]),w(!1)}},M=function(){if(l<s.length-1){var e=l+1,t=_(s[e].sentence);d(e),localStorage.setItem("grammerWordIndex",e.toString()),g(t);var n=t.slice();n.push(s[e].dummyWord.toLocaleLowerCase()),N(X(n)),A([]),w(!1)}},K=function(e){if(p!==e){var t=[];t="favorite"===e?ke.getFavoriteSentenceData():ke.getSentences().filter((function(t){return t.part===e})),i(t),b(e),localStorage.setItem("grammerCurrentPart",e),d(0),localStorage.setItem("grammerWordIndex","0");var n=t.length>0?_(t[0].sentence):[];g(n);var r=n.slice();r.push(t.length>0?t[0].dummyWord.toLocaleLowerCase():""),N(X(r)),A([]),w(!1)}},_=function(e){return e.toLocaleLowerCase().slice(0,-1).split("  ")},X=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},Y=Object(xe.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&M()},onSwipedRight:function(e){e.absX>=140&&z()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){K(t)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ge,{parts:ke.getParts(),currentPart:p,changeCurrentPart:function(e){return K(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){J(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(Q,{index:l,maxPage:s.length,onClickPrev:z,onClickNext:M}),Object(y.jsx)("hr",{}),0==s.length&&Object(y.jsx)("p",{children:"no data"}),s.length>0&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",Object(W.a)(Object(W.a)({},Y),{},{children:Object(y.jsx)(We,{id:s[l].id,currentPart:p,answer:m,stockWords:T,ansWords:F,sentence:s[l].sentence,translate:s[l].sentenceTrans,isAnsComplated:S,moveAnsWords:function(e,t){return function(e,t){var n=F,r=T.filter((function(e,n){return n!==t}));n.push(e),A(n),N(r),E.speech(e,"en-US",1),m.length===n.length&&m.every((function(e,t){return e===n[t]}))?(w(!0),E.speech("OK."+s[l].sentence,"en-US",U)):w(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var n=T,r=F.filter((function(e,n){return n!==t}));n.push(e),N(n),A(r),m.length===r.length&&m.every((function(e,t){return e===r[t]}))?(w(!0),E.speech("OK."+s[l].sentence,"en-US",U)):w(!1)}(e,t)}})}))})]})]})},Ie=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(l.a)(this,n),r=t.call(this,e);var a="WordPage";switch(localStorage.getItem("currentPage")){case"WordPage":a="WordPage";break;case"GrammerPage":a="GrammerPage";break;case"WordGrammerPage":a="WordGrammerPage";break;case"WordTransPage":a="WordTransPage";break;default:a="WordPage"}return r.state={currentPage:a,isLoaded:!1},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.setWordData();case 2:return e.next=4,ke.setGrammerData();case 4:return e.next=6,this.setState({isLoaded:!0});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!1===this.state.isLoaded)return null;var t=Object(p.a)({palette:{primary:{main:O.a[800]},type:"dark"}}),n=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({currentPage:n}),"WordPage"!==n){t.next=6;break}return t.next=4,N.setWordData();case 4:t.next=9;break;case 6:if("WordTransPage"!==n){t.next=9;break}return t.next=9,ke.setGrammerData();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(b.a,{theme:t,children:[Object(y.jsx)(f.a,{}),"WordPage"===this.state.currentPage&&Object(y.jsx)(ve,{}),"WordTransPage"===this.state.currentPage&&Object(y.jsx)(we,{}),"WordGrammerPage"===this.state.currentPage&&Object(y.jsx)(Ce,{}),"GrammerPage"===this.state.currentPage&&Object(y.jsx)(Pe,{}),Object(y.jsx)(C,{currentPage:this.state.currentPage,changeCurrentPage:function(e){return n(e)}})]})}}]),n}(a.a.Component),Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Ie,{})}),document.getElementById("root")),Te()}},[[140,1,2]]]);
//# sourceMappingURL=main.f5c0a36c.chunk.js.map