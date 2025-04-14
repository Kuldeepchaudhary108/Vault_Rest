# 📁 Secure Document Vault

A secure file upload and management system built with Node.js, Express, JWT, and role-based access control.

---

## 🚀 Features

- 🔐 User Authentication (Signup, Login, Logout)
- 🔄 Password Change & Avatar Upload
- 🧾 Role-Based Access Control (Admin, Editor, Viewer)
- ☁️ Cloudinary File Upload
- 📤 Upload multiple files
- 📄 Fetch all uploaded files (admin/editor)
- 🗑️ Delete uploaded files
- 🔍 View specific file by ID
- 🔐 Role Upgrade Request & Approval (Admin-only)

---

## 📦 Technologies Used

- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Multer (File Uploads)**
- **Cloudinary (Cloud Storage)**
- **Tailwind CSS** (for frontend if used)
- **React.js** (if frontend is included)

---

## 📁 API Routes

### 🧑‍💻 Auth & User
/api/v1/users/

| Method | Route                 | Description                    |
|--------|----------------------|--------------------------------|
| POST   | `/signup`            | Create a new user              |
| POST   | `/login`             | Login user                     |
| POST   | `/logout`            | Logout current user            |
| PATCH  | `/change/password`   | Change user password           |
| GET    | `/current-user`      | Get logged-in user details     |
| POST   | `/change/avatarImage`| Upload/update avatar image     |
| POST   | `/request-role-upgrade` | Request role upgrade         |

---

### 📄 File Routes
/api/v1/users/

| Method | Route                 | Description                             |
|--------|----------------------|-----------------------------------------|
| POST   | `/upload-file`       | Upload one or more files (admin/editor) |
| GET    | `/all-files`         | Get all uploaded files (admin/editor)   |
| GET    | `/file/:fileId`      | Get file by ID (admin/editor/viewer)    |
| DELETE | `/delet-file/:fileId`| Delete file (admin/editor)              |

---

### 🛠️ Admin Routes
/api/v1/admin/

| Method | Route                       | Description                         |
|--------|----------------------------|-------------------------------------|
| GET    | `/role-requests`           | Get all pending role requests       |
| PATCH  | `/role-requests/:id`       | Approve or reject role request      |

---

## 📁 Folder Structure

project-root/ │ ├── src/ │ ├── controllers/ │ ├── middlewares/ │ ├── routes/ │ ├── utils/ │ ├── models/ │ └── server.js │ ├── public/temp/ // Temporary local uploads ├── .env // Environment variables ├── README.md └── package.json

yaml
Copy
Edit

---

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/secure-document-vault.git
   cd secure-document-vault
Install dependencies

bash
Copy
Edit
npm install
Configure .env Create a .env file in root with:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Start the server

bash
Copy
Edit
npm run dev
