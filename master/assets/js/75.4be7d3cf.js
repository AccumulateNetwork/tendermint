(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{593:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"adr-2-event-subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-2-event-subscription"}},[t._v("#")]),t._v(" ADR 2: Event Subscription")]),t._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),s("p",[t._v("In the light client (or any other client), the user may want to "),s("strong",[t._v("subscribe to\na subset of transactions")]),t._v(" (rather than all of them) using "),s("code",[t._v("/subscribe?event=X")]),t._v(". For\nexample, I want to subscribe for all transactions associated with a particular\naccount. Same for fetching. The user may want to "),s("strong",[t._v("fetch transactions based on\nsome filter")]),t._v(" (rather than fetching all the blocks). For example, I want to get\nall transactions for a particular account in the last two weeks ("),s("code",[t._v("tx's block time >= '2017-06-05'")]),t._v(").")]),t._v(" "),s("p",[t._v('Now you can\'t even subscribe to "all txs" in Tendermint.')]),t._v(" "),s("p",[t._v("The goal is a simple and easy to use API for doing that.")]),t._v(" "),s("p",[s("img",{attrs:{src:"img/tags1.png",alt:"Tx Send Flow Diagram"}})]),t._v(" "),s("h2",{attrs:{id:"decision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[t._v("#")]),t._v(" Decision")]),t._v(" "),s("p",[t._v("ABCI app return tags with a "),s("code",[t._v("DeliverTx")]),t._v(" response inside the "),s("code",[t._v("data")]),t._v(" field ("),s("em",[t._v("for\nnow, later we may create a separate field")]),t._v("). Tags is a list of key-value pairs,\nprotobuf encoded.")]),t._v(" "),s("p",[t._v("Example data:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FiY2kuYWNjb3VudC5uYW1lJnF1b3Q7OiAmcXVvdDtJZ29yJnF1b3Q7LAogICZxdW90O2FiY2kuYWNjb3VudC5hZGRyZXNzJnF1b3Q7OiAmcXVvdDsweGRlYWRiZWVmJnF1b3Q7LAogICZxdW90O3R4LmdhcyZxdW90OzogNwp9Cg=="}}),t._v(" "),s("h3",{attrs:{id:"subscribing-for-transactions-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-for-transactions-events"}},[t._v("#")]),t._v(" Subscribing for transactions events")]),t._v(" "),s("p",[t._v("If the user wants to receive only a subset of transactions, ABCI-app must\nreturn a list of tags with a "),s("code",[t._v("DeliverTx")]),t._v(" response. These tags will be parsed and\nmatched with the current queries (subscribers). If the query matches the tags,\nsubscriber will get the transaction event.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"L3N1YnNjcmliZT9xdWVyeT0mcXVvdDt0bS5ldmVudCA9IFR4IEFORCB0eC5oYXNoID0gQUIwMDIzNDMzQ0YwMzM0MjIzMjEyMjQzQkREIEFORCBhYmNpLmFjY291bnQuaW52b2ljZS5udW1iZXIgPSAyMiZxdW90Owo="}}),t._v(" "),s("p",[t._v("A new package must be developed to replace the current "),s("code",[t._v("events")]),t._v(" package. It\nwill allow clients to subscribe to a different types of events in the future:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"L3N1YnNjcmliZT9xdWVyeT0mcXVvdDthYmNpLmFjY291bnQuaW52b2ljZS5udW1iZXIgPSAyMiZxdW90Owovc3Vic2NyaWJlP3F1ZXJ5PSZxdW90O2FiY2kuYWNjb3VudC5pbnZvaWNlLm93bmVyIENPTlRBSU5TIElnb3ImcXVvdDsK"}}),t._v(" "),s("h3",{attrs:{id:"fetching-transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetching-transactions"}},[t._v("#")]),t._v(" Fetching transactions")]),t._v(" "),s("p",[t._v("This is a bit tricky because a) we want to support a number of indexers, all of\nwhich have a different API b) we don't know whenever tags will be sufficient\nfor the most apps (I guess we'll see).")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"L3R4cy9zZWFyY2g/cXVlcnk9JnF1b3Q7dHguaGFzaCA9IEFCMDAyMzQzM0NGMDMzNDIyMzIxMjI0M0JERCBBTkQgYWJjaS5hY2NvdW50Lm93bmVyIENPTlRBSU5TIElnb3ImcXVvdDsKL3R4cy9zZWFyY2g/cXVlcnk9JnF1b3Q7YWJjaS5hY2NvdW50Lm93bmVyID0gSWdvciZxdW90Owo="}}),t._v(" "),s("p",[t._v("For historic queries we will need a indexing storage (Postgres, SQLite, ...).")]),t._v(" "),s("h3",{attrs:{id:"issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[t._v("#")]),t._v(" Issues")]),t._v(" "),s("ul",[s("li",[t._v("https://github.com/tendermint/tendermint/issues/376")]),t._v(" "),s("li",[t._v("https://github.com/tendermint/tendermint/issues/287")]),t._v(" "),s("li",[t._v("https://github.com/tendermint/tendermint/issues/525 (related)")])]),t._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),s("p",[t._v("Implemented")]),t._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[t._v("#")]),t._v(" Consequences")]),t._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[t._v("#")]),t._v(" Positive")]),t._v(" "),s("ul",[s("li",[t._v("same format for event notifications and search APIs")]),t._v(" "),s("li",[t._v("powerful enough query")])]),t._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[t._v("#")]),t._v(" Negative")]),t._v(" "),s("ul",[s("li",[t._v("performance of the "),s("code",[t._v("match")]),t._v(" function (where we have too many queries / subscribers)")]),t._v(" "),s("li",[t._v("there is an issue where there are too many txs in the DB")])]),t._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[t._v("#")]),t._v(" Neutral")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);