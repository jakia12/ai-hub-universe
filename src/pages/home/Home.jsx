import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "../../components/singleCard/SingleCard";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  // state for storing tools data
  const [tools, setTools] = useState([]);

  // show spinner while loading data
  const [isLoading, setIsLoading] = useState(true);

  const [isSorted, setIsSorted] = useState(false);

  // sort data by published date
  const handleSort = () => {
    setIsSorted(true);
    const sortedData = tools.sort(
      (a, b) => Date.parse(b.published_in) - Date.parse(a.published_in)
    );
    setTools(sortedData);
  };

  // fetching api using axios
  useEffect(() => {
    const fetchTools = async () => {
      const response = await axios.get(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const toolData = await response.data;
      // passing the tooLdata to the tools state
      setTools(toolData.data.tools);

      // hide spinner once data loaded
      setIsLoading(!true);
      console.log(tools.data);
    };
    fetchTools();
  }, []);
  console.log(tools);

  //card number to show
  const cardToShow = 6;

  // state to update card number dynamically
  const [next, setNext] = useState(cardToShow);

  const slicedTools = tools?.slice(0, next);
  const toolsLen = tools.length;

  const restTools = toolsLen - cardToShow;

  // show all data when clicking on see more btn
  const handleShowAll = () => {
    setNext(next + restTools);
  };

  return (
    <section className="py-14 lg:py-16">
      <div className="container mx-auto md:max-w-7xl px-6 w-full">
        <div className="text-center mb-8">
          {/* heading title */}
          <h2 className="text-[45px] font-[600] text-textPrimary">
            AI Universe Hub
          </h2>
          {/* sorting button */}
          <button
            className="py-2.5 px-6 bg-btnPrimary text-white rounded-lg my-3 capitalize"
            onClick={handleSort}
          >
            Sort by date
          </button>
        </div>

        {/* show spinner  */}
        <div
          className={`py-40 flex items-center justify-center  ${
            isLoading ? "block" : "hidden"
          }`}
        >
          <Spinner />
        </div>
        {/* tools card */}
        <div className="flex items-center justify-center flex-wrap mb-5">
          {slicedTools?.map((tool) => (
            <div
              className="w-full sm:w-6/12 md:w-4/12 mx-auto sm:mx-0"
              key={tool.id}
            >
              <SingleCard tool={tool} />
            </div>
          ))}
        </div>

        <div className="text-center">
          {next < tools?.length && (
            <button
              className="py-2.5 px-6 bg-btnPrimary text-white rounded-lg text-base capitalize"
              onClick={handleShowAll}
            >
              see More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
