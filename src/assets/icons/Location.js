import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <Path
      stroke="#F1F1F1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.4 25h7.2c6 0 8.4-2.4 8.4-8.4V9.4c0-6-2.4-8.4-8.4-8.4H9.4C3.4 1 1 3.4 1 9.4v7.2c0 6 2.4 8.4 8.4 8.4Z"
    />
    <Path
      stroke="#F1F1F1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.4 25h7.2c6 0 8.4-2.4 8.4-8.4V9.4c0-6-2.4-8.4-8.4-8.4H9.4C3.4 1 1 3.4 1 9.4v7.2c0 6 2.4 8.4 8.4 8.4Z"
    />
    <Path
      stroke="white"
      d="M13 13.955a2.08 2.08 0 1 0 0-4.16 2.08 2.08 0 0 0 0 4.16Z"
    />
    <Path
      stroke="white"
      d="M7.413 10.66c1.314-5.774 9.867-5.767 11.174.006.766 3.387-1.34 6.254-3.187 8.027a3.462 3.462 0 0 1-4.807 0c-1.84-1.773-3.946-4.647-3.18-8.033Z"
    />
  </Svg>
)
export default SvgComponent
