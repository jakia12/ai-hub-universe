import React from "react";
import { Bars } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="text-center">
      <Bars
        height="80"
        width="80"
        color="#EB5757"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
