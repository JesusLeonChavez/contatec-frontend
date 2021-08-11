 
import * as React from "react"

export default function Build(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2 10.797l11.014 11.014c.485.485.485 1.25 0 1.71l-2.79 2.79a1.208 1.208 0 01-1.71 0l-11.05-11.05c-2.814 1.055-6.101.461-8.357-1.795-2.79-2.778-3.045-7.132-.789-10.213l4.646 4.645 1.722-1.71-4.657-4.67c3.093-2.256 7.435-2.001 10.225.789a7.89 7.89 0 011.746 8.49zm-4.1 1.48l11.475 11.475 1.067-1.08L12.18 11.21a5.276 5.276 0 001.067-2.378 5.42 5.42 0 00-1.504-4.803 5.469 5.469 0 00-4.172-1.59l3.748 3.749-5.143 5.143-3.748-3.748a5.419 5.419 0 001.6 4.172c1.262 1.262 2.997 1.76 4.647 1.517a5.304 5.304 0 002.425-.995z"
        fill={props.color}
      />
    </svg>
  )
}
