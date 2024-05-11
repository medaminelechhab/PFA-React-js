export default function Add() {
  return (
    <div className="mx-96 mt-5 bg-slate-400 shadow-xl p-6">
      <div className="mb-6 text-lg font-semibold">Add Work Experience</div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="title" className="mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="company" className="mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="location" className="mb-1">
          Location
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            id="location"
            name="location"
            className="border border-gray-300 rounded px-3 py-2 flex-1"
          />
          <input
            type="text"
            id="location"
            name="location"
            className="border border-gray-300 rounded px-3 py-2 flex-1"
          />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <input type="checkbox" name="current" id="current" className="mr-2" />
        <label htmlFor="current">Current</label>
      </div>

      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="start_date" className="mb-1">
            Start Date *
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="end_date" className="mb-1">
            End Date *
          </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="border border-gray-300 rounded w-full px-3 py-2"
        />
      </div>
    </div>
  );
}
