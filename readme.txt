 1️⃣ Project Folder Structure

```id="reg1"
registration-project/
│
├── server.js
├── package.json
│
├── views/
│   └── register.ejs
│   └── success.ejs
│
├── public/
│   └── styles/
│       └── main.css
```

---

# 📁 What each file does

* `server.js` → backend (handles form data)
* `register.ejs` → form UI
* `success.ejs` → show submitted data
* `public/` → CSS

---

# ⚙️ 2️⃣ Setup Project

mkdir registration-project
cd registration-project
npm init -y
npm install express body-parser ejs
```

---

# 🧠 3️⃣ server.js (Main Logic)


# 🖥 4️⃣ register.ejs (Form Page)


# 🎉 5️⃣ success.ejs (Show Data)


# 🚀 6️⃣ Run the Project

### Start server:

node server.js

### Open browser:


http://localhost:3000


# 🔄 7️⃣ How It Works (Flow)

```text id="reg6"
User opens page
        ↓
Register form दिखाई
        ↓
User fills form + click submit
        ↓
POST /register
        ↓
Server reads data (req.body)
        ↓
Server sends data to success.ejs
        ↓
Browser shows result
```

---

# 🧠 8️⃣ Simple Explanation

* Form → sends data
* Server → receives data
* EJS → displays data

---

# 🍽 Real-Life Example

* Form = Application form 📝
* Server = Office staff 🧑‍💼
* Database (here variable) = File storage 📁
* Success page = Confirmation receipt ✅

---

# ⚠️ Important Notes

* `name="name"` → must match `req.body.name`
* `method="POST"` → sends data securely
* `body-parser` → required to read form

