(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{705:function(e,t,o){"use strict";o.r(t);var i=o(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-052-tendermint-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-052-tendermint-mode"}},[e._v("#")]),e._v(" ADR 052: Tendermint Mode")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("27-11-2019: Initial draft from ADR-051")]),e._v(" "),o("li",[e._v("13-01-2020: Separate ADR Tendermint Mode from ADR-051")])]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("ul",[o("li",[e._v("Fullnode mode: fullnode mode does not have the capability to become a validator.")]),e._v(" "),o("li",[e._v("Validator mode : this mode is exactly same as existing state machine behavior. sync without voting on consensus, and participate consensus when fully synced")]),e._v(" "),o("li",[e._v("Seed mode : lightweight seed mode maintaining an address book, p2p like "),o("a",{attrs:{href:"https://gitlab.com/polychainlabs/tenderseed",target:"_blank",rel:"noopener noreferrer"}},[e._v("TenderSeed"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We would like to suggest a simple Tendermint mode abstraction. These modes will live under one binary, and when initializing a node the user will be able to specify which node they would like to create.")]),e._v(" "),o("ul",[o("li",[e._v("Which reactor, component to include for each node\n"),o("ul",[o("li",[e._v("fullnode "),o("em",[e._v("(default)")]),e._v(" "),o("ul",[o("li",[e._v("switch, transport")]),e._v(" "),o("li",[e._v("reactors\n"),o("ul",[o("li",[e._v("mempool")]),e._v(" "),o("li",[e._v("consensus")]),e._v(" "),o("li",[e._v("evidence")]),e._v(" "),o("li",[e._v("blockchain")]),e._v(" "),o("li",[e._v("p2p/pex")])])]),e._v(" "),o("li",[e._v("rpc (safe connections only)")]),e._v(" "),o("li",[o("em",[o("s",[e._v("no privValidator(priv_validator_key.json, priv_validator_state.json)")])])])])]),e._v(" "),o("li",[e._v("validator\n"),o("ul",[o("li",[e._v("switch, transport")]),e._v(" "),o("li",[e._v("reactors\n"),o("ul",[o("li",[e._v("mempool")]),e._v(" "),o("li",[e._v("consensus")]),e._v(" "),o("li",[e._v("evidence")]),e._v(" "),o("li",[e._v("blockchain\n          - p2p/pex")])])]),e._v(" "),o("li",[e._v("rpc (safe connections only)")]),e._v(" "),o("li",[e._v("with privValidator(priv_validator_key.json, priv_validator_state.json)")])])]),e._v(" "),o("li",[e._v("seed\n"),o("ul",[o("li",[e._v("switch, transport")]),e._v(" "),o("li",[e._v("reactor\n"),o("ul",[o("li",[e._v("p2p/pex")])])])])])])]),e._v(" "),o("li",[e._v("Configuration, cli command\n"),o("ul",[o("li",[e._v("We would like to suggest by introducing "),o("code",[e._v("mode")]),e._v(" parameter in "),o("code",[e._v("config.toml")]),e._v(" and cli")]),e._v(" "),o("li",[o("span",{pre:!0},[o("code",[e._v('mode = "{{ .BaseConfig.Mode }}"')])]),e._v(" in "),o("code",[e._v("config.toml")])]),e._v(" "),o("li",[o("code",[e._v("tendermint node --mode validator")]),e._v("  in cli")]),e._v(" "),o("li",[e._v('fullnode | validator | seed (default: "fullnode")')])])]),e._v(" "),o("li",[e._v("RPC modification\n"),o("ul",[o("li",[o("code",[e._v("host:26657/status")]),e._v(" "),o("ul",[o("li",[e._v("return empty "),o("code",[e._v("validator_info")]),e._v(" when fullnode mode")])])]),e._v(" "),o("li",[e._v("no rpc server in seed mode")])])]),e._v(" "),o("li",[e._v("Where to modify in codebase\n"),o("ul",[o("li",[e._v("Add  switch for "),o("code",[e._v("config.Mode")]),e._v(" on "),o("code",[e._v("node/node.go:DefaultNewNode")])]),e._v(" "),o("li",[e._v("If "),o("code",[e._v("config.Mode==validator")]),e._v(", call default "),o("code",[e._v("NewNode")]),e._v(" (current logic)")]),e._v(" "),o("li",[e._v("If "),o("code",[e._v("config.Mode==fullnode")]),e._v(", call "),o("code",[e._v("NewNode")]),e._v(" with "),o("code",[e._v("nil")]),e._v(" "),o("code",[e._v("privValidator")]),e._v(" (do not load or generation)\n"),o("ul",[o("li",[e._v("Need to add exception routine for "),o("code",[e._v("nil")]),e._v(" "),o("code",[e._v("privValidator")]),e._v(" to related functions")])])]),e._v(" "),o("li",[e._v("If "),o("code",[e._v("config.Mode==seed")]),e._v(", call "),o("code",[e._v("NewSeedNode")]),e._v(" (seed version of "),o("code",[e._v("node/node.go:NewNode")]),e._v(")\n"),o("ul",[o("li",[e._v("Need to add exception routine for "),o("code",[e._v("nil")]),e._v(" "),o("code",[e._v("reactor")]),e._v(", "),o("code",[e._v("component")]),e._v(" to related functions")])])])])])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Proposed")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("Node operators can choose mode when they run state machine according to the purpose of the node.")]),e._v(" "),o("li",[e._v("Mode can prevent mistakes because users have to specify which mode they want to run via flag. (eg. If a user want to run a validator node, she/he should explicitly write down validator as mode)")]),e._v(" "),o("li",[e._v("Different mode needs different reactors, resulting in efficient resource usage.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("Users need to study how each mode operate and which capability it has.")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[e._v("Issue "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2237",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2237"),o("OutboundLink")],1),e._v(' : Tendermint "mode"')]),e._v(" "),o("li",[o("a",{attrs:{href:"https://gitlab.com/polychainlabs/tenderseed",target:"_blank",rel:"noopener noreferrer"}},[e._v("TenderSeed"),o("OutboundLink")],1),e._v(" : A lightweight Tendermint Seed Node.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);