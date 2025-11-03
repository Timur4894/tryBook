import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Circle cx={256} cy={256} r={48} fill={props.color} />
    <Circle cx={416} cy={256} r={48} fill={props.color} />
    <Circle cx={96} cy={256} r={48} fill={props.color} />
  </Svg>
)
export default SvgComponent
