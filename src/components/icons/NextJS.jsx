const NextJS = () => {
  return (
    <div
      className="flex items-center gap-1.5 rounded-lg p-1.5 transition-colors"
      style={{
        backgroundColor: "color-mix(in srgb, undefined 10%, transparent)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        role="img"
        viewBox="0 0 24 24"
        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    </div>
  );
};
export default NextJS;
