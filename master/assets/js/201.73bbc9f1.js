(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{727:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"light-client-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#light-client-attacks"}},[e._v("#")]),e._v(" Light client attacks")]),e._v(" "),a("p",[e._v("We define a light client attack as detection of conflicting headers for a given height that can be verified\nstarting from the trusted light block. A light client attack is defined in the context of interactions of\nlight client with two peers. One of the peers (called primary) defines a trace of verified light blocks\n(primary trace) that are being checked against trace of the other peer (called witness) that we call\nwitness trace.")]),e._v(" "),a("p",[e._v("A light client attack is defined by the primary and witness traces\nthat have a common root (the same trusted light block for a common height) but forms\nconflicting branches (end of traces is for the same height but with different headers).\nNote that conflicting branches could be arbitrarily big as branches continue to diverge after\na bifurcation point. We propose an approach that allows us to define a valid light client attack\nonly with a common light block and a single conflicting light block. We rely on the fact that\nwe assume that the primary is under suspicion (therefore not trusted) and that the witness plays\nsupport role to detect and process an attack (therefore trusted). Therefore, once a light client\ndetects an attack, it needs to send to a witness only missing data (common height\nand conflicting light block) as it has its trace. Keeping light client attack data of constant size\nsaves bandwidth and reduces an attack surface. As we will explain below, although in the context of\nlight client core\n"),a("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/tree/master/docs/spec/lightclient/verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("verification"),a("OutboundLink")],1),e._v("\nthe roles of primary and witness are clearly defined,\nin case of the attack, we run the same attack detection procedure twice where the roles are swapped.\nThe rationale is that the light client does not know what peer is correct (on a right main branch)\nso it tries to create and submit an attack evidence to both peers.")]),e._v(" "),a("p",[e._v("Light client attack evidence consists of a conflicting light block and a common height.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMaWdodENsaWVudEF0dGFja0V2aWRlbmNlIHN0cnVjdCB7CiAgICBDb25mbGljdGluZ0Jsb2NrICAgTGlnaHRCbG9jawogICAgQ29tbW9uSGVpZ2h0ICAgICAgIGludDY0Cn0K"}}),e._v(" "),a("p",[e._v("Full node can validate a light client attack evidence by executing the following procedure:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJc1ZhbGlkKGxjYUV2aWRlbmNlIExpZ2h0Q2xpZW50QXR0YWNrRXZpZGVuY2UsIGJjIEJsb2NrY2hhaW4pIGJvb2xlYW4gewogICAgY29tbW9uQmxvY2sgPSBHZXRMaWdodEJsb2NrKGJjLCBsY2FFdmlkZW5jZS5Db21tb25IZWlnaHQpCiAgICBpZiBjb21tb25CbG9jayA9PSBuaWwgcmV0dXJuIGZhbHNlCgogICAgLy8gTm90ZSB0aGF0IHRydXN0aW5nUGVyaW9kIGluIFZhbGlkQW5kVmVyaWZpZWQgaXMgc2V0IHRvIFVOQk9ORElOR19QRVJJT0QKICAgIHZlcmRpY3QgPSBWYWxpZEFuZFZlcmlmaWVkKGNvbW1vbkJsb2NrLCBsY2FFdmlkZW5jZS5Db25mbGljdGluZ0Jsb2NrKQogICAgY29uZmxpY3RpbmdIZWlnaHQgPSBsY2FFdmlkZW5jZS5Db25mbGljdGluZ0Jsb2NrLkhlYWRlci5IZWlnaHQKCiAgICByZXR1cm4gdmVyZGljdCA9PSBPSyBhbmQgYmNbY29uZmxpY3RpbmdIZWlnaHRdLkhlYWRlciAhPSBsY2FFdmlkZW5jZS5Db25mbGljdGluZ0Jsb2NrLkhlYWRlcgp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"light-client-attack-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#light-client-attack-creation"}},[e._v("#")]),e._v(" Light client attack creation")]),e._v(" "),a("p",[e._v("Given a trusted light block "),a("code",[e._v("trusted")]),e._v(", a light node executes the bisection algorithm to verify header\n"),a("code",[e._v("untrusted")]),e._v(" at some height "),a("code",[e._v("h")]),e._v(". If the bisection algorithm succeeds, then the header "),a("code",[e._v("untrusted")]),e._v(" is verified.\nHeaders that are downloaded as part of the bisection algorithm are stored in a store and they are also in\nthe verified state. Therefore, after the bisection algorithm successfully terminates we have a trace of\nthe light blocks ([] LightBlock) we obtained from the primary that we call primary trace.")]),e._v(" "),a("h3",{attrs:{id:"primary-trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-trace"}},[e._v("#")]),e._v(" Primary trace")]),e._v(" "),a("p",[e._v("The following invariant holds for the primary trace:")]),e._v(" "),a("ul",[a("li",[e._v("Given a "),a("code",[e._v("trusted")]),e._v(" light block, target height "),a("code",[e._v("h")]),e._v(", and "),a("code",[e._v("primary_trace")]),e._v(" ([] LightBlock):\n"),a("em",[e._v("primary_trace[0] == trusted")]),e._v(" and "),a("em",[e._v("primary_trace[len(primary_trace)-1].Height == h")]),e._v(" and\nsuccessive light blocks are passing light client verification logic.")])]),e._v(" "),a("h3",{attrs:{id:"witness-with-a-conflicting-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#witness-with-a-conflicting-header"}},[e._v("#")]),e._v(" Witness with a conflicting header")]),e._v(" "),a("p",[e._v("The verified header at height "),a("code",[e._v("h")]),e._v(" is cross-checked with every witness as part of\n"),a("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/tree/master/docs/spec/lightclient/detection",target:"_blank",rel:"noopener noreferrer"}},[e._v("detection"),a("OutboundLink")],1),e._v(".\nIf a witness returns the conflicting header at the height "),a("code",[e._v("h")]),e._v(" the following procedure is executed to verify\nif the conflicting header comes from the valid trace and if that's the case to create an attack evidence:")]),e._v(" "),a("h4",{attrs:{id:"helper-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-functions"}},[e._v("#")]),e._v(" Helper functions")]),e._v(" "),a("p",[e._v("We assume the following helper functions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmV0dXJucyB0cmFjZSBvZiB2ZXJpZmllZCBsaWdodCBibG9ja3Mgc3RhcnRpbmcgZnJvbSByb290SGVpZ2h0IGFuZCBlbmRpbmcgd2l0aCB0YXJnZXRIZWlnaHQuClRyYWNlKGxpZ2h0U3RvcmUgTGlnaHRTdG9yZSwgcm9vdEhlaWdodCBpbnQ2NCwgdGFyZ2V0SGVpZ2h0IGludDY0KSBMaWdodEJsb2NrW10KCi8vIFJldHVybnMgdmFsaWRhdG9yIHNldCBmb3IgdGhlIGdpdmVuIGhlaWdodApHZXRWYWxpZGF0b3JzKGJjIEJsb2NrY2hhaW4sIGhlaWdodCBpbnQ2NCkgVmFsaWRhdG9yW10KCi8vIFJldHVybnMgdmFsaWRhdG9yIHNldCBmb3IgdGhlIGdpdmVuIGhlaWdodApHZXRWYWxpZGF0b3JzKGJjIEJsb2NrY2hhaW4sIGhlaWdodCBpbnQ2NCkgVmFsaWRhdG9yW10KCi8vIFJldHVybiB2YWxpZGF0b3IgYWRkcmVzc2VzIGZvciB0aGUgZ2l2ZW4gdmFsaWRhdG9ycwpHZXRBZGRyZXNzZXModmFscyBWYWxpZGF0b3JbXSkgVmFsaWRhdG9yQWRkcmVzc1tdCg=="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZXRlY3RMaWdodENsaWVudEF0dGFja3MocHJpbWFyeSBQZWVySUQsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlfdHJhY2UgW11MaWdodEJsb2NrLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzIFBlZXJJRCkgKExpZ2h0Q2xpZW50QXR0YWNrRXZpZGVuY2UsIExpZ2h0Q2xpZW50QXR0YWNrRXZpZGVuY2UpIHsKICAgIHByaW1hcnlfbGNhX2V2aWRlbmNlLCB3aXRuZXNzX3RyYWNlID0gRGV0ZWN0TGlnaHRDbGllbnRBdHRhY2socHJpbWFyeV90cmFjZSwgd2l0bmVzcykKCiAgICB3aXRuZXNzX2xjYV9ldmlkZW5jZSA9IG5pbAogICAgaWYgd2l0bmVzc190cmFjZSAhPSBuaWwgewogICAgICAgIHdpdG5lc3NfbGNhX2V2aWRlbmNlLCBfID0gRGV0ZWN0TGlnaHRDbGllbnRBdHRhY2sod2l0bmVzc190cmFjZSwgcHJpbWFyeSkKICAgIH0KICAgIHJldHVybiBwcmltYXJ5X2xjYV9ldmlkZW5jZSwgd2l0bmVzc19sY2FfZXZpZGVuY2UKfQoKZnVuYyBEZXRlY3RMaWdodENsaWVudEF0dGFjayh0cmFjZSBbXUxpZ2h0QmxvY2ssIHBlZXIgUGVlcklEKSAoTGlnaHRDbGllbnRBdHRhY2tFdmlkZW5jZSwgW11MaWdodEJsb2NrKSB7CgogICAgbGlnaHRTdG9yZSA9IG5ldyBMaWdodFN0b3JlKCkuVXBkYXRlKHRyYWNlWzBdLCBTdGF0ZVRydXN0ZWQpCgogICAgZm9yIGkgaW4gMS4ubGVuKHRyYWNlKS0xIHsKICAgICAgICBsaWdodFN0b3JlLCByZXN1bHQgPSBWZXJpZnlUb1RhcmdldChwZWVyLCBsaWdodFN0b3JlLCB0cmFjZVtpXS5IZWFkZXIuSGVpZ2h0KQoKICAgICAgICBpZiByZXN1bHQgPT0gUmVzdWx0RmFpbHVyZSB0aGVuIHJldHVybiAobmlsLCBuaWwpCgogICAgICAgIGN1cnJlbnQgPSBsaWdodFN0b3JlLkdldCh0cmFjZVtpXS5IZWFkZXIuSGVpZ2h0KQoKICAgICAgICAvLyBpZiBvYnRhaW5lZCBoZWFkZXIgaXMgdGhlIHNhbWUgYXMgaW4gdGhlIHRyYWNlIHdlIGNvbnRpbnVlIHdpdGggYSBuZXh0IGhlaWdodAogICAgICAgIGlmIGN1cnJlbnQuSGVhZGVyID09IHRyYWNlW2ldLkhlYWRlciBjb250aW51ZQoKICAgICAgICAvLyB3ZSBoYXZlIGlkZW50aWZpZWQgYSBjb25mbGljdGluZyBoZWFkZXIKICAgICAgICBjb21tb25CbG9jayA9IHRyYWNlW2ktMV0KICAgICAgICBjb25mbGljdGluZ0Jsb2NrID0gdHJhY2VbaV0KCiAgICAgICAgcmV0dXJuIChMaWdodENsaWVudEF0dGFja0V2aWRlbmNlIHsgY29uZmxpY3RpbmdCbG9jaywgY29tbW9uQmxvY2suSGVhZGVyLkhlaWdodCB9LAogICAgICAgICAgICAgICAgVHJhY2UobGlnaHRTdG9yZSwgdHJhY2VbaS0xXS5IZWFkZXIuSGVpZ2h0LCB0cmFjZVtpXS5IZWFkZXIuSGVpZ2h0KSkKICAgIH0KICAgIHJldHVybiAobmlsLCBuaWwpCn0K"}}),e._v(" "),a("h2",{attrs:{id:"evidence-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evidence-handling"}},[e._v("#")]),e._v(" Evidence handling")]),e._v(" "),a("p",[e._v("As part of on chain evidence handling, full nodes identifies misbehaving processes and informs\nthe application, so they can be slashed. Note that only bonded validators should\nbe reported to the application. There are three types of attacks that can be executed against\nTendermint light client:")]),e._v(" "),a("ul",[a("li",[e._v("lunatic attack")]),e._v(" "),a("li",[e._v("equivocation attack and")]),e._v(" "),a("li",[e._v("amnesia attack.")])]),e._v(" "),a("p",[e._v("We now specify the evidence handling logic.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBkZXRlY3RNaXNiZWhhdmluZ1Byb2Nlc3NlcyhsY0F0dGFja0V2aWRlbmNlIExpZ2h0Q2xpZW50QXR0YWNrRXZpZGVuY2UsIGJjIEJsb2NrY2hhaW4pIFtdVmFsaWRhdG9yQWRkcmVzcyB7CiAgIGFzc3VtZSBJc1ZhbGlkKGxjYUV2aWRlbmNlLCBiYykKCiAgIC8vIGx1bmF0aWMgbGlnaHQgY2xpZW50IGF0dGFjawogICBpZiAhaXNWYWxpZEJsb2NrKGN1cnJlbnQuSGVhZGVyLCBjb25mbGljdGluZ0Jsb2NrLkhlYWRlcikgewogICAgICAgIGNvbmZsaWN0aW5nQ29tbWl0ID0gbGNBdHRhY2tFdmlkZW5jZS5Db25mbGljdGluZ0Jsb2NrLkNvbW1pdAogICAgICAgIGJvbmRlZFZhbGlkYXRvcnMgPSBHZXROZXh0VmFsaWRhdG9ycyhiYywgbGNBdHRhY2tFdmlkZW5jZS5Db21tb25IZWlnaHQpCgogICAgICAgIHJldHVybiBnZXRTaWduZXJzKGNvbmZsaWN0aW5nQ29tbWl0KSBpbnRlcnNlY3Rpb24gR2V0QWRkcmVzc2VzKGJvbmRlZFZhbGlkYXRvcnMpCgogICAvLyBlcXVpdm9jYXRpb24gbGlnaHQgY2xpZW50IGF0dGFjawogICB9IGVsc2UgaWYgY3VycmVudC5IZWFkZXIuUm91bmQgPT0gY29uZmxpY3RpbmdCbG9jay5IZWFkZXIuUm91bmQgewogICAgICAgIGNvbmZsaWN0aW5nQ29tbWl0ID0gbGNBdHRhY2tFdmlkZW5jZS5Db25mbGljdGluZ0Jsb2NrLkNvbW1pdAogICAgICAgIHRydXN0ZWRDb21taXQgPSBiY1tjb25mbGljdGluZ0Jsb2NrLkhlYWRlci5IZWlnaHQrMV0uTGFzdENvbW1pdAoKICAgICAgICByZXR1cm4gZ2V0U2lnbmVycyh0cnVzdGVkQ29tbWl0KSBpbnRlcnNlY3Rpb24gZ2V0U2lnbmVycyhjb25mbGljdGluZ0NvbW1pdCkKCiAgIC8vIGFtbmVzaWEgbGlnaHQgY2xpZW50IGF0dGFjawogICB9IGVsc2UgewogICAgICAgIEhhbmRsZUFtbmVzaWFBdHRhY2tFdmlkZW5jZShsY0F0dGFja0V2aWRlbmNlLCBiYykKICAgfQp9CgovLyBCbG9jayB2YWxpZGl0eSBpbiB0aGlzIGNvbnRleHQgaXMgZGVmaW5lZCBieSB0aGUgdHJ1c3RlZCBoZWFkZXIuCmZ1bmMgaXNWYWxpZEJsb2NrKHRydXN0ZWQgSGVhZGVyLCBjb25mbGljdGluZyBIZWFkZXIpIGJvb2xlYW4gewogICAgcmV0dXJuIHRydXN0ZWQuVmFsaWRhdG9yc0hhc2ggPT0gY29uZmxpY3RpbmcuVmFsaWRhdG9yc0hhc2ggYW5kCiAgICAgICAgICAgdHJ1c3RlZC5OZXh0VmFsaWRhdG9yc0hhc2ggPT0gY29uZmxpY3RpbmcuTmV4dFZhbGlkYXRvcnNIYXNoIGFuZAogICAgICAgICAgIHRydXN0ZWQuQ29uc2Vuc3VzSGFzaCA9PSBjb25mbGljdGluZy5Db25zZW5zdXNIYXNoIGFuZAogICAgICAgICAgIHRydXN0ZWQuQXBwSGFzaCA9PSBjb25mbGljdGluZy5BcHBIYXNoIGFuZAogICAgICAgICAgIHRydXN0ZWQuTGFzdFJlc3VsdHNIYXNoID09IGNvbmZsaWN0aW5nLkxhc3RSZXN1bHRzSGFzaAp9CgpmdW5jIGdldFNpZ25lcnMoY29tbWl0IENvbW1pdCkgW11WYWxpZGF0b3JBZGRyZXNzIHsKICAgIHNpZ25lcnMgPSBbXVZhbGlkYXRvckFkZHJlc3MKICAgIGZvciAoaSwgY29tbWl0U2lnKSBpbiBjb21taXQuU2lnbmF0dXJlcyB7CiAgICAgICAgaWYgY29tbWl0U2lnLkJsb2NrSURGbGFnID09IEJsb2NrSURGbGFnQ29tbWl0IHsKICAgICAgICAgICAgc2lnbmVycy5hcHBlbmQoY29tbWl0U2lnLlZhbGlkYXRvckFkZHJlc3MpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIHNpZ25lcnMKfQo="}}),e._v(" "),a("p",[e._v("Note that amnesia attack evidence handling involves more complex processing, i.e., cannot be\ndefined simply on amnesia attack evidence. We explain in the following section a protocol\nfor handling amnesia attack evidence.")]),e._v(" "),a("h3",{attrs:{id:"amnesia-attack-evidence-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amnesia-attack-evidence-handling"}},[e._v("#")]),e._v(" Amnesia attack evidence handling")]),e._v(" "),a("p",[e._v("Detecting faulty processes in case of the amnesia attack is more complex and cannot be inferred\npurely based on attack evidence data. In this case, in order to detect misbehaving processes we need\naccess to votes processes sent/received during the conflicting height. Therefore, amnesia handling assumes that\nvalidators persist all votes received and sent during multi-round heights (as amnesia attack\nis only possible in heights that executes over multiple rounds, i.e., commit round > 0).")]),e._v(" "),a("p",[e._v("To simplify description of the algorithm we assume existence of the trusted oracle called monitor that will\ndrive the algorithm and output faulty processes at the end. Monitor can be implemented in a\ndistributed setting as on-chain module. The algorithm works as follows:\n1) Monitor sends votesets request to validators of the conflicting height. Validators\nare expected to send their votesets within predefined timeout.\n2) Upon receiving votesets request, validators send their votesets to a monitor."),a("br"),e._v("\n2) Validators which have not sent its votesets within timeout are considered faulty.\n3) The preprocessing of the votesets is done. That means that the received votesets are analyzed\nand each vote (valid) sent by process p is added to the voteset of the sender p. This phase ensures that\nvotes sent by faulty processes observed by at least one correct validator cannot be excluded from the analysis.\n4) Votesets of every validator are analyzed independently to decide whether the validator is correct or faulty.\nA faulty validators is the one where at least one of those invalid transitions is found:\n- More than one PREVOTE message is sent in a round\n- More than one PRECOMMIT message is sent in a round\n- PRECOMMIT message is sent without receiving +2/3 of voting-power equivalent\nappropriate PREVOTE messages\n- PREVOTE message is sent for the value V’ in round r’ and the PRECOMMIT message had\nbeen sent for the value V in round r by the same process (r’ > r) and there are no\n+2/3 of voting-power equivalent PREVOTE(vr, V’) messages (vr ≥ 0 and vr > r and vr < r’)\nas the justification for sending PREVOTE(r’, V’)")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);