(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{13:function(e,t,a){e.exports=a.p+"assets/img/extended-output.a47e5b0f.gif"},2315:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"servicenow-create-record-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servicenow-create-record-actions"}},[e._v("#")]),e._v(" ServiceNow - Create record actions")]),e._v(" "),r("h2",{attrs:{id:"create-record"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-record"}},[e._v("#")]),e._v(" Create record")]),e._v(" "),r("p",[e._v("This action creates a single record into any table in your ServiceNow instance.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(979),alt:"Create record action",width:"1000",height:"896"}}),e._v(" "),r("em",[e._v("Create record action")])],1),e._v(" "),r("h3",{attrs:{id:"input-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),r("td",[e._v("\n        Select a table to create a record in.\n      ")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#new-record-values"}},[e._v("New record values")])]),e._v(" "),r("td",[e._v("\n        Provide data for each column of the record to be created.\n      ")])])])]),e._v(" "),r("h3",{attrs:{id:"output-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),r("p",[e._v("The output datatree of this action contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(13),alt:"Output fields",width:"1101",height:"543"}}),e._v(" "),r("em",[e._v("Output fields")])],1),e._v(" "),r("h2",{attrs:{id:"create-record-using-a-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-record-using-a-template"}},[e._v("#")]),e._v(" Create record using a template")]),e._v(" "),r("p",[e._v("This action creates a single record into any table in your ServiceNow instance by applying a template to the newly created record.")]),e._v(" "),r("p",[e._v("After a template is chosen, you can map additional datapills to the new record. The template values will be applied on top of your mapping. You can choose to retain or override the template values in this action.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(980),alt:"Create record using a template action",width:"1000",height:"1174"}}),e._v(" "),r("em",[e._v("Create record using a template action")])],1),e._v(" "),r("h3",{attrs:{id:"input-fields-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),r("td",[e._v("\n        Select a table to create a record in.\n      ")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#template"}},[e._v("Template")])]),e._v(" "),r("td",[e._v("\n        Select a template associated with the selected table.\n      ")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#override-template"}},[e._v("Override template")])]),e._v(" "),r("td",[e._v("\n        Choose whether you want to override the default template values with the data provided in "),r("b",[e._v("New record values")]),e._v(".\n      ")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#new-record-values"}},[e._v("New record values")])]),e._v(" "),r("td",[e._v("\n        Provide data for each column of the record to be created.\n      ")])])])]),e._v(" "),r("h3",{attrs:{id:"output-fields-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),r("p",[e._v("The output datatree of this action contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.")]),e._v(" "),r("p",[e._v("Additionally, the sys ID of the template applied to this record is also included in the output.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(13),alt:"Output fields",width:"1101",height:"543"}}),e._v(" "),r("em",[e._v("Output fields")])],1),e._v(" "),r("h2",{attrs:{id:"input-field-definitions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-field-definitions"}},[e._v("#")]),e._v(" Input field definitions")]),e._v(" "),r("h3",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),r("p",[e._v("Select the table to create a record in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),e._v(" "),r("p",[e._v("Make sure that the connected user has "),r("router-link",{attrs:{to:"/connectors/servicenow.html#roles-and-permissions-required-to-connect"}},[e._v("sufficient access control")]),e._v(" to the selected table.")],1),e._v(" "),r("h3",{attrs:{id:"template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[e._v("#")]),e._v(" Template")]),e._v(" "),r("p",[e._v("Select the template to be applied to the newly created record. This can be done either by selecting a template from the pick list, or toggling the input field to text mode and providing the template sys ID. This template must be associated with the selected table.")]),e._v(" "),r("p",[e._v("Make sure that the connected user has "),r("router-link",{attrs:{to:"/connectors/servicenow.html#roles-and-permissions-required-to-connect"}},[e._v("sufficient access control")]),e._v(" to the selected template.")],1),e._v(" "),r("h3",{attrs:{id:"override-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#override-template"}},[e._v("#")]),e._v(" Override template")]),e._v(" "),r("p",[e._v("You can choose to override the pre-defined template values that will be automatically applied to the newly created record. If "),r("strong",[e._v("Yes")]),e._v(" is selected, any data provided for columns will be applied instead of template default values. This field defaults to "),r("strong",[e._v("No")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"new-record-values"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-record-values"}},[e._v("#")]),e._v(" New record values")]),e._v(" "),r("p",[e._v("Provide data for every column that needs to be filled for the new record in the selected table. This can be done by mapping datapills from previous triggers or actions into the respective columns.")])])}),[],!1,null,null,null);t.default=s.exports},979:function(e,t,a){e.exports=a.p+"assets/img/create-record-action.1330acd1.png"},980:function(e,t,a){e.exports=a.p+"assets/img/create-record-using-template-action.ef8ebd24.png"}}]);