(this["webpackJsonpjh-school-english"]=this["webpackJsonpjh-school-english"]||[]).push([[0],{49:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var s=t(0),i=t.n(s),a=t(12),r=t.n(a),c=(t(49),t(20)),o=t(21),d=t(24),l=t(23),h=t(35),j=t(88),b=t(89),u=t(90),v=(t(26),t(3)),x=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"word-wrap",children:Object(v.jsxs)(j.a,{maxWidth:"sm",children:[Object(v.jsx)("div",{onClick:function(){return e.props.onClick()},children:Object(v.jsx)("p",{className:"word",children:this.props.word})}),Object(v.jsx)("div",{className:this.props.visibleTrans,children:this.props.trans}),Object(v.jsx)(u.a,{style:{display:"inline-block",width:"100%",height:"20%"},onClick:function(){var n=new SpeechSynthesisUtterance;n.text=e.props.word,n.lang="en-US",window.speechSynthesis.speak(n)},children:"play"})]})})}}]),t}(s.Component),p=t(41),w=t.n(p),f=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(e){var s;Object(c.a)(this,t),s=n.call(this,e);return w.a.get("https://script.google.com/macros/s/AKfycbxPPDEVjPn7cZST-UF2INAmSAHNzGO-W6vK5xXPMoj3NDyazVhQR9jsZw/exec").then((function(e){console.log(e.data)})).catch((function(e){console.log("\u901a\u4fe1\u5931\u6557"),console.log(e.status)})),s.state={slides:[{word:"I",trans:"\u79c1\u306f",sentence:"I have a pen.",sentenceTrans:"\u79c1\u306f\u30da\u30f3\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"},{word:"my",trans:"\u79c1\u306e",sentence:"You are my friend.",sentenceTrans:"\u8cb4\u65b9\u306f\u79c1\u306e\u53cb\u9054\u3067\u3059\u3002"},{word:"me",trans:"\u79c1\u3092",sentence:"Ken doesn't know me.",sentenceTrans:"\u30b1\u30f3\u306f\u79c1\u3092\u77e5\u308a\u307e\u305b\u3093\u3002"}],wordIndex:1,visibleTrans:"translate-hidden",visibleSentenceTrans:"translate-hidden"},s}return Object(o.a)(t,[{key:"render",value:function(){var e,n,t,s,i=this,a=function(){void 0!==i.state.wordIndex&&i.state.wordIndex>0&&i.setState({wordIndex:i.state.wordIndex-1,visibleTrans:"translate-hidden",visibleSentenceTrans:"translate-hidden"})},r=function(){void 0!==i.state.wordIndex&&void 0!==i.state.slides&&i.state.wordIndex<i.state.slides.length-1&&i.setState({wordIndex:i.state.wordIndex+1,visibleTrans:"translate-hidden",visibleSentenceTrans:"translate-hidden"})},c=null!==(e=this.state.slides)&&void 0!==e?e:[],o=null!==(n=this.state.wordIndex)&&void 0!==n?n:0,d=null!==(t=this.state.visibleTrans)&&void 0!==t?t:"translate-hidden",l=null!==(s=this.state.visibleSentenceTrans)&&void 0!==s?s:"translate-hidden";return Object(v.jsxs)(j.a,{maxWidth:"sm",children:[Object(v.jsxs)(h.a,{onSwipedLeft:function(){console.log(1),r()},onSwipedRight:function(){console.log(2),a()},children:[Object(v.jsx)(x,{word:c[o].word,trans:c[o].trans,visibleTrans:d,onClick:function(){return i.setState({visibleTrans:"translate-visible"})}}),Object(v.jsx)("hr",{}),Object(v.jsx)(x,{word:c[o].sentence,trans:c[o].sentenceTrans,visibleTrans:l,onClick:function(){return i.setState({visibleSentenceTrans:"translate-visible"})}}),Object(v.jsx)("hr",{})]}),Object(v.jsxs)(b.a,{container:!0,justify:"center",children:[Object(v.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){a()},children:"Prev"}),Object(v.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){r()},children:"Next"})]})]})}}]),t}(s.Component),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(n){var t=n.getCLS,s=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),s(e),i(e),a(e),r(e)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(f,{})}),document.getElementById("root")),O()}},[[74,1,2]]]);
//# sourceMappingURL=main.b120b93e.chunk.js.map