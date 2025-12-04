import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";

function Reservations() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [viewMode, setViewMode] = useState("all"); // "all", "byDate", "byBarber"

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchResources();
    fetchAllBookings(); // Load all bookings initially
  }, []);

  useEffect(() => {
    if (viewMode === "byDate" && selectedResource && selectedDate) {
      fetchBookingsByDateAndResource();
    } else if (viewMode === "all") {
      fetchAllBookings();
    }
  }, [selectedResource, selectedDate, viewMode]);

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
        ? "Cannot connect to server. Please check your internet connection."
        : err.message;
      setError(`Failed to load barbers: ${errorMsg}`);
      console.error("Error fetching resources:", err);
    }
  };

  const fetchAllBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setBookings(data.bookings || []);
    } catch (err) {
      const errorMsg = err.message.includes("fetch")
        ? "Cannot connect to server. Please check your internet connection."
        : err.message;
      setError(`Failed to fetch bookings: ${errorMsg}`);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingsByDateAndResource = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API_BASE_URL}/bookings/${selectedDate}/${selectedResource}`
      );
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      setBookings(data.bookings || []);
    } catch (err) {
      const errorMsg = err.message.includes("fetch")
        ? "Cannot connect to server. Please check your internet connection."
        : err.message;
      setError(`Failed to fetch bookings: ${errorMsg}`);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    setDeletingId(bookingId);
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }

      // Refresh bookings after deletion
      if (viewMode === "all") {
        fetchAllBookings();
      } else {
        fetchBookingsByDateAndResource();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">My Reservations</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            View and manage your appointments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* View Mode Selector */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 mb-6">
            <label className="block text-gray-300 font-semibold mb-3">
              View Mode
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setViewMode("all");
                  setSelectedResource("");
                  setSelectedDate("");
                }}
                className={`px-6 py-2 rounded-lg border transition-all duration-200 ${
                  viewMode === "all"
                    ? "bg-gray-400/20 border-gray-400 text-gray-300"
                    : "bg-black/40 border-white/10 text-gray-400 hover:border-white/30"
                }`}
              >
                All Bookings
              </button>
              <button
                onClick={() => {
                  setViewMode("byDate");
                  if (resources.length > 0 && !selectedResource) {
                    setSelectedResource(resources[0].id);
                  }
                  if (!selectedDate) {
                    setSelectedDate(today);
                  }
                }}
                className={`px-6 py-2 rounded-lg border transition-all duration-200 ${
                  viewMode === "byDate"
                    ? "bg-gray-400/20 border-gray-400 text-gray-300"
                    : "bg-black/40 border-white/10 text-gray-400 hover:border-white/30"
                }`}
              >
                Filter by Date & Barber
              </button>
            </div>
          </div>

          {viewMode === "byDate" && (
            <>
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
            </>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 mb-6">
              <div className="text-red-300 font-semibold mb-2">⚠️ Connection Error</div>
              <div className="text-red-300 text-sm mb-3">{error}</div>
              <div className="text-red-200 text-xs">
                <p className="mb-1">Please ensure you have an active internet connection and try again.</p>
              </div>
            </div>
          )}

          {/* Bookings List */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              {viewMode === "all"
                ? "All Bookings"
                : `Bookings for ${new Date(selectedDate).toLocaleDateString("en-ZA", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}`}
            </h3>

              {loading ? (
                <div className="text-center py-12">
                  <div className="text-gray-400">Loading bookings...</div>
                </div>
              ) : bookings.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    {viewMode === "all"
                      ? "No bookings found."
                      : "No bookings found for this date and barber."}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-black/40 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-gray-400">
                              {booking.timeSlot}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-300 font-semibold">
                              {booking.name}
                            </span>
                          </div>
                          <div className="text-gray-400 text-sm space-y-1">
                            <div>Email: {booking.email}</div>
                            {booking.phone && <div>Phone: {booking.phone}</div>}
                            <div>Barber: {booking.resourceName}</div>
                            <div>
                              Date:{" "}
                              {new Date(booking.date).toLocaleDateString("en-ZA", {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(booking.id)}
                          disabled={deletingId === booking.id}
                          className="px-6 py-2 bg-red-500/20 border border-red-500/50 text-red-300 font-semibold rounded-lg hover:bg-red-500/30 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {deletingId === booking.id ? "Cancelling..." : "Cancel"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;

