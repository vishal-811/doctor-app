import { Schema, model } from "mongoose";

// Define the Appointment schema
const appointmentSchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor", // Reference to the Doctor schema
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema (assuming patients are also stored in the User model)
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String, // Example: "09:00 AM"
      required: true,
    },
    endTime: {
      type: String, // Example: "09:30 AM"
      required: true,
    },
    type: {
      type: String, // Example: "in-person", "online"
      enum: ["in-person", "online"],
      required: true,
    },
    status: {
      type: String, // Example: "scheduled", "completed", "canceled"
      enum: ["scheduled", "completed", "canceled"],
      default: "scheduled",
    },
    notes: {
      type: String, // Any additional notes or reason for the appointment
      maxlength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt` fields
);

// Create the Appointment model
const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
