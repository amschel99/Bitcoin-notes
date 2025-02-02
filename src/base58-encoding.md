# Base58 Encoding in Bitcoin

Base58 is a binary-to-text encoding scheme used in Bitcoin to represent data (e.g., addresses) with fewer symbols, avoiding visually ambiguous characters. It is derived from **Base64** but removes the following characters:  
`0` (zero), `O` (uppercase o), `l` (lowercase L), `I` (uppercase i), `+`, and `/`.

---

## Key Steps in Base58 Encoding

### 1. Add a Prefix
- A **prefix** (version byte) is prepended to the data to identify its type.  
  Common prefixes include:
  - `0x00` for **Pay-to-Public-Key-Hash (P2PKH)** addresses.
  - `0x05` for **Pay-to-Script-Hash (P2SH)** addresses.

### 2. Compute Checksum
1. **Hash the prefix + payload** twice using SHA256:
    ``` hash = SHA256(SHA256(prefix + payload)) ```

2. Take the **first 4 bytes** of the resulting 32-byte hash. This serves as the checksum.

### 3. Concatenate Components
Combine the prefix, payload, and checksum into a single byte sequence:
    ```final_data = prefix + payload + checksum```


### 4. Base58 Encode
Encode the `final_data` using Base58 encoding.  
- **Base58 alphabet**: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`

---

## Example Structure
For a P2PKH address:
    ```[0x00 (1 byte)] + [Public Key Hash (20 bytes)] + [Checksum (4 bytes)]```


## Why Use Base58?
- **User-friendly**: Removes ambiguous characters to prevent errors in manual entry.
- **Error detection**: The checksum allows validation of data integrity.
- **Compact representation**: Encodes data in fewer characters than hexadecimal.

---

## Summary
Bitcoin uses Base58Check encoding (Base58 with checksum) for addresses:
1. Add a **prefix** to identify data type.
2. Compute a **checksum** via double SHA256 hashing.
3. Combine and encode in Base58.

## Challenge 
 
 1.Given a  base58 `tprv`,  extract the private key and chaincode