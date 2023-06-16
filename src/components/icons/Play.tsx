import { SVGProps } from 'react';

export default function Play({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_97_26766)" filter="url(#filter0_d_97_26766)">
        <path
          d="M31.7895 20.6722C29.5705 19.26 26.6666 20.8541 26.6666 23.4844V58.0065C26.6666 60.6368 29.5705 62.2309 31.7895 60.8187L58.9141 43.5576C60.9724 42.2478 60.9724 39.2431 58.9141 37.9332L31.7895 20.6722Z"
          fill="#BABABA"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_97_26766"
          x="-4"
          y="0.745117"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_97_26766" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_97_26766"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_97_26766">
          <rect width="80" height="80" fill="white" transform="translate(0 0.745117)" />
        </clipPath>
      </defs>
    </svg>
  );
}
