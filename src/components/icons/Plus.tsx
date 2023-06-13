import { SVGProps } from 'react';

export default function Plus({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.0001 6.66699V13.3337M6.66675 10.0003H13.3334M18.3334 10.0003C18.3334 14.6027 14.6025 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C14.6025 1.66699 18.3334 5.39795 18.3334 10.0003Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
