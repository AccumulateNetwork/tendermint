(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{638:function(e,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-055-protobuf-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-055-protobuf-design"}},[e._v("#")]),e._v(" ADR 055: Protobuf Design")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020-4-15: Created (@marbar3778)")]),e._v(" "),a("li",[e._v("2020-6-18: Updated (@marbar3778)")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently we use "),a("a",{attrs:{href:"https://github.com/tendermint/go-amino",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-amino"),a("OutboundLink")],1),e._v(" throughout Tendermint. Amino is not being maintained anymore (April 15, 2020) by the Tendermint team and has been found to have issues:")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/tendermint/go-amino/issues/286")]),e._v(" "),a("li",[e._v("https://github.com/tendermint/go-amino/issues/230")]),e._v(" "),a("li",[e._v("https://github.com/tendermint/go-amino/issues/121")])]),e._v(" "),a("p",[e._v("These are a few of the known issues that users could run into.")]),e._v(" "),a("p",[e._v("Amino enables quick prototyping and development of features. While this is nice, amino does not provide the performance and developer convenience that is expected. For Tendermint to see wider adoption as a BFT protocol engine a transition to an adopted encoding format is needed. Below are some possible options that can be explored.")]),e._v(" "),a("p",[e._v("There are a few options to pick from:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Protobuf")]),e._v(": Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. It is supported in countless languages and has been proven in production for many years.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("FlatBuffers")]),e._v(": FlatBuffers is an efficient cross platform serialization library. Flatbuffers are more efficient than Protobuf due to the fast that there is no parsing/unpacking to a second representation. FlatBuffers has been tested and used in production but is not widely adopted.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("CapnProto")]),e._v(": Cap’n Proto is an insanely fast data interchange format and capability-based RPC system. Cap'n Proto does not have a encoding/decoding step. It has not seen wide adoption throughout the industry.")])]),e._v(" "),a("li",[a("p",[e._v("@erikgrinaker - https://github.com/tendermint/tendermint/pull/4623#discussion_r401163501")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Q2FwJ24nUHJvdG8gaXMgYXdlc29tZS4gSXQgd2FzIHdyaXR0ZW4gYnkgb25lIG9mIHRoZSBvcmlnaW5hbCBQcm90b2J1ZiBkZXZlbG9wZXJzIHRvIGZpeCBzb21lIG9mIGl0cyBpc3N1ZXMsIGFuZCBzdXBwb3J0cyBlLmcuIHJhbmRvbSBhY2Nlc3MgdG8gcHJvY2VzcyBodWdlIG1lc3NhZ2VzIHdpdGhvdXQgbG9hZGluZyB0aGVtIGludG8gbWVtb3J5IGFuZCBhbiAob3B0LWluKSBjYW5vbmljYWwgZm9ybSB3aGljaCB3b3VsZCBiZSB2ZXJ5IHVzZWZ1bCB3aGVuIGRldGVybWluaXNtIGlzIG5lZWRlZCAoZS5nLiBpbiB0aGUgc3RhdGUgbWFjaGluZSkuIFRoYXQgc2FpZCwgSSBzdXNwZWN0IFByb3RvYnVmIGlzIHRoZSBiZXR0ZXIgY2hvaWNlIGR1ZSB0byB3aWRlciBhZG9wdGlvbiwgYWx0aG91Z2ggaXQgbWFrZXMgbWUga2luZCBvZiBzYWQgc2luY2UgQ2FwJ24nUHJvdG8gaXMgdGVjaG5pY2FsbHkgYmV0dGVyLgo="}})],1)]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Transition Tendermint to Protobuf because of its performance and tooling. The Ecosystem behind Protobuf is vast and has outstanding "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/tutorials",target:"_blank",rel:"noopener noreferrer"}},[e._v("support for many languages"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We will be making this possible by keeping the current types in there current form (handwritten) and creating a "),a("code",[e._v("/proto")]),e._v(" directory in which all the "),a("code",[e._v(".proto")]),e._v(" files will live. Where encoding is needed, on disk and over the wire, we will call util functions that will transition the types from handwritten go types to protobuf generated types. This is inline with the recommended file structure from "),a("a",{attrs:{href:"https://buf.build",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf"),a("OutboundLink")],1),e._v(". You can find more information on this file structure "),a("a",{attrs:{href:"https://buf.build/docs/lint-checkers#file_layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("By going with this design we will enable future changes to types and allow for a more modular codebase.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Allows for modular types in the future")]),e._v(" "),a("li",[e._v("Less refactoring")]),e._v(" "),a("li",[e._v("Allows the proto files to be pulled into the spec repo in the future.")]),e._v(" "),a("li",[e._v("Performance")]),e._v(" "),a("li",[e._v("Tooling & support in multiple languages")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("When a developer is updating a type they need to make sure to update the proto type as well")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])])}),[],!1,null,null,null);t.default=r.exports}}]);