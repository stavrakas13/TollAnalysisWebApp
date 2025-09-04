# Toll Passages Management and Analysis WebApp

A full-stack web application for managing and analyzing toll passages in Greece. Developed as part of the Software Engineering course at ECE NTUA by Dimitris Thivaios, Dimitris Liakis, Vassilis Anastasiadis, and Stavros.

---

## 🚀 Features

- Interactive map of Greece with all toll stations (Leaflet.js)
- Predictions of car flows using Machine Learning models
- Statistics for all tolling companies
- Debt optimization between companies (cross e-pass usage)
- CLI client for admin and company management
- API documentation (Swagger/OpenAPI)
- Comprehensive testing (Jest)

---

## 🛠️ Technology Stack

- **Backend:** Node.js / Express (REST API)
- **Frontend:** React.js
- **Database:** MySQL
- **Machine Learning:** scikit-learn (Python)
- **Testing:** Jest

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ntua/softeng24-14.git
cd TollAnalysisWebApp
```

### 2. Database Setup (MySQL)

- Install MySQL Server (v5.7+ recommended).
- Create and populate the database:
  - Go to `/uploads` and run:
    ```bash
    python3 passages2mysql.py passes14.csv
    ```
  - In `/Database_mysql`, import schema and data:
    ```bash
    mysql -u root -p < schema.sql
    mysql -u root -p < data.sql
    ```
- See `/Database_mysql/README.md` for detailed steps.

### 3. Backend Setup

```bash
cd back-end
npm install
node server.js
```

### 4. Frontend Setup

```bash
cd front-end
npm install
npm start
```

### 5. CLI Client Setup

```bash
cd cli-client
npm install
npm link
se2414 --help
```

---

## 🔐 Login Credentials

To use the application, you must log in as either an **admin** or a company user.

- **Admin Login:**
  - **Username:** `admin`
  - **Password:** `freepasses4all`
  - These credentials are set by default in the database and can be found in `back-end/hashPassword.js` and are initialized/reset via the backend admin endpoints.

- **Company Users:**
  - Usernames and passwords for company users are managed by the admin via the CLI or backend endpoints.
  - Example company users (see `/cli-client/README.md` for details):
    - `aegean_user` / `egnatia_user` / `kentriki_user` / `moreas_user` / `attiki_user` / `nea_user` / `olympia_user`
  - Each company user can only access their own company's data.

- You can log in via the web interface or CLI. If you need to create or reset users, use the admin endpoints or CLI commands.

---

## 📖 Documentation

- UML Diagrams (Activity, Class, Component, Deployment, Sequence)
- ER Diagrams
- SRS (Software Requirements Specification)
- StRS (Stakeholders Requirements Specification)
- OpenAPI/Swagger docs: [http://localhost:9115/api/docs](http://localhost:9115/api/docs)

---

## ⚠️ Troubleshooting

- **Port Already in Use:**  
  Use `lsof -i :<PORT>` and `kill -9 <PID>` to free the port.
- **Missing Dependencies:**  
  Run `npm install` in each directory.
- **Database Issues:**  
  Ensure schema and data are imported correctly.

---

## 👥 Credits & Contributions

As part of this project, my main focus was on:
- Developing REST API backend using Node.js and Express
- Designing the database
- Contributing to documentation
- Conducting API functional testing

![image](https://github.com/user-attachments/assets/ffa85471-cacc-44a6-8ac8-006ad04db8a7)

Other contributors:
- Dimitris Thivaios, Dimitris Liakis, Vassilis Anastasiadis: Frontend, ML, CLI, documentation

---

## ⭐ Give us a star if you liked the project!

_Disclaimer: This project is for educational purposes only and not intended for commercial use._

