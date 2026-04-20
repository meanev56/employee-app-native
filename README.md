Employee Management System

A modern React Native + Expo mobile application for managing employees, tracking attendance, and generating reports.
Built with clean architecture, TypeScript, and modern UI practices.
✨ Features

Employee Management
Add new employees
View employee list with search functionality
Employee profile details

Attendance System
Mark daily attendance (Present, Absent, Half Day, Holiday)
Date navigation
Advance/Loan and Bonus tracking

Reports & Analytics
Monthly attendance summary for all employees
Present, Absent, Half Day, and No Work tracking
Month-wise navigation

Modern UI/UX
Clean card-based design
Smooth navigation with Expo Router
Responsive and user-friendly interface

🛠 Tech Stack

Framework: React Native + Expo
Language: TypeScript
Routing: Expo Router (File-based)
HTTP Client: Axios
Date Handling: Moment.js
Icons: @expo/vector-icons
Styling: StyleSheet (Native)

📱 Screens

Screen,        Description
index,         Dashboard / Home
employees,     List & Search Employees
adddetails,    Add New Employee Form
markattendance,Mark Daily Attendance
summary,       Monthly Attendance Report
user/[user],   Individual Employee Attendance

🚀 Getting Started
Prerequisites

Node.js
Expo CLI (npm install -g expo-cli)
Android Studio / Xcode (for simulators)

Installation

Clone the repositoryBashgit clone <https://github.com/meanev56/employee-app-native.git>
cd employee-management-app
Install dependenciesBashnpm install
Start the development serverBashnpx expo start
Run on device/simulator
Press a for Android
Press i for iOS
Scan QR code with Expo Go app

Backend Setup
Make sure your backend server is running at:
text
<http://localhost:8000>
Endpoints used:

GET /employees
POST /addEmployee
GET /attendance
POST /attendance
GET /attendance-report-all-employees

📂 Project Structure
textemployee-app-native/
├── app/
│   ├── (home)/
│   ├── index.tsx
│   ├── employees.tsx
│   ├── adddetails.tsx
│   ├── markattendance.tsx
│   └── summary.tsx
├── components/
│   └── (reusable components)
├── constants/
├── utils/
└── README.md
🔧 Scripts

npx expo start          → Start development server
npx expo start -c       → Clear cache and start
npx expo run:android    → Build for Android
npx expo run:ios        → Build for iOS

🤝 Contributing
Contributions, issues, and feature requests are welcome!
📄 License
This project is licensed under the MIT License.
