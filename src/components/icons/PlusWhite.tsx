import { SVGProps } from 'react';

export default function PlusWhite({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="23" height="23" rx="2"/>
      <rect x="4" y="10" width="15" height="3" rx="0.764706" fill="#FFFFFF"/>
      <rect x="10" y="19" width="15" height="3" rx="0.764706" transform="rotate(-90 10 19)" fill="#FFFFFF"/>
    </svg>

  );
}
