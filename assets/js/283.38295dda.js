(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{2136:function(t,e,o){"use strict";o.r(e);var r=o(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"bigquery-job-completed-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bigquery-job-completed-trigger"}},[t._v("#")]),t._v(" BigQuery - Job completed trigger")]),t._v(" "),r("h2",{attrs:{id:"job-completed-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#job-completed-trigger"}},[t._v("#")]),t._v(" Job completed trigger")]),t._v(" "),r("p",[t._v("This trigger polls regularly for jobs completed in BigQuery. It can be configured to listen on various levels from entire projects to individual tables. This trigger only picks up completed jobs.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(439),alt:"Job completed trigger",width:"1128",height:"764"}}),t._v(" "),r("em",[t._v("Job completed trigger")])],1),t._v(" "),r("h3",{attrs:{id:"input-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Project")]),t._v(" "),r("td",[t._v("Configure to listen on a project.")])]),t._v(" "),r("tr",[r("td",[t._v("Dataset")]),t._v(" "),r("td",[t._v("Optional. Configure to listen on a specific dataset.")])]),t._v(" "),r("tr",[r("td",[t._v("Table")]),t._v(" "),r("td",[t._v("Optional. Configure to listen on a specific table.")])]),t._v(" "),r("tr",[r("td",[t._v("All users")]),t._v(" "),r("td",[t._v('Defaults to "No". If "Yes", all jobs will be listened on including those not pegged to the user. The user would be the user who authorised the BigQuery connection.')])]),t._v(" "),r("tr",[r("td",[t._v("When first started, this recipe should pick up events from")]),t._v(" "),r("td",[t._v("A time to retrospectively pick up jobs from.")])]),t._v(" "),r("tr",[r("td",[t._v("Job Type")]),t._v(" "),r("td",[t._v("Leave blank to listen on all jobs. When configured, it will only trigger on jobs that match.")])])])]),t._v(" "),r("h3",{attrs:{id:"output-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ID")]),t._v(" "),r("td",[t._v("The ID of the job completed.")])]),t._v(" "),r("tr",[r("td",[t._v("Kind")]),t._v(" "),r("td",[t._v("The type of the BigQuery Job")])]),t._v(" "),r("tr",[r("td",[t._v("Job Reference")]),t._v(" "),r("td",[t._v("Contain information about the job such as Project ID, Job ID and location.")])]),t._v(" "),r("tr",[r("td",[t._v("State")]),t._v(" "),r("td",[t._v("State of job. Must be DONE.")])]),t._v(" "),r("tr",[r("td",[t._v("Statistics")]),t._v(" "),r("td",[t._v("Contains information about the query time and total bytes processed by the job.")])]),t._v(" "),r("tr",[r("td",[t._v("Configuration")]),t._v(" "),r("td",[t._v("Contains information about the query configuration")])]),t._v(" "),r("tr",[r("td",[t._v("Status")]),t._v(" "),r("td",[t._v("Contains error results and messages if any.")])]),t._v(" "),r("tr",[r("td",[t._v("User email")]),t._v(" "),r("td",[t._v("Email of the user who ran the job.")])])])])])}),[],!1,null,null,null);e.default=i.exports},439:function(t,e,o){t.exports=o.p+"assets/img/job-completed-input.44752ea6.png"}}]);