(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{2204:function(e,t,s){"use strict";s.r(t);var o=s(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"java-messaging-service-jms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java-messaging-service-jms"}},[e._v("#")]),e._v(" Java messaging service (JMS)")]),e._v(" "),o("p",[e._v("The JMS connector allows Workato to interact with JMS providers. The adapter can subscribe to topic/queue and publish to topic/queue. The JMS connector is an on-premise connector.")]),e._v(" "),o("h2",{attrs:{id:"supported-editions-and-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-editions-and-versions"}},[e._v("#")]),e._v(" Supported editions and versions")]),e._v(" "),o("p",[e._v("The connector supports "),o("a",{attrs:{href:"https://aws.amazon.com/sqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon SQS"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"http://activemq.apache.org/jms.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache MQ JMS"),o("OutboundLink")],1),e._v(", and "),o("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/service-bus/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Service Bus"),o("OutboundLink")],1),e._v(" implementations.")]),e._v(" "),o("h2",{attrs:{id:"how-to-connect-to-the-jms-connector-on-workato"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-the-jms-connector-on-workato"}},[e._v("#")]),e._v(" How to connect to the JMS connector on Workato")]),e._v(" "),o("p",[e._v("The JMS connector is an on-premise connector, therefore requiring Workato's "),o("router-link",{attrs:{to:"/on-prem.html"}},[e._v("on-premise agent")]),e._v(" and "),o("router-link",{attrs:{to:"/on-prem/agents/profile.html#jms-profile"}},[e._v("JMS connection profiles")]),e._v(" to be set up before it can be used.")],1),e._v(" "),o("h2",{attrs:{id:"working-with-the-jms-connector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-jms-connector"}},[e._v("#")]),e._v(" Working with the JMS connector")]),e._v(" "),o("p",[e._v("In order to work with the JMS connector, users have to have a "),o("router-link",{attrs:{to:"/features/common-data-model.html"}},[e._v("common data model")]),e._v(" to work with.")],1),e._v(" "),o("h3",{attrs:{id:"using-the-new-message-in-queue-topic-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-new-message-in-queue-topic-trigger"}},[e._v("#")]),e._v(" Using the new message in queue/topic trigger")]),e._v(" "),o("p",[e._v("To use the trigger, enter the exact queue name and select the format of the message, as well as the schema of the message, which should have been previously defined as a "),o("router-link",{attrs:{to:"/features/common-data-model.html"}},[e._v("common data model")]),e._v(".")],1),e._v(" "),o("p",[o("DocImage",{attrs:{src:s(630),alt:"New message in queue trigger",width:"1382",height:"1142"}}),e._v(" "),o("em",[e._v("New message in queue trigger")])],1),e._v(" "),o("p",[e._v("The selected schema will create the output datatree for the trigger, for the message data to be used in the recipe for mapping to other systems.")]),e._v(" "),o("h3",{attrs:{id:"using-the-publish-message-in-queue-topic-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-publish-message-in-queue-topic-action"}},[e._v("#")]),e._v(" Using the publish message in queue/topic action")]),e._v(" "),o("p",[e._v("To use the action, enter the exact queue name and select the format of the message, as well as the schema of the message, which should have been previously defined as a "),o("router-link",{attrs:{to:"/features/common-data-model.html"}},[e._v("common data model")]),e._v(".")],1),e._v(" "),o("p",[o("DocImage",{attrs:{src:s(631),alt:"Step input output",width:"1346",height:"1164"}}),e._v(" "),o("em",[e._v("Publish message action")])],1),e._v(" "),o("p",[e._v("The selected schema will create the input fields for the action. Fill in these input fields to populate the message with the data you wish to send.")]),e._v(" "),o("p",[e._v("The selected schema will also create the output datatree for the trigger, for the message data to be used in the recipe for mapping to other systems.")])])}),[],!1,null,null,null);t.default=a.exports},630:function(e,t,s){e.exports=s.p+"assets/img/new-message-in-queue-trigger.6fb4ef61.png"},631:function(e,t,s){e.exports=s.p+"assets/img/publish-message-action.b156e2af.png"}}]);