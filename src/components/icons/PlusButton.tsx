import { SVGProps } from 'react';

export default function PlusButton({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.06" />
      <path
        d="M15 23V15M15 15V7M15 15H23M15 15H7"
        stroke="#2965FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
