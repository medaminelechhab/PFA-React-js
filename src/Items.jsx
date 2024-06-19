import React from "react";
import plusSVG from "../src/assets/SVG/plus.svg";

export default function Items({ onClick, Value, setValue }) {
  const handleClick = () => {
    onClick(); // Appel de la fonction de rappel avec les données
  };

  const deleteEducationByKey = (index) => {
    const updatedEducation = Value.filter((item, i) => i !== index);
    setValue(updatedEducation);
  };

  return (
    <div className="pt-7">
      <div className="flex justify-start">
        <div className="bg-gray-100 rounded-3xl w-100 h-64 border-dashed border-2 border-gray-400 flex items-center">
          <div className="m-7">
            <div>
              <img
                src={plusSVG}
                className="w-10 h-10"
                onClick={handleClick}
                alt="Add"
              />
            </div>
            <div className="text-2xl font-medium pt-3 text-gray-500">
              Add experience
            </div>
          </div>
        </div>
        {Value.length > 0 && (
          <div className="ml-40">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(Value[0])
                    .filter(
                      (key) =>
                        key !== "description" &&
                        key !== "startMonth" &&
                        key !== "endMonth" &&
                        key !== "To_date"
                    )
                    .map((key) => (
                      <th
                        key={key}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {key}
                      </th>
                    ))}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Value.map((row, index) => (
                  <tr key={index}>
                    {Object.keys(row)
                      .filter(
                        (key) =>
                          key !== "description" &&
                          key !== "startMonth" &&
                          key !== "endMonth" &&
                          key !== "To_date"
                      )
                      .map((key) => (
                        <td key={key} className="px-6 py-4 whitespace-nowrap">
                          {row[key]}
                        </td>
                      ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => deleteEducationByKey(index)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
