# Vault_Rest

# Vault_Rest

import React from "react";

const ReadMe = () => {
return (

<div className="prose max-w-none p-6">
<h1>📁 Secure Document Vault</h1>
<p>
A secure file management REST API built with <strong>Express.js</strong>{" "}
and <strong>MongoDB</strong>, supporting role-based access control (RBAC), file upload, user authentication,
and admin request management.
</p>

      <h2>🚀 Features</h2>
      <ul>
        <li>🔐 JWT-based user authentication</li>
        <li>🛡 Role-based access control: <code>admin</code>, <code>editor</code>, <code>viewer</code></li>
        <li>📤 Upload files (PDF, images, etc.)</li>
        <li>📥 Retrieve all uploaded files (admin/editor only)</li>
        <li>🔄 Change password, update avatar</li>
        <li>🧑‍💻 Request role upgrades</li>
        <li>🗑 Delete uploaded files</li>
        <li>📄 Fetch file by ID</li>
        <li>🧾 Admin panel to approve/reject role requests</li>
      </ul>

      <h2>🧰 Tech Stack</h2>
      <ul>
        <li><strong>Node.js & Express.js</strong> – RESTful API backend</li>
        <li><strong>MongoDB & Mongoose</strong> – Database and schema modeling</li>
        <li><strong>Multer</strong> – File upload middleware</li>
        <li><strong>Cloudinary</strong> – (optional) cloud storage integration</li>
        <li><strong>JWT</strong> – Authentication</li>
        <li><strong>Bcrypt</strong> – Password hashing</li>
      </ul>

      <h2>📦 Project Structure</h2>
      <pre>
        <code>{`

├── controllers/
│ ├── user.controller.js
│ ├── file.controller.js
│ └── admin.controller.js
├── middlewares/
│ ├── auth.middleware.js
│ ├── role.middleware.js
│ └── multer.middleware.js
├── models/
│ ├── user.model.js
│ └── file.model.js
├── routes/
│ ├── user.routes.js
│ └── admin.routes.js
├── public/
│ └── temp/ # Temporarily stores uploaded files
├── utils/
│ ├── asyncHandler.js
│ └── ApiError.js
├── .env
├── app.js
└── server.js
`}</code>

</pre>

      <h2>📌 API Endpoints</h2>
      <h3>🔐 Auth & User</h3>
      <table className="table-auto border">
        <thead>
          <tr>
            <th>Method</th>
            <th>Route</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>POST</td><td>/signup</td><td>Register a new user</td></tr>
          <tr><td>POST</td><td>/login</td><td>Login existing user</td></tr>
          <tr><td>POST</td><td>/logout</td><td>Logout user (JWT required)</td></tr>
          <tr><td>PATCH</td><td>/change/password</td><td>Change user password</td></tr>
          <tr><td>GET</td><td>/current-user</td><td>Get current user info</td></tr>
          <tr><td>POST</td><td>/change/avatarImage</td><td>Upload/change avatar</td></tr>
        </tbody>
      </table>

      <h3>📁 Files</h3>
      <table className="table-auto border mt-4">
        <thead>
          <tr>
            <th>Method</th>
            <th>Route</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>POST</td><td>/upload-file</td><td>Upload file(s) (admin/editor)</td></tr>
          <tr><td>GET</td><td>/all-files</td><td>Get all uploaded files</td></tr>
          <tr><td>DELETE</td><td>/delet-file/:fileId</td><td>Delete file by ID (admin/editor)</td></tr>
          <tr><td>GET</td><td>/file/:fileId</td><td>Get file info (admin/editor/viewer)</td></tr>
        </tbody>
      </table>

      <h3>🛡 Role Upgrade</h3>
      <table className="table-auto border mt-4">
        <thead>
          <tr>
            <th>Method</th>
            <th>Route</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>POST</td><td>/request-role-upgrade</td><td>Request role upgrade</td></tr>
          <tr><td>GET</td><td>/role-requests</td><td>Get pending requests (admin only)</td></tr>
          <tr><td>PATCH</td><td>/role-requests/:id</td><td>Approve/reject request (admin only)</td></tr>
        </tbody>
      </table>

      <h2>⚙️ Setup Instructions</h2>
      <ol>
        <li>Clone the repository:
          <pre><code>git clone https://github.com/your-username/secure-document-vault.git</code></pre>
        </li>
        <li>Install dependencies:
          <pre><code>npm install</code></pre>
        </li>
        <li>Create a <code>.env</code> file:
          <pre><code>{`

PORT=3000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
`}</code></pre>

</li>
<li>Run the server:
<pre><code>npm run dev</code></pre>
</li>
</ol>

      <h2>🧪 Testing API</h2>
      <p>Use <strong>Postman</strong> or <strong>Thunder Client</strong> to test routes. Don’t forget to add the JWT token in <code>Authorization</code> header.</p>

      <h2>✍️ Author</h2>
      <p>Built with ❤️ by <strong>Your Name</strong>. Open to collaboration and suggestions!</p>

      <h2>📜 License</h2>
      <p>This project is licensed under the <strong>MIT License</strong>.</p>
    </div>

);
};

export default ReadMe;
