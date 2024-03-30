const HomeSearchField = () => {
  return (
    <div className="mt-6 flex bg-[#F3F3FA] p-6">
      <div className="mr-2">
        <input
          type="select"
          placeholder="prototype here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mr-2">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div>
        <button className="px-6 py-3 btn btn-outline bg-[#1C3988] text-white font-bold">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeSearchField;
