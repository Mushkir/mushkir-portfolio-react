const JQueryIcon = () => {
  return (
    <div className="flex flex-col items-center mb-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M10.322 23.04C4.58 18.724 2.777 11.07 5.494 4.584c-.254.29-.502.59-.74.904C-.42 12.374.748 21.992 7.37 26.97c6.62 4.978 16.184 3.43 21.362-3.456c.237-.314.454-.635.663-.96c-5.478 4.41-13.33 4.803-19.07.487zm3.34-4.442c4.765 3.582 11.604 2.564 15.567-2.198c-3.61 2.64-9.09 2.475-13.362-.736S9.916 7.23 11.45 3.03c-3.474 5.13-2.553 11.985 2.212 15.568m4.98-6.622c3.254 2.447 8.146 1.438 10.967-2.242c-2.605 1.92-6.342 1.955-9.158-.164c-2.82-2.118-3.826-5.718-2.7-8.754c-2.754 3.733-2.365 8.712.89 11.16z"
        ></path>
      </svg>

      {/* Name */}
      <span>JQuery</span>
    </div>

    // Icon url: https://icon-sets.iconify.design/?query=jquery
  );
};

export default JQueryIcon;