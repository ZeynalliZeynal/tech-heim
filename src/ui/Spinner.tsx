const Spinner = ({ color = "white" }) => {
  return (
    <span
      className={`flex items-center justify-center size-6 animate-spin text-${color}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9444 2.7197C10.4315 2.7197 2.7197 10.4315 2.7197 19.9444C2.7197 29.4574 10.4315 37.1692 19.9444 37.1692C29.4574 37.1692 37.1692 29.4574 37.1692 19.9444C37.1692 10.4315 29.4574 2.7197 19.9444 2.7197ZM0 19.9444C0 8.92944 8.92944 0 19.9444 0C30.9594 0 39.8889 8.92944 39.8889 19.9444C39.8889 30.9594 30.9594 39.8889 19.9444 39.8889C8.92944 39.8889 0 30.9594 0 19.9444Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.585 1.35985C18.585 0.608831 19.1938 0 19.9448 0C30.9598 0 39.8893 8.92944 39.8893 19.9444C39.8893 20.6954 39.2804 21.3043 38.5294 21.3043C37.7784 21.3043 37.1696 20.6954 37.1696 19.9444C37.1696 10.4315 29.4578 2.7197 19.9448 2.7197C19.1938 2.7197 18.585 2.11087 18.585 1.35985Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default Spinner;
