"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10125],{78502:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3eb26020",path:"/guide/configuration/mqtt.html",title:"MQTT",lang:"en-US",frontmatter:{sidebarDepth:1},excerpt:"",headers:[{level:2,title:"Server connection",slug:"server-connection",children:[{level:3,title:"Specifying MQTT user/password and network_key in a different file",slug:"specifying-mqtt-user-password-and-network-key-in-a-different-file",children:[]}]},{level:2,title:"MQTT behaviour",slug:"mqtt-behaviour",children:[]},{level:2,title:"MQTT payload format",slug:"mqtt-payload-format",children:[]}],filePathRelative:"guide/configuration/mqtt.md",git:{updatedTime:1636137985e3}}},59218:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(66252).uE)('<h1 id="mqtt" tabindex="-1"><a class="header-anchor" href="#mqtt" aria-hidden="true">#</a> MQTT</h1><h2 id="server-connection" tabindex="-1"><a class="header-anchor" href="#server-connection" aria-hidden="true">#</a> Server connection</h2><p>Zigbee2MQTT requires a MQTT-Server connection to operate.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Required: MQTT settings</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token comment"># Required: MQTT base topic for Zigbee2MQTT MQTT messages</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n  <span class="token comment"># Required: MQTT server URL (use mqtts:// for SSL/TLS connection)</span>\n  <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://localhost:1883&#39;</span>\n  <span class="token comment"># Optional: absolute path to SSL/TLS certificate of CA used to sign server and client certificates (default: nothing)</span>\n  <span class="token key atrule">ca</span><span class="token punctuation">:</span> <span class="token string">&#39;/etc/ssl/mqtt-ca.crt&#39;</span>\n  <span class="token comment"># Optional: absolute paths to SSL/TLS key and certificate for client-authentication (default: nothing)</span>\n  <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&#39;/etc/ssl/mqtt-client.key&#39;</span>\n  <span class="token key atrule">cert</span><span class="token punctuation">:</span> <span class="token string">&#39;/etc/ssl/mqtt-client.crt&#39;</span>\n  <span class="token comment"># Optional: MQTT server authentication user (default: nothing)</span>\n  <span class="token key atrule">user</span><span class="token punctuation">:</span> my_user\n  <span class="token comment"># Optional: MQTT server authentication password (default: nothing)</span>\n  <span class="token key atrule">password</span><span class="token punctuation">:</span> my_password\n  <span class="token comment"># Optional: MQTT client ID (default: nothing)</span>\n  <span class="token key atrule">client_id</span><span class="token punctuation">:</span> <span class="token string">&#39;MY_CLIENT_ID&#39;</span>\n  <span class="token comment"># Optional: disable self-signed SSL certificates (default: true)</span>\n  <span class="token key atrule">reject_unauthorized</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: Include device information to mqtt messages (default: false)</span>\n  <span class="token key atrule">include_device_information</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: MQTT keepalive in seconds (default: 60)</span>\n  <span class="token key atrule">keepalive</span><span class="token punctuation">:</span> <span class="token number">60</span>\n  <span class="token comment"># Optional: MQTT protocol version (default: 4), set this to 5 if you</span>\n  <span class="token comment"># use the &#39;retention&#39; device specific configuration</span>\n  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">4</span>\n  <span class="token comment"># Optional: Disable retain for all send messages. ONLY enable if you MQTT broker doesn&#39;t</span>\n  <span class="token comment"># support retained message (e.g. AWS IoT core, Azure IoT Hub, Google Cloud IoT core, IBM Watson IoT Platform).</span>\n  <span class="token comment"># Enabling will break the Home Assistant integration. (default: false)</span>\n  <span class="token key atrule">force_disable_retain</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="specifying-mqtt-user-password-and-network-key-in-a-different-file" tabindex="-1"><a class="header-anchor" href="#specifying-mqtt-user-password-and-network-key-in-a-different-file" aria-hidden="true">#</a> Specifying MQTT user/password and network_key in a different file</h3><p>To specify the MQTT user/password in a different file, e.g <code>secret.yaml</code>, use the following configuration.</p><p><strong>configuration.yaml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># IMPORTANT: Don&#39;t forget the quotes!</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret user&#39;</span>\n  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret password&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>secret.yaml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">user</span><span class="token punctuation">:</span> mqtt_user\n<span class="token key atrule">password</span><span class="token punctuation">:</span> mqtt_password\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mqtt-behaviour" tabindex="-1"><a class="header-anchor" href="#mqtt-behaviour" aria-hidden="true">#</a> MQTT behaviour</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: state caching, MQTT message payload will contain all attributes, not only changed ones.</span>\n  <span class="token comment"># Has to be true when integrating via Home Assistant (default: true)</span>\n  <span class="token key atrule">cache_state</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: persist cached state, only used when cache_state: true (default: true)</span>\n  <span class="token key atrule">cache_state_persistent</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: send cached state on startup, only used when cache_state_persistent: true (default: true)</span>\n  <span class="token key atrule">cache_state_send_on_startup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message</span>\n  <span class="token comment"># possible values are: disable (default), ISO_8601, ISO_8601_local, epoch (default: disable)</span>\n  <span class="token key atrule">last_seen</span><span class="token punctuation">:</span> <span class="token string">&#39;disable&#39;</span>\n  <span class="token comment"># Optional: Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg (default: false)</span>\n  <span class="token key atrule">elapsed</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token comment"># Optional: Enables report feature, this feature is DEPRECATED since reporting is now setup by default</span>\n  <span class="token comment"># when binding devices. Docs can still be found here: https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/information/report.md</span>\n  <span class="token key atrule">report</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: disables the legacy api (default: shown below)</span>\n  <span class="token key atrule">legacy_api</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="mqtt-payload-format" tabindex="-1"><a class="header-anchor" href="#mqtt-payload-format" aria-hidden="true">#</a> MQTT payload format</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">experimental</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: MQTT output type: json, attribute or attribute_and_json (default: shown below)</span>\n  <span class="token comment"># Examples when &#39;state&#39; of a device is published</span>\n  <span class="token comment"># json: topic: &#39;zigbee2mqtt/my_bulb&#39; payload &#39;{&quot;state&quot;: &quot;ON&quot;}&#39;</span>\n  <span class="token comment"># attribute: topic &#39;zigbee2mqtt/my_bulb/state&#39; payload &#39;ON&quot;</span>\n  <span class="token comment"># attribute_and_json: both json and attribute (see above)</span>\n  <span class="token key atrule">output</span><span class="token punctuation">:</span> <span class="token string">&#39;json&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',14),t={},p=(0,a(83744).Z)(t,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);