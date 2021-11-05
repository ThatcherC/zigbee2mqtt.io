"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55044],{91328:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-0962d890",path:"/devices/NAS-AB02B0.html",title:"Neo NAS-AB02B0 control via MQTT",lang:"en-US",frontmatter:{title:"Neo NAS-AB02B0 control via MQTT",description:"Integrate your Neo NAS-AB02B0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-08-11T22:17:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Humidity_alarm (binary)",slug:"humidity-alarm-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Temperature_alarm (binary)",slug:"temperature-alarm-binary",children:[]},{level:3,title:"Alarm (binary)",slug:"alarm-binary",children:[]},{level:3,title:"Melody (enum)",slug:"melody-enum",children:[]},{level:3,title:"Duration (numeric)",slug:"duration-numeric",children:[]},{level:3,title:"Temperature_min (numeric)",slug:"temperature-min-numeric",children:[]},{level:3,title:"Temperature_max (numeric)",slug:"temperature-max-numeric",children:[]},{level:3,title:"Humidity_min (numeric)",slug:"humidity-min-numeric",children:[]},{level:3,title:"Humidity_max (numeric)",slug:"humidity-max-numeric",children:[]},{level:3,title:"Volume (enum)",slug:"volume-enum",children:[]},{level:3,title:"Power_type (enum)",slug:"power-type-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/NAS-AB02B0.md",git:{updatedTime:1636137985e3}}},34838:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const o=(0,a(66252).uE)('<h1 id="neo-nas-ab02b0" tabindex="-1"><a class="header-anchor" href="#neo-nas-ab02b0" aria-hidden="true">#</a> Neo NAS-AB02B0</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>NAS-AB02B0</td></tr><tr><td>Vendor</td><td>Neo</td></tr><tr><td>Description</td><td>Temperature &amp; humidity sensor and alarm</td></tr><tr><td>Exposes</td><td>temperature, humidity, humidity_alarm, battery_low, temperature_alarm, alarm, melody, duration, temperature_min, temperature_max, humidity_min, humidity_max, volume, power_type, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/NAS-AB02B0.jpg" alt="Neo NAS-AB02B0"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="humidity-alarm-binary" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-binary" aria-hidden="true">#</a> Humidity_alarm (binary)</h3><p>Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> humidity_alarm is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="temperature-alarm-binary" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-binary" aria-hidden="true">#</a> Temperature_alarm (binary)</h3><p>Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature_alarm is ON, if <code>false</code> OFF.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="melody-enum" tabindex="-1"><a class="header-anchor" href="#melody-enum" aria-hidden="true">#</a> Melody (enum)</h3><p>Value can be found in the published state on the <code>melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;melody&quot;: NEW_VALUE}</code>. The possible values are: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code>, <code>12</code>, <code>13</code>, <code>14</code>, <code>15</code>, <code>16</code>, <code>17</code>, <code>18</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric" aria-hidden="true">#</a> Duration (numeric)</h3><p>Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The unit of this value is <code>second</code>.</p><h3 id="temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-min-numeric" aria-hidden="true">#</a> Temperature_min (numeric)</h3><p>Value can be found in the published state on the <code>temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_min&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-max-numeric" aria-hidden="true">#</a> Temperature_max (numeric)</h3><p>Value can be found in the published state on the <code>temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_max&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-min-numeric" aria-hidden="true">#</a> Humidity_min (numeric)</h3><p>Value can be found in the published state on the <code>humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_min&quot;: NEW_VALUE}</code>. The unit of this value is <code>%</code>.</p><h3 id="humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-max-numeric" aria-hidden="true">#</a> Humidity_max (numeric)</h3><p>Value can be found in the published state on the <code>humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_max&quot;: NEW_VALUE}</code>. The unit of this value is <code>%</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum" aria-hidden="true">#</a> Volume (enum)</h3><p>Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="power-type-enum" tabindex="-1"><a class="header-anchor" href="#power-type-enum" aria-hidden="true">#</a> Power_type (enum)</h3><p>Value can be found in the published state on the <code>power_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>battery_full</code>, <code>battery_high</code>, <code>battery_medium</code>, <code>battery_low</code>, <code>usb</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',33),d={},i=(0,a(83744).Z)(d,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);