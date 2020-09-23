import React from "react"

import home from "../_data/home.yaml"
import { Layout } from "./layout"
import { Blocks } from "../components/blocks"

export default function Home(props) {
  return (
    <Layout {...props}>
      <Blocks blocks={home.blocks} />
    </Layout>
  )
}
