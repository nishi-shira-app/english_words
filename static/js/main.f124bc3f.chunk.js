(this["webpackJsonpjh-school-english"]=this["webpackJsonpjh-school-english"]||[]).push([[0],{113:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),s=n.n(c),i=(n(113),n(41)),o=n.n(i),u=n(53),l=n(17),d=n(18),j=n(31),h=n(30),p=n(98),b=n(187),O=n(65),f=n(188),m=(n(42),n(171)),g=n(174),x=n(90),v=n.n(x),S=n(73),w=n.n(S),y=n(1),C=function(e){return Object(y.jsxs)(m.a,{showLabels:!0,style:{position:"fixed",bottom:0,width:"100%"},value:e.currentPage,onChange:function(t,n){e.changeCurrentPage(n),localStorage.setItem("currentPage",n)},children:[Object(y.jsx)(g.a,{label:"Word",value:"WordPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(g.a,{label:"WordTrans",value:"WordTransPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(g.a,{label:"Grammer",value:"GrammerPage",icon:Object(y.jsx)(v.a,{})})]})},W=n(23),k=n(7),P=n(175),I=n(63),T=n.n(I),N=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setWordData",value:function(){var e=[];return T.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/new_horizon_j1_word?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],word:t[2],plural:t[3],partOfSpeech:t[4],trans:t[5],sentence:t[6],sentenceTrans:t[7]})})),sessionStorage.setItem("WORDS",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getWordData",value:function(){var e=sessionStorage.getItem("WORDS"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,word:e.word,plural:e.plural,partOfSpeech:e.partOfSpeech,trans:e.trans,sentence:e.sentence,sentenceTrans:e.sentenceTrans})})),t}},{key:"getFavoriteWordData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("favorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("WORDS"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Word"===e.category){var n=a.filter((function(t){return t.id===e.id}));n.length>0&&t.push({id:n[0].id,part:n[0].part,word:n[0].word,plural:n[0].plural,partOfSpeech:n[0].partOfSpeech,trans:n[0].trans,sentence:n[0].sentence,sentenceTrans:n[0].sentenceTrans})}})),t):t}},{key:"getFirstPart",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getWordData().reduce((function(e,t){var n={id:t.id,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),D=n(176),F=n(66),L=n(194),A=n(189),R=n(179),E=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"speech",value:function(e,t,n){var r=window.speechSynthesis.getVoices().filter((function(e){return e.lang===t}))[0],a=new SpeechSynthesisUtterance;a.text=e,a.lang=t,a.voice=r,a.rate=n,window.speechSynthesis.speak(a)}}]),e}(),z=n(21),U=n.n(z),J=n(39),G=n.n(J),K=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(D.a,{container:!0,children:[Object(y.jsx)(D.a,{item:!0,xs:10,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:this.props.trans})}),Object(y.jsx)(D.a,{item:!0,xs:2,children:Object(y.jsx)(L.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(F.a,{variant:"h4",className:this.props.visibleWord,children:this.props.word}),Object(y.jsx)("br",{}),Object(y.jsx)(D.a,{container:!0,direction:"row",children:Object(y.jsx)(A.a,{error:!this.props.isInputWordCompleted,label:this.props.isInputWordCompleted?"OK":"input word",fullWidth:!0,value:this.props.inputWordString,variant:"outlined",onChange:function(t){e.props.changeInputWord(t.target.value.toLowerCase()),e.props.word.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputWordCompleted(!0),e.props.onClick(),E.speech("OK. "+e.props.word,"en-US",1)):e.props.changeInputWordCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),M=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};this.props.partOfSpeech.length&&this.props.partOfSpeech;return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(F.a,{variant:"h4",className:this.props.visiblePlural,children:this.props.plural}),Object(y.jsx)("br",{}),Object(y.jsx)(D.a,{container:!0,direction:"row",children:Object(y.jsx)(A.a,{error:!this.props.isInputPluralCompleted,label:this.props.isInputPluralCompleted?"OK":"input plural",fullWidth:!0,value:this.props.inputPluralString,variant:"outlined",onChange:function(t){e.props.changeInputPlural(t.target.value.toLowerCase()),e.props.plural.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputPluralCompleted(!0),e.props.onClick(),E.speech("OK. "+e.props.plural,"en-US",1)):e.props.changeInputPluralCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.plural,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),_=n(190),X=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)("div",{onClick:function(){return e.props.onClick()},children:Object(y.jsx)("p",{className:"word",children:this.props.trans})}),Object(y.jsx)(F.a,{component:"div",children:Object(y.jsx)(_.a,{className:this.props.visibleSentence,m:1,children:this.props.sentence})}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",color:"primary",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{fontSize:"small"})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.sentence,"en-US",e.props.speechSpeedRate)},children:Object(y.jsx)(U.a,{fontSize:"small"})})})]})]})})}}]),n}(r.Component),Y=n(91),V=n.n(Y),Q=n(92),H=n.n(Q),B=function(e){return Object(y.jsxs)(D.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickPrev()},disabled:0===e.index,children:Object(y.jsx)(V.a,{})}),Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickNext()},disabled:e.index>=e.maxPage-1,children:Object(y.jsx)(H.a,{})})]})},q=function(e){var t=e.currentPart;return Object(y.jsx)(D.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:Object(y.jsx)(F.a,{component:"div",children:Object(y.jsx)(_.a,{fontSize:"h6.fontSize",m:1,children:t})})})},Z=n(93),$=n.n(Z),ee=n(94),te=n.n(ee);function ne(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.id),i=Object(k.a)(s,2),l=(i[0],i[1],function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,JSON.parse(null!==(n=localStorage.getItem("favorite"))&&void 0!==n?n:"{}");case 3:if(r=t.sent,!Array.isArray(r)){t.next=8;break}return t.abrupt("return",r.filter((function(t){return t.category===e.category&&t.id===e.id})).length>0);case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),d=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(null!==(n=localStorage.getItem("favorite"))&&void 0!==n?n:"{}");case 2:if(r=t.sent,!Array.isArray(r)){t.next=8;break}return t.next=6,l().then((function(t){t?(r=r.filter((function(t){return t.category!==e.category||t.id!==e.id})),c(!1)):(r=r.concat(e),c(!0)),localStorage.setItem("favorite",JSON.stringify(r))}));case 6:t.next=10;break;case 8:localStorage.setItem("favorite",JSON.stringify([e])),c(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){l().then((function(e){c(e)}))})),Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:d,children:a?Object(y.jsx)($.a,{}):Object(y.jsx)(te.a,{})})}var re=n(182),ae=n(192),ce=n(178),se=n(183),ie=n(195),oe=n(180),ue=n(193),le=n(181),de=n(184),je=n(185),he=n(95),pe=n.n(he),be=n(97),Oe=n.n(be),fe=n(96),me=n.n(fe),ge=n(186),xe=function(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),a=n[0],c=n[1],s=e.parts,i="50vw",o=Object(oe.a)((function(e){return Object(ue.a)({open:{width:i},close:{width:"100%"},closeIcon:{marginTop:"16px",marginLeft:"16px"},hide:{display:"none"},list:{width:i}})}))();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(le.a,{className:a?o.open:o.close,children:[Object(y.jsx)(F.a,{variant:"h6",noWrap:!0,style:{flexGrow:1,textAlign:"center"},children:e.currentPart}),Object(y.jsx)(re.a,{color:"inherit",className:a?o.hide:"","aria-label":"open drawer",edge:"end",onClick:function(){c(!a)},children:Object(y.jsx)(pe.a,{})})]}),Object(y.jsx)(ae.a,{anchor:"right",open:a,onClose:function(){return c(!1)},children:Object(y.jsxs)("div",{className:o.list,children:[Object(y.jsx)(me.a,{className:o.closeIcon,onClick:function(){return c(!1)}}),Object(y.jsxs)(ce.a,{component:"nav","aria-label":"secondary part",children:[s.map((function(t){return Object(y.jsxs)(se.a,{button:!0,onClick:function(){e.changeCurrentPart(t),c(!1)},children:[Object(y.jsx)(de.a,{primary:t}),Object(y.jsx)(je.a,{children:t===e.currentPart&&Object(y.jsx)(Oe.a,{})})]},t)})),Object(y.jsx)(se.a,{button:!0,onClick:function(){e.changeCurrentPart("favorite"),c(!1)},children:Object(y.jsx)(de.a,{primary:"favorite"})},"favorite")]}),Object(y.jsx)(ge.a,{}),Object(y.jsx)(ce.a,{component:"nav","aria-label":"thirdry speechSpeed",children:Object(y.jsx)(se.a,{children:Object(y.jsx)(ie.a,{min:.1,max:1,step:.1,value:e.speechSpeedRate,"aria-labelledby":"speech-speed-rate",valueLabelDisplay:"auto",onChange:function(t,n){var r=e.speechSpeedRate;"number"===typeof n&&(r=n),e.changeSpeechSpeedRate(r)}})})})]})})]})},ve=n(40),Se=function(){var e,t=function(){if(d>0){var e=d-1;j(e),localStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),C("word-hidden"),F("word-hidden"),E(!1),Q(""),ee("")}},n=null!==(e=localStorage.getItem("wordCurrentPart"))&&void 0!==e?e:N.getFirstPart(),a=localStorage.getItem("wordWordIndex")?Number(localStorage.getItem("wordWordIndex")):0,c=Object(r.useState)(N.getWordData().filter((function(e){return e.part===n}))),s=Object(k.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(a),l=Object(k.a)(u,2),d=l[0],j=l[1],h=Object(r.useState)(n),p=Object(k.a)(h,2),b=p[0],O=p[1],f=Object(r.useState)("word-hidden"),m=Object(k.a)(f,2),g=m[0],x=m[1],v=Object(r.useState)("word-hidden"),S=Object(k.a)(v,2),w=S[0],C=S[1],I=Object(r.useState)("word-hidden"),T=Object(k.a)(I,2),D=T[0],F=T[1],L=Object(r.useState)(!1),A=Object(k.a)(L,2),R=A[0],E=A[1],z=Object(r.useState)(!1),U=Object(k.a)(z,2),J=U[0],G=U[1],_=Object(r.useState)(""),Y=Object(k.a)(_,2),V=Y[0],Q=Y[1],H=Object(r.useState)(""),Z=Object(k.a)(H,2),$=Z[0],ee=Z[1],te=Object(r.useState)(.8),re=Object(k.a)(te,2),ae=re[0],ce=re[1],se=function(){if(d<i.length-1){var e=d+1;j(e),localStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),C("word-hidden"),F("word-hidden"),E(!1),Q(""),ee("")}},ie=function(e){var t=[];b!==e&&(t="favorite"===e?N.getFavoriteWordData():N.getWordData().filter((function(t){return t.part===e})),o(t),O(e),localStorage.setItem("wordCurrentPart",e),j(0),localStorage.setItem("wordWordIndex","0"),x("word-hidden"),F("word-hidden"),E(!1),Q(""),ee(""))},oe=Object(ve.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&se()},onSwipedRight:function(e){e.absX>=140&&t()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){ie(n)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(xe,{parts:N.getParts(),currentPart:b,changeCurrentPart:function(e){return ie(e)},speechSpeedRate:ae,changeSpeechSpeedRate:function(e){return function(e){ce(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(B,{index:d,maxPage:i.length,onClickPrev:t,onClickNext:se}),Object(y.jsx)("hr",{}),0==i.length&&Object(y.jsx)("p",{children:"no data"}),i.length>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",Object(W.a)(Object(W.a)({},oe),{},{children:[Object(y.jsx)(K,{word:i[d].word,partOfSpeech:i[d].partOfSpeech,trans:i[d].trans,visibleWord:g,isInputWordCompleted:R,inputWordString:V,onClick:function(){return x("word-visible")},changeInputWordCompleted:function(e){return function(e){E(e)}(e)},changeInputWord:function(e){return function(e){Q(e)}(e)}}),i[d].plural&&Object(y.jsx)(M,{plural:i[d].plural,partOfSpeech:i[d].partOfSpeech,trans:i[d].trans,visiblePlural:w,isInputPluralCompleted:J,inputPluralString:$,onClick:function(){return C("word-visible")},changeInputPluralCompleted:function(e){return function(e){G(e)}(e)},changeInputPlural:function(e){return function(e){ee(e)}(e)}})]})),Object(y.jsx)("hr",{}),Object(y.jsx)(X,{sentence:i[d].sentence,trans:i[d].sentenceTrans,visibleSentence:D,speechSpeedRate:ae,onClick:function(){return F("word-visible")}}),Object(y.jsx)("hr",{}),Object(y.jsx)(ne,{category:"Word",part:b,id:i[d].id})]}),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:b})]})]})},we=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(D.a,{container:!0,children:[Object(y.jsx)(D.a,{item:!0,xs:10,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:this.props.word})}),Object(y.jsx)(D.a,{item:!0,xs:2,children:Object(y.jsx)(L.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(F.a,{variant:"h5",className:this.props.visibleWord,children:this.props.trans}),Object(y.jsx)("br",{}),Object(y.jsxs)(D.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(D.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),ye=function(){var e,t=null!==(e=localStorage.getItem("wordTransCurrentPart"))&&void 0!==e?e:N.getFirstPart(),n=Object(r.useState)(N.getWordData().filter((function(e){return e.part===t}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)("word-hidden"),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(t),O=Object(k.a)(b,2),f=O[0],m=O[1],g=Object(r.useState)("word-hidden"),x=Object(k.a)(g,2),v=(x[0],x[1]),S=Object(r.useState)(!1),w=Object(k.a)(S,2),C=w[0],I=w[1],T=Object(r.useState)(""),D=Object(k.a)(T,2),F=D[0],L=D[1],A=Object(r.useState)(.8),R=Object(k.a)(A,2),E=R[0],z=R[1],U=function(){if(u>0){var e=u-1;l(e),localStorage.setItem("wordTransWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),L("")}},J=function(){if(u<c.length-1){var e=u+1;l(e),localStorage.setItem("wordTransWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),L("")}},G=Object(ve.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&J()},onSwipedRight:function(e){e.absX>=140&&U()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(xe,{parts:N.getParts(),currentPart:f,changeCurrentPart:function(e){return function(e){if(f!==e){var t=N.getWordData().filter((function(t){return t.part===e}));s(t),m(e),localStorage.setItem("wordTransCurrentPart",e),l(0),localStorage.setItem("wordTransWordIndex","0"),p("word-hidden"),v("word-hidden"),I(!1),L("")}}(e)},speechSpeedRate:E,changeSpeechSpeedRate:function(e){return function(e){z(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(B,{index:u,maxPage:c.length,onClickPrev:U,onClickNext:J}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},G),{},{children:Object(y.jsx)(we,{word:c[u].word,partOfSpeech:c[u].partOfSpeech,trans:c[u].trans,visibleWord:h,isInputWordCompleted:C,inputWordString:F,onClick:function(){return p("word-visible")},changeInputWordCompleted:function(e){return function(e){I(e)}(e)},changeInputWord:function(e){return function(e){L(e)}(e)}})})),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:f})]})]})},Ce=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={minHeight:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(D.a,{container:!0,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(D.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(R.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(D.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(D.a,{container:!0,children:Object(y.jsx)(R.a,{style:{display:"inline-block",width:"100%",height:"20%"},variant:"outlined",onClick:function(){E.speech(e.sentence,"en-US",e.speechSpeedRate)},children:Object(y.jsx)(U.a,{fontSize:"small"})})})})]})},We=function(){var e,t=null!==(e=localStorage.getItem("grammerCurrentPart"))&&void 0!==e?e:N.getFirstPart(),n=Object(r.useState)(N.getSentences().filter((function(e){return e.part===N.getFirstPart()}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(t),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(c[u].sentence.toLocaleLowerCase().slice(0,-1).split(" ")),O=Object(k.a)(b,2),f=O[0],m=O[1],g=Object(r.useState)(!1),x=Object(k.a)(g,2),v=x[0],S=x[1],w=Object(r.useState)(f.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))),C=Object(k.a)(w,2),I=C[0],T=C[1],D=Object(r.useState)([]),F=Object(k.a)(D,2),L=F[0],A=F[1],R=Object(r.useState)(.8),z=Object(k.a)(R,2),U=z[0],J=z[1],G=function(){if(u>0){var e=u-1,t=M(c[e].sentence);l(e),m(t),T(_(t)),A([]),S(!1)}},K=function(){if(u<c.length-1){var e=u+1,t=M(c[e].sentence);l(e),m(t),T(_(t)),A([]),S(!1)}},M=function(e){return e.toLocaleLowerCase().slice(0,-1).split(" ")},_=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},X=Object(ve.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&K()},onSwipedRight:function(e){e.absX>=140&&G()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(xe,{parts:N.getParts(),currentPart:h,changeCurrentPart:function(e){return function(e){if(h!==e){var t=N.getSentences().filter((function(t){return t.part===e}));s(t),p(e),l(0),localStorage.setItem("grammerCurrentPart",e),localStorage.setItem("grammerWordIndex","0");var n=M(t[0].sentence);m(n),T(_(n)),A([]),S(!1)}}(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){J(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(B,{index:u,maxPage:c.length,onClickPrev:G,onClickNext:K}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},X),{},{children:Object(y.jsx)(Ce,{answer:f,stockWords:I,ansWords:L,sentence:c[u].sentence,translate:c[u].sentenceTrans,isAnsComplated:v,speechSpeedRate:U,moveAnsWords:function(e,t){return function(e,t){var n=L,r=I.filter((function(e,n){return n!==t}));n.push(e),A(n),T(r),E.speech(e,"en-US",1),f.length===n.length&&f.every((function(e,t){return e===n[t]}))?(S(!0),E.speech("OK."+c[u].sentence,"en-US",U)):S(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var n=I,r=L.filter((function(e,n){return n!==t}));n.push(e),T(n),A(r),f.length===r.length&&f.every((function(e,t){return e===r[t]}))?(S(!0),E.speech("OK."+c[u].sentence,"en-US",U)):S(!1)}(e,t)}})}))]})]})},ke=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={height:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(D.a,{container:!0,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(D.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(R.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(D.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsxs)(D.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(R.a,{variant:"outlined",onClick:function(){E.speech(e.sentence,"en-US",1)},children:Object(y.jsx)(U.a,{fontSize:"small"})}),Object(y.jsx)(ne,{category:"Grammer",part:e.currentPart,id:e.id})]})})]})},Pe=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setGrammerData",value:function(){var e=[];return T.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/csv_new_horizon_j1?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],sentence:t[2],sentenceTrans:t[3],dummyWord:t[4]})})),sessionStorage.setItem("SENTENCES",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getGrammerData",value:function(){var e=sessionStorage.getItem("SENTENCES"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,sentence:e.sentence,sentenceTrans:e.sentenceTrans,dummyWord:e.dummyWord})})),t}},{key:"getFavoriteSentenceData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("favorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("SENTENCES"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Grammer"===e.category){var n=a.filter((function(t){return t.id===e.id}));if(n.length>0){var r=n[0];t.push({id:r.id,part:r.part,sentence:r.sentence,sentenceTrans:r.sentenceTrans,dummyWord:r.dummyWord})}}})),t):t}},{key:"getFirstPart",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getGrammerData().reduce((function(e,t){var n={id:t.id,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans,dummyWord:t.dummyWord};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),Ie=function(){var e,t=null!==(e=localStorage.getItem("grammerCurrentPart"))&&void 0!==e?e:Pe.getFirstPart(),n=localStorage.getItem("grammerWordIndex")?Number(localStorage.getItem("grammerWordIndex")):0,a=Object(r.useState)(Pe.getSentences().filter((function(e){return e.part===t}))),c=Object(k.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(n),u=Object(k.a)(o,2),l=u[0],d=u[1],j=Object(r.useState)(""),h=Object(k.a)(j,2),p=h[0],b=h[1],O=Object(r.useState)([]),f=Object(k.a)(O,2),m=f[0],g=f[1],x=Object(r.useState)(!1),v=Object(k.a)(x,2),S=v[0],w=v[1],C=(m.slice(),Object(r.useState)([])),I=Object(k.a)(C,2),T=I[0],N=I[1],D=Object(r.useState)([]),F=Object(k.a)(D,2),L=F[0],A=F[1],R=Object(r.useState)(.8),z=Object(k.a)(R,2),U=z[0],J=z[1],G=function(){if(l>0){var e=l-1,t=_(s[e].sentence);d(e),localStorage.setItem("grammerWordIndex",e.toString()),g(t);var n=t.slice();n.push(s[e].dummyWord.toLocaleLowerCase()),N(X(n)),A([]),w(!1)}},K=function(){if(l<s.length-1){var e=l+1,t=_(s[e].sentence);d(e),localStorage.setItem("grammerWordIndex",e.toString()),g(t);var n=t.slice();n.push(s[e].dummyWord.toLocaleLowerCase()),N(X(n)),A([]),w(!1)}},M=function(e){if(p!==e){var t=[];t="favorite"===e?Pe.getFavoriteSentenceData():Pe.getSentences().filter((function(t){return t.part===e})),i(t),b(e),localStorage.setItem("grammerCurrentPart",e),d(0),localStorage.setItem("grammerWordIndex","0");var n=t.length>0?_(t[0].sentence):[];g(n);var r=n.slice();r.push(t.length>0?t[0].dummyWord.toLocaleLowerCase():""),N(X(r)),A([]),w(!1)}},_=function(e){return e.toLocaleLowerCase().slice(0,-1).split("  ")},X=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},Y=Object(ve.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&K()},onSwipedRight:function(e){e.absX>=140&&G()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){M(t)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(xe,{parts:Pe.getParts(),currentPart:p,changeCurrentPart:function(e){return M(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){J(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(B,{index:l,maxPage:s.length,onClickPrev:G,onClickNext:K}),Object(y.jsx)("hr",{}),0==s.length&&Object(y.jsx)("p",{children:"no data"}),s.length>0&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",Object(W.a)(Object(W.a)({},Y),{},{children:Object(y.jsx)(ke,{id:s[l].id,currentPart:p,answer:m,stockWords:T,ansWords:L,sentence:s[l].sentence,translate:s[l].sentenceTrans,isAnsComplated:S,moveAnsWords:function(e,t){return function(e,t){var n=L,r=T.filter((function(e,n){return n!==t}));n.push(e),A(n),N(r),E.speech(e,"en-US",1),m.length===n.length&&m.every((function(e,t){return e===n[t]}))?(w(!0),E.speech("OK."+s[l].sentence,"en-US",U)):w(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var n=T,r=L.filter((function(e,n){return n!==t}));n.push(e),N(n),A(r),m.length===r.length&&m.every((function(e,t){return e===r[t]}))?(w(!0),E.speech("OK."+s[l].sentence,"en-US",U)):w(!1)}(e,t)}})}))}),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:p})]})]})},Te=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={currentPage:"WordPage"},N.setWordData(),Pe.setGrammerData(),r}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=Object(p.a)({palette:{primary:{main:O.a[800]},type:"dark"}}),n=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({currentPage:n}),"WordPage"!==n){t.next=6;break}return t.next=4,N.setWordData();case 4:t.next=9;break;case 6:if("WordTransPage"!==n){t.next=9;break}return t.next=9,Pe.setGrammerData();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(b.a,{theme:t,children:[Object(y.jsx)(f.a,{}),"WordPage"===this.state.currentPage&&Object(y.jsx)(Se,{}),"WordTransPage"===this.state.currentPage&&Object(y.jsx)(ye,{}),"WordGrammerPage"===this.state.currentPage&&Object(y.jsx)(We,{}),"GrammerPage"===this.state.currentPage&&Object(y.jsx)(Ie,{}),Object(y.jsx)(C,{currentPage:this.state.currentPage,changeCurrentPage:function(e){return n(e)}})]})}}]),n}(a.a.Component),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Te,{})}),document.getElementById("root")),Ne()}},[[140,1,2]]]);
//# sourceMappingURL=main.f124bc3f.chunk.js.map