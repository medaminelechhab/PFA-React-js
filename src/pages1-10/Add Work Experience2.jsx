import React, { useState, useEffect, useContext } from "react";
import Input from "../Input";
import moisData from "./mois.json";
import apiService from "../Version-final/Service/apiService";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
export default function AlertMessage2({ onClose }) {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    Degree: "",
    Field_of_Study: "",
    Dates_Attended: "",
    To_date: "",

    description: "",
  });
  const navigate = useNavigate();
  const { Eduction, SetEduction } = useContext(ProfileContext);
  const startYear = 1990;
  const endYear = 2024;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  const startYear1 = 2024;
  const endYear1 = 2034;
  const years1 = Array.from(
    { length: endYear1 - startYear1 + 1 },
    (_, index) => startYear1 + index
  );
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
    const countryNames = response.map((country) => country.name.common);
    setCountries(countryNames);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SetEduction((prev) => [...prev, formData]);
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-2 shadow-2xl rounded-3xl w-128 h-[680px] p-6">
        <div className="border-b-2 pb-4 border-gray-400 text-4xl font-semibold text-black mb-6">
          Add Education History
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="overflow-y-auto h-[490px] space-y-6">
            <Input
              desgine_label="text-ms font-semibold"
              label="School *"
              label_spaceinput="2"
              id="title"
              name="title"
              type="text"
              placeholder="Ex: Emsi"
              required
              value={formData.title}
              onChange={handleInputChange}
            />
            <Input
              desgine_label="text-ms font-semibold"
              label="Degree *"
              label_spaceinput="2"
              id="Degree"
              name="Degree"
              type="text"
              placeholder="Ex: Bac"
              required
              value={formData.Degree}
              onChange={handleInputChange}
            />
            <Input
              desgine_label="text-ms font-semibold"
              label="Field of Study"
              label_spaceinput="2"
              id="Field_of_Study"
              name="Field_of_Study"
              type="text"
              required
              placeholder="Ex: London"
              value={formData.Field_of_Study}
              onChange={handleInputChange}
            />
            <div className="flex space-x-12">
              <div className="w-1/2">
                {" "}
                <Input
                  desgine_label="text-ms font-semibold"
                  label="Dates Attended"
                  label_spaceinput="2"
                  id="Dates_Attended"
                  name="Dates_Attended"
                  type="select"
                  type_input="select"
                  value={formData.Dates_Attended}
                  onChange={handleInputChange}
                >
                  <option value="">Start_Date</option>
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
                  desgine_label="text-ms font-semibold"
                  label_spaceinput="2"
                  id="To_date"
                  name="To_date"
                  type="select"
                  type_input="select"
                  value={formData.To_date}
                  onChange={handleInputChange}
                >
                  <option value="">To or expectedd graduation year</option>
                  {years1.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Input>
              </div>
            </div>
            <Input
              desgine_label="text-ms font-semibold"
              label="Description"
              label_spaceinput="2"
              id="description"
              name="description"
              type_input="textarea"
              type="text"
              h="96"
              required
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <footer className=" border-t-2 pt-4 flex  justify-end  space-x-12">
            <button
              type="button"
              className="text-ms font-normal"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-lg font-semibold rounded-full bg-green-600 h-auto py-2 text-white w-auto px-6 cursor-pointer"
            >
              Save
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
