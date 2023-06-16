import { SVGProps } from 'react';

export default function Calendar({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.957947" y="0.0419922" width="32" height="31.0588" rx="6.70695" fill="#737373" />
      <g clipPath="url(#clip0_97_12174)">
        <path
          d="M22.0072 7.61987H11.9035C10.0435 7.61987 8.53564 9.12773 8.53564 10.9878V19.4075C8.53564 21.2675 10.0435 22.7754 11.9035 22.7754H22.0072C23.8672 22.7754 25.3751 21.2675 25.3751 19.4075V10.9878C25.3751 9.12773 23.8672 7.61987 22.0072 7.61987Z"
          stroke="#BFBFBF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5875 5.93579V9.30368"
          stroke="#BFBFBF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.3232 5.93579V9.30368"
          stroke="#BFBFBF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.53564 12.6716H25.3751"
          stroke="#BFBFBF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_97_12174">
          <rect
            width="20.2073"
            height="20.2073"
            fill="white"
            transform="translate(6.85168 4.25195)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
