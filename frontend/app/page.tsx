
"use client";
import { useState } from "react";
import axios from "axios";




export default function Home() {
  const [formData, setFormData] = useState({
    hotel_name: "",
    address: "",
    city: "",
    country: "",
    gst_number: "",
    pan_number: "",
    ifsc_code: "",
  });
  const [document, setDocument] = useState<File | null>(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const uploadData = new FormData();

    uploadData.append("owner_id", "1");
    uploadData.append("hotel_name", formData.hotel_name);
    uploadData.append("address", formData.address);
    uploadData.append("city", formData.city);
    uploadData.append("country", formData.country);
    uploadData.append("gst_number", formData.gst_number);
    uploadData.append("pan_number", formData.pan_number);
    uploadData.append("ifsc_code", formData.ifsc_code);

    if (document) {
      uploadData.append("document", document);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/hotels/register",
        uploadData
      );

      console.log(response.data);

      alert("Hotel Registered Successfully");
      setFormData({
        hotel_name: "",
        address: "",
        city: "",
        country: "",
        gst_number: "",
        pan_number: "",
        ifsc_code: "",
      });

    } 
    catch (error: any) {
      console.error(error);

      const message =
        error?.response?.data?.errors?.join("\n") ||
        "Registration Failed";

      alert(message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Hotel Registration
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="hotel_name"
            placeholder="Hotel Name"
            value={formData.hotel_name}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="text"
            name="gst_number"
            placeholder="GST Number"
            value={formData.gst_number}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="text"
            name="pan_number"
            placeholder="PAN Number"
            value={formData.pan_number}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="text"
            name="ifsc_code"
            placeholder="IFSC Code"
            value={formData.ifsc_code}
            onChange={handleChange}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setDocument(e.target.files[0]);
              }
            }}
            className="w-full border p-3 rounded text-black placeholder-gray-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Register Hotel
          </button>

        </form>

        <pre className="mt-6 bg-gray-200 p-4 text-black rounded">
          {JSON.stringify(formData, null, 2)}
        </pre>

      </div>
    </div>
  );
}