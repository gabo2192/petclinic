import React from "react"

import { Loading } from "./index"

export default {
  title: "UI Elements/Loading",
  component: Loading,
}

const Template = args => <Loading {...args} />

export const FullPage = Template.bind({})
FullPage.args = {
  fullpage: true,
}

export const Default = Template.bind({})
Default.args = {}
