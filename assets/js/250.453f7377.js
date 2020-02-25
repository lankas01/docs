(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1078:function(e,s,t){e.exports=t.p+"assets/img/webhook-address-already-used.6c5ee0ae.png"},1079:function(e,s,t){e.exports=t.p+"assets/img/error-generating-schema.cf795da5.png"},2350:function(e,s,t){"use strict";t.r(s);var a=t(0),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"webhooks-connector-debug-common-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhooks-connector-debug-common-errors"}},[e._v("#")]),e._v(" Webhooks connector - Debug common errors")]),e._v(" "),a("p",[e._v("This document contains some common errors that you may come across when using this connector along with some explanation and ways to resolve the issues.")]),e._v(" "),a("h2",{attrs:{id:"commons-error-in-webhooks-wizard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commons-error-in-webhooks-wizard"}},[e._v("#")]),e._v(" Commons error in webhooks wizard")]),e._v(" "),a("h3",{attrs:{id:"webhook-address-is-already-used"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook-address-is-already-used"}},[e._v("#")]),e._v(" Webhook address is already used")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:t(1078),alt:"Webhook address is already used",width:"2630",height:"1218"}}),e._v(" "),a("em",[e._v("Webhook address is already used")])],1),e._v(" "),a("p",[e._v("This issue appears when you have another recipe with the same webhook address. The recipe ID is provided for your reference.")]),e._v(" "),a("h4",{attrs:{id:"why-does-this-happen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-does-this-happen"}},[e._v("#")]),e._v(" Why does this happen?")]),e._v(" "),a("p",[e._v("The event name will become part of the unique webhook address generated. To avoid recipes receiving webhook events from multiple sources, the event name must be unique across all your webhook recipes.")]),e._v(" "),a("h4",{attrs:{id:"how-do-i-fix-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-fix-this"}},[e._v("#")]),e._v(" How do I fix this?")]),e._v(" "),a("p",[e._v("To address this issue, you just need to use a different event name.")]),e._v(" "),a("h3",{attrs:{id:"error-generating-schema-for-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-generating-schema-for-response"}},[e._v("#")]),e._v(" Error generating schema for response")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:t(1079),alt:"Error generating schema",width:"2623",height:"2591"}}),e._v(" "),a("em",[e._v("Error generating schema")])],1),e._v(" "),a("p",[e._v("This issue appears when there is a mismatch between the detected "),a("strong",[e._v("Content-Type")]),e._v(" (from the webhook header) and the payload data type. In the image above, the webhook wizard detected that the webhook contains JSON data from the header. However, it encountered an error when trying to parse the XML payload, "),a("code",[e._v("<id>1</id>")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"why-does-this-happen-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-does-this-happen-2"}},[e._v("#")]),e._v(" Why does this happen?")]),e._v(" "),a("p",[e._v("This happens with legacy or custom applications that may not follow standard HTTP practices, specifically a "),a("strong",[e._v("Content-Type")]),e._v(" that does not match the payload format.")]),e._v(" "),a("h4",{attrs:{id:"how-do-i-fix-this-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-fix-this-2"}},[e._v("#")]),e._v(" How do I fix this?")]),e._v(" "),a("p",[e._v("Check with the owner of the application to ensure that the webhooks API is sending the right format and make adjustments if needed. Often, this is not possible. In that case, click "),a("strong",[e._v("Save and skip >")]),e._v(" and configure the payload schema manually.")])])}),[],!1,null,null,null);s.default=o.exports}}]);