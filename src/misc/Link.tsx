import React from "react"

export interface Props {
  color?: string
  className?: string
  onClick?: () => void
}

export default function Link({ className, color, onClick }: Props): JSX.Element {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" className={className} onClick={onClick}>
      <path
        d="M7.5625 0.28125V1.34375H10.5176L3.99316 7.86816L4.75684 8.63184L11.2812 2.10742V5.0625H12.3438V0.28125H7.5625ZM0.65625 2.40625V11.9688H10.2188V5.0625L9.15625 6.125V10.9062H1.71875V3.46875H6.5L7.5625 2.40625H0.65625Z"
        fill={color}
      />
    </svg>
  )
}
