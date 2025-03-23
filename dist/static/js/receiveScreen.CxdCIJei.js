import{d as ae,u as oe,j as r,a as le,w as C,E as se,G as ne,l as re,z as U,c as ue,e as b,i as F,f as c,m as L,r as y,n as ie,t as ce,h as m,g as de,b as O,v as Y,p as ve,H as me,T as fe,A as d,B as pe,k as $,q as he,s as M,y as q,C as ge,o as P,_ as Ue}from"./index.DoEgvpef.js";import{d as H,a as be,c as ye}from"./index.DRcMaQWl.js";import{u as Ie,c as De}from"./useAutoReceive.Cxi0rg11.js";import{u as we,c as ke,a as _e}from"./useAutoPlay.CCLiOSYS.js";import{u as Re}from"./useDOM.iYFPuhyl.js";import{u as Se}from"./history.CmTeTBOX.js";import{u as Ve}from"./webhook.2Jsr7by1.js";const Ce={class:"mt-4"},xe={class:"flex flex-1 items-end flex-wrap mb-4"},Le={class:"flex flex-none flex-row justify-end ml-4"},Me={class:"flex flex-1 items-end flex-wrap"},qe={class:"relative"},Pe=ae({__name:"receiveScreen",setup(Ee){const{t:a,locale:N}=oe();let s=r(null),E=r(null),k=r(null);const j=Se(),n=r({uid:"",time:"",timestamp:new Date().getTime(),result:"fail",action:"receive"}),p=re(),T=he(),e=le(),{width:z}=Re(),v=r(!1),I=r(!1),f=r(!1),h=r(!1),u=Ve(),i=r(null),_=r(null),x=()=>[{value:0,text:a("receiveModeOptions.0")},{value:1,text:a("receiveModeOptions.1")},{value:2,text:a("receiveModeOptions.2")}],D=r(x()[e.receiveModeIndex]);C(N,()=>{D.value=x()[e.receiveModeIndex]}),C(D,t=>{J(),e.receiveModeIndex=t.value}),C(()=>e.targetUID,(t,o)=>{T.push({query:{uid:e.targetUID}}),f.value=!1,o&&g()}),C(()=>e.customUID,(t,o)=>{console.log({curr:t,old:o}),f.value=!1,o&&g()});function W(){if(f.value=!0,u.getURL.length===0){d(a("webhook.getURLNotSet")),f.value=!1;return}u.sendRequest("get",{timestamp:n.value,action:"receive",hook:"on-get"},t=>{var o;U(a("webhook.getURLWebhookSuccess")),e.targetUID=String(((o=t.data)==null?void 0:o.uid)||""),f.value=!1},()=>{d(a("webhook.getURLWebhookFail")),f.value=!1})}function g(){B(),s.value&&s.value.id&&(M.warning("Cleaning up Peer instance soon",s.value.id),ke(s,k,E)),v.value=!1,I.value=!1}function Q(){if(!i.value)return;h.value=!h.value;const t=document.getElementById("app");t&&(t.style.display=h.value?"none":"block")}function G(){s.value=_e(e.customUID?e.customUID:void 0,$(p.query.peer)),s.value.on("error",t=>{d("⚠️ "+String(t)),g(),(e.enableAutoRefetch||p.query.refetch!==void 0)&&(R(),setTimeout(()=>U(a("toast.tryRefetchAfterError")),1500))}),s.value.on("open",()=>{var o,S;e.customUID||(e.customUID=((o=s.value)==null?void 0:o.id)||""),M.success("Peer instance is created",(S=s.value)==null?void 0:S.id);const t=De(D.value.value);if(k.value=s.value.call(e.targetUID,t),k.value===null){d(a("toast.badPeer"));return}_.value=s.value.connect(e.targetUID),_.value.on("data",l=>{typeof l=="string"&&l.startsWith("[TOAST_IN_CONSOLE]")?q(["toast-in-console",l.slice(18)]):ge(a("toast.findMsg")+" "+l),_.value&&_.value.send(a("toast.receiverheartbeatcheck")+"@"+e.customUID+": "+H().format("YYYY-MM-DD HH:mm:ss"))}),k.value.on("stream",l=>{q(["find stream",l]),v.value&&(M.success("Media stream loading complete",e.targetUID),q("Please check the media stream data",l)),E.value=l,i.value.srcObject=l,v.value=!0,I.value=!1,i.value.muted=!0,n.value.result="success",X()})})}function R(){if(g(),v.value=!1,!e.targetUID){u.getURL.length>0?U(a("toast.noUIDAndQuery")):d(a("toast.noUID"));return}if(!i.value){d(a("toast.loadingErr"));return}try{I.value=!0,n.value.uid=e.targetUID,n.value.time=H().format("YYYY-MM-DD HH:mm:ss"),G(),u.sendRequest("success",{action:"receive",uid:n.value.uid,time:n.value.time,timestamp:n.value.timestamp,result:"success",hook:"on-success"},()=>{U(a("webhook.successURLWebhookSuccess"))},()=>{d(a("webhook.successURLWebhookFail"))})}catch(t){v.value=!1,I.value=!1,d(a("toast.mediaErr")),u.sendRequest("fail",{action:"share",uid:n.value.uid,time:n.value.time,timestamp:n.value.timestamp,result:"fail",hook:"on-fail"},()=>{U(a("webhook.failURLWebhookSuccess"))},()=>{d(a("webhook.failURLWebhookFail"))}),pe(t)}finally{j.history.push(n.value),window.addEventListener("beforeunload",()=>{g()})}}function J(){g(),v.value=!1}function K(){window.vdo=i.value,console.log(i.value),be()&&ye.read().then(t=>{e.targetUID=t})}function A(){if(p.query.uid){const t=p.query.uid;e.targetUID=$(t);return}if(e.targetUID&&!p.query.uid){T.push({query:{uid:e.targetUID}});return}}A(),se(A),we(i,"Receiver");const{clearAutoReceive:B,restartAutoReceive:X}=Ie(i,R);return ne(()=>{if(B(),e.targetUID&&e.targetUID.length>0&&(e.autoRequireStream||p.query.autoplay!==void 0)){if(u.getURL.length>0&&e.targetUID.length===0){U(a("toast.autoFetchUID")),W();return}R()}}),(t,o)=>{const S=y("VaCardTitle"),l=y("VaInput"),V=y("VaButton"),Z=y("VaSelect"),ee=y("VaCardContent"),te=y("VaCard");return P(),ue("div",null,[b("div",Ce,[c(te,{class:"m-auto flex flex-col w-5/6 mb-4"},{default:L(()=>[c(S,{class:"text-lg"},{default:L(()=>[ie(ce(t.$t("receive.title")),1)]),_:1}),c(ee,null,{default:L(()=>[b("div",xe,[c(l,{label:t.$t("receive.inputLabel"),class:"grow w-24 md:w-auto",modelValue:m(e).targetUID,"onUpdate:modelValue":o[0]||(o[0]=w=>m(e).targetUID=w),clearable:"",placeholder:m(u).getURL.length>0?t.$t("receive.queryPlaceholder"):t.$t("receive.noqueryPlaceholder")},null,8,["label","modelValue","placeholder"]),b("div",Le,[c(V,{onClick:K,style:{height:"34px"},round:"",class:"flex-none",icon:"content_paste"}),m(u).getURL.length>0||m(u).uniURL.length>0?(P(),F(V,{key:0,onClick:W,style:{height:"34px"},round:"",loading:f.value,class:"flex-none ml-2",icon:"autorenew"},null,8,["loading"])):de("",!0),c(V,{onClick:R,style:{height:"34px"},round:"",loading:I.value,class:"flex-none ml-2",icon:"connected_tv"},null,8,["loading"])])]),b("div",Me,[c(l,{label:t.$t("receive.customLabel"),class:"grow w-24 md:w-auto",modelValue:m(e).customUID,"onUpdate:modelValue":o[1]||(o[1]=w=>m(e).customUID=w),clearable:"",placeholder:t.$t("receive.customPlaceholder")},null,8,["label","modelValue","placeholder"])]),c(Z,{"text-by":"text",modelValue:D.value,"onUpdate:modelValue":o[2]||(o[2]=w=>D.value=w),class:"w-full mt-4 mb-3",label:t.$t("receive.selectLabel"),options:x(),placeholder:t.$t("receive.selectPlaceholder")},null,8,["modelValue","label","options","placeholder"])]),_:1})]),_:1})]),(P(),F(fe,{to:"body",disabled:!h.value},[b("div",qe,[O(b("video",{class:ve(["w-5/6 m-auto shadow-md",{"video-fit-screen":h.value}]),ref_key:"screenVideo",ref:i,autoplay:"",controls:""},null,2),[[Y,v.value]]),O(c(V,{round:"",class:"ml-3 absolute opacity-20 hover:opacity-100 top-[0.5em]",style:me({right:h.value?"0.5em":"calc(8.33333% + 0.5em)"}),onClick:Q,icon:"fit_screen"},null,8,["style"]),[[Y,v.value&&m(z)>768]])])],8,["disabled"]))])}}}),$e=Ue(Pe,[["__scopeId","data-v-6b0979b6"]]);export{$e as default};
