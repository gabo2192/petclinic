import React from "react"

import { Button } from "./index"

export default {
  title: "UI Elements/Button",
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary",
  type: "primary",
  handleClick: () => console.log("clicked"),
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary",
  type: "secondary",
  handleClick: () => console.log("clicked"),
}
