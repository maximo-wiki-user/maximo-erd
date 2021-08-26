import * as React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { chakra, ChakraProvider, Image, HStack, VStack, Heading, Box} from "@chakra-ui/react"
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Objects } from '../components/object';

import config from '../config'

// data
const IndexPage = () => {
  
    return (
      <ChakraProvider>
        <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />0/
      {/*<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />*/}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans+Condensed&display=swap" rel="stylesheet"/> 
        </Helmet>
        <Header>
          <HStack> 
          </HStack>
        </Header>
          <Objects/>       
        <Footer />

      </ChakraProvider>
    )
  }


export default IndexPage
