# SegWit (Segregated Witness)  

## 🔹 What is SegWit?  
- **SegWit = Segregated Witness**  
- It was a Bitcoin upgrade in **2017**.  
- **Separates signature (witness data) from transaction data.**  
- Helps fix **transaction malleability** and improves Bitcoin scalability.  

---

## 🔹 Why Was SegWit Needed?  
### ✅ Transaction Malleability Fix  
- Before SegWit, **txid (transaction ID) included the signature**.  
- Attackers could **modify the signature** → **Change txid** without changing the transaction.  
- This caused issues for **Lightning Network** and Bitcoin apps.  
- **SegWit removes signatures from the txid calculation**, fixing this issue.  

### ✅ More Transactions per Block  
- **Transactions become smaller** → **More transactions fit in a block**.  
- **Lower fees** and **faster confirmations**.  

---

## 🔹 How SegWit Works  
- Moves the **signature (witness) data outside the main transaction**.  
- **New txid = Only inputs + outputs (excludes witness data).**  
- Prevents **txid changes** even if the signature is modified.  

---

## 🔹 Address Formats After SegWit  
### 1️⃣ **P2SH (Pay-to-Script-Hash)**  
- Starts with `3` (e.g., `3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC`).  
- Legacy way of using SegWit inside a standard script hash.  

### 2️⃣ **P2WSH (Pay-to-Witness-Script-Hash)**  
- Starts with `bc1q` (e.g., `bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh`).  
- Fully native SegWit, lower fees.  

---

## 🔹 Benefits of SegWit  
✅ Fixes **transaction malleability** (prevents txid changes).  
✅ **More transactions per block** (improves scalability).  
✅ **Lower transaction fees**.  
✅ Enables **Lightning Network** (for faster, cheaper payments).  

---

## 🔹 SegWit Adoption  
- SegWit is **optional** → Not all wallets/exchanges use it.  
- **Most wallets today support SegWit** (e.g., Ledger, Trezor, Electrum).  
- Some users still use **Legacy (non-SegWit) addresses**, leading to higher fees.