import React from 'react';
import { Discord as Props } from '../../types'

export default function Discord({ color = '#000', className, onClick }: Props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className} onClick={onClick}>
      <g fill={color}>
        <path d="M16.784 17.1211C15.728 17.1211 14.896 18.0011 14.896 19.1051C14.896 20.2091 15.744 21.0891 16.784 21.0891C17.84 21.0891 18.656 20.2091 18.656 19.1051C18.688 18.0011 17.84 17.1211 16.784 17.1211ZM23.52 17.1211C22.464 17.1211 21.632 18.0011 21.632 19.1051C21.632 20.2091 22.48 21.0891 23.52 21.0891C24.576 21.0891 25.408 20.2091 25.408 19.1051C25.408 18.0011 24.544 17.1211 23.52 17.1211Z" />
        <path d="M25.36 25.4888C25.36 25.4888 24.688 24.7048 24.144 24.0488C26.56 23.3768 27.488 21.9208 27.488 21.9208C26.736 22.4168 26.016 22.7528 25.376 22.9928C24.448 23.3768 23.568 23.6008 22.704 23.7768C20.928 24.0968 19.312 24.0168 17.92 23.7608C16.864 23.5688 15.968 23.2968 15.216 22.9768C14.784 22.8168 14.336 22.6088 13.872 22.3688C13.808 22.3368 13.76 22.3208 13.712 22.2728C13.68 22.2568 13.648 22.2408 13.632 22.2408C13.296 22.0648 13.12 21.9368 13.12 21.9368C13.12 21.9368 14 23.3608 16.352 24.0488C15.792 24.7368 15.12 25.5368 15.12 25.5368C11.04 25.4088 9.48799 22.8008 9.48799 22.8008C9.48799 17.0248 12.144 12.3368 12.144 12.3368C14.8 10.4008 17.312 10.4488 17.312 10.4488L17.504 10.6728C14.144 11.5688 12.64 13.0088 12.64 13.0088C12.64 13.0088 13.04 12.8008 13.728 12.4968C15.696 11.6488 17.264 11.4248 17.92 11.3608C18.032 11.3448 18.128 11.3288 18.24 11.3288C19.36 11.1848 20.64 11.1528 21.968 11.2968C23.712 11.4888 25.6 12.0008 27.52 13.0088C27.52 13.0088 26.064 11.6488 22.928 10.7208L23.184 10.4328C23.184 10.4328 25.712 10.3848 28.352 12.3208C28.352 12.3208 31.008 17.0088 31.008 22.7848C30.976 22.7528 29.44 25.3608 25.36 25.4888ZM32.48 2.04883H7.75999C5.67999 2.04883 3.98399 3.71283 3.98399 5.76083V30.0168C3.98399 32.0648 5.67999 33.7288 7.75999 33.7288H28.672L27.696 30.4168L30.064 32.5448L32.288 34.5448L36.272 37.9368V5.76083C36.256 3.71283 34.56 2.04883 32.48 2.04883Z" />
      </g>
    </svg>
  )
}