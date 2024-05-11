import React from "react";
import Input from "../Input";

const AlertMessage = () => {
  return (
    <div className="bg-gray-100 border-2  rounded-3xl w-128   mx-96 mt-6 h-[680px]">
      <div className="      border-b-2  px-5 pb-4 text-4xl font-semibold text-black my-6">
        Add Work Experience
      </div>
      <div className="   overflow-y-auto h-[500px]  px-4 space-y-6">
        <div>
          <div></div>
          <div className=" space-y-5 ">
            <div>
              <Input
                desgine_label=" text-ms font-semibold "
                label="Title *"
                label_spaceinput="2"
                id="Your professional role"
                name="Your professional role"
                type="text"
                placeholder="Ex: Software Enginner"
                required
              />
            </div>{" "}
            <div>
              <Input
                desgine_label=" text-ms font-semibold "
                label="Company *"
                label_spaceinput="2"
                id="Your professional role"
                name="Your professional role"
                type="text"
                placeholder="Ex: Microsoft"
                required
              />
            </div>
            <div className="flex space-x-10 ">
              <div className="w-1/2">
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label="Location"
                  label_spaceinput="2"
                  id="Your professional role"
                  name="Your professional role"
                  type="text"
                  placeholder="Ex: London"
                  required
                />
              </div>
              <div className="w-1/2 ">
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label_spaceinput="2"
                  id="Your professional role"
                  name="Your professional role"
                  type="text"
                  placeholder="Ex: Microsoft"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label="Start Date *"
                  label_spaceinput="2"
                  id="Your professional role"
                  name="Your professional role"
                  type="text"
                  placeholder="Ex: Microsoft"
                  required
                />
              </div>
              <div>
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label_spaceinput="2"
                  id="Your professional role"
                  name="Your professional role"
                  type="text"
                  placeholder="Ex: Microsoft"
                  required
                />
              </div>
              <div>
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label="End Date *"
                  label_spaceinput="2"
                  id="Your professional role"
                  name="Your professional role"
                  type="text"
                  placeholder="Ex: Microsoft"
                  required
                />
              </div>
              <div>
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label=""
                  label_spaceinput="2"
                  id="Your professional role"
                  name="Your professional role"
                  type="text"
                  placeholder="Ex: Microsoft"
                  required
                />
              </div>
            </div>
            <div className="h-96">
              {" "}
              <Input
                desgine_label=" text-ms font-semibold "
                label="Description"
                label_spaceinput="2"
                id="Your professional role"
                name="Your professional role"
                type_input="textarea"
                type="text"
                h="96"
                required
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <footer className="  border-t-2 pt-4  flex justify-end   items-center space-x-12 mr-10">
        <div className="text-ms font-normal">Cancel</div>
        <div className="text-lg font-semibold rounded-full bg-green-600 h-auto py-2  text-white w-auto px-6">
          {" "}
          Save
        </div>
      </footer>
    </div>
  );
};

export default AlertMessage;
