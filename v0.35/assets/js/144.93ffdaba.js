(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{670:function(e,t,r){"use strict";r.r(t);var n=r(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"remote-signer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remote-signer"}},[e._v("#")]),e._v(" Remote signer")]),e._v(" "),r("p",[e._v("Tendermint provides a remote signer option for validators. A remote signer enables the operator to store the validator key on a different machine minimizing the attack surface if a server were to be compromised.")]),e._v(" "),r("p",[e._v("The remote signer protocol implements a "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("client and server architecture"),r("OutboundLink")],1),e._v(". When Tendermint requires the public key or signature for a proposal or vote it requests it from the remote signer.")]),e._v(" "),r("p",[e._v("To run a secure validator and remote signer system it is recommended to use a VPC (virtual private cloud) or a private connection.")]),e._v(" "),r("p",[e._v("There are two different configurations that can be used: Raw or gRPC.")]),e._v(" "),r("h2",{attrs:{id:"raw"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raw"}},[e._v("#")]),e._v(" Raw")]),e._v(" "),r("p",[e._v("While both options use tcp or unix sockets the raw option uses tcp or unix sockets without http. The raw protocol sets up Tendermint as the server and the remote signer as the client. This aids in not exposing the remote signer to public network.")]),e._v(" "),r("blockquote",[r("p",[e._v("Warning: Raw will be deprecated in a future major release, we recommend implementing your key management server against the gRPC configuration.")])]),e._v(" "),r("h2",{attrs:{id:"grpc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),r("OutboundLink")],1),e._v(" is an RPC framework built with "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/HTTP/2",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP/2"),r("OutboundLink")],1),e._v(", uses "),r("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),r("OutboundLink")],1),e._v(" to define services and has been standardized within the cloud infrastructure community. gRPC provides a language agnostic way to implement services. This aids developers in the writing key management servers in various different languages.")]),e._v(" "),r("p",[e._v("GRPC utilizes "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[e._v("TLS"),r("OutboundLink")],1),e._v(", another widely standardized protocol, to secure connections. There are two forms of TLS to secure a connection, one-way and two-way. One way is when the client identifies the server but the server allows anyone to connect to it. Two-way is when the client identifies the server and the server identifies the client, prohibiting connections from unknown parties.")]),e._v(" "),r("p",[e._v("When using gRPC Tendermint is setup as the client. Tendermint will make calls to the remote signer. We recommend not exposing the remote signer to the public network with the use of virtual private cloud.")]),e._v(" "),r("p",[e._v("Securing your remote signers connection is highly recommended, but we provide the option to run it with a insecure connection.")]),e._v(" "),r("h3",{attrs:{id:"generating-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generating-certificates"}},[e._v("#")]),e._v(" Generating Certificates")]),e._v(" "),r("p",[e._v("To run a secure connection with gRPC we need to generate certificates and keys. We will walkthrough how to self sign certificates for two-way TLS.")]),e._v(" "),r("p",[e._v("There are two ways to generate certificates, "),r("a",{attrs:{href:"https://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("openssl"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/square/certstrap",target:"_blank",rel:"noopener noreferrer"}},[e._v("certstarp"),r("OutboundLink")],1),e._v(". Both of these options can be used but we will be covering "),r("code",[e._v("certstrap")]),e._v(" because it provides a simpler process then openssl.")]),e._v(" "),r("ul",[r("li",[e._v("Install "),r("code",[e._v("Certstrap")]),e._v(":")])]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ICBnbyBnZXQgZ2l0aHViLmNvbS9zcXVhcmUvY2VydHN0cmFwQHYxLjIuMAo="}}),e._v(" "),r("ul",[r("li",[e._v("Create certificate authority for self signing.")])]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ICMgZ2VuZXJhdGUgc2VsZiBzaWduaW5nIGNlcml0aWZpY2F0ZSBhdXRob3JpdHkKIGNlcnRzdHJhcCBpbml0IC0tY29tbW9uLW5hbWUgJnF1b3Q7Jmx0O25hbWVfQ0EmZ3Q7JnF1b3Q7IC0tZXhwaXJlcyAmcXVvdDsyMCB5ZWFycyZxdW90Owo="}}),e._v(" "),r("ul",[r("li",[e._v("Request a certificate for the server.\n"),r("ul",[r("li",[e._v("For generalization purposes we set the ip to "),r("code",[e._v("127.0.0.1")]),e._v(", but for your node please use the servers IP.")])])]),e._v(" "),r("li",[e._v("Sign the servers certificate with your certificate authority")])]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ICMgZ2VuZXJhdGUgc2VydmVyIGNlcmlmaWNhdGUKIGNlcnRzdHJhcCByZXF1ZXN0LWNlcnQgLWNuIHNlcnZlciAtaXAgMTI3LjAuMC4xCiAjIHNlbGYtc2lnbiBzZXJ2ZXIgY2VyaWZpY2F0ZSB3aXRoIHJvb3RDQQogY2VydHN0cmFwIHNpZ24gc2VydmVyIC0tQ0EgJnF1b3Q7Jmx0O25hbWVfQ0EmZ3Q7JnF1b3Q7IDEyNy4wLjAuMQo="}}),e._v(" "),r("ul",[r("li",[e._v("Request a certificate for the client.\n"),r("ul",[r("li",[e._v("For generalization purposes we set the ip to "),r("code",[e._v("127.0.0.1")]),e._v(", but for your node please use the clients IP.")])])]),e._v(" "),r("li",[e._v("Sign the clients certificate with your certificate authority")])]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBnZW5lcmF0ZSBjbGllbnQgY2VyaWZpY2F0ZQogY2VydHN0cmFwIHJlcXVlc3QtY2VydCAtY24gY2xpZW50IC1pcCAxMjcuMC4wLjEKIyBzZWxmLXNpZ24gY2xpZW50IGNlcmlmaWNhdGUgd2l0aCByb290Q0EKIGNlcnRzdHJhcCBzaWduIGNsaWVudCAtLUNBICZxdW90OyZsdDtuYW1lX0NBJmd0OyZxdW90OyAxMjcuMC4wLjEK"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);