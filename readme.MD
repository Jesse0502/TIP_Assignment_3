Instructions for setting up a project with Node.js and running the client and server:

---

# Project Setup

## Requirements

- Node.js (version 20.9 or higher) https://nodejs.org/en/download
- Yarn package manager https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Jesse0502/TIP_Assignment_3.git
   ```

2. **Navigate to the Client Folder**

   ```bash
   cd project-name/client
   ```

3. **Install Dependencies for Client**

   ```bash
   yarn
   ```

4. **Run the Client Development Server**

   ```bash
   yarn run dev
   ```

5. **Navigate to the Server Folder**

   ```bash
   cd ../server
   ```

6. **Install Dependencies for Server**

   ```bash
   yarn
   ```

7. **Run the Server Development Server**
   ```bash
   yarn run dev
   ```

## Notes

- Ensure that Node.js is installed on your system with a version of 20.9 or higher.
- Yarn is used as the package manager. You can also use npm if preferred by replacing `yarn` with `npm install` and `yarn run dev` with `npm run dev`.
- Running `yarn run dev` in both the client and server folders will start development servers for the respective applications.

---
