import { SVGProps } from 'react';

export default function EthereumIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="black" />
      <g clipPath="url(#clip0_1_24121)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.1807 31.6424L14.9895 26.0927L24.1807 39.3405L33.3771 26.0927L24.1793 31.6437L24.1807 31.6424ZM24.3196 8.70776L15.1284 24.3069L24.3196 29.8646L33.5094 24.3123L24.3196 8.70776Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_24121">
          <rect
            width="19.8428"
            height="32.47"
            fill="white"
            transform="translate(14.9543 7.36987)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
