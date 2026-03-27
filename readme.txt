# 📝 User Registration Project

A simple, lightweight **Node.js** and **Express** web application designed to demonstrate the fundamentals of form handling, backend routing, and dynamic template rendering using **EJS**.

-----

## 📂 Project Structure

```text
registration-project/
│
├── server.js           # Backend logic & routing
├── package.json        # Project metadata & dependencies
│
├── views/              # UI Templates (EJS)
│   ├── register.ejs    # Registration form
│   └── success.ejs     # Submission success page
│
└── public/             # Static files
    └── styles/
        └── main.css    # Custom styling
```

-----

## 🛠️ Tech Stack

  * **Runtime:** Node.js
  * **Framework:** Express.js
  * **Template Engine:** EJS (Embedded JavaScript)
  * **Middleware:** Body-Parser (to handle `POST` data)

-----

## ⚙️ How to Setup

1.  **Clone or create the project directory:**

    ```bash
    mkdir registration-project
    cd registration-project
    ```

2.  **Initialize and install dependencies:**

    ```bash
    npm init -y
    npm install express body-parser ejs
    ```

3.  **Run the server:**

    ```bash
    node server.js
    ```

4.  **View in browser:**
    Go to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

-----

