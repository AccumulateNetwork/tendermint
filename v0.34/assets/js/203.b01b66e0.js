(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{802:function(t,e,s){"use strict";s.r(e);var a=s(1),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"state-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-sync"}},[t._v("#")]),t._v(" State Sync")]),t._v(" "),s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[t._v("#")]),t._v(" Channels")]),t._v(" "),s("p",[t._v("State sync has four distinct channels. The channel identifiers are listed below.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SnapshotChannel")]),t._v(" "),s("td",[t._v("96")])]),t._v(" "),s("tr",[s("td",[t._v("ChunkChannel")]),t._v(" "),s("td",[t._v("97")])]),t._v(" "),s("tr",[s("td",[t._v("LightBlockChannel")]),t._v(" "),s("td",[t._v("98")])]),t._v(" "),s("tr",[s("td",[t._v("ParamsChannel")]),t._v(" "),s("td",[t._v("99")])])])]),t._v(" "),s("h2",{attrs:{id:"message-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),s("h3",{attrs:{id:"snapshotrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snapshotrequest"}},[t._v("#")]),t._v(" SnapshotRequest")]),t._v(" "),s("p",[t._v("When a new node begin state syncing, it will ask all peers it encounters if it has any\navailable snapshots:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody")]),t._v(" "),s("h3",{attrs:{id:"snapshotresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snapshotresponse"}},[t._v("#")]),t._v(" SnapShotResponse")]),t._v(" "),s("p",[t._v("The receiver will query the local ABCI application via "),s("code",[t._v("ListSnapshots")]),t._v(", and send a message\ncontaining snapshot metadata (limited to 4 MB) for each of the 10 most recent snapshots: and stored at the application layer. When a peer is starting it will request snapshots.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("Height at which the snapshot was taken")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("format")]),t._v(" "),s("td",[t._v("uint32")]),t._v(" "),s("td",[t._v("Format of the snapshot.")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("chunks")]),t._v(" "),s("td",[t._v("uint32")]),t._v(" "),s("td",[t._v("How many chunks make up the snapshot")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[t._v("hash")]),t._v(" "),s("td",[t._v("bytes")]),t._v(" "),s("td",[t._v("Arbitrary snapshot hash")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("metadata")]),t._v(" "),s("td",[t._v("bytes")]),t._v(" "),s("td",[t._v("Arbitrary application data. "),s("strong",[t._v("May be non-deterministic.")])]),t._v(" "),s("td",[t._v("5")])])])]),t._v(" "),s("h3",{attrs:{id:"chunkrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunkrequest"}},[t._v("#")]),t._v(" ChunkRequest")]),t._v(" "),s("p",[t._v("The node running state sync will offer these snapshots to the local ABCI application via\n"),s("code",[t._v("OfferSnapshot")]),t._v(" ABCI calls, and keep track of which peers contain which snapshots. Once a snapshot\nis accepted, the state syncer will request snapshot chunks from appropriate peers:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("Height at which the chunk was created")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("format")]),t._v(" "),s("td",[t._v("uint32")]),t._v(" "),s("td",[t._v("Format chosen for the chunk.  "),s("strong",[t._v("May be non-deterministic.")])]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("index")]),t._v(" "),s("td",[t._v("uint32")]),t._v(" "),s("td",[t._v("Index of the chunk within the snapshot.")]),t._v(" "),s("td",[t._v("3")])])])]),t._v(" "),s("h3",{attrs:{id:"chunkresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunkresponse"}},[t._v("#")]),t._v(" ChunkResponse")]),t._v(" "),s("p",[t._v("The receiver will load the requested chunk from its local application via "),s("code",[t._v("LoadSnapshotChunk")]),t._v(",\nand respond with it (limited to 16 MB):")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("Height at which the chunk was created")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("format")]),t._v(" "),s("td",[t._v("uint32")]),t._v(" "),s("td",[t._v("Format chosen for the chunk.  "),s("strong",[t._v("May be non-deterministic.")])]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("index")]),t._v(" "),s("td",[t._v("uint32")]),t._v(" "),s("td",[t._v("Index of the chunk within the snapshot.")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[t._v("hash")]),t._v(" "),s("td",[t._v("bytes")]),t._v(" "),s("td",[t._v("Arbitrary snapshot hash")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("missing")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("Arbitrary application data. "),s("strong",[t._v("May be non-deterministic.")])]),t._v(" "),s("td",[t._v("5")])])])]),t._v(" "),s("p",[t._v("Here, "),s("code",[t._v("Missing")]),t._v(" is used to signify that the chunk was not found on the peer, since an empty\nchunk is a valid (although unlikely) response.")]),t._v(" "),s("p",[t._v("The returned chunk is given to the ABCI application via "),s("code",[t._v("ApplySnapshotChunk")]),t._v(" until the snapshot\nis restored. If a chunk response is not returned within some time, it will be re-requested,\npossibly from a different peer.")]),t._v(" "),s("p",[t._v("The ABCI application is able to request peer bans and chunk refetching as part of the ABCI protocol.")]),t._v(" "),s("h3",{attrs:{id:"lightblockrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lightblockrequest"}},[t._v("#")]),t._v(" LightBlockRequest")]),t._v(" "),s("p",[t._v("To verify state and to provide state relevant information for consensus, the node will ask peers for\nlight blocks at specified heights.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("Height of the light block")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"lightblockresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lightblockresponse"}},[t._v("#")]),t._v(" LightBlockResponse")]),t._v(" "),s("p",[t._v("The receiver will retrieve and construct the light block from both the block and state stores. The\nreceiver will verify the data by comparing the hashes and store the header, commit and validator set\nif necessary. The light block at the height of the snapshot will be used to verify the "),s("code",[t._v("AppHash")]),t._v(".")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("light_block")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/spec/core/data_structures.html#lightblock"}},[t._v("LightBlock")])],1),t._v(" "),s("td",[t._v("Light block at the height requested")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("p",[t._v("State sync will use "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/tendermint-core/light-client.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("light client\nverification"),s("OutboundLink")],1),t._v("\nto verify the light blocks.")]),t._v(" "),s("p",[t._v("If no state sync is in progress (i.e. during normal operation), any unsolicited response messages\nare discarded.")]),t._v(" "),s("h3",{attrs:{id:"paramsrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paramsrequest"}},[t._v("#")]),t._v(" ParamsRequest")]),t._v(" "),s("p",[t._v("In order to build tendermint state, the state provider will request the params at the height of the snapshot and use the header to verify it.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("Height of the consensus params")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"paramsresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paramsresponse"}},[t._v("#")]),t._v(" ParamsResponse")]),t._v(" "),s("p",[t._v("A reciever to the request will use the state store to fetch the consensus params at that height and return it to the sender.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("Height of the consensus params")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("consensus_params")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/spec/core/data_structures.html#ConsensusParams"}},[t._v("ConsensusParams")])],1),t._v(" "),s("td",[t._v("Consensus params at the height requested")]),t._v(" "),s("td",[t._v("2")])])])]),t._v(" "),s("h3",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" Message")]),t._v(" "),s("p",[t._v("Message is a "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto#oneof",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("oneof")]),t._v(" protobuf type"),s("OutboundLink")],1),t._v(". The "),s("code",[t._v("oneof")]),t._v(" consists of eight messages.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Field Number")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("snapshots_request")]),t._v(" "),s("td",[s("a",{attrs:{href:"#snapshotrequest"}},[t._v("SnapshotRequest")])]),t._v(" "),s("td",[t._v("Request a recent snapshot from a peer")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("snapshots_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#snapshotresponse"}},[t._v("SnapshotResponse")])]),t._v(" "),s("td",[t._v("Respond with the most recent snapshot stored")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("chunk_request")]),t._v(" "),s("td",[s("a",{attrs:{href:"#chunkrequest"}},[t._v("ChunkRequest")])]),t._v(" "),s("td",[t._v("Request chunks of the snapshot.")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[t._v("chunk_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#chunkresponse"}},[t._v("ChunkRequest")])]),t._v(" "),s("td",[t._v("Response of chunks used to recreate state.")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("light_block_request")]),t._v(" "),s("td",[s("a",{attrs:{href:"#lightblockrequest"}},[t._v("LightBlockRequest")])]),t._v(" "),s("td",[t._v("Request a light block.")]),t._v(" "),s("td",[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("light_block_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#lightblockresponse"}},[t._v("LightBlockResponse")])]),t._v(" "),s("td",[t._v("Respond with a light block")]),t._v(" "),s("td",[t._v("6")])]),t._v(" "),s("tr",[s("td",[t._v("params_request")]),t._v(" "),s("td",[s("a",{attrs:{href:"#paramsrequest"}},[t._v("ParamsRequest")])]),t._v(" "),s("td",[t._v("Request the consensus params at a height.")]),t._v(" "),s("td",[t._v("7")])]),t._v(" "),s("tr",[s("td",[t._v("params_response")]),t._v(" "),s("td",[s("a",{attrs:{href:"#paramsresponse"}},[t._v("ParamsResponse")])]),t._v(" "),s("td",[t._v("Respond with the consensus params")]),t._v(" "),s("td",[t._v("8")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);