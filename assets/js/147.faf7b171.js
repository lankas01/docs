(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1744:function(e,t,r){e.exports=r.p+"assets/img/job-rerun-from-report.f240225c.gif"},1745:function(e,t,r){e.exports=r.p+"assets/img/job-rerun-from-details.c09233f1.gif"},1746:function(e,t,r){e.exports=r.p+"assets/img/jobs-history.3d7cbf4f.png"},1747:function(e,t,r){e.exports=r.p+"assets/img/non-latest-job-rerun.86576e1f.png"},1748:function(e,t,r){e.exports=r.p+"assets/img/example-recipe.20d0e75c.png"},2605:function(e,t,r){"use strict";r.r(t);var o=r(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rerunning-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rerunning-jobs"}},[e._v("#")]),e._v(" Rerunning jobs")]),e._v(" "),o("p",[e._v("Workato allows for jobs to be rerun. In such cases, the trigger event will run through the sequence of actions in the recipe again. This feature is useful when:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("You've edited the recipe and want to test it")])]),e._v(" "),o("li",[o("p",[e._v("An error occured in a job, you've fixed the recipe/data and wish to rerun the job")])])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" When jobs are reran, the trigger event is ran through the entire recipe. Duplication may occur, so be sure to check and remove duplicates (if present) before re-running the job. Also, see our guide on how to create a robust recipe to prevent duplication "),o("a",{attrs:{href:"https://support.workato.com/support/solutions/articles/1000200234-general-best-practices-how-to-prevent-duplicate-records-from-being-created",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("To rerun jobs from the jobs report page, check the jobs to rerun and click on the rerun button.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1744),alt:"Job rerun from jobs report page",width:"1068",height:"462"}}),e._v(" "),o("em",[e._v("Rerunning jobs from jobs report page")])],1),e._v(" "),o("p",[e._v("You can also rerun jobs from the job details page. Simply click on the rerun button.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1745),alt:"Job rerun from job details page",width:"880",height:"540"}}),e._v(" "),o("em",[e._v("Job rerun from job details page")])],1),e._v(" "),o("p",[e._v("Job reruns are in-place - meaning that the position of the job will not change within the jobs report. A job which was first processed in August and reran in September will retain its position amongst the other jobs processed in August.")]),e._v(" "),o("h1",{attrs:{id:"cached-trigger-data-in-job-reruns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cached-trigger-data-in-job-reruns"}},[e._v("#")]),e._v(" Cached trigger data in job reruns")]),e._v(" "),o("p",[e._v("All job reruns use cached data. This means that the original trigger event's data is reused for the rerun, and any changes made to the trigger event in the trigger app will not be picked up by a job rerun. This means that there are scenarios whereby a job rerun will not resolve your issues:")]),e._v(" "),o("ul",[o("li",[e._v("when the failed job is due to data issues in the trigger")])]),e._v(" "),o("p",[e._v("The recipe will return a failed job if it is processing the same faulty data from the trigger app, regardless of the number of reruns.")]),e._v(" "),o("ul",[o("li",[e._v("when you update the trigger event and wish to see how the recipe processes the new trigger event")])]),e._v(" "),o("p",[e._v("If you are using a "),o("strong",[e._v("New object")]),e._v(" trigger, you would have to delete the existing trigger event, e.g. if you are using the "),o("strong",[e._v("New Salesforce account")]),e._v(" trigger, you would have to delete that Salesforce account and recreate a new Salesforce account for the recipe to pick up the Salesforce account (trigger event) with the new data.")]),e._v(" "),o("p",[e._v("If you are using a "),o("strong",[e._v("New/updated object")]),e._v(" trigger, you wouldn't have to delete the record with the old data, but simply update the record and let the recipe pick up the update, e.g. if you are using the "),o("strong",[e._v("New/updated Salesforce account")]),e._v(" trigger, you can update the newly created/updated Salesforce account, and the recipe will pick up the change.")]),e._v(" "),o("p",[e._v("For both cases above, a new job will be picked up. Updating an event in your trigger app will not affect the cached data stored in the previous job, and a new job will be picked up.")]),e._v(" "),o("h1",{attrs:{id:"job-rerun-history"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-rerun-history"}},[e._v("#")]),e._v(" Job rerun history")]),e._v(" "),o("p",[e._v("Within the job details page, you can view the rerun history of the job.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1746),alt:"Jobs history",width:"1612",height:"1222"}}),e._v(" "),o("em",[e._v("Jobs history")])],1),e._v(" "),o("p",[e._v("In the job details screen, if you're viewing a job rerun which is not the latest version of the job reran, the "),o("em",[e._v("Rerun")]),e._v(" button will be greyed out.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1747),alt:"Deactivated rerun jobs button",width:"1642",height:"1222"}}),e._v(" "),o("em",[e._v("Rerun button is greyed out if you're not in the latest ran job details screen")])],1),e._v(" "),o("h1",{attrs:{id:"common-scenarios-for-rerunning-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-scenarios-for-rerunning-jobs"}},[e._v("#")]),e._v(" Common scenarios for rerunning jobs")]),e._v(" "),o("ul",[o("li",[e._v("Testing a new recipe")])]),e._v(" "),o("p",[e._v("When testing your recipe after building or after editing, it's a good idea to test all scenarios. If your recipe has conditional actions, it is best practice to test out all logical branches in the recipe.")]),e._v(" "),o("p",[e._v("For example, in the following recipe, a trigger event carries out either steps 2-3, or steps 4-5. In this case, we should test out the recipe flow for a Salesforce account which has no matching Zendesk organization, as well as a Salesforce account which has a matching Zendesk organization.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(1748),alt:"Example recipe",width:"1692",height:"1110"}}),e._v("\n*Recipe with two logical branches. "),o("a",{attrs:{href:"https://www.workato.com/recipes/480358",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example recipe"),o("OutboundLink")],1),e._v(" *")],1),e._v(" "),o("p",[e._v("Because the trigger is "),o("strong",[e._v("New/updated Salesforce account")]),e._v(", we can simply create a new Salesforce account and let the recipe pick it up and process it through steps 4-5 to create a corresponding Zendesk account. After that, we can make a quick edit to the Salesforce acccount for the recipe to pick up the updated record, in which case it will run this Salesforce account through steps 2-3 as it will now have a matching Zendesk organization.")]),e._v(" "),o("p",[e._v("Had the trigger been "),o("strong",[e._v("New Salesforce account")]),e._v(", we would have to stage our tests differently. We would need to create a Salesforce account with a matching Zendesk organization, as well as a Salesforce account with no matching Zendesk organization, and check that both jobs are carried out correctly.")]),e._v(" "),o("p",[e._v("Executing a rerun job during testing allows you to build your recipe incrementally. Rather than creating new trigger events each time you want to try a new version of your recipe, you can test your recipe with the same event as a rerun job. Furthermore, this allows you to address issues as you encounter them. You can directly test your fix for the issue with a rerun job.")]),e._v(" "),o("ul",[o("li",[e._v("Errors")])]),e._v(" "),o("p",[e._v("When an error occurs in your recipe, the job will be incomplete as it will have ended where the error occurred (unless you're using the "),o("router-link",{attrs:{to:"/recipes/steps.html#action-with-error-handler-step"}},[e._v("Error monitor step")]),e._v(" to recover from errors). In such cases, rerunning the job is necessary to ensure the job runs to completion as specified in the recipe, unless the issue is with the trigger data, in which case you should refer to "),o("a",{attrs:{href:"#cached-trigger-data-in-job-reruns"}},[e._v("this section")]),e._v(" about handling trigger errors.")],1),e._v(" "),o("h2",{attrs:{id:"data-retention-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-retention-policy"}},[e._v("#")]),e._v(" Data retention policy")]),e._v(" "),o("p",[e._v("Data retention applies to processed trigger events. This means that older jobs might not be able to be reran. Find out how the data retention policy affects job reruns "),o("router-link",{attrs:{to:"/data-retention.html"}},[e._v("here")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);