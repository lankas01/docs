(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{2311:function(A,t,e){"use strict";e.r(t);var o=e(0),n=Object(o.a)({},(function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[o("h1",{attrs:{id:"sap-action-send-idoc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sap-action-send-idoc"}},[A._v("#")]),A._v(" SAP Action - Send IDoc")]),A._v(" "),o("p",[o("DocImage",{attrs:{src:e(957),alt:"Action Send IDoc",width:"1250",height:"394"}})],1),A._v(" "),o("p",[A._v("This action allows you to send IDoc to an on-premise SAP system, or to an SAP system on a server behind the corporate firewall. Note that you must "),o("router-link",{attrs:{to:"/connectors/sap.html#introduction-to-idoc"}},[A._v("configure IDocs in your SAP system")]),A._v(" before using this action.")],1),A._v(" "),o("h2",{attrs:{id:"input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[A._v("#")]),A._v(" Input fields")]),A._v(" "),o("table",[o("thead",[o("tr",[o("th",[A._v("Field name")]),A._v(" "),o("th",[A._v("Description")])])]),A._v(" "),o("tbody",[o("tr",[o("td",[A._v("IDoc name")]),A._v(" "),o("td",[A._v("The IDoc to send. You can select an IDoc name from the picklist or enter IDoc name directly. Note that the picklist only displays "),o("router-link",{attrs:{to:"/connectors/sap.html#step-4-create-partner-profile-for-workato"}},[A._v("IDocs that are configured in the partner profile in your SAP system")]),A._v(".")],1)]),A._v(" "),o("tr",[o("td",[A._v("Release number")]),A._v(" "),o("td",[A._v("Check with your SAP admin what IDoc release should be used. By default, Workato uses the earliest release of the selected IDoc.")])]),A._v(" "),o("tr",[o("td",[A._v("Wait for SAP to process the IDoc?")]),A._v(" "),o("td",[A._v("IDoc is processed asynchronously in SAP. So you can configure the recipe to wait for the processing to finish before moving on to the next recipe step.")])]),A._v(" "),o("tr",[o("td",[A._v("Check IDoc status every")]),A._v(" "),o("td",[A._v("This field will appear if "),o("code",[A._v("Wait for SAP to process the IDoc")]),A._v(" is set to "),o("code",[A._v("Yes")]),A._v(". Select how often Workato should call SAP. This is useful when you want to control the workload of your SAP system.")])])])]),A._v(" "),o("p",[A._v("After IDoc is selected, you can select IDoc input segments and fields. In this example, "),o("code",[A._v("E1MARAM")]),A._v(" and "),o("code",[A._v("EDI_DC40")]),A._v(" are selected.")]),A._v(" "),o("p",[o("DocImage",{attrs:{src:e(958),alt:"IDoc input segment 1",width:"632",height:"550"}})],1),A._v(" "),o("p",[o("DocImage",{attrs:{src:e(959),alt:"IDoc input segment 2",width:"628",height:"504"}})],1),A._v(" "),o("h2",{attrs:{id:"output-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[A._v("#")]),A._v(" Output fields")]),A._v(" "),o("table",[o("thead",[o("tr",[o("th",[A._v("Field name")]),A._v(" "),o("th",[A._v("Description")])])]),A._v(" "),o("tbody",[o("tr",[o("td",[A._v("IDoc number")]),A._v(" "),o("td",[A._v("SAP assigns this IDoc number after receiving the IDoc.")])]),A._v(" "),o("tr",[o("td",[A._v("Status")]),A._v(" "),o("td",[A._v("Status of the IDoc after being received by SAP.")])]),A._v(" "),o("tr",[o("td",[A._v("Status code")]),A._v(" "),o("td",[A._v("Status code of the IDoc after being received by SAP.")])]),A._v(" "),o("tr",[o("td",[A._v("Status description")]),A._v(" "),o("td",[A._v("Status description of the IDoc after being received by SAP.")])]),A._v(" "),o("tr",[o("td",[A._v("Submission ID")]),A._v(" "),o("td",[A._v("When Workato sends an IDoc to SAP, we will attach a "),o("code",[A._v("Submission ID")]),A._v(" to that IDoc. You can use that ID to check for IDoc status using action "),o("router-link",{attrs:{to:"/connectors/sap/action-check-idoc.html"}},[A._v("Check IDoc Status")]),A._v(".")],1)])])])])}),[],!1,null,null,null);t.default=n.exports},957:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABOIAAAGKCAMAAACWxx7kAAADAFBMVEX///9zUlJSUm702aXMzMz///T0///Y2NgcSYtSUlJun9LS9P//+tKsbVJSZaXl5eXYp3Og0/RXUlL6//9UdqhiUlJSUlduUlJSUmLZ2dr//OFSUnPj/P/v8O//9NL39/j///qBUlLH0uL8/P3Sn26gn5/u8fUjT4/v/v+54/3/+tj42q308e7R2uj//+1SZZ/08vRiga/esn9SdbJSUoTiuoONpMXuyZmDu+P/8c2jZVKazfH79PNSbaW8vr6lblLe+/9XWmLg5vD947n006Zwqdj73bLY+/96k7o8Y5tils1SWnH0+//6/P+XWVL+6MNfZV9SbaxSUn/EjFhgmdLn6Of/8dtQcqBziZqxdlLv6+ugtM1piLJzsd2k2vX006CQuda52/Th9P/p6um6hlbU8f9SUoqu3PT/8Mauv9XG8P9Uhruu3frcrXPS5fJup9JUaoFvaHCBst7S+v+slIHp///C6f+amJvSvaiguNPo7fJilMOcrL67y97N8f+tnIWRxevu8/mAeX8rVZNRdKb00J7kyqtydXNXjMdidIbm2su+qpRTgK2otrtSaJBFaqBXWlSl0/StkG7j0sLv+f/QsYL/8uOtyOKJalL//PR/bVuginFwkLe50uOFn7faxKf/6bzpwIrKlGBxfHv/6c1Tfre2xtbE4vjQy8X62aVVicS8flNbe6ucjISRk5NvWlPq067m0beboLKFWFKAZVSBd2+RrsHT0deSrtLjw51vfpXD1umexObg7/ZSWlfRmmLjvo7Sp29SWJVSWpxin9LRtppvZ2LX6/Lc4eticG6afmji29fy38xTZXOnjIBzZVT6+vlSWmKhflfIlW5SWoqNv+OaZVLYp27+9OlzfoT/6dL47N6KlaBiWlT03byGl6ligZvP6fz/9Nj45tLj//+sqZuql5nEzt28lH9in9is0evv2biEdWK51un/+++5kGhuiaObiXm8rZtzhqDYyLFSWlLKqnlul8i8u6PCn3P68eOEdVfC0LalraVSWqWxuKxqUQu5AAAV6ElEQVR42u3dCZRVdeHA8QvEDD8wn87AMMMwzCgIIrsKmFISoJLihqHibribpqamuO+7WaaluWSmVi6pZWWb7WX7vu/7Xqfl1H//39+9bx0GGGYg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"},958:function(A,t,e){A.exports=e.p+"assets/img/idoc-input-1.7b0ac4df.png"},959:function(A,t){A.exports="data:image/png;base64,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"}}]);