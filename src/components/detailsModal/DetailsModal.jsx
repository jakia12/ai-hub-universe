import React from "react";

const DetailsModal = ({ toolInfo, setToolInfo }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-xl">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="p-10">
            <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
              <div className="w-full md:w-6/12">
                <div className="p-8">
                  <p className="text-lg text-medium text-textprimary mb-4"></p>
                  {/* subcription card */}
                  <div className="flex items-center justify-center  mb-4">
                    <div className="bg-white p-6 w-[130px] h-[100px]">
                      <span className="text-semibold text-lg text-[#03A30A]">
                        $10/month Basic
                      </span>
                    </div>
                  </div>
                  {/* features and integretations info */}
                  <div className="flex items-center justify-between  mb-4">
                    <div className="text-left">
                      <h3 className="text-[25px] text-textPrimary font-[600] mb-2">
                        Features
                      </h3>
                      <ul>
                        {features?.map((feature) => (
                          <li className="list-bullet mb-2 text-[16px] font-normal text-textSecondary ml-4">
                            {feature ? feature : "No data available"}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
