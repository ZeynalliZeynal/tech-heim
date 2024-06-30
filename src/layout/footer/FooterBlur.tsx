const FooterBlur = () => {
  return (
    <div className="absolute z-[0] inset-0 left-1/2 -translate-x-1/2 w-full text-primary-400">
      <svg
        width="1171"
        height="205"
        viewBox="0 0 1171 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_4653_5138)">
          <path
            d="M1003 380.5C1003 480.187 823.242 561 601.5 561C379.758 561 200 480.187 200 380.5C200 280.813 379.758 200 601.5 200C823.242 200 1003 280.813 1003 380.5Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_4653_5138"
            x="0"
            y="0"
            width="1203"
            height="761"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_4653_5138"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default FooterBlur;
