(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{2166:function(e,t,o){"use strict";o.r(t);var i=o(0),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"google-drive-action-download-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#google-drive-action-download-file"}},[e._v("#")]),e._v(" Google Drive action - Download file")]),e._v(" "),o("p",[e._v("This action downloads contents of a file in Google Drive. File contents can be used in subsequent steps of the recipe to upload the file into other applications.")]),e._v(" "),o("p",[e._v("Only binary files can be downloaded. Trying to download a folder or a Google Docs document will result in an error.")]),e._v(" "),o("h2",{attrs:{id:"input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Field name")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("File ID")]),e._v(" "),o("td",[e._v("The ID of the file. Can be found in the output of other Google Drive trigger/actions, or from the file's shareable link. To get the shareable link, right click on the file and select "),o("code",[e._v("Get shareable link")]),e._v(". For example, if the shareable link is "),o("a",{attrs:{href:"https://drive.google.com/file/d/1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://drive.google.com/file/d/1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh/view?usp=sharing"),o("OutboundLink")],1),e._v(" , then the file ID is 1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh.")])])])]),e._v(" "),o("h2",{attrs:{id:"output-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Field name")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("File contents")]),e._v(" "),o("td",[e._v("The full contents of the file. This is a "),o("router-link",{attrs:{to:"/features/file-streaming.html"}},[e._v("streaming object")]),e._v(". Can be used in "),o("code",[e._v("Upload file")]),e._v(" actions of other file connectors such as Box, Dropbox, Amazon S3, etc. to upload the file into those applications.")],1)]),e._v(" "),o("tr",[o("td",[e._v("Size")]),e._v(" "),o("td",[e._v("Size of the file in bytes.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);