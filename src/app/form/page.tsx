"use client";
import { submitAdmission } from "@/utils/actions/admission.action";
import { useState } from "react";
import Submitted from "./__containers/submitted";
import Image from "next/image";

export default function FormPage() {
  const [submitted, setSubmitted] = useState(false);
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
  const [imagePreview, setImagePreview] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitted(true);
    try {
      await submitAdmission(formData);
    } catch (error) {
      console.error("Error submitting form data:", error);
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
        // Set image preview
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  if (submitted) return <Submitted />;
  return (
    <main className="h-screen bg-gradient-to-r from-green-500 to-green-700 flex justify-around items-center drop-shadow-lg p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 flex flex-col bg-white rounded-lg gap-3 w-[500px]"
      >
        {/* Form fields */}
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
          placeholder="First Name"
          className="p-2 rounded-md border"
          required
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="p-2 rounded-md border"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
          className="p-2 rounded-md border"
          required
        />
        <select
          name="learningDisorder"
          className="p-2 rounded-md border"
          value={formData.learningDisorder}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled hidden>
            Select Learning Disorder
          </option>
          <option value="dyslexia">Dyslexia</option>
          <option value="adhd">ADHD</option>
          <option value="dyscalculia">Dyscalculia</option>
          <option value="autism">Autism Spectrum Disorder</option>
          <option value="aspergers">Aspergers Syndrome</option>
          <option value="dysgraphia">Dysgraphia</option>
          <option value="apd">Auditory Processing Disorder</option>
        </select>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="p-2 rounded-md border"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="p-2 rounded-md border"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="p-2 rounded-md border"
          required
        />
        <div className="flex gap-4">
          <input
            type="file"
            name="documentImage"
            onChange={handleFileChange}
            accept="image/*"
            className="p-2 rounded-md border"
            required
          />
          {imagePreview && (
            <Image
              src={imagePreview}
              width={100}
              height={100}
              alt="Document Preview"
              className="mt-3 rounded-md border"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )}
        </div>
        <button type="submit" className="p-3 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>

      <div className="max-w-[30%] hidden md:block">
        <h1 className="text-3xl text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-gray-200 text-xl mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          illum perspiciatis! Delectus amet, quos illum tempora quo quod odit,
          explicabo recusandae provident iste officiis necessitatibus! Eum ipsum
          itaque suscipit debitis?
        </p>
      </div>
    </main>
  );
}
