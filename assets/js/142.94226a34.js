(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1446:function(e,t,a){e.exports=a.p+"assets/img/download-file-and-parse-csv.9781a9ab.png"},1447:function(e,t,a){e.exports=a.p+"assets/img/parse-csv-mapping.fbb4d481.png"},1448:function(e,t,a){e.exports=a.p+"assets/img/csv-file-parsing-recipe.b29ecb1a.png"},1449:function(e,t,a){e.exports=a.p+"assets/img/define-expected-csv-columns.97b9bb99.png"},1450:function(e,t,a){e.exports=a.p+"assets/img/use-defined-csv-variables.157e39fe.png"},2514:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"handling-csvs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#handling-csvs"}},[e._v("#")]),e._v(" Handling CSVs")]),e._v(" "),r("p",[e._v("A Comma-separated values (CSV) file is a text file that stores tabular data. It stores the data in plain text and is human-readable.")]),e._v(" "),r("p",[e._v("To convert CSV content into useable datapills, parse it with "),r("a",{attrs:{href:"#csv-by-workato"}},[e._v("Workato's built-in CSV parser")]),e._v(" or use a "),r("a",{attrs:{href:"#parsing-csv-files-via-external-parser"}},[e._v("connector-specific CSV parser")]),e._v(".")]),e._v(" "),r("p",[e._v("We will be using the following sample CSV content:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3\nSierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches\nSierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches\nSierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches\n")])])]),r("h2",{attrs:{id:"csv-by-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csv-by-workato"}},[e._v("#")]),e._v(" CSV by Workato")]),e._v(" "),r("p",[e._v("Most web applications return CSV files without additional processing. You can use "),r("strong",[e._v("CSV by Workato")]),e._v(" to read the text content of the CSV file. This will allow you to move individual rows and transform the data as required by your use-case.")]),e._v(" "),r("p",[e._v("In this example, a new CSV file is picked up in Dropbox. Run the "),r("strong",[e._v("Parse CSV")]),e._v(" action to obtain a list of lines/rows.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1446),alt:"Parse CSV",width:"1280",height:"1000"}}),e._v(" "),r("em",[e._v("Parse CSV. See the sample recipe "),r("a",{attrs:{href:"https://www.workato.com/recipes/492685",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])],1),e._v(" "),r("h3",{attrs:{id:"input-field"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-field"}},[e._v("#")]),e._v(" Input field")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Input fields")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("CSV contents")]),e._v(" "),r("td",[e._v("Select a CSV "),r("code",[e._v("file content")]),e._v(" datapill. You can also directly paste CSV lines.")])]),e._v(" "),r("tr",[r("td",[e._v("Column separator")]),e._v(" "),r("td",[e._v("Select the character that separates columns in the CSV file.")])]),e._v(" "),r("tr",[r("td",[e._v("CSV contents contain header line")]),e._v(" "),r("td",[e._v("Indicate if there is a header line.")])]),e._v(" "),r("tr",[r("td",[e._v("Header line")]),e._v(" "),r("td",[e._v("Specify the header line of your CSV file.")])]),e._v(" "),r("tr",[r("td",[e._v("Keep track of columns by")]),e._v(" "),r("td",[e._v("Configure this if your CSV content does not have a fixed column order.")])]),e._v(" "),r("tr",[r("td",[e._v("Quote Character")]),e._v(" "),r("td",[e._v("The character used to quote CSV cell values. Select "),r("code",[e._v("none")]),e._v(" if no quote character is used.")])])])]),e._v(" "),r("h3",{attrs:{id:"output-field"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-field"}},[e._v("#")]),e._v(" Output field")]),e._v(" "),r("p",[e._v("This action will generate an array of lines, with each line containing the schema as defined in your "),r("strong",[e._v("header line")]),e._v(". As this is an array object, you would have to use a "),r("router-link",{attrs:{to:"/recipes/steps.html#repeat-step"}},[e._v("repeat action")]),e._v(" to iterate through the rows.")],1),e._v(" "),r("p",[e._v("In our sample recipe, we iterate through each line of the array object and create a task in Wrike.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1447),alt:"Mapping of datapills from the Repeat step datatree to the action",width:"2510",height:"303"}}),e._v(" "),r("em",[e._v("Mapping of datapills from the Repeat step datatree to the action")])],1),e._v(" "),r("p",[e._v("For more information on working with lists, see "),r("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"parsing-csv-files-via-external-parser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parsing-csv-files-via-external-parser"}},[e._v("#")]),e._v(" Parsing CSV files via external parser")]),e._v(" "),r("p",[e._v("Certain connectors have triggers/actions that can parse CSV content. The "),r("router-link",{attrs:{to:"/connectors/box.html"}},[e._v("Box connector")]),e._v(" has this capability. You can simply listen to "),r("strong",[e._v("new CSV files")]),e._v(" and parse them via the same trigger.")],1),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1448),alt:"CSV file parsing in Box trigger",width:"1852",height:"406"}}),e._v(" "),r("em",[e._v("CSV file parsing with a Box trigger. See the sample recipe "),r("a",{attrs:{href:"https://www.workato.com/recipes/485023",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])],1),e._v(" "),r("h3",{attrs:{id:"input-field-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-field-2"}},[e._v("#")]),e._v(" Input field")]),e._v(" "),r("p",[e._v("Similarly, input the header line for the CSV in the "),r("strong",[e._v("Field names")]),e._v(". This is necessary to generate datapills in the output.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1449),alt:"Define expected columns in CSV",width:"1230",height:"1127"}}),e._v(" "),r("em",[e._v("Defining the expected columns in the CSV files that the recipe will pick up. "),r("a",{attrs:{href:"https://www.workato.com/recipes/485023",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example recipe"),r("OutboundLink")],1),e._v(".")])],1),e._v(" "),r("blockquote",[r("p",[e._v("This trigger picks out all new CSV files regardless if they share the same schema or header lines. This may lead to job errors or bad data being moved into your app. If you have shared folders or sub-folders, ensure that only relevant CSV files are stored there or add a trigger filter to specify which files to pick up.")])]),e._v(" "),r("h3",{attrs:{id:"output-field-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-field-2"}},[e._v("#")]),e._v(" Output field")]),e._v(" "),r("p",[e._v("The output from the "),r("strong",[e._v("Box CSV parser")]),e._v(" is the same as the output from "),r("strong",[e._v("CSV by Workato")]),e._v(". The columns in the CSV content (as defined in the trigger) will show up as usable variables which can be used to map into subsequent recipe steps.")]),e._v(" "),r("p",[e._v("Similarly, run a "),r("strong",[e._v("repeat action")]),e._v(" to iterate through the list of CSV rows.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1450),alt:"Using the variables defined in the Box trigger",width:"2590",height:"2216"}}),e._v(" "),r("em",[e._v("Using the variables defined in the Box trigger")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);