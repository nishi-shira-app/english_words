(this["webpackJsonpjh-school-english"]=this["webpackJsonpjh-school-english"]||[]).push([[0],{37:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var s=t(0),i=t.n(s),r=t(11),a=t.n(r),c=(t(37),t(18)),d=t(19),o=t(22),l=t(21),h=t(57),b=t(58),j=t(59),u=(t(24),t(3)),v=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this,n=window.speechSynthesis.getVoices().filter((function(e){return"en-US"===e.lang}))[0];return Object(u.jsx)("div",{className:"word-wrap",children:Object(u.jsxs)(h.a,{maxWidth:"sm",children:[Object(u.jsx)("div",{onClick:function(){return e.props.onClick()},children:Object(u.jsx)("p",{className:"word",children:this.props.word})}),Object(u.jsx)("div",{className:this.props.visibleTrans,children:this.props.trans}),Object(u.jsx)(j.a,{style:{display:"inline-block",width:"100%",height:"20%"},onClick:function(){var t=new SpeechSynthesisUtterance;t.text=e.props.word,t.lang="en-US",t.voice=n,window.speechSynthesis.speak(t)},children:"play"})]})})}}]),t}(s.Component),p=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=n.call(this,e)).state={slides:[{word:"I",trans:"\u79c1\u306f",sentence:"I have a pen.",sentenceTrans:"\u79c1\u306f\u30da\u30f3\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"},{word:"my",trans:"\u79c1\u306e",sentence:"You are my friend.",sentenceTrans:"\u8cb4\u65b9\u306f\u79c1\u306e\u53cb\u9054\u3067\u3059\u3002"},{word:"me",trans:"\u79c1\u3092",sentence:"Ken doesn't know me.",sentenceTrans:"\u30b1\u30f3\u306f\u79c1\u3092\u77e5\u308a\u307e\u305b\u3093\u3002"}],wordIndex:1,visibleTrans:"translate-hidden",visibleSentenceTrans:"translate-hidden"},s}return Object(d.a)(t,[{key:"render",value:function(){var e,n,t,s,i=this,r=null!==(e=this.state.slides)&&void 0!==e?e:[],a=null!==(n=this.state.wordIndex)&&void 0!==n?n:0,c=null!==(t=this.state.visibleTrans)&&void 0!==t?t:"translate-hidden",d=null!==(s=this.state.visibleSentenceTrans)&&void 0!==s?s:"translate-hidden";return Object(u.jsxs)(h.a,{maxWidth:"sm",children:[Object(u.jsx)(v,{word:r[a].word,trans:r[a].trans,visibleTrans:c,onClick:function(){return i.setState({visibleTrans:"translate-visible"})}}),Object(u.jsx)("hr",{}),Object(u.jsx)(v,{word:r[a].sentence,trans:r[a].sentenceTrans,visibleTrans:d,onClick:function(){return i.setState({visibleSentenceTrans:"translate-visible"})}}),Object(u.jsx)("hr",{}),Object(u.jsxs)(b.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(u.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){void 0!==i.state.wordIndex&&i.state.wordIndex>0&&i.setState({wordIndex:i.state.wordIndex-1,visibleTrans:"translate-hidden",visibleSentenceTrans:"translate-hidden"})},children:"Prev"}),Object(u.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){void 0!==i.state.wordIndex&&void 0!==i.state.slides&&i.state.wordIndex<i.state.slides.length-1&&i.setState({wordIndex:i.state.wordIndex+1,visibleTrans:"translate-hidden",visibleSentenceTrans:"translate-hidden"})},children:"Next"})]})]})}}]),t}(s.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,s=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),s(e),i(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.6a0b292b.chunk.js.map