webpackJsonp([42,141],{6:function(n,s,a){"use strict";a(13),a(12)},12:function(n,s){},13:function(n,s){},28:function(n,s,a){"use strict";a(6),a(37)},37:function(n,s){},593:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/segmented-control/demo/basic.md",id:"components-segmented-control-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SegmentedControl<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SegmentedControlExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`selectedIndex:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>selectedSegmentIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onValueChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sc-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Simplest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>SelectedIndex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>TintColor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">tintColor</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'#ff0000\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'0.8rem\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'5rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>onChange<span class="token operator">/</span>onValueChange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onValueChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControlExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],p=Object.getOwnPropertyDescriptor(s,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function p(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var o=a(1),c=(a(9),a(28),a(51)),l=n(c),u=(a(681),a(680)),i=n(u),k=function(n){function s(){var a,p,o;t(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=p=e(this,n.call.apply(n,[this].concat(l))),p.onChange=function(n){console.log("selectedIndex:"+n.nativeEvent.selectedSegmentIndex)},p.onValueChange=function(n){console.log(n)},o=a,e(p,o)}return p(s,n),s.prototype.render=function(){return o.createElement(l["default"],{size:"lg",className:"sc-example"},o.createElement("p",{className:"sub-title"},"Simplest"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c"]}),o.createElement("p",{className:"sub-title"},"Disabled"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c"],disabled:!0}),o.createElement("p",{className:"sub-title"},"SelectedIndex"),o.createElement(i["default"],{selectedIndex:1,values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"]}),o.createElement("p",{className:"sub-title"},"TintColor"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],tintColor:"#ff0000",style:{height:"0.8rem",width:"5rem"}}),o.createElement("p",{className:"sub-title"},"onChange/onValueChange"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],onChange:this.onChange,onValueChange:this.onValueChange}))},s}(o.Component);return o.createElement(k,null)},style:".sc-example {\n  padding-bottom: 0.26rem;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sc-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token number">0.26</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},680:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(3),c=t(o),l=a(5),u=t(l),i=a(4),k=t(i),r="/Users/temupsc/git/antd/ant-design-mobile/components/segmented-control/index.web.tsx",d=a(1),g=t(d),m=a(8),f=t(m),v=a(72),h=t(v),b=function(n){function s(a){(0,c["default"])(this,s);var t=(0,u["default"])(this,n.call(this,a));return t.state={selectedIndex:a.selectedIndex},t}return(0,k["default"])(s,n),s.prototype.componentWillReceiveProps=function(n){n.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:n.selectedIndex})},s.prototype.onClick=function(n,s,a){var t=this.props,e=t.disabled,p=t.onChange,o=t.onValueChange;e||this.state.selectedIndex===s||(n.nativeEvent=n.nativeEvent?n.nativeEvent:{},n.nativeEvent.selectedSegmentIndex=s,n.nativeEvent.value=a,p&&p(n),o&&o(a),this.setState({selectedIndex:s}))},s.prototype.renderSegmentItem=function(n,s,a){var t,e=this,o=this.props,c=o.prefixCls,l=o.disabled,u=o.tintColor,i=(0,f["default"])((t={},(0,p["default"])(t,c+"-item",!0),(0,p["default"])(t,c+"-item-selected",a),t)),k={color:a?"#fff":u,backgroundColor:a?u:"#fff",borderColor:u};return g["default"].createElement(h["default"],{key:n,disabled:l,activeClassName:c+"-item-active",__source:{fileName:r,lineNumber:47}},g["default"].createElement("div",{className:i,style:k,role:"tab","aria-selected":a&&!l,"aria-disabled":l,onClick:l?void 0:function(a){return e.onClick(a,n,s)},__source:{fileName:r,lineNumber:48}},g["default"].createElement("div",{className:c+"-item-inner",__source:{fileName:r,lineNumber:49}}),s))},s.prototype.render=function(){var n,s=this,a=this.props,t=a.className,e=a.prefixCls,o=a.style,c=a.disabled,l=a.values,u=void 0===l?[]:l,i=(0,f["default"])((n={},(0,p["default"])(n,t,!!t),(0,p["default"])(n,""+e,!0),(0,p["default"])(n,e+"-disabled",c),n));return g["default"].createElement("div",{className:i,style:o,role:"tablist",__source:{fileName:r,lineNumber:61}},u.map(function(n,a){return s.renderSegmentItem(a,n,a===s.state.selectedIndex)}))},s}(g["default"].Component);s["default"]=b,b.defaultProps={prefixCls:"am-segment",selectedIndex:0,disabled:!1,values:[],onChange:function(){},onValueChange:function(){},style:{},tintColor:""},n.exports=s["default"]},681:function(n,s,a){"use strict";a(6),a(810)},731:function(n,s,a){n.exports={basic:a(593)}},810:function(n,s){}});