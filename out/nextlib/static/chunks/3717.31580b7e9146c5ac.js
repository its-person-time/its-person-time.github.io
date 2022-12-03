(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3717,8575,3567,3920],{5868:function(e,n,t){"use strict";t.d(n,{P:function(){return u}});var r=t(7294),o=t(2494),a=t(2873),i=t(4520);function c(e){return r.createElement(o.JO,{focusable:"false","aria-hidden":!0,...e},r.createElement("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}))}var u=(0,a.Gp)((function(e,n){const t=(0,a.mq)("CloseButton",e),{children:o,isDisabled:u,__css:s,...l}=(0,i.Lr)(e);return r.createElement(a.m$.button,{type:"button","aria-label":"Close",ref:n,disabled:u,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...t,...s},...l},o||r.createElement(c,{width:"1em",height:"1em"}))}));u.displayName="CloseButton"},3621:function(e,n,t){"use strict";t.r(n),t.d(n,{BlockchainContext:function(){return k},TokenStatus:function(){return r},useBlockchainContext:function(){return v}});var r,o=t(7568),a=t(828),i=t(4051),c=t.n(i),u=t(5893),s=t(7294),l=t(241),f=t(6076),d=t(7948),h=t(333),p=t(3920),m=t(3454);!function(e){e.Burned="BURN",e.Minted="MINT",e.Waiting="WAIT"}(r||(r={}));var C={metamask:void 0,contractConnection:void 0,getWriteConnection:function(){},clearWriteConnection:function(){},signer:void 0,chainId:"0x0",latestBlockNum:0,loadSigner:function(){},changeChainManually:function(e){},tokenInfo:new Map,setTokenInfo:function(e){},isOwner:!1,isSubscriber:!1},x=s.createContext(C),v=function(){return s.useContext(x)},k=function(e){var n=e.child,t=window&&window.ethereum,r=(0,a.Z)(s.useState(),2),i=r[0],C=r[1],v=(0,a.Z)(s.useState(),2),k=v[0],w=v[1],b=(0,a.Z)(s.useState(),2),S=b[0],g=b[1],A=(0,a.Z)(s.useState("0x0"),2),N=A[0],T=A[1],_=(0,a.Z)(s.useState(0),2),E=_[0],y=_[1],P=(0,a.Z)(s.useState(new Map),2),I=P[0],O=P[1],R=(0,a.Z)(s.useState(!1),2),M=R[0],j=R[1],D=(0,a.Z)(s.useState(!1),2),L=D[0];D[1];t&&t.on("chainChanged",(function(e){window&&window.location.reload()})),t&&t.on("accountsChanged",(function(e){e[0]!==S&&(S||k)&&W()}));var Z=function(){var e=(0,o.Z)(c().mark((function e(){var n,r,o,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&p.SUPPORTED_CHAINS.includes(N)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=p.CONTRACT_INFO[N],r=new l.Q(t),o=r.getSigner(),a=new f.CH(n.address,n.abi,o),w(a),g(o._address),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=k,e.t0){e.next=5;break}return e.next=4,Z();case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:(n=e.sent).length>0&&(r=n[0],g(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){w(void 0),g(void 0)},Y=function(){if(p.SUPPORTED_CHAINS.includes(N)&&(!i||i.provider.network.chainId!==Number(N))){var e,n=p.CONTRACT_INFO[N];t?e=new l.Q(t):(e=d.yl(Number(N),{etherscan:process.env.REACT_APP_ETHERSCAN_API_KEY,infura:"-",alchemy:process.env.REACT_APP_ALCHEMY_API_KEY,pocket:"-",ankr:"-"}),e=new h.D(Number(N),process.env.REACT_APP_ALCHEMY_API_KEY));var r=new f.CH(n.address,n.abi,e);r.name().then((function(e){e===p.CONTRACT_NAME&&C(r)}))}},G={metamask:t,chainId:N,signer:S,contractConnection:i,getWriteConnection:H,clearWriteConnection:W,latestBlockNum:E,loadSigner:B,changeChainManually:function(e){T(e),W(),Y(),O(new Map)},tokenInfo:I,setTokenInfo:O,isOwner:M,isSubscriber:L};return s.useEffect((function(){function e(){return(e=(0,o.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_chainId"});case 2:n=e.sent,T(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?function(){e.apply(this,arguments)}():T("0x5")}),[]),s.useEffect((function(){Y()}),[N]),s.useEffect((function(){i&&(i.on("Transfer",(function(e,n,t,r){y(r.blockNumber)})),S&&i.balanceOf(S).then((function(e){j(e>0)})))}),[i]),(0,u.jsx)(x.Provider,{value:G,children:n})}},3567:function(e,n,t){"use strict";t.r(n),t.d(n,{NavContext:function(){return i},Pages:function(){return r},TutorialStep:function(){return o},useNavContext:function(){return c}});var r,o,a=t(7294);!function(e){e.CurrStatus="POEM",e.About="STORY",e.Home="LAND"}(r||(r={})),function(e){e.None="NONE",e.Rules="RULES",e.Image="IMAGE",e.TokenList="TOKENLIST"}(o||(o={}));var i=a.createContext({currPage:r.About,setCurrPage:function(e){},tutorialState:o.None,setTutorialState:function(e){}}),c=function(){return a.useContext(i)}},1948:function(e,n,t){"use strict";t.r(n),t.d(n,{PoemSvg:function(){return d}});var r=t(828),o=t(5893),a=t(7294),i=t(8395),c=t(7927),u=t(7741),s=t(3621),l=t(2415),f=t(3567),d=function(){var e=(0,i.If)().colorMode,n=(0,s.useBlockchainContext)(),t=n.contractConnection,d=n.metamask,h=(0,f.useNavContext)(),p=h.setTutorialState,m=h.tutorialState,C=(0,r.Z)(a.useState("Fetching blockchain info..."),2),x=C[0],v=C[1];a.useEffect((function(){t?t.getSvg().then((function(e){v(e)})):v("Can't fetch Poem contract info. Do you have Metamask installed? This site uses the Metamask to query the Ethereum blockchain without using any of your personal data.")}),[t]);return d&&!t?(0,o.jsx)(c.M5,{children:"Poem is currently only launched on the Rinkeby and Goerli networks. Please use Metamask to switch networks."}):t?(0,o.jsxs)(l.J2,{isOpen:m===f.TutorialStep.Image,placement:"right-start",children:[(0,o.jsx)(l.xo,{children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 0 800 800",dangerouslySetInnerHTML:{__html:function(n){var t="dark"===e?"#a9a9a9":"#999999",r="dark"===e?"#555555":"#aaaaaa",o="dark"===e?"white":"black",a="dark"===e?"#333333":"#cccccc";return n.replace('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" style="background:#1a1a1a">','<style>[class*="node"]{font-size:21px !important; overflow:hidden !important;}.node{color:'.concat(t," !important;} .nodeNotSelected{color:").concat(r," !important;} .nodeSelected{color:").concat(o," !important;} .nodeHidden{color:").concat(a," !important;}")+".sentence{font-size:70px !important;color:".concat(o," !important;text-align:left;font-family:serif}</style>"))}(x)}})}),(0,o.jsxs)(l.yk,{children:[(0,o.jsx)(l.QH,{}),(0,o.jsx)(l.us,{onClick:function(){p(f.TutorialStep.None)}}),(0,o.jsx)(l.Yt,{children:"The Poem"}),(0,o.jsx)(l.b,{fontSize:"16px",padding:"20px",children:"The poem is stored on the blockchain both as text and as the image you see here, available in each token's metadata. With every transaction, the view changes: switching between the poem we've constructed so far and a birds' eye view of the diamond"}),(0,o.jsxs)(l.DT,{as:c.kC,children:[(0,o.jsx)(c.LZ,{}),(0,o.jsx)(u.zx,{onClick:function(){p(f.TutorialStep.TokenList)},children:"next"})]})]})]}):(0,o.jsx)(c.M5,{children:x})}},3920:function(e,n,t){"use strict";t.r(n),t.d(n,{CHAIN_ID_TO_NAME:function(){return a},CONTRACT_INFO:function(){return u},CONTRACT_NAME:function(){return c},PARAGRAPH_SPACING:function(){return o},SUPPORTED_CHAINS:function(){return s},ZERO_ADDRESS:function(){return i}});var r=t(6971),o=5,a={"0x0":"Not connected","0x1":"Ethereum","0x3":"Ropsten","0x4":"Rinkeby","0x5":"Goerli","0x2a":"Kovan"},i="0x0000000000000000000000000000000000000000",c="PoemPathfinder",u={"0x4":{address:"0xDeE90CcC0ebD4b1cf3373621946b8fee22660f47",abi:r.abi,openSeaLink:"https://testnets.opensea.io/collection/poempathfinder"},"0x5":{address:"0x9b92C19698D61E6f8899CAD25390857FAD6eA5Cc",abi:r.abi}},s=Object.keys(u)},6601:function(){}}]);