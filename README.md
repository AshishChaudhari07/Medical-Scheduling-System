# Medical Scheduling System (Hospital Appointment System)

## Overview
The **Medical Scheduling System** is a MERN stack-based web application designed to streamline hospital appointment scheduling. It allows patients to book appointments with doctors, manage their medical records, and receive reminders. Doctors can manage their schedules, while the admin panel provides control over users, doctors, and appointments.

## Features
- **User Authentication**: Secure login/signup using JWT authentication.
- **Role-Based Access**:
  - **Admin**: Manages users, doctors, appointments, and system settings.
  - **Doctor**: Sets availability, manages appointments, and views patient records.
  - **Patient**: Books and tracks appointments, views medical history.
- **Real-Time Appointment Scheduling**
- **Doctor Profile & Availability Management**
- **Notifications & Reminders**
- **Medical Records Management**
- **Payment Integration for Online Consultations**
- **Responsive UI for Web & Mobile**

## Tech Stack
- **Frontend**: React.js (Vite), Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe/Razorpay
- **Database**: MongoDB with Mongoose

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB
- npm or yarn

### Steps to Run the Project

#### Clone the Repository
```sh
git clone https://github.com/AshishChaudhari07/Hospital_Appointment_System.git
cd Hospital_Appointment_System
```

#### Install Dependencies
##### Backend
```sh
cd backend
npm install
```
##### Frontend
```sh
cd frontend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

#### Run the Server
```sh
cd backend
npm start
```

#### Run the Frontend
```sh
cd frontend
npm run dev
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/doctors` | Fetch available doctors |
| POST | `/api/appointments` | Book an appointment |
| GET | `/api/appointments/:id` | Fetch appointment details |

## Future Enhancements
- AI-based doctor recommendations
- Telemedicine integration for online consultations
- Mobile app support

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, contact [Ashish Chaudhary](mailto:your-ashihschaudhari19112003@gmail.com).

### GitHub Repository
[Medical Scheduling System GitHub](https://github.com/AshishChaudhari07/Hospital_Appointment_System)
