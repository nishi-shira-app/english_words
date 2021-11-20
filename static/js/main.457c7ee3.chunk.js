(this["webpackJsonpjh-school-english"]=this["webpackJsonpjh-school-english"]||[]).push([[0],{113:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),s=n.n(c),i=(n(113),n(71)),o=n.n(i),l=n(84),u=n(15),d=n(16),j=n(31),h=n(30),p=n(97),b=n(186),O=n(63),f=n(187),m=(n(41),n(171)),g=n(174),x=n(89),v=n.n(x),S=n(72),w=n.n(S),y=n(1),C=function(e){return Object(y.jsxs)(m.a,{showLabels:!0,style:{position:"fixed",bottom:0,width:"100%"},onChange:function(t,n){e.changeCurrentPage(n),sessionStorage.setItem("currentPage",n)},children:[Object(y.jsx)(g.a,{showLabel:!0,label:"Word",value:"WordPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(g.a,{showLabel:!0,label:"WordTrans",value:"WordTransPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(g.a,{showLabel:!0,label:"Grammer",value:"GrammerPage",icon:Object(y.jsx)(v.a,{})})]})},W=n(23),k=n(7),P=n(175),I=n(61),T=n.n(I),D=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"setWordData",value:function(){var e=[];return T.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/new_horizon_j1_word?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],word:t[2],plural:t[3],partOfSpeech:t[4],trans:t[5],sentence:t[6],sentenceTrans:t[7]})})),sessionStorage.setItem("WORDS",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getWordData",value:function(){var e=sessionStorage.getItem("WORDS"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,word:e.word,plural:e.plural,partOfSpeech:e.partOfSpeech,trans:e.trans,sentence:e.sentence,sentenceTrans:e.sentenceTrans})})),t}},{key:"getFavoriteWordData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("favorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("WORDS"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Word"===e.category){var n=a.filter((function(t){return t.id===e.id}));n.length>0&&t.push({id:n[0].id,part:n[0].part,word:n[0].word,plural:n[0].plural,partOfSpeech:n[0].partOfSpeech,trans:n[0].trans,sentence:n[0].sentence,sentenceTrans:n[0].sentenceTrans})}})),t):t}},{key:"getFirstPart",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getWordData().reduce((function(e,t){var n={id:t.id,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),N=n(176),F=n(64),L=n(192),A=n(188),R=n(179),E=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"speech",value:function(e,t,n){var r=window.speechSynthesis.getVoices().filter((function(e){return e.lang===t}))[0],a=new SpeechSynthesisUtterance;a.text=e,a.lang=t,a.voice=r,a.rate=n,window.speechSynthesis.speak(a)}}]),e}(),z=n(21),U=n.n(z),J=n(39),G=n.n(J),K=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(N.a,{container:!0,children:[Object(y.jsx)(N.a,{item:!0,xs:10,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:this.props.trans})}),Object(y.jsx)(N.a,{item:!0,xs:2,children:Object(y.jsx)(L.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(F.a,{variant:"h4",className:this.props.visibleWord,children:this.props.word}),Object(y.jsx)("br",{}),Object(y.jsx)(N.a,{container:!0,direction:"row",children:Object(y.jsx)(A.a,{error:!this.props.isInputWordCompleted,label:this.props.isInputWordCompleted?"OK":"input word",fullWidth:!0,value:this.props.inputWordString,variant:"outlined",onChange:function(t){e.props.changeInputWord(t.target.value.toLowerCase()),e.props.word.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputWordCompleted(!0),e.props.onClick(),E.speech("OK. "+e.props.word,"en-US",1)):e.props.changeInputWordCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(N.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),M=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};this.props.partOfSpeech.length&&this.props.partOfSpeech;return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(F.a,{variant:"h4",className:this.props.visiblePlural,children:this.props.plural}),Object(y.jsx)("br",{}),Object(y.jsx)(N.a,{container:!0,direction:"row",children:Object(y.jsx)(A.a,{error:!this.props.isInputPluralCompleted,label:this.props.isInputPluralCompleted?"OK":"input plural",fullWidth:!0,value:this.props.inputPluralString,variant:"outlined",onChange:function(t){e.props.changeInputPlural(t.target.value.toLowerCase()),e.props.plural.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputPluralCompleted(!0),e.props.onClick(),E.speech("OK. "+e.props.plural,"en-US",1)):e.props.changeInputPluralCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(N.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.plural,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),_=n(189),X=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)("div",{onClick:function(){return e.props.onClick()},children:Object(y.jsx)("p",{className:"word",children:this.props.trans})}),Object(y.jsx)(F.a,{component:"div",children:Object(y.jsx)(_.a,{className:this.props.visibleSentence,m:1,children:this.props.sentence})}),Object(y.jsxs)(N.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",color:"primary",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{fontSize:"small"})})}),Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.sentence,"en-US",e.props.speechSpeedRate)},children:Object(y.jsx)(U.a,{fontSize:"small"})})})]})]})})}}]),n}(r.Component),Y=n(90),V=n.n(Y),Q=n(91),H=n.n(Q),B=function(e){return Object(y.jsxs)(N.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickPrev()},disabled:0===e.index,children:Object(y.jsx)(V.a,{})}),Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickNext()},disabled:e.index>=e.maxPage-1,children:Object(y.jsx)(H.a,{})})]})},q=function(e){var t=e.currentPart;return Object(y.jsx)(N.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:Object(y.jsx)(F.a,{component:"div",children:Object(y.jsx)(_.a,{fontSize:"h6.fontSize",m:1,children:t})})})},Z=n(92),$=n.n(Z),ee=n(93),te=n.n(ee);function ne(e){var t=function(){var t,n=JSON.parse(null!==(t=localStorage.getItem("favorite"))&&void 0!==t?t:"{}");return!!Array.isArray(n)&&n.filter((function(t){return t.category===e.category&&t.id===e.id})).length>0},n=Object(r.useState)(t()),a=Object(k.a)(n,2),c=a[0],s=a[1];return Object(y.jsx)(R.a,{variant:"contained",color:"primary",size:"small",onClick:function(){var n,r=JSON.parse(null!==(n=localStorage.getItem("favorite"))&&void 0!==n?n:"{}");Array.isArray(r)?(t()?(r=r.filter((function(t){return t.category!==e.category||t.id!==e.id})),s(!1)):(r=r.concat(e),s(!0)),localStorage.setItem("favorite",JSON.stringify(r))):(localStorage.setItem("favorite",JSON.stringify([e])),s(!0))},children:c?Object(y.jsx)($.a,{}):Object(y.jsx)(te.a,{})})}var re=n(181),ae=n(191),ce=n(178),se=n(182),ie=n(193),oe=n(180),le=n(96),ue=n.n(le),de=n(183),je=n(184),he=n(95),pe=n.n(he),be=n(94),Oe=n.n(be),fe=n(185),me=function(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),a=n[0],c=n[1],s=e.parts,i=Object(oe.a)({list:{width:"50vw"}})();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(re.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){c(!a)}}),Object(y.jsx)(ae.a,{anchor:"right",open:a,onClose:function(){return c(!1)},children:Object(y.jsxs)("div",{className:i.list,children:[Object(y.jsx)(Oe.a,{onClick:function(){return c(!1)}}),Object(y.jsxs)(ce.a,{component:"nav","aria-label":"secondary part",children:[s.map((function(t){return Object(y.jsxs)(se.a,{button:!0,onClick:function(){e.changeCurrentPart(t),c(!1)},children:[Object(y.jsx)(de.a,{primary:t}),Object(y.jsx)(je.a,{children:t===e.currentPart&&Object(y.jsx)(pe.a,{})})]},t)})),Object(y.jsx)(se.a,{button:!0,onClick:function(){e.changeCurrentPart("favorite"),c(!1)},children:Object(y.jsx)(de.a,{primary:"favorite"})},"favorite")]}),Object(y.jsx)(fe.a,{}),Object(y.jsx)(ce.a,{component:"nav","aria-label":"thirdry speechSpeed",children:Object(y.jsx)(se.a,{children:Object(y.jsx)(ie.a,{min:.1,max:1,step:.1,value:e.speechSpeedRate,"aria-labelledby":"speech-speed-rate",valueLabelDisplay:"auto",onChange:function(t,n){var r=e.speechSpeedRate;"number"===typeof n&&(r=n),e.changeSpeechSpeedRate(r)}})})})]})}),Object(y.jsx)(ue.a,{})]})},ge=n(40),xe=function(){var e,t=function(){if(d>0){var e=d-1;j(e),localStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),C("word-hidden"),F("word-hidden"),E(!1),Q(""),ee("")}},n=null!==(e=localStorage.getItem("wordCurrentPart"))&&void 0!==e?e:D.getFirstPart(),a=localStorage.getItem("wordWordIndex")?Number(localStorage.getItem("wordWordIndex")):0,c=Object(r.useState)(D.getWordData().filter((function(e){return e.part===n}))),s=Object(k.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(a),u=Object(k.a)(l,2),d=u[0],j=u[1],h=Object(r.useState)(n),p=Object(k.a)(h,2),b=p[0],O=p[1],f=Object(r.useState)("word-hidden"),m=Object(k.a)(f,2),g=m[0],x=m[1],v=Object(r.useState)("word-hidden"),S=Object(k.a)(v,2),w=S[0],C=S[1],I=Object(r.useState)("word-hidden"),T=Object(k.a)(I,2),N=T[0],F=T[1],L=Object(r.useState)(!1),A=Object(k.a)(L,2),R=A[0],E=A[1],z=Object(r.useState)(!1),U=Object(k.a)(z,2),J=U[0],G=U[1],_=Object(r.useState)(""),Y=Object(k.a)(_,2),V=Y[0],Q=Y[1],H=Object(r.useState)(""),Z=Object(k.a)(H,2),$=Z[0],ee=Z[1],te=Object(r.useState)(.8),re=Object(k.a)(te,2),ae=re[0],ce=re[1],se=function(){if(d<i.length-1){var e=d+1;j(e),localStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),C("word-hidden"),F("word-hidden"),E(!1),Q(""),ee("")}},ie=function(e){var t=[];b!==e&&(t="favorite"===e?D.getFavoriteWordData():D.getWordData().filter((function(t){return t.part===e})),o(t),O(e),localStorage.setItem("wordCurrentPart",e),j(0),localStorage.setItem("wordWordIndex","0"),x("word-hidden"),F("word-hidden"),E(!1),Q(""),ee(""))},oe=Object(ge.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&se()},onSwipedRight:function(e){e.absX>=140&&t()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){ie(n)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(me,{parts:D.getParts(),currentPart:b,changeCurrentPart:function(e){return ie(e)},speechSpeedRate:ae,changeSpeechSpeedRate:function(e){return function(e){ce(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(B,{index:d,maxPage:i.length,onClickPrev:t,onClickNext:se}),Object(y.jsx)("hr",{}),0==i.length&&Object(y.jsx)("p",{children:"no data"}),i.length>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",Object(W.a)(Object(W.a)({},oe),{},{children:[Object(y.jsx)(K,{word:i[d].word,partOfSpeech:i[d].partOfSpeech,trans:i[d].trans,visibleWord:g,isInputWordCompleted:R,inputWordString:V,onClick:function(){return x("word-visible")},changeInputWordCompleted:function(e){return function(e){E(e)}(e)},changeInputWord:function(e){return function(e){Q(e)}(e)}}),i[d].plural&&Object(y.jsx)(M,{plural:i[d].plural,partOfSpeech:i[d].partOfSpeech,trans:i[d].trans,visiblePlural:w,isInputPluralCompleted:J,inputPluralString:$,onClick:function(){return C("word-visible")},changeInputPluralCompleted:function(e){return function(e){G(e)}(e)},changeInputPlural:function(e){return function(e){ee(e)}(e)}})]})),Object(y.jsx)("hr",{}),Object(y.jsx)(X,{sentence:i[d].sentence,trans:i[d].sentenceTrans,visibleSentence:N,speechSpeedRate:ae,onClick:function(){return F("word-visible")}}),"favorite"!==b&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("hr",{}),Object(y.jsx)(ne,{category:"Word",part:b,id:i[d].id})]})]}),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:b})]})]})},ve=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(N.a,{container:!0,children:[Object(y.jsx)(N.a,{item:!0,xs:10,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:this.props.word})}),Object(y.jsx)(N.a,{item:!0,xs:2,children:Object(y.jsx)(L.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(F.a,{variant:"h5",className:this.props.visibleWord,children:this.props.trans}),Object(y.jsx)("br",{}),Object(y.jsxs)(N.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(N.a,{item:!0,xs:5,children:Object(y.jsx)(R.a,{style:t,variant:"outlined",onClick:function(){E.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(U.a,{})})})]})]})})}}]),n}(r.Component),Se=function(){var e,t=null!==(e=localStorage.getItem("wordTransCurrentPart"))&&void 0!==e?e:D.getFirstPart(),n=Object(r.useState)(D.getWordData().filter((function(e){return e.part===t}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)("word-hidden"),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(t),O=Object(k.a)(b,2),f=O[0],m=O[1],g=Object(r.useState)("word-hidden"),x=Object(k.a)(g,2),v=(x[0],x[1]),S=Object(r.useState)(!1),w=Object(k.a)(S,2),C=w[0],I=w[1],T=Object(r.useState)(""),N=Object(k.a)(T,2),F=N[0],L=N[1],A=Object(r.useState)(.8),R=Object(k.a)(A,2),E=R[0],z=R[1],U=function(){if(l>0){var e=l-1;u(e),localStorage.setItem("wordTransWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),L("")}},J=function(){if(l<c.length-1){var e=l+1;u(e),localStorage.setItem("wordTransWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),L("")}},G=Object(ge.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&J()},onSwipedRight:function(e){e.absX>=140&&U()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(me,{parts:D.getParts(),currentPart:f,changeCurrentPart:function(e){return function(e){if(f!==e){var t=D.getWordData().filter((function(t){return t.part===e}));s(t),m(e),localStorage.setItem("wordTransCurrentPart",e),u(0),localStorage.setItem("wordTransWordIndex","0"),p("word-hidden"),v("word-hidden"),I(!1),L("")}}(e)},speechSpeedRate:E,changeSpeechSpeedRate:function(e){return function(e){z(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(B,{index:l,maxPage:c.length,onClickPrev:U,onClickNext:J}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},G),{},{children:Object(y.jsx)(ve,{word:c[l].word,partOfSpeech:c[l].partOfSpeech,trans:c[l].trans,visibleWord:h,isInputWordCompleted:C,inputWordString:F,onClick:function(){return p("word-visible")},changeInputWordCompleted:function(e){return function(e){I(e)}(e)},changeInputWord:function(e){return function(e){L(e)}(e)}})})),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:f})]})]})},we=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={minHeight:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(N.a,{container:!0,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(N.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(R.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(N.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(N.a,{container:!0,children:Object(y.jsx)(R.a,{style:{display:"inline-block",width:"100%",height:"20%"},variant:"outlined",onClick:function(){E.speech(e.sentence,"en-US",e.speechSpeedRate)},children:Object(y.jsx)(U.a,{fontSize:"small"})})})})]})},ye=function(){var e,t=null!==(e=localStorage.getItem("grammerCurrentPart"))&&void 0!==e?e:D.getFirstPart(),n=Object(r.useState)(D.getSentences().filter((function(e){return e.part===D.getFirstPart()}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(t),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(c[l].sentence.toLocaleLowerCase().slice(0,-1).split(" ")),O=Object(k.a)(b,2),f=O[0],m=O[1],g=Object(r.useState)(!1),x=Object(k.a)(g,2),v=x[0],S=x[1],w=Object(r.useState)(f.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))),C=Object(k.a)(w,2),I=C[0],T=C[1],N=Object(r.useState)([]),F=Object(k.a)(N,2),L=F[0],A=F[1],R=Object(r.useState)(.8),z=Object(k.a)(R,2),U=z[0],J=z[1],G=function(){if(l>0){var e=l-1,t=M(c[e].sentence);u(e),m(t),T(_(t)),A([]),S(!1)}},K=function(){if(l<c.length-1){var e=l+1,t=M(c[e].sentence);u(e),m(t),T(_(t)),A([]),S(!1)}},M=function(e){return e.toLocaleLowerCase().slice(0,-1).split(" ")},_=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},X=Object(ge.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&K()},onSwipedRight:function(e){e.absX>=140&&G()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(me,{parts:D.getParts(),currentPart:h,changeCurrentPart:function(e){return function(e){if(h!==e){var t=D.getSentences().filter((function(t){return t.part===e}));s(t),p(e),u(0),localStorage.setItem("grammerCurrentPart",e),localStorage.setItem("grammerWordIndex","0");var n=M(t[0].sentence);m(n),T(_(n)),A([]),S(!1)}}(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){J(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(B,{index:l,maxPage:c.length,onClickPrev:G,onClickNext:K}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},X),{},{children:Object(y.jsx)(we,{answer:f,stockWords:I,ansWords:L,sentence:c[l].sentence,translate:c[l].sentenceTrans,isAnsComplated:v,speechSpeedRate:U,moveAnsWords:function(e,t){return function(e,t){var n=L,r=I.filter((function(e,n){return n!==t}));n.push(e),A(n),T(r),E.speech(e,"en-US",1),f.length===n.length&&f.every((function(e,t){return e===n[t]}))?(S(!0),E.speech("OK."+c[l].sentence,"en-US",U)):S(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var n=I,r=L.filter((function(e,n){return n!==t}));n.push(e),T(n),A(r),f.length===r.length&&f.every((function(e,t){return e===r[t]}))?(S(!0),E.speech("OK."+c[l].sentence,"en-US",U)):S(!1)}(e,t)}})})),Object(y.jsx)("hr",{}),Object(y.jsx)(ne,{category:"Word",part:h,id:c[l].id})]})]})},Ce=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={height:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(N.a,{container:!0,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(N.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(R.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(N.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(R.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsxs)(N.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(R.a,{variant:"outlined",onClick:function(){E.speech(e.sentence,"en-US",1)},children:Object(y.jsx)(U.a,{fontSize:"small"})}),"favorite"!==e.currentPart&&Object(y.jsx)(ne,{category:"Grammer",part:e.currentPart,id:e.id})]})})]})},We=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"setGrammerData",value:function(){var e=[];return T.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/csv_new_horizon_j1?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],sentence:t[2],sentenceTrans:t[3],dummyWord:t[4]})})),sessionStorage.setItem("SENTENCES",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getGrammerData",value:function(){var e=sessionStorage.getItem("SENTENCES"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,sentence:e.sentence,sentenceTrans:e.sentenceTrans,dummyWord:e.dummyWord})})),t}},{key:"getFavoriteSentenceData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("favorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("SENTENCES"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Grammer"===e.category){var n=a.filter((function(t){return t.id===e.id}));if(n.length>0){var r=n[0];t.push({id:r.id,part:r.part,sentence:r.sentence,sentenceTrans:r.sentenceTrans,dummyWord:r.dummyWord})}}})),t):t}},{key:"getFirstPart",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getGrammerData().reduce((function(e,t){var n={id:t.id,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans,dummyWord:t.dummyWord};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),ke=function(){var e,t=null!==(e=localStorage.getItem("grammerCurrentPart"))&&void 0!==e?e:We.getFirstPart(),n=localStorage.getItem("grammerWordIndex")?Number(localStorage.getItem("grammerWordIndex")):0,a=Object(r.useState)(We.getSentences().filter((function(e){return e.part===t}))),c=Object(k.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(n),l=Object(k.a)(o,2),u=l[0],d=l[1],j=Object(r.useState)(""),h=Object(k.a)(j,2),p=h[0],b=h[1],O=Object(r.useState)([]),f=Object(k.a)(O,2),m=f[0],g=f[1],x=Object(r.useState)(!1),v=Object(k.a)(x,2),S=v[0],w=v[1],C=(m.slice(),Object(r.useState)([])),I=Object(k.a)(C,2),T=I[0],D=I[1],N=Object(r.useState)([]),F=Object(k.a)(N,2),L=F[0],A=F[1],R=Object(r.useState)(.8),z=Object(k.a)(R,2),U=z[0],J=z[1],G=function(){if(u>0){var e=u-1,t=_(s[e].sentence);d(e),localStorage.setItem("grammerWordIndex",e.toString()),g(t);var n=t.slice();n.push(s[e].dummyWord.toLocaleLowerCase()),D(X(n)),A([]),w(!1)}},K=function(){if(u<s.length-1){var e=u+1,t=_(s[e].sentence);d(e),localStorage.setItem("grammerWordIndex",e.toString()),g(t);var n=t.slice();n.push(s[e].dummyWord.toLocaleLowerCase()),D(X(n)),A([]),w(!1)}},M=function(e){if(p!==e){var t=[];t="favorite"===e?We.getFavoriteSentenceData():We.getSentences().filter((function(t){return t.part===e})),i(t),b(e),localStorage.setItem("grammerCurrentPart",e),d(0),localStorage.setItem("grammerWordIndex","0");var n=t.length>0?_(t[0].sentence):[];g(n);var r=n.slice();r.push(t.length>0?t[0].dummyWord.toLocaleLowerCase():""),D(X(r)),A([]),w(!1)}},_=function(e){return e.toLocaleLowerCase().slice(0,-1).split("  ")},X=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},Y=Object(ge.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&K()},onSwipedRight:function(e){e.absX>=140&&G()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){M(t)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(me,{parts:We.getParts(),currentPart:p,changeCurrentPart:function(e){return M(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){J(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(B,{index:u,maxPage:s.length,onClickPrev:G,onClickNext:K}),Object(y.jsx)("hr",{}),0==s.length&&Object(y.jsx)("p",{children:"no data"}),s.length>0&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",Object(W.a)(Object(W.a)({},Y),{},{children:Object(y.jsx)(Ce,{id:s[u].id,currentPart:p,answer:m,stockWords:T,ansWords:L,sentence:s[u].sentence,translate:s[u].sentenceTrans,isAnsComplated:S,moveAnsWords:function(e,t){return function(e,t){var n=L,r=T.filter((function(e,n){return n!==t}));n.push(e),A(n),D(r),E.speech(e,"en-US",1),m.length===n.length&&m.every((function(e,t){return e===n[t]}))?(w(!0),E.speech("OK."+s[u].sentence,"en-US",U)):w(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var n=T,r=L.filter((function(e,n){return n!==t}));n.push(e),D(n),A(r),m.length===r.length&&m.every((function(e,t){return e===r[t]}))?(w(!0),E.speech("OK."+s[u].sentence,"en-US",U)):w(!1)}(e,t)}})}))}),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:p})]})]})},Pe=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(u.a)(this,n);return(r=t.call(this,e)).state={currentPage:"WordPage"},D.setWordData(),We.setGrammerData(),r}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=Object(p.a)({palette:{primary:{main:O.a[800]},type:"dark"}}),n=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({currentPage:n}),"WordPage"!==n){t.next=6;break}return t.next=4,D.setWordData();case 4:t.next=9;break;case 6:if("WordTransPage"!==n){t.next=9;break}return t.next=9,We.setGrammerData();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(b.a,{theme:t,children:[Object(y.jsx)(f.a,{}),"WordPage"===this.state.currentPage&&Object(y.jsx)(xe,{}),"WordTransPage"===this.state.currentPage&&Object(y.jsx)(Se,{}),"WordGrammerPage"===this.state.currentPage&&Object(y.jsx)(ye,{}),"GrammerPage"===this.state.currentPage&&Object(y.jsx)(ke,{}),Object(y.jsx)(C,{currentPage:this.state.currentPage,changeCurrentPage:function(e){return n(e)}})]})}}]),n}(a.a.Component),Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Pe,{})}),document.getElementById("root")),Ie()}},[[140,1,2]]]);
//# sourceMappingURL=main.457c7ee3.chunk.js.map