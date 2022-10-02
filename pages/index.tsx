import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Card,
  Heading,
  studioTheme,
  ThemeProvider
} from '@sanity/ui'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={studioTheme}>
      <Card padding={4}>
        <Heading>Welcome to Sanity UI</Heading>
      </Card>
    </ThemeProvider>
  )
}

export default Home
