import React from "react";

const DetailsModal = ({ toolInfo, setToolInfo }) => {
  // destructuring toolInfo data
  const { image, description, features, links } = toolInfo;

  //   empty toolInfo data when closing the modal
  const handleClose = () => {
    setToolInfo("");
  };

  console.log(toolInfo);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-6xl">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-3 top-3"
            onClick={handleClose}
          >
            ✕
          </label>
          <div className="p-10 ">
            <div className="flex items-center flex-wrap lg:flex-nowrap">
              <div className="w-full md:w-6/12">
                <div className="p-8 border border-[#EB5757] rounded bg-lightPink min-h-[500px] mx-2.5 h-[500px]">
                  <p className="text-[25px] font-[600] text-textprimary mb-4">
                    {description ? description : "No Data Available"}
                  </p>
                  {/* subcription card */}
                  <div className="flex items-center justify-center  mb-5">
                    <div className="bg-white p-6 w-[130px] min-h-[103px] flex items-center justify-center rounded-lg mx-2">
                      <span className="text-semibold text-lg text-[#03A30A] leading-[21px]">
                        $10/month Basic
                      </span>
                    </div>
                    <div className="bg-white p-6 w-[130px] min-h-[103px] flex items-center justify-center rounded-lg mx-2">
                      <span className="text-semibold text-lg text-[#F28927] leading-[21px]">
                        $50/month Pro
                      </span>
                    </div>
                    <div className="bg-white p-6 w-[130px]  min-h-[103px] flex items-center justify-center rounded-lg mx-2">
                      <span className="text-semibold text-lg text-[#EB5757] leading-[21px]">
                        Contact us Enterprise
                      </span>
                    </div>
                  </div>
                  {/* features and integretations info */}
                  <div className="flex  justify-between  mb-4">
                    <div className="text-left">
                      <h3 className="text-[25px] text-textPrimary font-[600] mb-2">
                        Features
                      </h3>
                      <ul>
                        {features?.map((feature) => (
                          <li className="list-disc mb-2 text-[16px] font-normal text-textSecondary ml-4">
                            {feature ? feature : "No data available"}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-left">
                      <h3 className="text-[25px] text-textPrimary font-[600] mb-2">
                        Integrations
                      </h3>
                      <ul>
                        {links?.map((link) => (
                          <li className="list-disc mb-2 text-[16px] font-normal text-textSecondary ml-4">
                            <a href={link ? link.url : "No data available"}>
                              {link.name ? link.name : "No data available"}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12">
                {/* modal image info */}
                <div className="p-6 text-center mx-2.5 mt-5 md:mt-0 border border-gray-200 min-h-[500px] h-[500px] rounded ">
                  <img
                    src={image}
                    className="w-[437px] h-[339px] max-w-full rounded-lg "
                    alt=""
                  />
                  <h3 className="text-[25px] text-textPrimary font-[600] mt-4 mb-2 ">
                    Hi, how are you doing today?
                  </h3>
                  <p className="list-disc mb-2 text-[16px] font-normal text-textSecondary ml-4">
                    I'm doing well, thank you for asking. How can I assist you
                    today?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
