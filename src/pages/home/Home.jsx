import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "../../components/singleCard/SingleCard";

const Home = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      const response = await axios.get(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const toolData = await response.data;
      setTools(toolData);
      console.log(tools.data);
    };
    fetchTools();
  }, []);

  console.log(tools.data);
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto md:max-w-7xl px-6 w-full">
        <div className="text-center mb-8">
          {/* heading title */}
          <h2 className="text-[45px] font-[600] text-textPrimary">
            AI Universe Hub
          </h2>
          {/* sorting button */}
          <button className="py-2.5 px-6 bg-btnPrimary text-white rounded">
            Sort by date
          </button>
        </div>

        <div className="flex items-center justify-center">
          {/* tools card */}
          <div className="w-full sm:w-6/12 md:w-4/12">
            <SingleCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
