# Dino's Barber Shop - Full-Stack Booking System

A modern, full-stack booking and reservation system for a South African barbershop built with React, Tailwind CSS, Node.js, and Express.

## Features

- **Front-End (React & Tailwind CSS)**
  - Professional, responsive user interface
  - Resource (Barber) selector
  - Date picker for appointment selection
  - Real-time availability view with clickable time slots
  - Booking form modal for customer details
  - Reservation management with cancellation functionality
  - Clean, modern design matching the home page aesthetic

- **Back-End (Node.js & Express)**
  - RESTful API with comprehensive validation
  - In-memory data storage (no database required)
  - Conflict detection for booking requests
  - South African business context (SAST timezone, ZAR currency)

## Technology Stack

- **Front-End**: React 19, Tailwind CSS 4, React Router DOM
- **Back-End**: Node.js, Express
- **Development**: Vite, Concurrently

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/slots` | Returns available time slots for a given resource and date |
| POST | `/api/bookings` | Creates a new reservation with conflict detection |
| GET | `/api/bookings/:date/:resource` | Retrieves all bookings for a specific date and resource |
| DELETE | `/api/bookings/:id` | Cancels a specific booking by ID |
| GET | `/api/resources` | Returns all available barbers/resources |

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Option 1: Run Both Servers Together (Recommended)
```bash
npm run dev:all
```
This will start both the Express backend (port 3001) and Vite dev server (port 5173) simultaneously.

#### Option 2: Run Servers Separately

**Terminal 1 - Backend Server:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend Server:**
```bash
npm run dev
```

### Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## Project Structure

```
BarberShop/
├── server.js              # Express backend server
├── src/
│   ├── components/
│   │   ├── About.jsx      # About page
│   │   ├── Background.jsx # Background component
│   │   ├── Booking.jsx    # Main booking component
│   │   ├── BookingForm.jsx # Booking form modal
│   │   ├── Contact.jsx     # Contact page
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Home.jsx        # Home page
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Pricing.jsx     # Pricing page
│   │   ├── Reservations.jsx # Reservation management
│   │   └── Services.jsx    # Services page
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
└── package.json
```

## Business Context

This application is configured for a South African barbershop:
- **Location**: Cape Town, Western Cape
- **Currency**: South African Rand (ZAR)
- **Timezone**: SAST (South African Standard Time)
- **Business Hours**: 9:00 - 18:00 (Mon-Fri), 8:00 - 17:00 (Sat), 10:00 - 15:00 (Sun)
- **Barbers**: Dino, Thabo, Sipho

## Key Features Implementation

### Complex Data Validation
- Date format validation (YYYY-MM-DD)
- Time slot format validation (HH:MM)
- Email format validation
- Conflict detection before booking creation

### Full-Stack Workflow
1. User selects barber and date
2. Frontend requests available slots from API
3. User selects a time slot
4. Booking form collects customer details
5. Frontend sends POST request to create booking
6. Backend validates and checks for conflicts
7. Booking is created or error is returned
8. UI updates to reflect new booking status

## Development Notes

- The backend uses in-memory storage, so bookings are reset when the server restarts
- Time slots are generated in 30-minute intervals during business hours
- All API endpoints include comprehensive error handling
- The frontend includes loading states and error messages for better UX

## License

This project is for educational purposes.
