import{r as g,u as _,a as u,w as f,c as d,b as e,d as n,e as m,F as h,o as k,f as o,t as x,_ as D}from"./D0fYbKmV.js";import{P as S}from"./DnaWcvZJ.js";import{C as j}from"./BSIe6lCC.js";import{j as v,c as y}from"./D4rpJaJG.js";import{C}from"./Dr3ZK-CC.js";import{D as B}from"./DaFdgvNV.js";import"./DdhIQcny.js";import"./BC0fbRrU.js";const L={__name:"index",setup(N){const r=g(v),i=_(),c=u(i.params.sign),l=a=>r.find(p=>p.en===a),s=u(l(c.value));return f(()=>i.params.sign,a=>{c.value=a,s.value=l(a)}),(a,p)=>{const t=D;return k(),d(h,null,[e(S,null,{links:n(()=>[e(t,{to:"/"},{default:n(()=>[o("Главная")]),_:1}),e(t,{to:"/horoscope/japanese"},{default:n(()=>[o("Японский гороскоп")]),_:1}),e(t,{to:`/horoscope/japanese/${s.value.en}`},{default:n(()=>[o(x(s.value.ru),1)]),_:1},8,["to"])]),_:1}),e(B,{sign:s.value},null,8,["sign"]),e(j,{horoscopeType:"japanese",title:"Японский гороскоп",mb:40}),e(C,{signsData:m(r),title:"Описание знаков в Японском гороскопе",horoscopeType:"japanese",image:m(y)},null,8,["signsData","image"])],64)}}};export{L as default};
