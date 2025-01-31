Object.assign(window.search, {"doc_urls":["base58-encoding.html#base58-encoding-in-bitcoin","base58-encoding.html#key-steps-in-base58-encoding","base58-encoding.html#1-add-a-prefix","base58-encoding.html#2-compute-checksum","base58-encoding.html#3-concatenate-components","base58-encoding.html#4-base58-encode","base58-encoding.html#example-structure","base58-encoding.html#why-use-base58","base58-encoding.html#summary"],"index":{"documentStore":{"docInfo":{"0":{"body":31,"breadcrumbs":6,"title":3},"1":{"body":0,"breadcrumbs":7,"title":4},"2":{"body":23,"breadcrumbs":6,"title":3},"3":{"body":19,"breadcrumbs":6,"title":3},"4":{"body":11,"breadcrumbs":6,"title":3},"5":{"body":8,"breadcrumbs":6,"title":3},"6":{"body":13,"breadcrumbs":5,"title":2},"7":{"body":23,"breadcrumbs":5,"title":2},"8":{"body":21,"breadcrumbs":4,"title":1}},"docs":{"0":{"body":"Base58 is a binary-to-text encoding scheme used in Bitcoin to represent data (e.g., addresses) with fewer symbols, avoiding visually ambiguous characters. It is derived from Base64 but removes the following characters: 0 (zero), O (uppercase o), l (lowercase L), I (uppercase i), +, and /.","breadcrumbs":"Base58 Encoding in Bitcoin » Base58 Encoding in Bitcoin","id":"0","title":"Base58 Encoding in Bitcoin"},"1":{"body":"","breadcrumbs":"Base58 Encoding in Bitcoin » Key Steps in Base58 Encoding","id":"1","title":"Key Steps in Base58 Encoding"},"2":{"body":"A prefix (version byte) is prepended to the data to identify its type. Common prefixes include: 0x00 for Pay-to-Public-Key-Hash (P2PKH) addresses. 0x05 for Pay-to-Script-Hash (P2SH) addresses.","breadcrumbs":"Base58 Encoding in Bitcoin » 1. Add a Prefix","id":"2","title":"1. Add a Prefix"},"3":{"body":"Hash the prefix + payload twice using SHA256: hash = SHA256(SHA256(prefix + payload)) Take the first 4 bytes of the resulting 32-byte hash. This serves as the checksum.","breadcrumbs":"Base58 Encoding in Bitcoin » 2. Compute Checksum","id":"3","title":"2. Compute Checksum"},"4":{"body":"Combine the prefix, payload, and checksum into a single byte sequence: final_data = prefix + payload + checksum","breadcrumbs":"Base58 Encoding in Bitcoin » 3. Concatenate Components","id":"4","title":"3. Concatenate Components"},"5":{"body":"Encode the final_data using Base58 encoding. Base58 alphabet : 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz","breadcrumbs":"Base58 Encoding in Bitcoin » 4. Base58 Encode","id":"5","title":"4. Base58 Encode"},"6":{"body":"For a P2PKH address: [0x00 (1 byte)] + [Public Key Hash (20 bytes)] + [Checksum (4 bytes)]","breadcrumbs":"Base58 Encoding in Bitcoin » Example Structure","id":"6","title":"Example Structure"},"7":{"body":"User-friendly : Removes ambiguous characters to prevent errors in manual entry. Error detection : The checksum allows validation of data integrity. Compact representation : Encodes data in fewer characters than hexadecimal.","breadcrumbs":"Base58 Encoding in Bitcoin » Why Use Base58?","id":"7","title":"Why Use Base58?"},"8":{"body":"Bitcoin uses Base58Check encoding (Base58 with checksum) for addresses: Add a prefix to identify data type. Compute a checksum via double SHA256 hashing. Combine and encode in Base58.","breadcrumbs":"Base58 Encoding in Bitcoin » Summary","id":"8","title":"Summary"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"0":{"tf":1.0}},"x":{"0":{"0":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"5":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"2":{"3":{"4":{"5":{"6":{"7":{"8":{"9":{"a":{"b":{"c":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"j":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"df":0,"docs":{},"p":{"df":0,"docs":{},"q":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"v":{"df":0,"docs":{},"w":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"a":{"b":{"c":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"j":{"df":0,"docs":{},"k":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"q":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"v":{"df":0,"docs":{},"w":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":1,"docs":{"4":{"tf":1.0}}},"4":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"a":{"d":{"d":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"6":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"h":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"5":{"8":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":5,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"5":{"tf":1.7320508075688772},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"6":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"6":{"tf":1.7320508075688772}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":5,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"p":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}}}}}},"n":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":5,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"5":{"tf":1.7320508075688772},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"6":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"6":{"tf":1.0}}}}},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"p":{"2":{"df":0,"docs":{},"p":{"df":0,"docs":{},"k":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}},"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"h":{"a":{"2":{"5":{"6":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"2":{"5":{"6":{"(":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":5,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"i":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"0":{"tf":1.0}},"x":{"0":{"0":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"5":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"2":{"3":{"4":{"5":{"6":{"7":{"8":{"9":{"a":{"b":{"c":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"j":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"df":0,"docs":{},"p":{"df":0,"docs":{},"q":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"v":{"df":0,"docs":{},"w":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"a":{"b":{"c":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"j":{"df":0,"docs":{},"k":{"df":0,"docs":{},"m":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"q":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"v":{"df":0,"docs":{},"w":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"3":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"4":{"df":3,"docs":{"3":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"a":{"d":{"d":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"8":{"tf":1.0}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"6":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"h":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"5":{"8":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":9,"docs":{"0":{"tf":2.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":2.23606797749979},"6":{"tf":1.0},"7":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"6":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":9,"docs":{"0":{"tf":2.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"6":{"tf":1.7320508075688772}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":5,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"p":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"n":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":9,"docs":{"0":{"tf":2.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":2.23606797749979},"6":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"6":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"6":{"tf":1.0}}}}},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"p":{"2":{"df":0,"docs":{},"p":{"df":0,"docs":{},"k":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}},"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":4,"docs":{"2":{"tf":2.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"h":{"a":{"2":{"5":{"6":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"2":{"5":{"6":{"(":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":5,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"i":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"title":{"root":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"df":1,"docs":{"4":{"tf":1.0}}},"4":{"df":1,"docs":{"5":{"tf":1.0}}},"a":{"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"5":{"8":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"n":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});