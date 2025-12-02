import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let bookings = [];
let nextId = 1;

const barbers = [
  { id: "barber1", name: "Khaya Dube" },
  { id: "barber2", name: "Boikanyo" },
  { id: "barber3", name: "Brendon" },
];

function getTimeSlots() {
  const slots = [];
  for (let hour = 9; hour < 18; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
    slots.push(`${hour.toString().padStart(2, "0")}:30`);
  }
  return slots;
}

function getBookingsFor(date, barberId) {
  return bookings.filter(
    (b) => b.date === date && b.resourceId === barberId
  );
}

function isAvailable(date, barberId, time) {
  const existing = getBookingsFor(date, barberId);
  return !existing.some((b) => b.timeSlot === time);
}

app.get("/api/resources", (req, res) => {
  res.json({ resources: barbers });
});

app.get("/api/slots", (req, res) => {
  const { date, resourceId } = req.query;

  if (!date || !resourceId) {
    return res.status(400).json({ error: "Need date and resourceId" });
  }

  const dateCheck = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateCheck.test(date)) {
    return res.status(400).json({ error: "Date must be YYYY-MM-DD" });
  }

  const barber = barbers.find((b) => b.id === resourceId);
  if (!barber) {
    return res.status(400).json({ error: "Barber not found" });
  }

  const allSlots = getTimeSlots();
  const available = allSlots.filter((slot) =>
    isAvailable(date, resourceId, slot)
  );

  res.json({
    date,
    resourceId,
    resourceName: barber.name,
    availableSlots: available,
  });
});

app.post("/api/bookings", (req, res) => {
  const { date, resourceId, timeSlot, name, email, phone } = req.body;

  if (!date || !resourceId || !timeSlot || !name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const dateCheck = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateCheck.test(date)) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  const timeCheck = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
  if (!timeCheck.test(timeSlot)) {
    return res.status(400).json({ error: "Invalid time format" });
  }

  const barber = barbers.find((b) => b.id === resourceId);
  if (!barber) {
    return res.status(400).json({ error: "Barber not found" });
  }

  if (!isAvailable(date, resourceId, timeSlot)) {
    return res.status(409).json({ error: "Time slot already booked" });
  }

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailCheck.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const newBooking = {
    id: nextId++,
    date,
    resourceId,
    resourceName: barber.name,
    timeSlot,
    name,
    email,
    phone: phone || null,
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking created",
    booking: newBooking,
  });
});

app.get("/api/bookings", (req, res) => {
  const { date, resourceId } = req.query;
  let result = [...bookings];

  if (date) {
    const dateCheck = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateCheck.test(date)) {
      return res.status(400).json({ error: "Invalid date format" });
    }
    result = result.filter((b) => b.date === date);
  }

  if (resourceId) {
    result = result.filter((b) => b.resourceId === resourceId);
  }

  res.json({ bookings: result, count: result.length });
});

app.get("/api/bookings/:date/:resource", (req, res) => {
  const { date, resource } = req.params;

  const dateCheck = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateCheck.test(date)) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  const result = bookings.filter(
    (b) => b.date === date && b.resourceId === resource
  );

  res.json({
    date,
    resourceId: resource,
    bookings: result,
    count: result.length,
  });
});

app.delete("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const index = bookings.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Booking not found" });
  }

  const deleted = bookings.splice(index, 1)[0];
  res.json({ message: "Booking cancelled", booking: deleted });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
