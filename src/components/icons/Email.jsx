const EmailIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size || "h-8 w-8"} transition-none `}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="3 9 12 15 21 9 12 3 3 9" />
      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      <line x1={3} y1={19} x2={9} y2={13} />
      <line x1={15} y1={13} x2={21} y2={19} />
    </svg>
  );
};
export default EmailIcon;
