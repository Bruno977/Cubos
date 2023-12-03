export function EllipseShadow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="141"
      height="140"
      viewBox="0 0 141 140"
      fill="none"
    >
      <g filter="url(#filter0_b_1043_893)">
        <circle cx="70.5" cy="70" r="70" fill="#121113" fillOpacity="0.5" />
      </g>
      <defs>
        <filter
          id="filter0_b_1043_893"
          x="-3.5"
          y="-4"
          width="148"
          height="148"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1043_893"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1043_893"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
