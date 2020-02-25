(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{2198:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"jdbc-scheduled-query-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-scheduled-query-trigger"}},[e._v("#")]),e._v(" JDBC - Scheduled query trigger")]),e._v(" "),s("h2",{attrs:{id:"new-updated-batch-of-rows-via-scheduled-custom-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-batch-of-rows-via-scheduled-custom-sql"}},[e._v("#")]),e._v(" New/updated batch of rows via scheduled custom SQL")]),e._v(" "),s("p",[e._v("This trigger picks up rows that are inserted/updated in the selected table or view. Each row is processed as a separate job. It checks for new/updated rows once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(582),alt:"New/updated row trigger",width:"2206",height:"3383"}}),e._v(" "),s("em",[e._v("New/updated row trigger")])],1),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#sql"}},[e._v("SQL")])]),e._v(" "),s("td",[e._v("Custom SQL query to be executed at each poll interval to pick up new rows.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#schedule"}},[e._v("Schedule")])]),e._v(" "),s("td",[e._v("Choose how often you want the SQL to be run.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#timezone"}},[e._v("Timezone")])]),e._v(" "),s("td",[e._v("Choose the timezone for the schedule to be set in.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#hour"}},[e._v("Hour")])]),e._v(" "),s("td",[e._v("Configure the hour of the day you wish to execute the SQL query.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#minute"}},[e._v("Minute")])]),e._v(" "),s("td",[e._v("Configure the minute in the hour you wish to execute the SQL query.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#day-of-month"}},[e._v("Day of month")])]),e._v(" "),s("td",[e._v("Configure the day of the month you wish to execute the SQL query.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#days-of-week"}},[e._v("Days of week")])]),e._v(" "),s("td",[e._v("Select the days of the week you wish to execute the SQL query.")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#batch-size"}},[e._v("Batch size")])]),e._v(" "),s("td",[e._v("\n        Configure the batch size to process in each individual job for this recipe. This defaults to 100.\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"input-field-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-field-details"}},[e._v("#")]),e._v(" Input field details")]),e._v(" "),s("h3",{attrs:{id:"sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" SQL")]),e._v(" "),s("p",[e._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),s("code",[e._v("''")]),e._v(").")]),e._v(" "),s("p",[e._v("Avoid using limit clauses like "),s("code",[e._v("TOP")]),e._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),s("a",{attrs:{href:"#batch-size"}},[s("strong",[e._v("Batch size")]),e._v(" input field")]),e._v(". Adding your own limit clause will cause the action to fail.")]),e._v(" "),s("h3",{attrs:{id:"schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" Schedule")]),e._v(" "),s("p",[e._v("Select the type of schedule you want for your integration use case. This input field is a pick list with the following available choices:")]),e._v(" "),s("ul",[s("li",[e._v("hourly")]),e._v(" "),s("li",[e._v("daily")]),e._v(" "),s("li",[e._v("monthly")])]),e._v(" "),s("h3",{attrs:{id:"timezone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[e._v("#")]),e._v(" Timezone")]),e._v(" "),s("p",[e._v("Select the timezone for the scheduler to be set in. This is a required field.")]),e._v(" "),s("h3",{attrs:{id:"hour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hour"}},[e._v("#")]),e._v(" Hour")]),e._v(" "),s("p",[e._v("Configure the hour of the day you wish to execute the scheduled SQL query. This is required only if you selected "),s("strong",[e._v("daily")]),e._v(" or "),s("strong",[e._v("monthly")]),e._v(" as the "),s("a",{attrs:{href:"#schedule"}},[e._v("Schedule")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"minute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minute"}},[e._v("#")]),e._v(" Minute")]),e._v(" "),s("p",[e._v("Configure the minute in the hour you wish to execute the scheduled SQL query. This is always required.")]),e._v(" "),s("h3",{attrs:{id:"day-of-month"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day-of-month"}},[e._v("#")]),e._v(" Day of month")]),e._v(" "),s("p",[e._v("Provide a value between "),s("strong",[e._v("1")]),e._v(" to "),s("strong",[e._v("31")]),e._v(" for the day of the month. In shorter months, the values may be rounded down to the last day of the month. For example: if you use the value "),s("strong",[e._v("31")]),e._v(" and the month ends before the 31st, the trigger will run the SQL query on the last day of the month (e.g. 28th Feb, 31st Mar, 30th Apr, and so on)")]),e._v(" "),s("p",[e._v("Needed only if you selected "),s("strong",[e._v("monthly")]),e._v(" as the "),s("a",{attrs:{href:"#schedule"}},[e._v("Schedule")]),e._v(". This is an optional field that defaults to first day of the month if left empty.")]),e._v(" "),s("h3",{attrs:{id:"days-of-week"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#days-of-week"}},[e._v("#")]),e._v(" Days of week")]),e._v(" "),s("p",[e._v("Choose the days of the week you wish to execute the scheduled SQL query. This is required only if you selected "),s("strong",[e._v("hourly")]),e._v(" and "),s("strong",[e._v("daily")]),e._v(" as the "),s("a",{attrs:{href:"#schedule"}},[e._v("Schedule")]),e._v(". If you selected "),s("strong",[e._v("hourly")]),e._v(", the trigger will execute the SQL hourly on days that are selected here.")]),e._v(" "),s("h3",{attrs:{id:"batch-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[e._v("#")]),e._v(" Batch size")]),e._v(" "),s("p",[e._v("Batch size of rows to return in each job. This can be any number between "),s("strong",[e._v("1")]),e._v(" and the maximum batch size. Maximum batch size is "),s("strong",[e._v("100")]),e._v(" and default is "),s("strong",[e._v("100")]),e._v(".")]),e._v(" "),s("p",[e._v("In any given poll, if there are fewer rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")])])}),[],!1,null,null,null);t.default=r.exports},582:function(e,t,a){e.exports=a.p+"assets/img/scheduled-query-trigger.83a9f1d2.png"}}]);