const MongoDBIcon = () => {
  return (
    <div
      className="flex items-center gap-1.5 rounded-lg p-1.5 transition-colors"
      style={{
        backgroundColor: "color-mix(in srgb, #47A248 10%, transparent)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        role="img"
        viewBox="0 0 24 24"
        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        style={{ color: "#47A248" }}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    </div>
  );
};
export default MongoDBIcon;
