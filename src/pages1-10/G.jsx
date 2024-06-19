import Items from "../Items";
import Qct from "../Qct";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef, useContext } from "react";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
import { useNavigate } from "react-router-dom";
const data = {
  "Accounting & Consulting": ["Task 1", "Task 2"],
  "Admin Support": ["Task 3", "Task 4"],
  "Customer Service": [
    "Community Management & Tagging",
    "Customer Service & Tech Support",
  ],
  "Data Science & Analytics": ["Task 5", "Task 6"],
  "Design & Creative": ["Task 7", "Task 8"],
  "Engineering & Architecture": ["Task 9", "Task 10"],
  "IT & Networking": ["Task 11", "Task 12"],
  Legal: ["Task 13", "Task 14"],
  "Sales & Marketing": ["Task 15", "Task 16"],
  Translation: ["Task 17", "Task 18"],
  "Web, Mobile & Software Dev": ["Task 19", "Task 20"],
  Writing: ["Task 21", "Task 22"],
};
const pageData = {
  1: {
    titre: "What are the main services you offer?",
    sousTitre:
      "Choose at least one service that best describes the type of work you do. This helps us match you with clients who need your unique expertise.",
    nbr_page: 7,
  },
};
export default function G() {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { services, Setservices } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleTaskSelection = (category, task) => {
    setSelectedTasks((prevSelectedTasks) => {
      const isSelected = prevSelectedTasks.some(
        (selected) => selected.category === category && selected.task === task
      );
      if (isSelected) {
        return prevSelectedTasks.filter(
          (selected) =>
            !(selected.category === category && selected.task === task)
        );
      }
      return [...prevSelectedTasks, { category, task }];
    });
  };

  const isTaskSelected = (category, task) => {
    return selectedTasks.some(
      (selected) => selected.category === category && selected.task === task
    );
  };

  const handleMouseEnterCategory = (category) => {
    setCurrentCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setCurrentCategory(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSend = () => {
    Setservices(selectedTasks);
    navigate("/Sign_Up/Refister/freelance/8");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTaskClick = (category, task) => {
    handleTaskSelection(category, task);
  };

  const selectedTasksString = selectedTasks.map((task) => task.task).join(", ");

  return (
    <div className="flex flex-col h-auto">
      <div className="flex-grow  pt-10 pl-24  max-w-[820px] ">
        <div className="">
          <Qct
            titre={pageData[1].titre}
            sousTitre={pageData[1].sousTitre}
            message={pageData[1].message}
            nbr_page={pageData[1].nbr_page}
          />
        </div>
        <div>
          {" "}
          <div className="relative  pt-6  " ref={dropdownRef}>
            <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center justify-between w-full     rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none overflow-hidden whitespace-nowrap"
              >
                <span className="truncate">
                  {selectedTasksString || "Select Tasks"}
                </span>
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    transform="rotate(270 10 10)"
                  />
                </svg>
              </button>
            </div>

            {isDropdownOpen && (
              <div className=" w-1/2    mt-1  rounded-2xl shadow-2xl  ">
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {Object.keys(data).map((category) => (
                    <div
                      key={category}
                      onMouseEnter={() => handleMouseEnterCategory(category)}
                      onMouseLeave={handleMouseLeaveCategory}
                      className="px-4 py-2 border-gray-200  border-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer relative group flex justify-between items-center"
                    >
                      {category}
                      <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          transform={
                            currentCategory === category
                              ? "rotate(180 10 10)"
                              : ""
                          }
                        />
                      </svg>

                      {currentCategory === category && (
                        <div className="absolute left-full top-0 mt-0 ml-0.5 w-60   rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5">
                          {data[category].map((task) => (
                            <div
                              key={task}
                              onClick={() =>
                                handleTaskSelection(category, task)
                              }
                              className="flex items-center px-2 py-1 text-sm cursor-pointer hover:bg-gray-200"
                            >
                              <input
                                type="checkbox"
                                className="mr-2 form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out"
                                checked={isTaskSelected(category, task)}
                                onChange={() =>
                                  handleTaskSelection(category, task)
                                }
                              />
                              <span className="text-gray-700">{task}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6  flex flex-wrap ">
              {selectedTasks.map((task, index) => (
                <div
                  key={index}
                  onClick={() => handleTaskClick(task.category, task.task)}
                  className="flex items-center border-[1px] border-green-900 text-xs  px-2 py-1 mr-2 mb-2 rounded-full cursor-pointer hover:bg-gray-300"
                >
                  <span className="mr-1">{task.task}</span>
                  <svg
                    className="size-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer
        prog={7}
        secend_button="thanks for adding experience"
        onSecendButtonClick={handleSend}
      ></Footer>
    </div>
  );
}

/*
import React, { useState, useEffect, useRef } from "react";

const data = {
  "Accounting & Consulting": ["Task 1", "Task 2"],
  "Admin Support": ["Task 3", "Task 4"],
  "Customer Service": [
    "Community Management & Tagging",
    "Customer Service & Tech Support",
  ],
  "Data Science & Analytics": ["Task 5", "Task 6"],
  "Design & Creative": ["Task 7", "Task 8"],
  "Engineering & Architecture": ["Task 9", "Task 10"],
  "IT & Networking": ["Task 11", "Task 12"],
  Legal: ["Task 13", "Task 14"],
  "Sales & Marketing": ["Task 15", "Task 16"],
  Translation: ["Task 17", "Task 18"],
  "Web, Mobile & Software Dev": ["Task 19", "Task 20"],
  Writing: ["Task 21", "Task 22"],
};

const G = () => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTaskSelection = (category, task) => {
    setSelectedTasks((prevSelectedTasks) => {
      const isSelected = prevSelectedTasks.some(
        (selected) => selected.category === category && selected.task === task
      );
      if (isSelected) {
        return prevSelectedTasks.filter(
          (selected) =>
            !(selected.category === category && selected.task === task)
        );
      }
      return [...prevSelectedTasks, { category, task }];
    });
  };

  const isTaskSelected = (category, task) => {
    return selectedTasks.some(
      (selected) => selected.category === category && selected.task === task
    );
  };

  const handleMouseEnterCategory = (category) => {
    setCurrentCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setCurrentCategory(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSend = () => {
    console.log("Selected Tasks:", selectedTasks);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTaskClick = (category, task) => {
    handleTaskSelection(category, task);
  };

  const selectedTasksString = selectedTasks.map((task) => task.task).join(", ");

  return (
    <div
      className="relative left-[600px] top-72 inline-block text-left"
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center justify-between w-96 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none overflow-hidden whitespace-nowrap"
        >
          <span className="truncate">
            {selectedTasksString || "Select Tasks"}
          </span>
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              transform="rotate(270 10 10)"
            />
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-left absolute left-0 mt-1 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {Object.keys(data).map((category) => (
              <div
                key={category}
                onMouseEnter={() => handleMouseEnterCategory(category)}
                onMouseLeave={handleMouseLeaveCategory}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer relative group flex justify-between items-center"
              >
                {category}
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    transform={
                      currentCategory === category ? "rotate(180 10 10)" : ""
                    }
                  />
                </svg>

                {currentCategory === category && (
                  <div className="absolute left-full top-0 mt-0 ml-0.5 w-60 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5">
                    {data[category].map((task) => (
                      <div
                        key={task}
                        onClick={() => handleTaskSelection(category, task)}
                        className="flex items-center px-2 py-1 text-sm cursor-pointer hover:bg-gray-200"
                      >
                        <input
                          type="checkbox"
                          className="mr-2 form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out"
                          checked={isTaskSelected(category, task)}
                          onChange={() => handleTaskSelection(category, task)}
                        />
                        <span className="text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 max-w-[600px] flex flex-wrap">
        <h3> Les elements selectionne sont :</h3>

        {selectedTasks.map((task, index) => (
          <div
            key={index}
            onClick={() => handleTaskClick(task.category, task.task)}
            className="flex items-center border-2 border-gray-500  px-2 py-1 mr-2 mb-2 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <span className="mr-1">{task.task}</span>
            <svg
              className="w-5 h-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>

      <button
        onClick={handleSend}
        className="mt-4 inline-flex justify-center w-16 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-500 text-sm font-medium text-white hover:bg-green-600 focus:outline-none"
      >
        Envoyer
      </button>
    </div>
  );
};

export default G;
*/
