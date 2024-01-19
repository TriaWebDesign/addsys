"use client";
import axios from "axios";
import React, { useState } from "react";

export default function FormPage() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    learningDisorder: "",
    email: "",
    phone: "",
    address: "",
    documentImage: null,
  });

  // Function to handle form submission
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Validation logic (you may add more validation as needed)
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.age ||
      !formData.learningDisorder ||
      !formData.email
    ) {
      console.error("Missing required fields");
      // You may also set an error state in your component and display an error message to the user
      return;
    }
    try {
      const response = await axios.post("/api/form", formData);

      if (response.status === 200) {
        const data = response.data;
        console.log("Form data submitted successfully:", data);
        // Optionally, you can reset the form or navigate to another page
      } else {
        console.error("Failed to submit form data:", response.statusText);
        // You may set an error state in your component and display an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      // You may set an error state in your component and display an error message to the user
    }
  };

  // Function to handle form field changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle file input change
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // @ts-ignore
        const base64String = reader.result.split(",")[1];
        setFormData({
          ...formData,
          documentImage: base64String,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="h-screen bg-gradient-to-r from-pink-400 to-pink-600 flex justify-around items-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 flex flex-col bg-white rounded-lg gap-3 w-[50%]"
      >
        {/* Form fields */}
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
          placeholder="First Name"
          className="p-2 rounded-md border"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="p-2 rounded-md border"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
          className="p-2 rounded-md border"
        />
        <input
          type="text"
          name="learningDisorder"
          value={formData.learningDisorder}
          onChange={handleInputChange}
          placeholder="Learning Disorder"
          className="p-2 rounded-md border"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="p-2 rounded-md border"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="p-2 rounded-md border"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="p-2 rounded-md border"
        />

        {/* File input for document image */}
        <input
          type="file"
          name="documentImage"
          onChange={handleFileChange}
          accept="image/*"
          className="p-2 rounded-md border"
        />

        {/* Submit button */}
        <button type="submit" className="p-3 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>

      <div className="max-w-[30%]">
        <h1 className="text-2xl text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-slate-700 text-lg mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          illum perspiciatis! Delectus amet, quos illum tempora quo quod odit,
          explicabo recusandae provident iste officiis necessitatibus! Eum ipsum
          itaque suscipit debitis?
        </p>
      </div>
    </main>
  );
}
