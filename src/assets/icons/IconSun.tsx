type IconSunProps = {
  primary: string;
  secondary: string;
};
export function IconSun({ primary, secondary }: IconSunProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        fill={primary}
        fillOpacity="0.98"
        stroke={secondary}
        strokeWidth="2"
      />
      <path
        d="M12 5V3"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 21V19"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.9498 7.04996L18.364 5.63574"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.63608 18.3644L7.05029 16.9502"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 12L21 12"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 12L5 12"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.9498 16.95L18.364 18.3643"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.63608 5.63559L7.05029 7.0498"
        stroke={primary}
        strokeOpacity="0.98"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
