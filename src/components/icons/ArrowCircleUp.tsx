import { SVGProps } from 'react';

export default function ArrowCircleUp({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_3_23288)">
        <circle cx="23" cy="19" r="11" fill="#292929"/>
        <circle cx="23" cy="19" r="10.5" stroke="white" strokeOpacity="0.06"/>
      </g>
      <path d="M23.1468 24.8049C22.9609 24.8049 22.8103 24.7474 22.6952 24.6323C22.5801 24.5172 22.5226 24.3667 22.5226 24.1807V16.1588L22.5956 14.1932L22.9741 14.3592L20.8093 16.7631L19.3816 18.1643C19.324 18.2219 19.2576 18.2639 19.1823 18.2905C19.1071 18.3215 19.0252 18.337 18.9366 18.337C18.7595 18.337 18.6135 18.2794 18.4984 18.1643C18.3877 18.0492 18.3323 17.9053 18.3323 17.7327C18.3323 17.5644 18.3965 17.4117 18.5249 17.2745L22.6819 13.1174C22.7484 13.0466 22.8214 12.9957 22.9011 12.9647C22.9808 12.9293 23.0627 12.9116 23.1468 12.9116C23.2353 12.9116 23.3194 12.9293 23.3991 12.9647C23.4788 12.9957 23.5519 13.0466 23.6183 13.1174L27.7687 17.2745C27.9015 17.4117 27.9679 17.5644 27.9679 17.7327C27.9679 17.9053 27.9103 18.0492 27.7952 18.1643C27.6801 18.2794 27.5362 18.337 27.3636 18.337C27.275 18.337 27.1931 18.3215 27.1179 18.2905C27.0426 18.2639 26.9762 18.2219 26.9187 18.1643L25.4909 16.7631L23.3128 14.3592L23.7046 14.1932L23.7776 16.1588V24.1807C23.7776 24.3667 23.7179 24.5172 23.5984 24.6323C23.4832 24.7474 23.3327 24.8049 23.1468 24.8049Z" fill="white"/>
      <defs>
      <filter id="filter0_d_3_23288" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_23288"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_23288" result="shape"/>
      </filter>
      </defs>
    </svg>
  );
}
