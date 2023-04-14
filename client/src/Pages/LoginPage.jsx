import React from "react";

function LoginPage() {
  return (
    <form className=" flex flex-col justify-center items-center mt-12">
      <input
        className="shadow appearance-none border rounded w-1/2 py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Username"
      />

      <input
        className="shadow appearance-none border  rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="password"
      />

      <button
        className="bg-orange-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Login
      </button>
    </form>
  );
}

export default LoginPage;
