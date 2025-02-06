window.hjSiteSettings = window.hjSiteSettings || {"site_id":3901578,"rec_value":0.0,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console_consent":true,"anonymize_digits":false,"anonymize_emails":true,"suppress_all":false,"suppress_all_on_specific_pages":[],"suppress_text":false,"suppress_location":false,"user_attributes_enabled":true,"legal_name":"","privacy_policy_url":"","deferred_page_contents":[],"record_targeting_rules":[{"component":"trigger","match_operation":"exact","pattern":"student_flashcard_V1","negate":false},{"component":"trigger","match_operation":"exact","pattern":"answer_explanation_student","negate":false},{"component":"trigger","match_operation":"exact","pattern":"hints_students_clicked","negate":false}],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"abtasty":{"tag_recordings":false},"kissmetrics":{"send_user_id":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["ask.popover_redesign","client_script.compression.pc","error_reporting","feedback.embeddable_widget","feedback.widgetV2","settings.billing_v2","survey.embeddable_widget","survey.image_question","survey.screenshots"],"tracking_code_verified":true,"cs_project_id":null};

!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:String(n)}var r,i=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.send=t,this.batchSize=n,this.flushInterval=r,this.buffer=[],this.flushTimer=null}var n,r;return n=e,(r=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}var o,s=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},c={version:6,metricsUrl:(null===(r=window._hjSettings)||void 0===r?void 0:r.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},u={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},l=function(e,t,n){var r;u.loggedMetrics[e]=a(a({},u.loggedMetrics[e]),{},((r={})[t]=n||{},r))},d=function(e){if(!e)return"value";var t=Object.keys(e)[0];return t&&e[t]||"value"},f=function(e){var t,n=null!==(t=e.tag)&&void 0!==t?t:void 0;return u.isDebugEnabled?a(a(a({},n),e.extraTags),u.genericTags):n},h=function(e,t){if(!o)return!1;var n=u.isMetricsEnabled||u.isDebugEnabled;return"lab"===e&&(n=c.browser.inLab),"field"===e&&(n=u.isFieldMetricsEnabled),t?n&&t.flush:n},g=function(e){var t=!1,n="v=".concat(c.version),r="".concat(c.metricsUrl,"?").concat(n,"&site_id=").concat(window.hjSiteSettings.site_id)+(u.isDebugEnabled?"&debug=true":""),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(r,i)}catch(e){}if(!1===t)try{var a=new XMLHttpRequest;a.open("POST",r),a.timeout=1e4,a.send(i)}catch(e){}c.browser.shouldLogMetrics&&console.debug("New Metrics: ",e)},p={getConfig:function(e){return c[e]},getState:function(e){return u[e]},start:function(){try{c.browser={hasPerformance:s(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var e=p.time(),t=window.hjSiteSettings||{},n=t.features,r=t.site_id,a=new Set(n),l=c.sampling;return u.genericTags={site_id:r},u.isDebugEnabled=Math.random()<=l.universalDebug||a.has("client_script.metrics.debug")&&Math.random()<=l.debug,u.isMetricsEnabled=Math.random()<=l.metrics,u.isFieldMetricsEnabled=u.isMetricsEnabled&&Math.random()<=l.fieldMetrics,o=new i(g,c.buffer.bufferSize,c.buffer.flushInterval),e}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},count:function(e,t){var n=t.incr,r=t.tag,i=t.extraTags,s=t.type;try{var c,l=d(r),g=u.loggedMetrics[e],p=0;if(n?(p=(g&&g[l]||0)+(n.value||1),u.loggedMetrics[e]=a(a({},g),{},((c={})[l]=null!=n&&n.flush?0:p,c))):p=1,h(s,n)){var m={name:e,type:"count",value:p,tags:f({tag:r,extraTags:i})};o.add(m)}}catch(e){}},distr:function(e,t){var n=t.task,r=t.value,i=t.extraTags;h()&&o.add({name:e,type:"distribution",value:r,tags:f({tag:{task:n},extraTags:i})})},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(e){}},timeEnd:function(e,t){var n=t.tag,r=t.start,i=t.total,a=t.extraTags,s=t.type;try{var c=p.time();if(!i&&!c)return;var u=d(n),g=i||(r&&c?c-r:void 0);if(l(e,u,{}),g&&g>0&&h(s)){var m={name:e,type:"distribution",value:Math.round(g),tags:f({tag:n,extraTags:a})};o.add(m)}return c}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:n,error:t})}},timeIncr:function(e,t){var n,r,i,a,o=t.tag,s=t.start,c=t.flush,f=t.extraTags,h=t.type,g=hj.metrics.time(),m=s&&g?g-s:void 0,b=(n=e,{tagName:r=d(o),start:(a=(i=u.loggedMetrics[n])&&i[r]||{}).start,total:a.total}),v=m?m+(b.total||0):b.total;return l(e,b.tagName,{total:v}),c&&p.timeEnd(e,{tag:o,total:v,extraTags:f,type:h}),v},timeWatcher:function(){var e,t=0,n=!1,r=function(){var n,r=p.time();return t+=null!==(n=e&&r&&r-e)&&void 0!==n?n:0,e=p.time(),t};return{start:function(){if(!n)return n=!0,e=p.time()},incr:r,end:function(){var n=r();return t=0,e=void 0,n}}},getErrorMessage:function(e){return e instanceof Error?e.message:"string"==typeof e?e:""}};function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,w;window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=p;var y,_,j,S,E,T,M,O,A,R,x,C=hj.metrics.start(),I=!(!window.CS_CONF||null===(v=window.CS_CONF.voc)||void 0===v||!v.enabled),k=!(window.CS_CONF||!(null!==(w=window.hjSiteSettings.features)&&void 0!==w&&w.includes("cs_lite")||window._hjSettings.csid));if(window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.902ba72730e94f8c2fc4.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.4ecdf9f80441999f25f8.js"},SURVEY_ISOLATED:{js:"survey-isolated.2c26d4aeac750f2f7d08.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.f79c0c7bb13d8a14bddc.js"},SURVEY_INVITATION:{js:"survey-invitation.56858aaccbc6cd4e039e.js"},NOTIFICATION:{js:"notification.86732657079a99e6ce8a.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.c734b48cc2e5d195d87b.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.8417c6bba72228fa2e29.js"},USER_TEST:{js:"user-test.1d99a795623b8b551e4b.js"}},I)window._uxa.push(["start:hotjar",window.hjSiteSettings]);else if(k){window.CS_CONF_BASE=(T=(E=(y=window.hjSiteSettings).suppress_all||y.suppress_text||(null===(_=y.suppress_all_on_specific_pages)||void 0===_?void 0:_.length))?function(e){var t,n,r,i,a,o;if((e.suppress_all||e.suppress_text)&&(n=".*"),null!==(t=e.suppress_all_on_specific_pages)&&void 0!==t&&t.length){var s=e.suppress_all_on_specific_pages.find((function(e){return"regex"===e.match_operation}));s&&(n=null==s?void 0:s.pattern),i=e.suppress_all_on_specific_pages,a={contains:"contain",ends_with:"end",exact:"exact",simple:"contain",starts_with:"start"},r=(o=i.filter((function(e){return Object.keys(a).includes(e.match_operation)})).map((function(e){return{operator:a[e.match_operation],value:e.pattern,ignoreQueryParams:"simple"===e.match_operation,ignoreURIFragments:"simple"===e.match_operation,ignoreCaseSensitivity:"simple"===e.match_operation,notOperator:e.negate}}))).length?o:void 0}return{replayRecordingMaskedUrlRegex:n,replayRecordingMaskedUrlRegexRules:r}}(y):null,{projectId:y.cs_project_id,hostnames:[window.location.hostname],sampleRate:y.continuous_capture_enabled?100:100*y.rec_value,replayRecordingRate:y.record?100:0,jsErrorsEnabled:y.session_capture_console_consent,customError:y.session_capture_console_consent&&{enabled:!0,consoleMessageLogLevels:["error"]},voc:null!==(j=y.feedback_widgets)&&void 0!==j&&j.length||null!==(S=y.polls)&&void 0!==S&&S.length?{enabled:1,siteId:y.site_id}:{enabled:0},whitelistedAttributes:!E&&y.recording_capture_keystrokes?["data-hj-allow"]:[],anonymisationMethod:T,anonymizeDigits:!!E||y.anonymize_digits,anonymizeEmails:!!E||y.anonymize_emails,implementations:(M=y,O=m,A="manual"===(x=M.state_change_listen_mode)?[]:[{template:{name:"ArtificialPageView",args:{}},triggers:[{name:"HistoryChange",args:{listeners:"popstate, pushState, replaceState"+("automatic_with_fragments"===x?", hashchange":""),useDebounce:"no",window:400}}]}],A&&!Array.isArray(A)&&"number"==typeof A.length?b(A,A.length):O(A,R))}),window._uxa=window._uxa||[];var N=window._hjSettings.environment,B="t.contentsquare.net";N&&"live"!==N&&(window._hjSettings.csid&&(window.CS_CONF_BASE.projectId=window._hjSettings.csid),B="t-staging.contentsquare.net");var P=document.createElement("script");P.type="text/javascript",P.async=!0,P.src="//".concat(B,"/uxa/smb/tag.js"),document.getElementsByTagName("head")[0].appendChild(P)}else window.hjBootstrap=window.hjBootstrap||function(e,t,n){var r,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot|facebook","i"),a=(null===(r=window.navigator)||void 0===r?void 0:r.userAgent)||"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var o="http:"===window.location.protocol,s=Boolean(window._hjSettings.preview);if(o&&!s)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(e,t,n){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(n),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,n);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=e;var d=u.createElement("script");d.async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",l.appendChild(d),c.revision="1cc0f4b",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.8da33a8f469c3b5ffcec.js","3901578"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:C,type:"lab"})}();