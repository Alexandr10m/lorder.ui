import React from 'react';

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function LorderPoints(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <title>lorder</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.26348 11.9097C9.98594 11.9097 12.1929 9.71157 12.1929 7C12.1929 4.28844 9.98594 2.09028 7.26348 2.09028C4.54102 2.09028 2.33403 4.28844 2.33403 7C2.33403 9.71157 4.54102 11.9097 7.26348 11.9097ZM7.26348 14C11.145 14 14.2916 10.866 14.2916 7C14.2916 3.13401 11.145 0 7.26348 0C3.38195 0 0.235352 3.13401 0.235352 7C0.235352 10.866 3.38195 14 7.26348 14Z"
        fill="url(#paint0_angular)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.28066 9.00316C6.93048 9.16426 8.39906 7.96276 8.5608 6.31954C8.72255 4.67632 7.51623 3.21362 5.8664 3.05252C4.21658 2.89142 2.74801 4.09292 2.58626 5.73614C2.42451 7.37936 3.63083 8.84206 5.28066 9.00316ZM5.07588 11.0835C7.87925 11.3572 10.3746 9.31564 10.6495 6.5235C10.9243 3.73135 8.87454 1.24596 6.07118 0.972218C3.26781 0.698475 0.772435 2.74004 0.497592 5.53218C0.222749 8.32433 2.27252 10.8097 5.07588 11.0835Z"
        fill="url(#paint1_angular)"
      />
      <defs>
        <radialGradient
          id="paint0_angular"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.26348 7) rotate(-154.598) scale(6.40258 6.2401)"
        >
          <stop stop-color="#FFCB74" />
          <stop offset="0.40625" stop-color="#FFCB74" />
          <stop offset="1" stop-color="#FFCB74" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_angular"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.57353 6.02784) rotate(-159.643) scale(6.38373 6.36438)"
        >
          <stop stop-color="#FFCB74" />
          <stop offset="0.328125" stop-color="#FFDFA8" />
          <stop offset="1" stop-color="#FFCB74" stop-opacity="0" />
        </radialGradient>
      </defs>
    </SvgIcon>
  );
}
