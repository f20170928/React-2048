(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(15)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(2),l=t.n(r),s=(t(12),t(3)),o=t(4),c=t(6),d=t(5);t(13),t(14);function u(e){var n="grid tile"+e.value;return null==e.value||e.value<=64?a.a.createElement("div",{className:n},e.value):a.a.createElement("div",{className:"grid tilex"},e.value)}var h=function(e){Object(c.a)(t,e);var n=Object(d.a)(t);function t(e){var i;Object(s.a)(this,t),(i=n.call(this,e)).state={grids:Array(16).fill(null)};for(var a=Math.floor(16*Math.random()),r=Math.floor(16*Math.random());r==a;)r=Math.floor(16*Math.random());return i.state.grids[a]=2,i.state.grids[r]=2,i}return Object(o.a)(t,[{key:"renderGrid",value:function(e){return a.a.createElement(u,{value:this.state.grids[e]})}},{key:"indexCalc",value:function(e,n){return 4*e+n}},{key:"randomNullPostionGen",value:function(e){for(var n=new Array,t=0;t<4;t++)null==e[t]&&n.push(t),null==e[12+t]&&n.push(12+t);return null==e[4]&&n.push(4),null==e[7]&&n.push(7),null==e[8]&&n.push(8),null==e[11]&&n.push(11),1==n.length?null:n[Math.floor(Math.random()*n.length)]}},{key:"onUp",value:function(){for(var e=this.state.grids.slice(),n=0;n<4;n++)for(var t=0;t<4;t++)if(null!=e[this.indexCalc(t,n)])for(var i=t+1;i<4;i++)if(null!=e[this.indexCalc(i,n)]){e[this.indexCalc(t,n)]==e[this.indexCalc(i,n)]&&(e[this.indexCalc(t,n)]*=2,e[this.indexCalc(i,n)]=null);break}for(var a=0;a<4;a++)for(var r=0;r<4;r++)if(null==e[this.indexCalc(r,a)])for(var l=r+1;l<4;l++)if(null!=e[this.indexCalc(l,a)]){e[this.indexCalc(r,a)]=e[this.indexCalc(l,a)],e[this.indexCalc(l,a)]=null;break}var s=this.randomNullPostionGen(e);null==s||(e[s]=2),this.setState({grids:e})}},{key:"onDown",value:function(){for(var e=this.state.grids.slice(),n=3;n>=0;n--)for(var t=3;t>=0;t--)if(null!=e[this.indexCalc(t,n)])for(var i=t-1;i>=0;i--)if(null!=e[this.indexCalc(i,n)]){e[this.indexCalc(t,n)]==e[this.indexCalc(i,n)]&&(e[this.indexCalc(t,n)]*=2,e[this.indexCalc(i,n)]=null);break}for(var a=3;a>=0;a--)for(var r=3;r>=0;r--)if(null==e[this.indexCalc(r,a)])for(var l=r-1;l>=0;l--)if(null!=e[this.indexCalc(l,a)]){e[this.indexCalc(r,a)]=e[this.indexCalc(l,a)],e[this.indexCalc(l,a)]=null;break}var s=this.randomNullPostionGen(e);null==s||(e[s]=2),this.setState({grids:e})}},{key:"onLeft",value:function(){for(var e=this.state.grids.slice(),n=0;n<4;n++)for(var t=0;t<4;t++)if(null!=e[this.indexCalc(n,t)])for(var i=t+1;i<4;i++)if(null!=e[this.indexCalc(n,i)]){e[this.indexCalc(n,t)]==e[this.indexCalc(n,i)]&&(e[this.indexCalc(n,t)]*=2,e[this.indexCalc(n,i)]=null);break}for(var a=0;a<4;a++)for(var r=0;r<4;r++)if(null==e[this.indexCalc(a,r)])for(var l=r+1;l<4;l++)if(null!=e[this.indexCalc(a,l)]){e[this.indexCalc(a,r)]=e[this.indexCalc(a,l)],e[this.indexCalc(a,l)]=null;break}var s=this.randomNullPostionGen(e);null==s||(e[s]=2),this.setState({grids:e})}},{key:"onRight",value:function(){for(var e=this.state.grids.slice(),n=3;n>=0;n--)for(var t=3;t>=0;t--)if(null!=e[this.indexCalc(n,t)])for(var i=t-1;i>=0;i--)if(null!=e[this.indexCalc(n,i)]){e[this.indexCalc(n,t)]==e[this.indexCalc(n,i)]&&(e[this.indexCalc(n,t)]*=2,e[this.indexCalc(n,i)]=null);break}for(var a=3;a>=0;a--)for(var r=3;r>=0;r--)if(null==e[this.indexCalc(a,r)])for(var l=r-1;l>=0;l--)if(null!=e[this.indexCalc(a,l)]){e[this.indexCalc(a,r)]=e[this.indexCalc(a,l)],e[this.indexCalc(a,l)]=null;break}var s=this.randomNullPostionGen(e);null==s||(e[s]=2),this.setState({grids:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"board"},a.a.createElement("div",{className:"row"},this.renderGrid(0),this.renderGrid(1),this.renderGrid(2),this.renderGrid(3)),a.a.createElement("div",{className:"row"},this.renderGrid(4),this.renderGrid(5),this.renderGrid(6),this.renderGrid(7)),a.a.createElement("div",{className:"row"},this.renderGrid(8),this.renderGrid(9),this.renderGrid(10),this.renderGrid(11)),a.a.createElement("div",{className:"row"},this.renderGrid(12),this.renderGrid(13),this.renderGrid(14),this.renderGrid(15))),a.a.createElement("div",{className:"controls"},a.a.createElement("div",{className:"row"},a.a.createElement("button",{className:"up btn",onClick:function(){return e.onUp()}},"\u2191")),a.a.createElement("div",{className:"row"},a.a.createElement("button",{className:"left btn",onClick:function(){return e.onLeft()}},"\u2190"),a.a.createElement("button",{className:"down btn",onClick:function(){return e.onDown()}},"\u2193"),a.a.createElement("button",{className:"right btn",onClick:function(){return e.onRight()}},"\u2192"))))}}]),t}(a.a.Component),f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.75405e12.chunk.js.map