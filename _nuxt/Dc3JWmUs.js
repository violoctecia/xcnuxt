import{g as z,u as I,a as w,z as B,l as D,c as a,b as e,d as l,e as c,h as m,n as u,k as p,F as P,o as n,f as v,t as C,p as V,q as E,_ as H}from"./D0fYbKmV.js";import{P as q}from"./DnaWcvZJ.js";import{H as F}from"./C7kC28G8.js";import{B as O}from"./BI06R3Kc.js";import{E as R}from"./q8FnZ3xx.js";import{O as T}from"./B6CY0Fzs.js";import"./Bx8tb0dj.js";import"./BC0fbRrU.js";const L=r=>(V("data-v-f990f9c3"),r=r(),E(),r),j={class:"choose_date"},A={class:"container"},G={class:"popup"},J=L(()=>m("p",null,"Гороскопы на другие дни:",-1)),K={class:"select"},M={__name:"tomorrow",props:{timePeriod:{type:String,default:"tomorrow"}},setup(r){const f=I(),$=r,y=f.params.sign,b={oven:["Овен","Овна"],taurus:["Телец","Тельца"],gemini:["Близнецы","Близнецов"],cancer:["Рак","Рака"],leo:["Лев","Льва"],virgo:["Дева","Девы"],libra:["Весы","Весов"],scorpio:["Скорпион","Скорпиона"],sagittarius:["Стрелец","Стрельца"],capricorn:["Козерог","Козерога"],aquarius:["Водолей","Водолея"],pisces:["Рыбы","Рыб"]},x={today:"Гороскоп на сегодня для ",tomorrow:"Гороскоп на завтра для ",weekly:"Гороскоп на неделю для ",monthly:"Гороскоп на месяц для ",yearly:"Гороскоп на год для "},o=w($.timePeriod);w(null);const k=b[y],N=k[0],g=k[1],h=B(()=>x[o.value]),S=D(),i=_=>{o.value=_;const s=`/horoscope/zodiac/${f.params.sign}/${_}`;S.push(s)};return(_,t)=>{const s=H;return n(),a(P,null,[e(q,null,{links:l(()=>[e(s,{to:"/"},{default:l(()=>[v("Главная")]),_:1}),e(s,{to:"/horoscope/zodiac"},{default:l(()=>[v("Зодиакальный гороскоп")]),_:1}),e(s,{to:`/horoscope/zodiac/${c(y)}`},{default:l(()=>[v(C(c(N)),1)]),_:1},8,["to"]),e(s,{to:`/horoscope/zodiac/${c(y)}/${o.value}`},{default:l(()=>[v(C(h.value+c(g)),1)]),_:1},8,["to"])]),_:1}),e(F,{dateInfo:{russianDate:h.value,genitiveCase:c(g)}},null,8,["dateInfo"]),m("div",j,[m("div",A,[m("div",G,[J,m("div",K,[o.value!=="today"?(n(),a("button",{key:0,class:u({active:o.value==="today"}),onClick:t[0]||(t[0]=d=>i("today"))}," Сегодня ",2)):p("",!0),o.value!=="tomorrow"?(n(),a("button",{key:1,class:u({active:o.value==="tomorrow"}),onClick:t[1]||(t[1]=d=>i("tomorrow"))}," Завтра ",2)):p("",!0),o.value!=="weekly"?(n(),a("button",{key:2,class:u({active:o.value==="weekly"}),onClick:t[2]||(t[2]=d=>i("weekly"))}," Неделя ",2)):p("",!0),o.value!=="monthly"?(n(),a("button",{key:3,class:u({active:o.value==="monthly"}),onClick:t[3]||(t[3]=d=>i("monthly"))}," Месяц ",2)):p("",!0),o.value!=="yearly"?(n(),a("button",{key:4,class:u({active:o.value==="yearly"}),onClick:t[4]||(t[4]=d=>i("yearly"))}," Год ",2)):p("",!0)])])])]),e(O),e(R),e(T)],64)}}},eo=z(M,[["__scopeId","data-v-f990f9c3"]]);export{eo as default};
