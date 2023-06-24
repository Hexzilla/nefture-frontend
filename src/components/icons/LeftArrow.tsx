import { SVGProps } from 'react';

export default function LeftArrow({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.85L7.40404 11.43C7.30976 11.19 7.21886 10.95 7.13131 10.71C7.04377 10.4633 7 10.2233 7 9.99C7 9.77 7.04377 9.53667 7.13131 9.29C7.21886 9.04333 7.30976 8.8 7.40404 8.56L10 2.15C10.0808 1.95 10.202 1.79333 10.3636 1.68C10.5253 1.56 10.7037 1.5 10.899 1.5C11.2155 1.5 11.4781 1.60333 11.6869 1.81C11.8956 2.01 12 2.26 12 2.56C12 2.71333 11.9663 2.88333 11.899 3.07C11.8249 3.25667 11.7609 3.42333 11.7071 3.57L8.85859 10.63V9.36L11.7071 16.43C11.7609 16.57 11.8249 16.7333 11.899 16.92C11.9663 17.1067 12 17.28 12 17.44C12 17.74 11.8956 17.99 11.6869 18.19C11.4781 18.3967 11.2155 18.5 10.899 18.5C10.7037 18.5 10.5253 18.44 10.3636 18.32C10.202 18.2 10.0808 18.0433 10 17.85Z"
        fill="white"
      />
    </svg>
  );
}
