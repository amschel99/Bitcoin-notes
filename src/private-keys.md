## Private Key Formats

A private key can be represented in different formats, all corresponding to the same 256-bit number. 

### Common Private Key Formats

| Type            | Prefix | Description |
|----------------|--------|-------------|
| **Hex**        | None   | 64 hexadecimal digits |
| **WIF**        | 5      | Base58check encoding (base58 with version prefix of 128 and 32-bit checksum) |
| **WIF-compressed** | K or L | Same as WIF but with added suffix `0x01` before encoding |

---

## Modern Relevancy of Private Key Formats

- Early Bitcoin wallets generated independent private keys and required frequent backups.
- Modern wallets use **deterministic wallets**, generating all private keys from a single **seed value**.
- **Deterministic wallets** only need a single backup.
- **Security concern:** If an attacker acquires a single exported key plus some wallet metadata, they may derive all keys in the wallet.
- **No modern wallets support individual key import/export** due to security risks.

---

## Example: Same Key in Different Formats

| Format           | Private Key |
|-----------------|----------------------------------------------------------------|
| **Hex**         | `1e99423a4ed27608a15a2616a2b0e9e52ced330ac530edcc32c8ffc6a526aedd` |
| **WIF**         | `5J3mBbAH58CpQ3Y5RNJpUKPE62SQ5tfcvU2JpbnkeyhfsYB1Jcn` |
| **WIF-compressed** | `KxFC1jmwwCoACiCAWZ3eXa96mBM6tb3TYzGmf6YwgdGWZgawvrtJ` |

Each format represents the same key in different ways and can be converted into another format easily.

---

## Compressed Private Keys

- **Misnomer:** A "compressed private key" is actually **longer** than an uncompressed private key.
- The extra byte (`0x01`) **signals** that only compressed public keys should be derived from it.
- Modern wallets **only** export WIF-compressed private keys (`K` or `L` prefix).
- **Old wallets** export WIF (uncompressed) keys (`5` prefix).

### Example: WIF vs WIF-Compressed

| Format           | Private Key |
|-----------------|----------------------------------------------------------------|
| **Hex**         | `1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD` |
| **WIF**         | `5J3mBbAH58CpQ3Y5RNJpUKPE62SQ5tfcvU2JpbnkeyhfsYB1Jcn` |
| **Hex-compressed** | `1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD01` |
| **WIF-compressed** | `KxFC1jmwwCoACiCAWZ3eXa96mBM6tb3TYzGmf6YwgdGWZgawvrtJ` |

---

## Vanity Addresses

- **Vanity addresses** are Bitcoin addresses with custom patterns (e.g., `1LoveBPzzD...`).
- They require generating and testing **billions** of private keys until a match is found.
- **Security:** They are **as secure** as regular addresses but require brute-force computation.
- **Privacy Risk:** They encourage address reuse, which can reduce financial privacy.

### Example: Vanity Address Search Times

| Length | Pattern       | Probability | Avg. Search Time (Desktop) |
|--------|-------------|--------------|---------------------------|
| 1      | `1K`        | 1 in 58      | <1 ms |
| 4      | `1Kids`     | 1 in 11M     | 1 min |
| 7      | `1KidsCha`  | 1 in 2.2T    | 3-4 months |
| 10     | `1KidsCharit` | 1 in 400Q  | 46,000 years |

- **Specialized GPUs** are required for patterns longer than 7 characters.
- **Vanity pools** exist, where miners generate vanity addresses for a fee.

---

## Paper Wallets (OBSOLETE!)

> **Warning:** Paper wallets are **obsolete and dangerous** due to security risks.

- Private keys printed on paper for offline storage.
- Often include the corresponding Bitcoin address.
- Risks:
  - Many were compromised by malicious generators.
  - Easily lost, stolen, or destroyed.
  - Should **not** be used for storing Bitcoin.
  - **Better alternative:** Hardware wallets & seed phrase backups.

---

### Summary

- **Private keys** can be stored in different formats, with WIF and WIF-compressed being common.
- **Modern wallets use deterministic seeds** and **do not allow** individual key import/export.
- **Compressed keys** refer to **public keys**, not private keys.
- **Vanity addresses** are impractical for long patterns but were popular in Bitcoin’s early days.
- **Paper wallets are insecure** and should be avoided.

For safe Bitcoin storage, use **deterministic wallets** and **hardware devices** instead of exporting/importing private keys.
