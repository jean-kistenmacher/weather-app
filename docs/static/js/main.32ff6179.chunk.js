(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/weather.1dc721f6.svg"},15:function(e,a,t){e.exports=t(39)},20:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),s=t.n(r),l=(t(20),t(3)),i=t(2),m=t.n(i),o=t(14),p=t.n(o),u=(t(38),function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)({}),i=Object(l.a)(s,2),o=i[0],u=i[1];function d(e){document.getElementById("error").innerHTML=e}return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var a=e.coords,t=a.latitude,n=a.longitude;m.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&appid=").concat("ec89f27012340ab7a567a36736754331")).then((function(e){document.getElementById("city").value=e.data.name,r("http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@4x.png")),u(e.data)}))}))}),[]),c.a.createElement("section",{className:"app"},c.a.createElement("span",{className:"made-by"},"Made with ",c.a.createElement("span",null,"\u2764")," by Jean Kistenmacher"),c.a.createElement("img",{src:p.a,className:"wheater-svg",alt:"Weather symbol"}),c.a.createElement("div",{className:"app-tittle"},c.a.createElement("h1",null,"Weather App")),c.a.createElement("div",{className:"app-form"},c.a.createElement("input",{type:"text",name:"city",id:"city",className:"search-field",placeholder:"Search your city"}),c.a.createElement("button",{className:"submit-button",onClick:function(){var e=document.getElementById("city").value;d(""),m.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("ec89f27012340ab7a567a36736754331")).then((function(e){r("http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@4x.png")),u(e.data)})).catch((function(e){d("Please search for a valid city")}))}},"SUBMIT"),c.a.createElement("span",{id:"error",className:"error-message"})),c.a.createElement("div",{id:"appWeather"},o&&o.main&&c.a.createElement("div",{className:"weather-card"},c.a.createElement("img",{src:t,alt:"Weather icon"}),c.a.createElement("div",{className:"weather"},c.a.createElement("div",{className:"city-info"},c.a.createElement("span",{className:"city-name"},o.name),c.a.createElement("span",{className:"city-temp"},Math.round(o.main.temp-273.15),"\xba")),c.a.createElement("hr",null),c.a.createElement("div",{className:"weather-info"},c.a.createElement("span",{className:"sub-info"},"Feels Like: ",Math.round(o.main.feels_like-273.15),"\xba"),c.a.createElement("span",{className:"sub-info"},"Winds: ",Math.round(3.6*o.wind.speed),c.a.createElement("span",{className:"unity"},"k/h")),c.a.createElement("span",{className:"sub-info"},"Humidity: ",o.main.humidity,c.a.createElement("span",{className:"unity"},"%")),c.a.createElement("span",{className:"sub-info"},"Clouds: ",o.clouds.all,c.a.createElement("span",{className:"unity"},"%")))))))});s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.32ff6179.chunk.js.map