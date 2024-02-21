import React, { useState } from "react";
import FormInput from "./FormInput";

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Checkout</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <FormInput
          placeholder="First Name"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Last Name"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Phone"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Address"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="City"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="ZIP"
          name="zip"
          id="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Country"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <button type="submit" className="productButton col-span-2">
          Continue
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
