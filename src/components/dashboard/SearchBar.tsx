// Desc: SearchBar component

const SearchBar = () => {
  return (
    <div className="mx-auto max-w-md">
      <div className="relative flex h-12 w-96 items-center overflow-hidden rounded-lg bg-neutral-100 focus-within:shadow-lg">
        <div className="grid h-full w-12 place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-stone-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full bg-transparent pr-2 text-sm placeholder-neutral-300 outline-none transition-all duration-200 ease-in-out"
          type="text"
          id="search"
          placeholder="Search here.."
        />
      </div>
    </div>
  );
};

export default SearchBar;


