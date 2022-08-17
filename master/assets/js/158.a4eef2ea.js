(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{683:function(g,o,c){"use strict";c.r(o);var t=c(1),e=Object(t.a)({},(function(){var g=this,o=g.$createElement,c=g._self._c||o;return c("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[c("h1",{attrs:{id:"tendermint-v0-markdown-pseudocode"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-v0-markdown-pseudocode"}},[g._v("#")]),g._v(" Tendermint v0 Markdown pseudocode")]),g._v(" "),c("p",[g._v("This translates the latex code for Tendermint consensus from the Tendermint paper into markdown.")]),g._v(" "),c("h3",{attrs:{id:"initialization"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[g._v("#")]),g._v(" Initialization")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aF9wIOKGkCAwCnJvdW5kX3Ag4oaQIDAKc3RlcF9wIGlzIG9uZSBvZiB7cHJvcG9zZSwgcHJldm90ZSwgcHJlY29tbWl0fQpkZWNpc2lvbl9wIOKGkCBWZWN0b3IoKQpsb2NrZWRSb3VuZF9wIOKGkCAtMQpsb2NrZWRWYWx1ZV9wIOKGkCBuaWwKdmFsaWRWYWx1ZV9wIOKGkCBuaWwKdmFsaWRSb3VuZF9wIOKGkCAtMQo="}}),g._v(" "),c("h3",{attrs:{id:"startround-round"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#startround-round"}},[g._v("#")]),g._v(" StartRound(round)")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gc3RhcnRSb3VuZChyb3VuZCkgewogICAgcm91bmRfcCDihpAgcm91bmQKICAgIHN0ZXBfcCDihpAgcHJvcG9zZQogICAgaWYgcHJvcG9zZXIoaF9wLCByb3VuZF9wKSA9IHAgewogICAgICAgIGlmIHZhbGlkVmFsdWVfcCAhPSBuaWwgewogICAgICAgICAgICBwcm9wb3NhbCDihpAgdmFsaWRWYWx1ZV9wCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcHJvcG9zYWwg4oaQIGdldFZhbHVlKCkKICAgICAgICB9CiAgICAgICAgYnJvYWRjYXN0IOKfqFBST1BPU0FMLCBoX3AsIHJvdW5kX3AsIHByb3Bvc2FsLCB2YWxpZFJvdW5kX3Din6kKICAgIH0gZWxzZSB7CiAgICAgICAgc2NoZWR1bGUgT25UaW1lb3V0UHJvcG9zZShoX3Ascm91bmRfcCkgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGltZW91dFByb3Bvc2Uocm91bmRfcCkKICAgIH0KfQo="}}),g._v(" "),c("h3",{attrs:{id:"receiveproposal"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#receiveproposal"}},[g._v("#")]),g._v(" ReceiveProposal")]),g._v(" "),c("p",[g._v("In the case where the local node is not locked on any round, the following is ran:")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCDiiJIxKSBmcm9tIHByb3Bvc2VyKGhfcCwgcm91bmRfcCkgd2hpbGUgc3RlcF9wID0gcHJvcG9zZSBkbyB7CiAgICBpZiB2YWxpZCh2KSDiiKcgKGxvY2tlZFJvdW5kX3AgPSDiiJIxIOKIqCBsb2NrZWRWYWx1ZV9wID0gdikgewogICAgICAgIGJyb2FkY2FzdCDin6hQUkVWT1RFLCBoX3AsIHJvdW5kX3AsIGlkKHYp4p+pIAogICAgfSBlbHNlIHsKICAgICAgICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kgCiAgICB9CiAgICBzdGVwX3Ag4oaQIHByZXZvdGUKfQo="}}),g._v(" "),c("p",[g._v("In the case where the node is locked on a round, the following is ran:")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCB2cuKfqSBmcm9tIHByb3Bvc2VyKGhfcCwgcm91bmRfcCkKICBBTkQgMmYgKyAxIOKfqFBSRVZPVEUsIGhfcCwgdnIsIGlkKHYp4p+pCiAgd2hpbGUgc3RlcF9wID0gcHJvcG9zZSDiiKcgKHZyIOKJpSAwIOKIpyB2ciAmbHQ7IHJvdW5kX3ApIGRvIHsKICAgIGlmIHZhbGlkKHYpIOKIpyAobG9ja2VkUm91bmRfcCDiiaQgdnIg4oioIGxvY2tlZFZhbHVlX3AgPSB2KSB7CiAgICAgICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgaWQodinin6kKICAgIH0gZWxzZSB7CiAgICAgICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgbmls4p+pCiAgICB9CiAgICBzdGVwX3Ag4oaQIHByZXZvdGUKfQo="}}),g._v(" "),c("h3",{attrs:{id:"prevote-timeout"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#prevote-timeout"}},[g._v("#")]),g._v(" Prevote timeout")]),g._v(" "),c("p",[g._v("Upon receiving 2f + 1 prevotes, setup a timeout.")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCB2ciwgKuKfqSB3aXRoIHN0ZXBfcCA9IHByZXZvdGUgZm9yIHRoZSBmaXJzdCB0aW1lLCBkbyB7CiAgICBzY2hlZHVsZSBPblRpbWVvdXRQcmV2b3RlKGhfcCwgcm91bmRfcCkgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGltZW91dFByZXZvdGUocm91bmRfcCkKfQo="}}),g._v(" "),c("p",[g._v("with OnTimeoutPrevote defined as:")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gT25UaW1lb3V0UHJldm90ZShoZWlnaHQsIHJvdW5kKSB7CiAgICBpZiAoaGVpZ2h0ID0gaF9wICZhbXA7JmFtcDsgcm91bmQgPSByb3VuZF9wICZhbXA7JmFtcDsgc3RlcF9wID0gcHJldm90ZSkgewogICAgICAgIGJyb2FkY2FzdCDin6hQUkVDT01NSVQsIGhfcCwgcm91bmRfcCwgbmls4p+pCiAgICAgICAgc3RlcF9wIOKGkCBwcmVjb21taXQKICAgIH0KfQo="}}),g._v(" "),c("h3",{attrs:{id:"receiving-enough-prevotes-to-precommit"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#receiving-enough-prevotes-to-precommit"}},[g._v("#")]),g._v(" Receiving enough prevotes to precommit")]),g._v(" "),c("p",[g._v("The following code is ran upon receiving 2f + 1 prevotes for the same block")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCAq4p+pCiAgZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApCiAgQU5EIDJmICsgMSDin6hQUkVWT1RFLCBoX3AsIHJvdW5kX3AsIGlkKHYp4p+pIAogIHdoaWxlIHZhbGlkKHYpIOKIpyBzdGVwX3AgJmd0Oz0gcHJldm90ZSBmb3IgdGhlIGZpcnN0IHRpbWUgZG8gewogICAgaWYgKHN0ZXBfcCA9IHByZXZvdGUpIHsKICAgICAgICBsb2NrZWRWYWx1ZV9wIOKGkCB2CiAgICAgICAgbG9ja2VkUm91bmRfcCDihpAgcm91bmRfcAogICAgICAgIGJyb2FkY2FzdCDin6hQUkVDT01NSVQsIGhfcCwgcm91bmRfcCwgaWQodinin6kKICAgICAgICBzdGVwX3Ag4oaQIHByZWNvbW1pdAogICAgfQogICAgdmFsaWRWYWx1ZV9wIOKGkCB2CiAgICB2YWxpZFJvdW5kX3Ag4oaQIHJvdW5kX3AKfQo="}}),g._v(" "),c("p",[g._v("And upon receiving 2f + 1 prevotes for nil:")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kgCiAgd2hpbGUgc3RlcF9wID0gcHJldm90ZSBkbyB7CiAgICBicm9hZGNhc3Qg4p+oUFJFQ09NTUlULCBoX3AsIHJvdW5kX3AsIG5pbOKfqQogICAgc3RlcF9wIOKGkCBwcmVjb21taXQKfQo="}}),g._v(" "),c("h3",{attrs:{id:"precommit-timeout"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#precommit-timeout"}},[g._v("#")]),g._v(" Precommit timeout")]),g._v(" "),c("p",[g._v("Upon receiving 2f + 1 precommits, setup a timeout.")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFQ09NTUlULCBoX3AsIHZyLCAq4p+pIGZvciB0aGUgZmlyc3QgdGltZSwgZG8gewogICAgc2NoZWR1bGUgT25UaW1lb3V0UHJlY29tbWl0KGhfcCwgcm91bmRfcCkgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGltZW91dFByZWNvbW1pdChyb3VuZF9wKQp9Cg=="}}),g._v(" "),c("p",[g._v("with OnTimeoutPrecommit defined as:")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gT25UaW1lb3V0UHJlY29tbWl0KGhlaWdodCwgcm91bmQpIHsKICAgIGlmIChoZWlnaHQgPSBoX3AgJmFtcDsmYW1wOyByb3VuZCA9IHJvdW5kX3ApIHsKICAgICAgICBTdGFydFJvdW5kKHJvdW5kX3AgKyAxKQogICAgfQp9Cg=="}}),g._v(" "),c("h3",{attrs:{id:"upon-receiving-2f-1-precommits"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#upon-receiving-2f-1-precommits"}},[g._v("#")]),g._v(" Upon Receiving 2f + 1 precommits")]),g._v(" "),c("p",[g._v("The following code is ran upon receiving 2f + 1 precommits for the same block")]),g._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByLCB2LCAq4p+pCiAgZnJvbSBwcm9wb3NlcihoX3AsIHIpCiAgQU5EIDJmICsgMSDin6ggUFJFQ09NTUlULCBoX3AsIHIsIGlkKHYp4p+pIAogIHdoaWxlIGRlY2lzaW9uX3BbaF9wXSA9IG5pbCBkbyB7CiAgICBpZiAodmFsaWQodikpIHsKICAgICAgICBkZWNpc2lvbl9wW2hfcF0g4oaQIHYKICAgICAgICBoX3Ag4oaQIGhfcCArIDEKICAgICAgICByZXNldCBsb2NrZWRSb3VuZF9wLCBsb2NrZWRWYWx1ZV9wLHZhbGlkUm91bmRfcCBhbmQgdmFsaWRWYWx1ZV9wIHRvIGluaXRpYWwgdmFsdWVzCiAgICAgICAgU3RhcnRSb3VuZCgwKQogICAgfQp9Cg=="}}),g._v(" "),c("p",[g._v("If we don't see 2f + 1 precommits for the same block, we wait until we get 2f + 1 precommits, and the timeout occurs.")])],1)}),[],!1,null,null,null);o.default=e.exports}}]);