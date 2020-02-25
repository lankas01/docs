(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1607:function(t,e,s){t.exports=s.p+"assets/img/groups-statuses.4fe199a5.png"},1608:function(t,e,s){t.exports=s.p+"assets/img/agents-in-groups-statuses.36878556.png"},1609:function(t,e,s){t.exports=s.p+"assets/img/on-prem-connections.62cae25c.png"},2573:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),n("p",[t._v("The status of an on-prem group depends on the status of the on-prem agents that belong to a group. The group must be active for it to be used in a recipe.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:s(1607),alt:"On-prem groups statuses",width:"2668",height:"1368"}}),t._v(" "),n("em",[t._v("On-prem groups statuses")])],1),t._v(" "),n("h2",{attrs:{id:"on-prem-agent-status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-agent-status"}},[t._v("#")]),t._v(" On-prem agent status")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:s(1608),alt:"On-prem agents in a group",width:"2662",height:"1510"}}),t._v(" "),n("em",[t._v("On-prem agents in a group")])],1),t._v(" "),n("p",[t._v("Clicking into an on-prem group will show you the state of each agent in the group. An agent can have the following statuses.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Status")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Awaiting setup")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("This agent setup is incomplete. The agent setup is complete only when it has successfully connected for the first time.")])]),t._v(" "),n("tr",[n("td",[t._v("No response")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("This agent is currently not responding. This could be due to several reasons. Usually, this is because the agent is shut down or if the secure connection between Workato and the server is broken.")])]),t._v(" "),n("tr",[n("td",[t._v("Active")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("This agent is active and can process requests from Workato.")])]),t._v(" "),n("tr",[n("td",[t._v("Disabled")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("This agent is manually disabled. Requests will not be sent to this agent. It can be manually enabled to establish an active connection again.")])])])]),t._v(" "),n("h2",{attrs:{id:"active-on-prem-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#active-on-prem-group"}},[t._v("#")]),t._v(" Active on-prem group")]),t._v(" "),n("p",[t._v("An on-prem group must have at least one active agent for it to be an active group.")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Groups with more than one active agent will achieve high availability with fault tolerance and load balancing.")])])]),t._v(" "),n("p",[t._v("When the group has only a single active agent, it will continue to process the jobs but without the advantages of load balancing.")]),t._v(" "),n("h2",{attrs:{id:"connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[t._v("#")]),t._v(" Connections")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:s(1609),alt:"On-prem connections",width:"2666",height:"1448"}}),t._v(" "),n("em",[t._v("On-prem connections")])],1),t._v(" "),n("p",[t._v("A connection that connects through an on-prem group depends on the status of the group. Recipes that make use of these connections can only process jobs successfully when the group is active.")]),t._v(" "),n("p",[t._v("As long as a single agent within that group is active, on-prem requests can still be sent successfully.")])])}),[],!1,null,null,null);e.default=a.exports}}]);