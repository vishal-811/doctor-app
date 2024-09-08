import { Schema, model } from "mongoose";

// Define the Doctor schema
const doctorSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    degree: {
      type: String,
      required: true, // Example: "MD", "PhD", "MBBS", etc.
    },
    specialties: {
      type: [String], // An array to store multiple specialties
      required: true,
      default: [],
    },
    experience: {
      type: Number, // Number of years of experience
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      required: true,
    },
    certifications: [
      {
        title: {
          type: String,
          required: true,
        },
        institution: {
          type: String,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
      },
    ],
    // Updated availability field
    availability: [
      {
        day: {
          type: String, // Example: "Monday", "Tuesday"
          required: true,
        },
        slots: [
          {
            startTime: {
              type: String, // Example: "09:00 AM"
              required: true,
            },
            endTime: {
              type: String, // Example: "11:00 AM"
              required: true,
            },
            type: {
              type: String, // Example: "in-person", "online"
              enum: ["in-person", "online"],
              required: true,
            },
          },
        ],
      },
    ],
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    bio: {
      type: String, // Short biography or description
      maxlength: 500,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
      enum: ["Pending", "Under Process", "Veified"],
    },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt` fields
);

// Create the Doctor model
const Doctor = model("Doctor", doctorSchema);

export default Doctor;
