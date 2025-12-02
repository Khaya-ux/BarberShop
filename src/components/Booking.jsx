import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";

const API_BASE_URL = "http://localhost:3001/api";

function Booking() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Fetch resources on component mount
  useEffect(() => {
    fetchResources();
  }, []);

  // Fetch available slots when resource or date changes
  useEffect(() => {
    if (selectedResource && selectedDate) {
      fetchAvailableSlots();
    } else {
      setAvailableSlots([]);
    }
  }, [selectedResource, selectedDate]);

  const fetchResources = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/resources`);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setResources(data.resources);
      if (data.resources.length > 0) {
        setSelectedResource(data.resources[0].id);
      }
    } catch (err) {
      const errorMsg = err.message.includes("fetch")
        ? "Cannot connect to server. Make sure the backend is running on port 3001."
        : err.message;
      setError(`Failed to load barbers: ${errorMsg}`);
      console.error("Error fetching resources:", err);
    }
  };

  const fetchAvailableSlots = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API_BASE_URL}/slots?date=${selectedDate}&resourceId=${selectedResource}`
      );
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }
      const data = await response.json();
      setAvailableSlots(data.availableSlots || []);
    } catch (err) {
      const errorMsg = err.message.includes("fetch")
        ? "Cannot connect to server. Make sure the backend is running on port 3001."
        : err.message;
      setError(errorMsg);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowBookingForm(true);
  };

  const handleBookingSuccess = () => {
    setShowBookingForm(false);
    setSelectedSlot(null);
    fetchAvailableSlots(); // Refresh slots after booking
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">Book Appointment</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Select your barber and preferred date to see available time slots
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resource Selector */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 mb-6">
            <label className="block text-gray-300 font-semibold mb-3">
              Select Barber
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => setSelectedResource(resource.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    selectedResource === resource.id
                      ? "bg-gray-400/20 border-gray-400 text-gray-300"
                      : "bg-black/40 border-white/10 text-gray-400 hover:border-white/30"
                  }`}
                >
                  <div className="text-2xl mb-2">💇</div>
                  <div className="font-semibold">{resource.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Date Picker */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 mb-6">
            <label
              htmlFor="date"
              className="block text-gray-300 font-semibold mb-3"
            >
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              min={today}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full md:w-auto px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 text-red-300">
              {error}
            </div>
          )}

          {/* Availability View */}
          {selectedDate && (
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                Available Time Slots
                {selectedResource &&
                  resources.find((r) => r.id === selectedResource) && (
                    <span className="text-gray-500 text-lg ml-2">
                      with{" "}
                      {resources.find((r) => r.id === selectedResource).name}
                    </span>
                  )}
              </h3>

              {loading ? (
                <div className="text-center py-12">
                  <div className="text-gray-400">Loading available slots...</div>
                </div>
              ) : availableSlots.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    {selectedDate
                      ? "No available slots for this date. Please try another date."
                      : "Please select a date to see available slots."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => handleSlotSelect(slot)}
                      className="p-4 bg-gray-400/10 border border-gray-400/30 rounded-lg text-gray-300 font-semibold hover:bg-gray-400/20 hover:border-gray-400/50 transition-all duration-200"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {!selectedDate && (
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8 text-center">
              <p className="text-gray-500 text-lg">
                Please select a date to view available time slots
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          date={selectedDate}
          resourceId={selectedResource}
          resourceName={
            resources.find((r) => r.id === selectedResource)?.name || ""
          }
          timeSlot={selectedSlot}
          onClose={() => {
            setShowBookingForm(false);
            setSelectedSlot(null);
          }}
          onSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
}

export default Booking;

