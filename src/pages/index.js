import React from "react"

import global from "../_data/global.yaml"
import home from "../_data/home.yaml"
import { Layout } from "./layout"
import { Blocks } from "../components/blocks"

console.log(global)
console.log(home)

export default function Home() {
  return (
    <Layout>
      <Blocks blocks={home.blocks} />
    </Layout>
  )
}
