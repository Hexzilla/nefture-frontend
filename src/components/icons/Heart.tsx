import { SVGProps } from 'react';

export default function Heart({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.7261 1.5C16.6612 1.5 18.6335 4.29375 18.6335 6.9C18.6335 12.1781 10.4483 16.5 10.3001 16.5C10.152 16.5 1.9668 12.1781 1.9668 6.9C1.9668 4.29375 3.93902 1.5 6.8742 1.5C8.55939 1.5 9.66124 2.35312 10.3001 3.10312C10.939 2.35312 12.0409 1.5 13.7261 1.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
