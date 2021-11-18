(this["webpackJsonpjh-school-english"]=this["webpackJsonpjh-school-english"]||[]).push([[0],{111:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),s=n.n(c),i=(n(111),n(71)),o=n.n(i),u=n(84),l=n(15),d=n(16),j=n(28),h=n(27),p=n(95),b=n(184),O=n(63),f=n(185),x=(n(41),n(169)),m=n(172),g=n(89),v=n.n(g),S=n(72),w=n.n(S),y=n(2),C=function(e){return Object(y.jsxs)(x.a,{showLabels:!0,style:{position:"fixed",bottom:0,width:"100%"},onChange:function(t,n){e.changeCurrentPage(n),sessionStorage.setItem("currentPage",n)},children:[Object(y.jsx)(m.a,{showLabel:!0,label:"Word",value:"WordPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(m.a,{showLabel:!0,label:"WordTrans",value:"WordTransPage",icon:Object(y.jsx)(w.a,{})}),Object(y.jsx)(m.a,{showLabel:!0,label:"Grammer",value:"GrammerPage",icon:Object(y.jsx)(v.a,{})})]})},W=n(23),k=n(7),P=n(173),I=n(61),L=n.n(I),D=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setWordData",value:function(){var e=[];return L.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/new_horizon_j1_word?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],word:t[2],plural:t[3],partOfSpeech:t[4],trans:t[5],sentence:t[6],sentenceTrans:t[7]})})),sessionStorage.setItem("WORDS",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getWordData",value:function(){var e=sessionStorage.getItem("WORDS"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,word:e.word,plural:e.plural,partOfSpeech:e.partOfSpeech,trans:e.trans,sentence:e.sentence,sentenceTrans:e.sentenceTrans})})),t}},{key:"getFirstPart",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getWordData().reduce((function(e,t){var n={part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),T=n(174),F=n(64),R=n(190),N=n(186),z=n(177),U=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"speech",value:function(e,t,n){var r=window.speechSynthesis.getVoices().filter((function(e){return e.lang===t}))[0],a=new SpeechSynthesisUtterance;a.text=e,a.lang=t,a.voice=r,a.rate=n,window.speechSynthesis.speak(a)}}]),e}(),A=n(21),E=n.n(A),G=n(39),M=n.n(G),K=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(T.a,{container:!0,children:[Object(y.jsx)(T.a,{item:!0,xs:10,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:this.props.trans})}),Object(y.jsx)(T.a,{item:!0,xs:2,children:Object(y.jsx)(R.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(F.a,{variant:"h4",className:this.props.visibleWord,children:this.props.word}),Object(y.jsx)("br",{}),Object(y.jsx)(T.a,{container:!0,direction:"row",children:Object(y.jsx)(N.a,{error:!this.props.isInputWordCompleted,label:this.props.isInputWordCompleted?"OK":"input word",fullWidth:!0,value:this.props.inputWordString,variant:"outlined",onChange:function(t){e.props.changeInputWord(t.target.value.toLowerCase()),e.props.word.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputWordCompleted(!0),e.props.onClick(),U.speech("OK. "+e.props.word,"en-US",1)):e.props.changeInputWordCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(T.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(M.a,{})})}),Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,variant:"outlined",onClick:function(){U.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(E.a,{})})})]})]})})}}]),n}(r.Component),J=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};this.props.partOfSpeech.length&&this.props.partOfSpeech;return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(F.a,{variant:"h4",className:this.props.visiblePlural,children:this.props.plural}),Object(y.jsx)("br",{}),Object(y.jsx)(T.a,{container:!0,direction:"row",children:Object(y.jsx)(N.a,{error:!this.props.isInputPluralCompleted,label:this.props.isInputPluralCompleted?"OK":"input plural",fullWidth:!0,value:this.props.inputPluralString,variant:"outlined",onChange:function(t){e.props.changeInputPlural(t.target.value.toLowerCase()),e.props.plural.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputPluralCompleted(!0),e.props.onClick(),U.speech("OK. "+e.props.plural,"en-US",1)):e.props.changeInputPluralCompleted(!1)}})}),Object(y.jsx)("br",{}),Object(y.jsxs)(T.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(M.a,{})})}),Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,variant:"outlined",onClick:function(){U.speech(e.props.plural,"en-US",1)},children:Object(y.jsx)(E.a,{})})})]})]})})}}]),n}(r.Component),_=n(187),X=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)("div",{onClick:function(){return e.props.onClick()},children:Object(y.jsx)("p",{className:"word",children:this.props.trans})}),Object(y.jsx)(F.a,{component:"div",children:Object(y.jsx)(_.a,{className:this.props.visibleSentence,m:1,children:this.props.sentence})}),Object(y.jsxs)(T.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,variant:"outlined",color:"primary",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(M.a,{fontSize:"small"})})}),Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,variant:"outlined",onClick:function(){U.speech(e.props.sentence,"en-US",e.props.speechSpeedRate)},children:Object(y.jsx)(E.a,{fontSize:"small"})})})]})]})})}}]),n}(r.Component),Y=n(90),V=n.n(Y),Q=n(91),H=n.n(Q),B=function(e){return Object(y.jsxs)(T.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(y.jsx)(z.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickPrev()},disabled:0===e.index,children:Object(y.jsx)(V.a,{})}),Object(y.jsx)(z.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickNext()},disabled:e.index>=e.maxPage-1,children:Object(y.jsx)(H.a,{})})]})},q=function(e){var t=e.currentPart;return Object(y.jsx)(T.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:Object(y.jsx)(F.a,{component:"div",children:Object(y.jsx)(_.a,{fontSize:"h6.fontSize",m:1,children:t})})})};function Z(e){return Object(y.jsx)("div",{children:Object(y.jsx)(z.a,{variant:"contained",color:"primary",size:"small",children:"\u304a\u6c17\u306b\u5165\u308a\u767b\u9332"})})}var $=n(179),ee=n(189),te=n(176),ne=n(180),re=n(191),ae=n(178),ce=n(94),se=n.n(ce),ie=n(181),oe=n(182),ue=n(93),le=n.n(ue),de=n(92),je=n.n(de),he=n(183),pe=function(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),a=n[0],c=n[1],s=e.parts,i=Object(ae.a)({list:{width:"50vw"}})();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)($.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){c(!a)}}),Object(y.jsx)(ee.a,{anchor:"right",open:a,onClose:function(){return c(!1)},children:Object(y.jsxs)("div",{className:i.list,children:[Object(y.jsx)(je.a,{onClick:function(){return c(!1)}}),Object(y.jsx)(te.a,{component:"nav","aria-label":"secondary part",children:s.map((function(t){return Object(y.jsxs)(ne.a,{button:!0,onClick:function(){e.changeCurrentPart(t),c(!1)},children:[Object(y.jsx)(ie.a,{primary:t}),Object(y.jsx)(oe.a,{children:t===e.currentPart&&Object(y.jsx)(le.a,{})})]},t)}))}),Object(y.jsx)(he.a,{}),Object(y.jsx)(te.a,{component:"nav","aria-label":"thirdry speechSpeed",children:Object(y.jsx)(ne.a,{children:Object(y.jsx)(re.a,{min:.1,max:1,step:.1,value:e.speechSpeedRate,"aria-labelledby":"speech-speed-rate",valueLabelDisplay:"auto",onChange:function(t,n){var r=e.speechSpeedRate;"number"===typeof n&&(r=n),e.changeSpeechSpeedRate(r)}})})})]})}),Object(y.jsx)(se.a,{})]})},be=n(40),Oe=function(){var e,t=null!==(e=sessionStorage.getItem("wordCurrentPart"))&&void 0!==e?e:D.getFirstPart(),n=Object(r.useState)(D.getWordData().filter((function(e){return e.part===t}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(t),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)("word-hidden"),O=Object(k.a)(b,2),f=O[0],x=O[1],m=Object(r.useState)("word-hidden"),g=Object(k.a)(m,2),v=g[0],S=g[1],w=Object(r.useState)("word-hidden"),C=Object(k.a)(w,2),I=C[0],L=C[1],T=Object(r.useState)(!1),F=Object(k.a)(T,2),R=F[0],N=F[1],z=Object(r.useState)(!1),U=Object(k.a)(z,2),A=U[0],E=U[1],G=Object(r.useState)(""),M=Object(k.a)(G,2),_=M[0],Y=M[1],V=Object(r.useState)(""),Q=Object(k.a)(V,2),H=Q[0],$=Q[1],ee=Object(r.useState)(.8),te=Object(k.a)(ee,2),ne=te[0],re=te[1],ae=function(){if(u>0){var e=u-1;l(e),sessionStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),S("word-hidden"),L("word-hidden"),N(!1),Y(""),$("")}},ce=function(){if(u<c.length-1){var e=u+1;l(e),sessionStorage.setItem("wordWordIndex",e.toString()),x("word-hidden"),S("word-hidden"),L("word-hidden"),N(!1),Y(""),$("")}},se=Object(be.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&ce()},onSwipedRight:function(e){e.absX>=140&&ae()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(pe,{parts:D.getParts(),currentPart:h,changeCurrentPart:function(e){return function(e){if(h!==e){var t=D.getWordData().filter((function(t){return t.part===e}));s(t),p(e),sessionStorage.setItem("wordCurrentPart",e),l(0),sessionStorage.setItem("wordWordIndex","0"),x("word-hidden"),L("word-hidden"),N(!1),Y(""),$("")}}(e)},speechSpeedRate:ne,changeSpeechSpeedRate:function(e){return function(e){re(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(B,{index:u,maxPage:c.length,onClickPrev:ae,onClickNext:ce}),Object(y.jsx)("hr",{}),Object(y.jsxs)("div",Object(W.a)(Object(W.a)({},se),{},{children:[Object(y.jsx)(K,{word:c[u].word,partOfSpeech:c[u].partOfSpeech,trans:c[u].trans,visibleWord:f,isInputWordCompleted:R,inputWordString:_,onClick:function(){return x("word-visible")},changeInputWordCompleted:function(e){return function(e){N(e)}(e)},changeInputWord:function(e){return function(e){Y(e)}(e)}}),c[u].plural&&Object(y.jsx)(J,{plural:c[u].plural,partOfSpeech:c[u].partOfSpeech,trans:c[u].trans,visiblePlural:v,isInputPluralCompleted:A,inputPluralString:H,onClick:function(){return S("word-visible")},changeInputPluralCompleted:function(e){return function(e){E(e)}(e)},changeInputPlural:function(e){return function(e){$(e)}(e)}})]})),Object(y.jsx)("hr",{}),Object(y.jsx)(X,{sentence:c[u].sentence,trans:c[u].sentenceTrans,visibleSentence:I,speechSpeedRate:ne,onClick:function(){return L("word-visible")}}),Object(y.jsx)("hr",{}),Object(y.jsx)(Z,{category:"Word",part:h,id:c[u].id}),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:h})]})]})},fe=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"},n=this.props.partOfSpeech.length?this.props.partOfSpeech:"";return Object(y.jsx)("div",{className:"word-wrap",children:Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsxs)(T.a,{container:!0,children:[Object(y.jsx)(T.a,{item:!0,xs:10,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:this.props.word})}),Object(y.jsx)(T.a,{item:!0,xs:2,children:Object(y.jsx)(R.a,{variant:"circular",component:"span",children:n.substr(0,1)})})]}),Object(y.jsx)(F.a,{variant:"h5",className:this.props.visibleWord,children:this.props.trans}),Object(y.jsx)("br",{}),Object(y.jsxs)(T.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:[Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,color:"primary",variant:"outlined",onClick:function(){return e.props.onClick()},children:Object(y.jsx)(M.a,{})})}),Object(y.jsx)(T.a,{item:!0,xs:5,children:Object(y.jsx)(z.a,{style:t,variant:"outlined",onClick:function(){U.speech(e.props.word,"en-US",1)},children:Object(y.jsx)(E.a,{})})})]})]})})}}]),n}(r.Component),xe=function(){var e,t=null!==(e=sessionStorage.getItem("wordCurrentPart"))&&void 0!==e?e:D.getFirstPart(),n=Object(r.useState)(D.getWordData().filter((function(e){return e.part===t}))),a=Object(k.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)("word-hidden"),j=Object(k.a)(d,2),h=j[0],p=j[1],b=Object(r.useState)(t),O=Object(k.a)(b,2),f=O[0],x=O[1],m=Object(r.useState)("word-hidden"),g=Object(k.a)(m,2),v=(g[0],g[1]),S=Object(r.useState)(!1),w=Object(k.a)(S,2),C=w[0],I=w[1],L=Object(r.useState)(""),T=Object(k.a)(L,2),F=T[0],R=T[1],N=Object(r.useState)(.8),z=Object(k.a)(N,2),U=z[0],A=z[1],E=function(){if(u>0){var e=u-1;l(e),sessionStorage.setItem("wordWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),R("")}},G=function(){if(u<c.length-1){var e=u+1;l(e),sessionStorage.setItem("wordWordIndex",e.toString()),p("word-hidden"),v("word-hidden"),I(!1),R("")}},M=Object(be.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&G()},onSwipedRight:function(e){e.absX>=140&&E()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(pe,{parts:D.getParts(),currentPart:f,changeCurrentPart:function(e){return function(e){if(f!==e){var t=D.getWordData().filter((function(t){return t.part===e}));s(t),x(e),sessionStorage.setItem("wordCurrentPart",e),l(0),sessionStorage.setItem("wordWordIndex","0"),p("word-hidden"),v("word-hidden"),I(!1),R("")}}(e)},speechSpeedRate:U,changeSpeechSpeedRate:function(e){return function(e){A(e)}(e)}}),Object(y.jsxs)(P.a,{maxWidth:"sm",children:[Object(y.jsx)(B,{index:u,maxPage:c.length,onClickPrev:E,onClickNext:G}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},M),{},{children:Object(y.jsx)(fe,{word:c[u].word,partOfSpeech:c[u].partOfSpeech,trans:c[u].trans,visibleWord:h,isInputWordCompleted:C,inputWordString:F,onClick:function(){return p("word-visible")},changeInputWordCompleted:function(e){return function(e){I(e)}(e)},changeInputWord:function(e){return function(e){R(e)}(e)}})})),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{currentPart:f})]})]})},me=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={minHeight:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(T.a,{container:!0,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(T.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(z.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(z.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(T.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(z.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(T.a,{container:!0,children:Object(y.jsx)(z.a,{style:{display:"inline-block",width:"100%",height:"20%"},variant:"outlined",onClick:function(){U.speech(e.sentence,"en-US",e.speechSpeedRate)},children:Object(y.jsx)(E.a,{fontSize:"small"})})})})]})},ge=function(){var e=Object(r.useState)(D.getSentences().filter((function(e){return e.part===D.getFirstPart()}))),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),s=Object(k.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(D.getFirstPart()),l=Object(k.a)(u,2),d=l[0],j=l[1],h=Object(r.useState)(n[i].sentence.toLocaleLowerCase().slice(0,-1).split(" ")),p=Object(k.a)(h,2),b=p[0],O=p[1],f=Object(r.useState)(!1),x=Object(k.a)(f,2),m=x[0],g=x[1],v=Object(r.useState)(b.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))),S=Object(k.a)(v,2),w=S[0],C=S[1],I=Object(r.useState)([]),L=Object(k.a)(I,2),T=L[0],F=L[1],R=Object(r.useState)(.8),N=Object(k.a)(R,2),z=N[0],A=N[1],E=function(){if(i>0){var e=i-1,t=M(n[e].sentence);o(e),O(t),C(K(t)),F([]),g(!1)}},G=function(){if(i<n.length-1){var e=i+1,t=M(n[e].sentence);o(e),O(t),C(K(t)),F([]),g(!1)}},M=function(e){return e.toLocaleLowerCase().slice(0,-1).split(" ")},K=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},J=Object(be.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&G()},onSwipedRight:function(e){e.absX>=140&&E()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(pe,{parts:D.getParts(),currentPart:d,changeCurrentPart:function(e){return function(e){if(d!==e){var t=D.getSentences().filter((function(t){return t.part===e}));a(t),j(e),o(0);var n=M(t[0].sentence);O(n),C(K(n)),F([]),g(!1)}}(e)},speechSpeedRate:z,changeSpeechSpeedRate:function(e){return function(e){A(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(B,{index:i,maxPage:n.length,onClickPrev:E,onClickNext:G}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},J),{},{children:Object(y.jsx)(me,{answer:b,stockWords:w,ansWords:T,sentence:n[i].sentence,translate:n[i].sentenceTrans,isAnsComplated:m,speechSpeedRate:z,moveAnsWords:function(e,t){return function(e,t){var r=T,a=w.filter((function(e,n){return n!==t}));r.push(e),F(r),C(a),U.speech(e,"en-US",1),b.length===r.length&&b.every((function(e,t){return e===r[t]}))?(g(!0),U.speech("OK."+n[i].sentence,"en-US",z)):g(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var r=w,a=T.filter((function(e,n){return n!==t}));r.push(e),C(r),F(a),b.length===a.length&&b.every((function(e,t){return e===a[t]}))?(g(!0),U.speech("OK."+n[i].sentence,"en-US",z)):g(!1)}(e,t)}})}))]})]})},ve=function(e){var t=e.stockWords,n=e.ansWords,r=e.sentence.substr(-1),a={display:"inline-block",minWidth:"20px",height:"40px",textTransform:"lowercase",margin:"5px"},c={height:"30vh"};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{maxWidth:"sm",children:Object(y.jsx)(T.a,{container:!0,children:Object(y.jsx)(F.a,{variant:"subtitle1",children:e.translate})})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsxs)(T.a,{container:!0,children:[n.map((function(t,n){return Object(y.jsx)(z.a,{style:a,color:e.isAnsComplated?"default":"secondary",variant:e.isAnsComplated?"outlined":"contained",size:"small",onClick:function(){return e.moveStockWords(t,n)},children:t},n)})),Object(y.jsx)(z.a,{style:a,color:"default",variant:"text",size:"small",children:r},"lastChar")]})}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(T.a,{container:!0,children:t.map((function(t,n){return Object(y.jsx)(z.a,{style:a,color:"primary",variant:"outlined",size:"small",onClick:function(){return e.moveAnsWords(t,n)},children:t},n)}))})}),Object(y.jsx)("hr",{}),Object(y.jsx)(P.a,{maxWidth:"sm",style:c,children:Object(y.jsx)(T.a,{container:!0,children:Object(y.jsx)(z.a,{style:{display:"inline-block",width:"100%",height:"20%"},variant:"outlined",onClick:function(){U.speech(e.sentence,"en-US",1)},children:Object(y.jsx)(E.a,{fontSize:"small"})})})})]})},Se=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setGrammerData",value:function(){var e=[];return L.a.get("https://sheets.googleapis.com/v4/spreadsheets/10QM4n6jg93YevAhr-yS8SFp8VjaK_lv09VF_HfFxTYk/values/csv_new_horizon_j1?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(t){if(!Array.isArray(t.data.values))return e;var n=t.data.values;n.shift(),n.forEach((function(t){e.push({id:t[0],part:t[1],sentence:t[2],sentenceTrans:t[3],dummyWord:t[4]})})),sessionStorage.setItem("SENTENCES",JSON.stringify(e))})).catch((function(){return e}))}},{key:"getGrammerData",value:function(){var e=sessionStorage.getItem("SENTENCES"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,sentence:e.sentence,sentenceTrans:e.sentenceTrans,dummyWord:e.dummyWord})})),t}},{key:"getFirstPart",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getGrammerData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getSentences",value:function(){return this.getGrammerData().reduce((function(e,t){var n={part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans,dummyWord:t.dummyWord};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),we=function(){var e=Object(r.useState)(Se.getSentences().filter((function(e){return e.part===Se.getFirstPart()}))),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),s=Object(k.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(Se.getFirstPart()),l=Object(k.a)(u,2),d=l[0],j=l[1],h=Object(r.useState)(n[i].sentence.toLocaleLowerCase().slice(0,-1).split("  ")),p=Object(k.a)(h,2),b=p[0],O=p[1],f=Object(r.useState)(!1),x=Object(k.a)(f,2),m=x[0],g=x[1],v=b.slice();v.push(n[i].dummyWord.toLocaleLowerCase());var S=Object(r.useState)(v.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))),w=Object(k.a)(S,2),C=w[0],I=w[1],L=Object(r.useState)([]),D=Object(k.a)(L,2),T=D[0],F=D[1],R=Object(r.useState)(.8),N=Object(k.a)(R,2),z=N[0],A=N[1],E=function(){if(i>0){var e=i-1,t=M(n[e].sentence);o(e),O(t);var r=t.slice();r.push(n[e].dummyWord.toLocaleLowerCase()),I(K(r)),F([]),g(!1)}},G=function(){if(i<n.length-1){var e=i+1,t=M(n[e].sentence);o(e),O(t);var r=t.slice();r.push(n[e].dummyWord.toLocaleLowerCase()),I(K(r)),F([]),g(!1)}},M=function(e){return e.toLocaleLowerCase().slice(0,-1).split("  ")},K=function(e){return e.map((function(e){return{weight:Math.random(),value:e}})).sort((function(e,t){return e.weight-t.weight})).map((function(e){return e.value}))},J=Object(be.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&G()},onSwipedRight:function(e){e.absX>=140&&E()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(pe,{parts:Se.getParts(),currentPart:d,changeCurrentPart:function(e){return function(e){if(d!==e){var t=Se.getSentences().filter((function(t){return t.part===e}));a(t),j(e),o(0);var n=M(t[0].sentence);O(n);var r=n.slice();r.push(t[0].dummyWord.toLocaleLowerCase()),I(K(r)),F([]),g(!1)}}(e)},speechSpeedRate:z,changeSpeechSpeedRate:function(e){return function(e){A(e)}(e)}}),Object(y.jsxs)(P.a,{children:[Object(y.jsx)(B,{index:i,maxPage:n.length,onClickPrev:E,onClickNext:G}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",Object(W.a)(Object(W.a)({},J),{},{children:Object(y.jsx)(ve,{answer:b,stockWords:C,ansWords:T,sentence:n[i].sentence,translate:n[i].sentenceTrans,isAnsComplated:m,moveAnsWords:function(e,t){return function(e,t){var r=T,a=C.filter((function(e,n){return n!==t}));r.push(e),F(r),I(a),U.speech(e,"en-US",1),b.length===r.length&&b.every((function(e,t){return e===r[t]}))?(g(!0),U.speech("OK."+n[i].sentence,"en-US",z)):g(!1)}(e,t)},moveStockWords:function(e,t){return function(e,t){var r=C,a=T.filter((function(e,n){return n!==t}));r.push(e),I(r),F(a),b.length===a.length&&b.every((function(e,t){return e===a[t]}))?(g(!0),U.speech("OK."+n[i].sentence,"en-US",z)):g(!1)}(e,t)}})}))]})]})},ye=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(l.a)(this,n);return(r=t.call(this,e)).state={currentPage:"WordPage"},D.setWordData(),Se.setGrammerData(),r}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=Object(p.a)({palette:{primary:{main:O.a[800]},type:"dark"}}),n=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({currentPage:n}),"WordPage"!==n){t.next=6;break}return t.next=4,D.setWordData();case 4:t.next=9;break;case 6:if("WordTransPage"!==n){t.next=9;break}return t.next=9,Se.setGrammerData();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(b.a,{theme:t,children:[Object(y.jsx)(f.a,{}),"WordPage"===this.state.currentPage&&Object(y.jsx)(Oe,{}),"WordTransPage"===this.state.currentPage&&Object(y.jsx)(xe,{}),"WordGrammerPage"===this.state.currentPage&&Object(y.jsx)(ge,{}),"GrammerPage"===this.state.currentPage&&Object(y.jsx)(we,{}),Object(y.jsx)(C,{currentPage:this.state.currentPage,changeCurrentPage:function(e){return n(e)}})]})}}]),n}(a.a.Component),Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(ye,{})}),document.getElementById("root")),Ce()}},[[138,1,2]]]);
//# sourceMappingURL=main.1cd5c1f0.chunk.js.map