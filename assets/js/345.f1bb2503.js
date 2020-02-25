(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{161:function(e,t,a){e.exports=a.p+"assets/img/configured-webhook-trigger.09d36254.png"},2351:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"webhooks-trigger-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#webhooks-trigger-configuration"}},[e._v("#")]),e._v(" Webhooks trigger configuration")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(161),alt:"COnfigured webhooks trigger",width:"2494",height:"2646"}}),e._v(" "),i("em",[e._v("Configured webhooks trigger")])],1),e._v(" "),i("h2",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{colspan:"2",width:"25%"}},[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",{attrs:{colspan:"2"}},[e._v("Event name")]),e._v(" "),i("td",[i("p",[e._v("\n          Name for the event that this webhook trigger is listening to. This name will become part of the unique webhook address generated. This URL is visible below the input field and can be copied.\n        ")]),e._v(" "),i("p",[i("b",[e._v("To avoid recipes receiving webhook events from multiple sources, the event name must be unique across all your webhook recipes.")])]),e._v(" "),i("p",[e._v("\n          More specifically, the resultant webhooks address must be unique across all webhook triggers in a single Workato account.\n        ")])])]),e._v(" "),i("tr",[i("td",{attrs:{rowspan:"3"}},[e._v("Payload configuration")]),e._v(" "),i("td",[e._v("Webhook type")]),e._v(" "),i("td",[i("p",[e._v("\n          Select the type that matches the incoming webhooks. You can select from the following list.\n        ")]),e._v(" "),i("ul",[i("li",[e._v("GET request")]),e._v(" "),i("li",[e._v("PUT/POST with JSON payload")]),e._v(" "),i("li",[e._v("PUT/POST with XML payload")]),e._v(" "),i("li",[e._v("PUT/POST with FORM encoded payload")]),e._v(" "),i("li",[e._v("PUT/POST with raw binary data")]),e._v(" "),i("li",[e._v("PUT/POST with unicode text data")])])])]),e._v(" "),i("tr",[i("td",[e._v("Payload schema")]),e._v(" "),i("td",[i("p",[e._v("\n          Describe the fields that you expect from the webhook event. If you use the webhooks wizard, this will be automatically generated for you using the sample webhook event as a template.\n        ")]),e._v(" "),i("p",[e._v("\n          Otherwise, there are 2 ways to configure this input field. The easier way is to use a sample payload to get all the fields at once. Alternatively, you can add the fields individually.\n        ")]),e._v(" "),i("p",[i("b",[e._v("This field needs to be defined only if you choose the following webhook types:")])]),e._v(" "),i("ul",[i("li",[e._v("GET request")]),e._v(" "),i("li",[e._v("PUT/POST with JSON payload")]),e._v(" "),i("li",[e._v("PUT/POST with XML payload")]),e._v(" "),i("li",[e._v("PUT/POST with FORM encoded payload")])])])]),e._v(" "),i("tr",[i("td",[e._v("Headers")]),e._v(" "),i("td",[i("p",[e._v("\n          Describe the headers that you expect from the webhook event.\n        ")]),e._v(" "),i("p",[e._v("\n            Describe the headers that you expect from the webhook event. If you use the webhooks wizard, this will be automatically generated for you using the sample webhook event as a template.\n          ")]),e._v(" "),i("p",[e._v("\n            Otherwise, there are 2 ways to configure this input field. The easier way is to use a sample JSON to get all the fields at once. Alternatively, you can add the fields individually.\n          ")])])])])]),e._v(" "),i("h2",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Headers")]),e._v(" "),i("td",[i("p",[e._v("\n          This output object contains datapills of all the headers that you can expect from the webhook events calling this recipe. To add missing headers, just add a field in the "),i("b",[e._v("Headers")]),e._v(" input field.\n        ")])])]),e._v(" "),i("tr",[i("td",[e._v("Payload")]),e._v(" "),i("td",[i("p",[e._v("\n          This output object contains datapills matching the data that you can expect from the webhook events calling this recipe. To add/edit these fields, just update the "),i("b",[e._v("Payload schema")]),e._v(" input field.\n        ")])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);