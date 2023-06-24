import { SVGProps } from 'react';

export default function GrayClose({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="14" fill="white" fillOpacity="0.02" />
      <path
        d="M9.34766 18.4278C9.76368 18.838 10.4844 18.8204 10.8652 18.4395L14 15.3048L17.1231 18.4337C17.5273 18.838 18.2246 18.838 18.6348 18.4219C19.0508 18.0059 19.0566 17.3087 18.6523 16.9044L15.5293 13.7755L18.6523 10.6524C19.0566 10.2481 19.0508 9.55084 18.6348 9.14069C18.2188 8.72467 17.5273 8.71881 17.1231 9.12311L14 12.2462L10.8652 9.11725C10.4844 8.73639 9.76368 8.71881 9.34766 9.13483C8.9375 9.55084 8.94922 10.2657 9.33594 10.6465L12.4707 13.7755L9.33594 16.9102C8.94922 17.2911 8.93164 18.0118 9.34766 18.4278Z"
        fill="white"
        fillOpacity="0.4"
      />
      <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="white" strokeOpacity="0.12" />
    </svg>
  );
}
