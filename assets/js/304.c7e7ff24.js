(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{2225:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-scheduled-query-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-scheduled-query-trigger"}},[e._v("#")]),e._v(" MySQL - Scheduled query trigger")]),e._v(" "),a("h2",{attrs:{id:"new-updated-batch-of-rows-via-scheduled-custom-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-batch-of-rows-via-scheduled-custom-sql"}},[e._v("#")]),e._v(" New/updated batch of rows via scheduled custom SQL")]),e._v(" "),a("p",[e._v("This trigger picks up rows that are returned from a user defined query which is run at an interval which is user defined. It is a batch action trigger and handles these returned rows in batches.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(685),alt:"New/updated row trigger",width:"2202",height:"4269"}}),e._v(" "),a("em",[e._v("New/updated row trigger")])],1),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#sql"}},[e._v("SQL")])]),e._v(" "),a("td",[e._v("Custom SQL query to be executed at each poll interval to pick up new rows.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#schedule"}},[e._v("Schedule")])]),e._v(" "),a("td",[e._v("Choose how often you want the SQL to be run.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#timezone"}},[e._v("Timezone")])]),e._v(" "),a("td",[e._v("Choose the timezone for the schedule to be set in.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#hour"}},[e._v("Hour")])]),e._v(" "),a("td",[e._v("Configure the hour of the day you wish to execute the SQL query.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#minute"}},[e._v("Minute")])]),e._v(" "),a("td",[e._v("Configure the minute in the hour you wish to execute the SQL query.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#day-of-month"}},[e._v("Day of month")])]),e._v(" "),a("td",[e._v("Configure the day of the month you wish to execute the SQL query.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#days-of-week"}},[e._v("Days of week")])]),e._v(" "),a("td",[e._v("Select the days of the week you wish to execute the SQL query.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#batch-size"}},[e._v("Batch size")])]),e._v(" "),a("td",[e._v("\n        Configure the batch size to process in each individual job for this recipe. This defaults to 100.\n      ")])])])]),e._v(" "),a("h2",{attrs:{id:"input-field-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-field-details"}},[e._v("#")]),e._v(" Input field details")]),e._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" SQL")]),e._v(" "),a("p",[e._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),a("code",[e._v("''")]),e._v("). Be sure to include some "),a("code",[e._v("WHERE")]),e._v(" clauses which can help prevent retrieving rows you have already processed in an earlier job run if that is your intention. This can be done by qualifying rows based on their "),a("code",[e._v("updated_at")]),e._v(" or "),a("code",[e._v("created_at")]),e._v(" timestamp columns in your table.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" contacts\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" contacts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("created_at "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("between")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTERVAL")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DAY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Avoid using limit clauses like "),a("code",[e._v("TOP")]),e._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),a("a",{attrs:{href:"#batch-size"}},[a("strong",[e._v("Batch size")]),e._v(" input field")]),e._v(". Adding your own limit clause will cause the action to fail.")]),e._v(" "),a("h3",{attrs:{id:"schedule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" Schedule")]),e._v(" "),a("p",[e._v("Select the type of schedule you want for your integration use case. This input fields is a pick list with the following available choices:")]),e._v(" "),a("ul",[a("li",[e._v("hourly")]),e._v(" "),a("li",[e._v("daily")]),e._v(" "),a("li",[e._v("monthly")])]),e._v(" "),a("h3",{attrs:{id:"timezone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[e._v("#")]),e._v(" Timezone")]),e._v(" "),a("p",[e._v("Select the timezone for the scheduler to be set in. This is a required field.")]),e._v(" "),a("h3",{attrs:{id:"hour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hour"}},[e._v("#")]),e._v(" Hour")]),e._v(" "),a("p",[e._v("Configure the hour of the day you wish to execute the scheduled SQL query. This is required only if you selected "),a("strong",[e._v("daily")]),e._v(" or "),a("strong",[e._v("monthly")]),e._v(" as the "),a("a",{attrs:{href:"#schedule"}},[e._v("Schedule")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"minute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minute"}},[e._v("#")]),e._v(" Minute")]),e._v(" "),a("p",[e._v("Configure the minute in the hour you wish to execute the scheduled SQL query. This is always required.")]),e._v(" "),a("h3",{attrs:{id:"day-of-month"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day-of-month"}},[e._v("#")]),e._v(" Day of month")]),e._v(" "),a("p",[e._v("Provide a value between "),a("strong",[e._v("1")]),e._v(" to "),a("strong",[e._v("31")]),e._v(" for the day of the month. In shorter months, the values may be rounded down to the last day of the month. For example: if you use the value "),a("strong",[e._v("31")]),e._v(" and the month ends before the 31st, the trigger will run the SQL query on the last day of the month (e.g. 28th Feb, 31st Mar, 30th Apr, and so on)")]),e._v(" "),a("p",[e._v("Needed only if you selected "),a("strong",[e._v("monthly")]),e._v(" as the "),a("a",{attrs:{href:"#schedule"}},[e._v("Schedule")]),e._v(". This is an optional field that defaults to first day of the month if left empty.")]),e._v(" "),a("h3",{attrs:{id:"days-of-week"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#days-of-week"}},[e._v("#")]),e._v(" Days of week")]),e._v(" "),a("p",[e._v("Choose the days of the week you wish to execute the scheduled SQL query. This is required only if you selected "),a("strong",[e._v("hourly")]),e._v(" and "),a("strong",[e._v("daily")]),e._v(" as the "),a("a",{attrs:{href:"#schedule"}},[e._v("Schedule")]),e._v(". If you selected "),a("strong",[e._v("hourly")]),e._v(", the trigger will execute the SQL hourly on days that are selected here.")]),e._v(" "),a("h3",{attrs:{id:"batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[e._v("#")]),e._v(" Batch size")]),e._v(" "),a("p",[e._v("Batch size of rows to return in each job. This can be any number between "),a("strong",[e._v("1")]),e._v(" and the maximum batch size. Maximum batch size is "),a("strong",[e._v("100")]),e._v(" and default is "),a("strong",[e._v("100")]),e._v(".")]),e._v(" "),a("p",[e._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")])])}),[],!1,null,null,null);t.default=r.exports},685:function(e,t,s){e.exports=s.p+"assets/img/scheduled-query-trigger.b8bca072.png"}}]);