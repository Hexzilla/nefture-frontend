import { SVGProps } from 'react';

export default function Checked({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.55013 9.99984L9.05013 12.4998L14.0501 7.49984M18.6335 9.99984C18.6335 14.6022 14.9025 18.3332 10.3001 18.3332C5.69776 18.3332 1.9668 14.6022 1.9668 9.99984C1.9668 5.39746 5.69776 1.6665 10.3001 1.6665C14.9025 1.6665 18.6335 5.39746 18.6335 9.99984Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
