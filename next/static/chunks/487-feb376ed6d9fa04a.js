"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{4016:(e,r,t)=>{t.d(r,{s:()=>s,t:()=>l});var o=t(451);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function s(...e){return o.useCallback(l(...e),e)}},6468:(e,r,t)=>{t.d(r,{hO:()=>a,sG:()=>i});var o=t(451),n=t(3458),l=t(8689),s=t(6131),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,i=o?l.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},8689:(e,r,t)=>{t.d(r,{DX:()=>s});var o=t(451),n=t(4016),l=t(6131),s=o.forwardRef((e,r)=>{let{children:t,...n}=e,s=o.Children.toArray(t),a=s.find(d);if(a){let e=a.props.children,t=s.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(i,{...n,ref:r,children:t})});s.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t),s=function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props);return t.type!==o.Fragment&&(s.ref=r?(0,n.t)(r,e):e),o.cloneElement(t,s)}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===a}},1225:(e,r,t)=>{t.d(r,{F:()=>s});var o=t(833);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,s=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==t?void 0:t[e],o=null==i?void 0:i[e];if(null===r)return null;let l=n(r)||n(o);return s[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,a,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},833:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},705:(e,r,t)=>{t.d(r,{A:()=>a});var o=t(451);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:d="",children:c,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:a?24*Number(i)/Number(n):i,className:l("lucide",d),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),a=(e,r)=>{let t=(0,o.forwardRef)((t,s)=>{let{className:a,...d}=t;return(0,o.createElement)(i,{ref:s,iconNode:r,className:l("lucide-".concat(n(e)),a),...d})});return t.displayName="".concat(e),t}},6454:(e,r,t)=>{t.d(r,{QP:()=>eu});let o=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(let e in t)a(t[e],o,e,r);return o},a=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){a(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},p=e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r;let t=[],o=0,n=0,l=0;for(let s=0;s<e.length;s++){let i=e[s];if(0===o&&0===n){if(":"===i){t.push(e.slice(l,s)),l=s+1;continue}if("/"===i){r=s;continue}}"["===i?o++:"]"===i?o--:"("===i?n++:")"===i&&n--}let s=0===t.length?e:e.substring(l),i=b(s);return{modifiers:t,hasImportantModifier:i!==s,baseClassName:i,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o},b=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,f=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],o=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...o.sort(),e),o=[]):o.push(e)}),t.push(...o.sort()),t}},m=e=>({cache:u(e.cacheSize),parseClassName:p(e),sortModifiers:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{isExternal:d,modifiers:c,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:b}=t(r);if(d){a=r+(a.length>0?" "+a:a);continue}let f=!!b,m=o(f?p.substring(0,b):p);if(!m){if(!f||!(m=o(p))){a=r+(a.length>0?" "+a:a);continue}f=!1}let g=l(c).join(":"),h=u?g+"!":g,w=h+m;if(s.includes(w))continue;s.push(w);let v=n(m,f);for(let e=0;e<v.length;++e){let r=v[e];s.push(h+r)}a=r+(a.length>0?" "+a:a)}return a};function w(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=v(e))&&(o&&(o+=" "),o+=r);return o}let v=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=v(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},y=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,z=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,N=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,P=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$=e=>z.test(e),M=e=>!!e&&!Number.isNaN(Number(e)),O=e=>!!e&&Number.isInteger(Number(e)),S=e=>e.endsWith("%")&&M(e.slice(0,-1)),A=e=>j.test(e),G=()=>!0,W=e=>N.test(e)&&!C.test(e),R=()=>!1,I=e=>E.test(e),_=e=>P.test(e),V=e=>!F(e)&&!Z(e),D=e=>ee(e,es,R),F=e=>y.test(e),L=e=>ee(e,ei,W),T=e=>ee(e,ea,M),q=e=>ee(e,et,R),B=e=>ee(e,en,_),X=e=>ee(e,R,I),Z=e=>k.test(e),Q=e=>er(e,ei),H=e=>er(e,ed),J=e=>er(e,et),K=e=>er(e,es),U=e=>er(e,en),Y=e=>er(e,ec,!0),ee=(e,r,t)=>{let o=y.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},er=(e,r,t=!1)=>{let o=k.exec(e);return!!o&&(o[1]?r(o[1]):t)},et=e=>"position"===e,eo=new Set(["image","url"]),en=e=>eo.has(e),el=new Set(["length","size","percentage"]),es=e=>el.has(e),ei=e=>"length"===e,ea=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...r){let t,o,n;let l=function(i){return o=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(i)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(w.apply(null,arguments))}}(()=>{let e=x("color"),r=x("font"),t=x("text"),o=x("font-weight"),n=x("tracking"),l=x("leading"),s=x("breakpoint"),i=x("container"),a=x("spacing"),d=x("radius"),c=x("shadow"),u=x("inset-shadow"),p=x("drop-shadow"),b=x("blur"),f=x("perspective"),m=x("aspect"),g=x("ease"),h=x("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],y=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[$,"px","full","auto",Z,F,a],j=()=>[O,"none","subgrid",Z,F],N=()=>["auto",{span:["full",O,Z,F]},Z,F],C=()=>[O,"auto",Z,F],E=()=>["auto","min","max","fr",Z,F],P=()=>[Z,F,a],W=()=>["start","end","center","between","around","evenly","stretch","baseline"],R=()=>["start","end","center","stretch"],I=()=>[Z,F,a],_=()=>["px",...I()],ee=()=>["px","auto",...I()],er=()=>[$,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",Z,F,a],et=()=>[e,Z,F],eo=()=>[S,L],en=()=>["","none","full",d,Z,F],el=()=>["",M,Q,L],es=()=>["solid","dashed","dotted","double"],ei=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ea=()=>["","none",b,Z,F],ed=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z,F],ec=()=>["none",M,Z,F],eu=()=>["none",M,Z,F],ep=()=>[M,Z,F],eb=()=>[$,"full","px",Z,F,a];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[A],breakpoint:[A],color:[G],container:[A],"drop-shadow":[A],ease:["in","out","in-out"],font:[V],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[A],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[A],shadow:[A],spacing:[M],text:[A],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$,F,Z,m]}],container:["container"],columns:[{columns:[M,F,Z,i]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...v(),F,Z]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[O,"auto",Z,F]}],basis:[{basis:[$,"full","auto",Z,F,i,a]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,$,"auto","initial","none",F]}],grow:[{grow:["",M,Z,F]}],shrink:[{shrink:["",M,Z,F]}],order:[{order:[O,"first","last","none",Z,F]}],"grid-cols":[{"grid-cols":j()}],"col-start-end":[{col:N()}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":j()}],"row-start-end":[{row:N()}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":E()}],"auto-rows":[{"auto-rows":E()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...W(),"normal"]}],"justify-items":[{"justify-items":[...R(),"normal"]}],"justify-self":[{"justify-self":["auto",...R()]}],"align-content":[{content:["normal",...W()]}],"align-items":[{items:[...R(),"baseline"]}],"align-self":[{self:["auto",...R(),"baseline"]}],"place-content":[{"place-content":W()}],"place-items":[{"place-items":[...R(),"baseline"]}],"place-self":[{"place-self":["auto",...R()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:er()}],w:[{w:[i,"screen",...er()]}],"min-w":[{"min-w":[i,"screen","none",...er()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[s]},...er()]}],h:[{h:["screen",...er()]}],"min-h":[{"min-h":["screen","none",...er()]}],"max-h":[{"max-h":["screen",...er()]}],"font-size":[{text:["base",t,Q,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,Z,T]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",S,F]}],"font-family":[{font:[H,F,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,Z,F]}],"line-clamp":[{"line-clamp":[M,"none",Z,T]}],leading:[{leading:[Z,F,l,a]}],"list-image":[{"list-image":["none",Z,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:et()}],"text-color":[{text:et()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...es(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",Z,L]}],"text-decoration-color":[{decoration:et()}],"underline-offset":[{"underline-offset":[M,"auto",Z,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...I()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...v(),J,q]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",K,D]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},O,Z,F],radial:["",Z,F],conic:[O,Z,F]},U,B]}],"bg-color":[{bg:et()}],"gradient-from-pos":[{from:eo()}],"gradient-via-pos":[{via:eo()}],"gradient-to-pos":[{to:eo()}],"gradient-from":[{from:et()}],"gradient-via":[{via:et()}],"gradient-to":[{to:et()}],rounded:[{rounded:en()}],"rounded-s":[{"rounded-s":en()}],"rounded-e":[{"rounded-e":en()}],"rounded-t":[{"rounded-t":en()}],"rounded-r":[{"rounded-r":en()}],"rounded-b":[{"rounded-b":en()}],"rounded-l":[{"rounded-l":en()}],"rounded-ss":[{"rounded-ss":en()}],"rounded-se":[{"rounded-se":en()}],"rounded-ee":[{"rounded-ee":en()}],"rounded-es":[{"rounded-es":en()}],"rounded-tl":[{"rounded-tl":en()}],"rounded-tr":[{"rounded-tr":en()}],"rounded-br":[{"rounded-br":en()}],"rounded-bl":[{"rounded-bl":en()}],"border-w":[{border:el()}],"border-w-x":[{"border-x":el()}],"border-w-y":[{"border-y":el()}],"border-w-s":[{"border-s":el()}],"border-w-e":[{"border-e":el()}],"border-w-t":[{"border-t":el()}],"border-w-r":[{"border-r":el()}],"border-w-b":[{"border-b":el()}],"border-w-l":[{"border-l":el()}],"divide-x":[{"divide-x":el()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":el()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...es(),"hidden","none"]}],"divide-style":[{divide:[...es(),"hidden","none"]}],"border-color":[{border:et()}],"border-color-x":[{"border-x":et()}],"border-color-y":[{"border-y":et()}],"border-color-s":[{"border-s":et()}],"border-color-e":[{"border-e":et()}],"border-color-t":[{"border-t":et()}],"border-color-r":[{"border-r":et()}],"border-color-b":[{"border-b":et()}],"border-color-l":[{"border-l":et()}],"divide-color":[{divide:et()}],"outline-style":[{outline:[...es(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,Z,F]}],"outline-w":[{outline:["",M,Q,L]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Y,X]}],"shadow-color":[{shadow:et()}],"inset-shadow":[{"inset-shadow":["none",Z,F,u]}],"inset-shadow-color":[{"inset-shadow":et()}],"ring-w":[{ring:el()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:et()}],"ring-offset-w":[{"ring-offset":[M,L]}],"ring-offset-color":[{"ring-offset":et()}],"inset-ring-w":[{"inset-ring":el()}],"inset-ring-color":[{"inset-ring":et()}],opacity:[{opacity:[M,Z,F]}],"mix-blend":[{"mix-blend":[...ei(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ei()}],filter:[{filter:["","none",Z,F]}],blur:[{blur:ea()}],brightness:[{brightness:[M,Z,F]}],contrast:[{contrast:[M,Z,F]}],"drop-shadow":[{"drop-shadow":["","none",p,Z,F]}],grayscale:[{grayscale:["",M,Z,F]}],"hue-rotate":[{"hue-rotate":[M,Z,F]}],invert:[{invert:["",M,Z,F]}],saturate:[{saturate:[M,Z,F]}],sepia:[{sepia:["",M,Z,F]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,F]}],"backdrop-blur":[{"backdrop-blur":ea()}],"backdrop-brightness":[{"backdrop-brightness":[M,Z,F]}],"backdrop-contrast":[{"backdrop-contrast":[M,Z,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,Z,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,Z,F]}],"backdrop-invert":[{"backdrop-invert":["",M,Z,F]}],"backdrop-opacity":[{"backdrop-opacity":[M,Z,F]}],"backdrop-saturate":[{"backdrop-saturate":[M,Z,F]}],"backdrop-sepia":[{"backdrop-sepia":["",M,Z,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",Z,F]}],ease:[{ease:["linear","initial",g,Z,F]}],delay:[{delay:[M,Z,F]}],animate:[{animate:["none",h,Z,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,Z,F]}],"perspective-origin":[{"perspective-origin":ed()}],rotate:[{rotate:ec()}],"rotate-x":[{"rotate-x":ec()}],"rotate-y":[{"rotate-y":ec()}],"rotate-z":[{"rotate-z":ec()}],scale:[{scale:eu()}],"scale-x":[{"scale-x":eu()}],"scale-y":[{"scale-y":eu()}],"scale-z":[{"scale-z":eu()}],"scale-3d":["scale-3d"],skew:[{skew:ep()}],"skew-x":[{"skew-x":ep()}],"skew-y":[{"skew-y":ep()}],transform:[{transform:[Z,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:ed()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eb()}],"translate-x":[{"translate-x":eb()}],"translate-y":[{"translate-y":eb()}],"translate-z":[{"translate-z":eb()}],"translate-none":["translate-none"],accent:[{accent:et()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:et()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,F]}],fill:[{fill:["none",...et()]}],"stroke-w":[{stroke:[M,Q,L,T]}],stroke:[{stroke:["none",...et()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}}]);