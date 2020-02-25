(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{2261:function(t,e,r){"use strict";r.r(e);var a=r(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracle-upsert-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-upsert-actions"}},[t._v("#")]),t._v(" Oracle - Upsert actions")]),t._v(" "),a("p",[t._v("Workato offers both batch and single upsert row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our "),a("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#when-to-use-batch-of-rows-triggers-actions-vs-single-row-triggers-actions"}},[t._v("best practices on whether to use batch or single upsert actions")]),t._v(" and "),a("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#when-to-use-update-insert-and-upsert-actions"}},[t._v("when to use insert, update or update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"upsert-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upsert-row"}},[t._v("#")]),t._v(" Upsert row")]),t._v(" "),a("p",[t._v("This action upserts a single row into the selected table.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(794),alt:"Upsert row action",width:"2208",height:"1084"}}),t._v(" "),a("em",[t._v("Upsert row action")])],1),t._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("First, select a table to upsert rows in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),a("h3",{attrs:{id:"columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),a("p",[t._v("Columns in the selected table are then presented as input fields here. Map the required fields from the output datatree here to upsert a row with data from preceding trigger or actions.")]),t._v(" "),a("h4",{attrs:{id:"primary-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-key"}},[t._v("#")]),t._v(" Primary key")]),t._v(" "),a("p",[t._v("Primary key value will be used to determine if an update or an insert is executed in your Oracle database. If the primary key value of the given set of values exists in your table, that row will be updated with the values provided. In the absence of a row with the primary key value, a new row will be inserted with the values provided.")]),t._v(" "),a("h2",{attrs:{id:"upsert-batch-of-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upsert-batch-of-rows"}},[t._v("#")]),t._v(" Upsert batch of rows")]),t._v(" "),a("p",[t._v("This action allows you to upsert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to Oracle. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(795),alt:"Upsert batch of rows action",width:"1984",height:"1184"}}),t._v(" "),a("em",[t._v("Upsert batch of rows action")])],1),t._v(" "),a("h3",{attrs:{id:"table-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-2"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("Just like with the single row upsert action, you need to select the target table first.")]),t._v(" "),a("h3",{attrs:{id:"rows-source-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows-source-list"}},[t._v("#")]),t._v(" Rows source list")]),t._v(" "),a("p",[t._v("Unlike the "),a("strong",[t._v("Upsert row")]),t._v(" action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the "),a("em",[t._v("source")]),t._v(" of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:r(51),alt:"A list datapill from the datatree",width:"722",height:"944"}}),t._v(" "),a("em",[t._v("A list datapill from the datatree")])],1),t._v(" "),a("p",[t._v("If you do not map a list datapill to this field, this action will upsert only 1 row and will behave like the "),a("strong",[t._v("Upsert row")]),t._v(" action.")]),t._v(" "),a("h3",{attrs:{id:"columns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#columns-2"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),a("p",[t._v("Finally, you will need to map the required fields from the output datatree here to upsert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated (mappings like this will become a constant value for all rows).")]),t._v(" "),a("p",[t._v("Similar to the "),a("strong",[t._v("Upsert row")]),t._v(" action, primary key values provided will be used to determine an update or create for each row.")]),t._v(" "),a("p",[t._v("Refer to the "),a("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List management")]),t._v(" guide for more information about working with batches.")],1),t._v(" "),a("h2",{attrs:{id:"list-of-workato-triggers-and-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-workato-triggers-and-actions"}},[t._v("#")]),t._v(" List of Workato triggers and actions")]),t._v(" "),a("p",[t._v("Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/connectors/oracle/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/select.html"}},[t._v("Select actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/update.html"}},[t._v("Update actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/oracle/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),a("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/connectors/oracle/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=o.exports},51:function(t,e,r){t.exports=r.p+"assets/img/list_datapill_in_output_tree.20c81ae4.png"},794:function(t,e,r){t.exports=r.p+"assets/img/upsert_row_action.2103b017.png"},795:function(t,e,r){t.exports=r.p+"assets/img/upsert_rows_batch_action.2502384f.png"}}]);