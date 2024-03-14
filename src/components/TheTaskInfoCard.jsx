const TheTaskInfoCard = (props) => {
  console.log(props);

  return (
    <div className="z-0 relative w-full max-w-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="z-0 relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          alt="ui/ux review check"
        />
      </div>

      <div className="p-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-Sen text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Wooden House, Florida
          </h5>
        </div>

        {/* Description */}
        <p className="block font-Sen text-base antialiased font-light leading-relaxed text-gray-700">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </p>

        {/* Tech Stacks */}
        <div className="mt-5">
          <div className="mb-2">
            <strong>
              Category: <span>Frontend</span>
            </strong>
          </div>
          <div>
            <strong>
              Tech Stacks: <span>HTML, CSS, JavaScript</span>
            </strong>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 flex items-center gap-5">
        <button
          className="block w-full select-none rounded-lg bg-primary-blue hover:bg-[#222f44] py-3.5 px-7 text-center align-middle font-Sen text-sm text-white"
          type="button"
        >
          Live
        </button>

        <button
          className="block w-full select-none rounded-lg bg-gray-900 hover:bg-gray-800 py-3.5 px-7 text-center align-middle font-Sen text-sm text-white"
          type="button"
        >
          GitHub
        </button>
      </div>
    </div>
  );
};

export default TheTaskInfoCard;
