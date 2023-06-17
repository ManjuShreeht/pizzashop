import React from "react";
import { toast } from "react-toastify";

const Error = ({ error }) => {
  return (
    <div className="alert alert-danger w-4" role="alert">
      {error}
    </div>
  );
};

export default Error;
