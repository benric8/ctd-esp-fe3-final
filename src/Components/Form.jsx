import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    tellus: "", 
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    gender: "",
    tellus: "", 
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.tellus) {
      newErrors.tellus = "Please tell us something";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);
      console.log("Form submitted", formData);
    
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Registration Form</h1>

      {isSubmitted && (
        <div className="mb-4 text-green-600">Form submitted successfully!</div>
      )}

      <form onSubmit={handleSubmit} className="h-auto">
  
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

   
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

      
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">{errors.gender}</span>
          )}
        </div>

        
        <div className="mb-4">
          <label htmlFor="tellus" className="block text-gray-700">
            Tell Us 
          </label>
          <textarea
            id="tellus"
            name="tellus"
            value={formData.tellus}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tellus && (
            <span className="text-red-500 text-sm">{errors.tellus}</span>
          )}
        </div>

     
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
