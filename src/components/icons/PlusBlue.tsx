import { SVGProps } from 'react';

export default function PlusBlue({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="23" height="23" rx="2" fill="#3E3D3C" />
      <rect x="4" y="10.5" width="15" height="3" rx="0.764706" fill="#2965FF" />
      <rect
        x="10"
        y="19.5"
        width="15"
        height="3"
        rx="0.764706"
        transform="rotate(-90 10 19.5)"
        fill="#2965FF"
      />
    </svg>
  );
}
