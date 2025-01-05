import React from "react";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";
import axios from "axios";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const hashPassword = (password) => {
    const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    return hash;
  };

  const onSubmit = (data) => {
    // Hashing password
    data.password = hashPassword(data.password);
    data.confirmPassword = hashPassword(data.confirmPassword);

    // Submit data to the server
    axios
      .post("http://localhost:3000/api/register", data)
      .then((response) => {
        console.log("response from server:", response.data);
      })
      .catch((error) => console.log("Error from: ", error));
    console.log("Form Data:", data);
  };

  // Watch the password field
  const password = watch("password");

  return (
    <div className="max-w-xl mx-auto  my-20 p-4 shadow-md rounded-lg bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-2 mb-2">
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
            {errors.username && (
              <span className="text-red-500">Username is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-2">
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-2">
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
            {errors.dob && (
              <span className="text-red-500">Date of Birth is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Sex</label>
            <select
              {...register("sex", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.sex && (
              <span className="text-red-500">Sex is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-2">
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Mobile</label>
            <input
              type="tel"
              {...register("mobile", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
            {errors.mobile && (
              <span className="text-red-500">Mobile number is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="text"
              {...register("img", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-2">
          <label className="block text-gray-700 w-full">Address</label>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              type="text"
              {...register("address.area", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
              placeholder="Area"
            />
            {errors.address?.area && (
              <span className="text-red-500">Area is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              type="text"
              {...register("address.building", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
              placeholder="Building"
            />
            {errors.address?.building && (
              <span className="text-red-500">Building is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              type="text"
              {...register("address.town", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
              placeholder="Town"
            />
            {errors.address?.town && (
              <span className="text-red-500">Town is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              type="text"
              {...register("address.postalCode", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
              placeholder="Postal Code"
            />
            {errors.address?.postalCode && (
              <span className="text-red-500">Postal Code is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              type="text"
              {...register("address.state", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
              placeholder="State"
            />
            {errors.address?.state && (
              <span className="text-red-500">State is required</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              type="text"
              {...register("address.country", { required: true })}
              className="mt-1 block w-full p-2 border rounded-sm"
              placeholder="Country"
            />
            {errors.address?.country && (
              <span className="text-red-500">Country is required</span>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white w-full mr-2 py-2 px-4 rounded-sm hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="text-black border border-black transition-colors duration-500 w-full ml-2 py-2 px-4 rounded hover:bg-black hover:text-white"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegistrationForm;
