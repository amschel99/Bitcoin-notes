# ECDSA (Elliptic Curve Digital Signature Algorithm)

ECDSA is a cryptographic algorithm used for digital signatures. It relies on the mathematics of elliptic curves to provide security.

## Key Generation

1. A point `G` on the elliptic curve is chosen and agreed upon.
2. To generate a private key, a random number `k` is chosen such that `1 <= k <= n-1`, where `n` is the order of the base point `G`. `k` is typically 32 bytes long.
3. The public key `K` is computed by multiplying `G` by `k`:
   \[
   K = G \cdot k
   \]
   Since `K` is a point on the curve, it has `x` and `y` coordinates, making it 64 bytes long (32 bytes for `x` and 32 bytes for `y`).

### Discrete Logarithm Problem
You cannot determine `k` from `G` and `K` because division is not defined on elliptic curves. This is known as the **Discrete Logarithm Problem**, which forms the foundation of elliptic curve cryptography's security.

---

## Compressed Public Keys

The public key is typically 64 bytes long. An additional prefix byte is added, making the total size 65 bytes. However, the public key can be compressed to reduce its size.

### How Compression Works
- A public key is a point `(x, y)` on the elliptic curve.
- If we know `x`, we can calculate `y` using the curve's equation. For example, in Bitcoin, the curve equation is:
  \[
  y^2 \mod p = (x^3 + 7) \mod p
  \]
- Instead of storing both `x` and `y`, we can store only the `x` coordinate (32 bytes) and a prefix byte, making the public key 33 bytes long. This reduces the size by almost 50%.

### Prefix Bytes
- **Uncompressed Public Keys**: Have a prefix of `04`. This indicates that both `x` and `y` coordinates are included.
- **Compressed Public Keys**: Have a prefix of either `02` or `03`. The prefix depends on whether the `y` coordinate is positive (`02`) or negative (`03`).

---

## Mermaid Diagrams

### Key Generation Process
```mermaid
graph TD
    A[Choose Base Point G] --> B[Generate Private Key k]
    B --> C[Compute Public Key K = G * k]
    C --> D[Public Key K is a point (x, y) on the curve]

```

## Compressed vs Uncompressed Public Keys
```mermaid
graph TD
    A[Public Key (x, y)] --> B{Compressed?}
    B -->|Yes| C[Store x + Prefix (02 or 03)]
    B -->|No| D[Store x + y + Prefix (04)]
```

## Summary

- **Private Key**: A random number `k` (32 bytes).
- **Public Key**: A point `K = G * k` on the elliptic curve (64 bytes uncompressed, 33 bytes compressed).
- **Compression**: Reduces public key size by storing only the `x` coordinate and a prefix byte.
- **Prefixes**:
  - `04`: Uncompressed public key.
  - `02` or `03`: Compressed public key (depending on the sign of `y`).