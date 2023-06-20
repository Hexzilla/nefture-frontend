import { SVGProps } from 'react';

export default function CheckGreen({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.66882 12.2675L9.21401 16.2558C9.71179 16.8158 10.6062 16.7475 11.0133 16.1185L16.4395 7.73242"
        stroke="#3C3C3C"
        strokeWidth="1.13376"
      />
      <circle cx="9.07006" cy="10" r="9.07006" fill="#00FF84" />
      <path
        d="M4.03119 9.99989L7.18246 13.5451C7.62494 14.0429 8.41998 13.9822 8.7818 13.423L13.6051 5.96875"
        stroke="#3C3C3C"
        strokeWidth="1.00778"
      />
    </svg>
  );
}
