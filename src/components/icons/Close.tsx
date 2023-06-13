import { SVGProps } from 'react';

export default function Close({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.3 8L8.30005 14M8.30005 8L14.3 14M21.3 11C21.3 16.5228 16.8229 21 11.3 21C5.7772 21 1.30005 16.5228 1.30005 11C1.30005 5.47715 5.7772 1 11.3 1C16.8229 1 21.3 5.47715 21.3 11Z"
        stroke="#16132F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
