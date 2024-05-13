import React, { useState, useEffect } from "react";
import Input from "../Input";
import moisData from "./mois.json";

import apiService from "../Version-final/Service/apiService";
export default function AlertMessage({ onclick }) {
  const [countries, setCountries] = useState([]);
  const startYear = 1990;
  const endYear = 2024;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  const hanlclick = () => {
    onclick();
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await apiService(
      "https://restcountries.com/v3.1/all",
      "GET",
      null,
      null
    );
    const countryNames = response.map((contry) => contry.name.common);
    setCountries(countryNames);
  };

  return (
    <div className="bg-white  border-2  shadow-2xl     transfom  -translate-x-[-350px] -  mt-4 rounded-3xl w-128   h-[680px]">
      <div className="      border-b-2 border-gray-400  px-5 pb-4  text-4xl font-semibold text-black my-6">
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
                <Input
                  label="Pays"
                  id="country"
                  name="country"
                  type="select"
                  type_input="select"
                  required
                >
                  <option className="">Sélectionnez un pays</option>
                  {countries.map((country, index) => (
                    <option key={index} className="" value={country}>
                      {country}
                    </option>
                  ))}
                </Input>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-1/2">
                {" "}
                <Input
                  label="Start Date"
                  desgine_label=" text-ms font-semibold "
                  label_spaceinput="2"
                  id="Month"
                  name="Month"
                  type="select"
                  type_input="select"
                  required
                >
                  <option value="">Month</option>
                  {moisData.map((m) => (
                    <option key={m.id}>{m.name}</option>
                  ))}
                </Input>
              </div>
              <div className="w-1/2">
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label_spaceinput="2"
                  id="Year"
                  name="Year"
                  type="select"
                  type_input="select"
                  required
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Input>
              </div>
              <div className="w-1/2">
                {" "}
                <Input
                  label="End Date"
                  desgine_label=" text-ms font-semibold "
                  label_spaceinput="2"
                  id="Month"
                  name="Month"
                  type="select"
                  type_input="select"
                  required
                >
                  <option value="">Month</option>
                  {moisData.map((m) => (
                    <option key={m.id}>{m.name}</option>
                  ))}
                </Input>
              </div>
              <div className="w-1/2">
                {" "}
                <Input
                  desgine_label=" text-ms font-semibold "
                  label_spaceinput="2"
                  id="Year"
                  name="Year"
                  type="select"
                  type_input="select"
                  required
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Input>
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
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t-2 pt-4 flex justify-end items-center space-x-12 mr-10">
        <button className="text-ms font-normal" onClick={hanlclick}>
          Cancel
        </button>
        <button className="text-lg font-semibold rounded-full bg-green-600 h-auto py-2 text-white w-auto px-6 cursor-pointer">
          Save
        </button>
      </footer>
    </div>
  );
}
