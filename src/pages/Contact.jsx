import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const data = useParams();

  return (
    <div className="text-2xl absolute underline top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ">
      Contact {data.id}
    </div>
  );
};

export default Contact;
