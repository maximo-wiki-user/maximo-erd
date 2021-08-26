import * as React from "react"
import { Box, chakra, SimpleGrid, Badge } from "@chakra-ui/react"
import { useStaticQuery, graphql } from 'gatsby'

export const Objects = () => {

  const data = useStaticQuery(graphql`
    {
    object: allMdx(sort: {fields: frontmatter___objectName}) {
      edges {
        node {
          frontmatter {
            objectName
            className
            description
            isInternal
            isMainObject
            isPersistent
            isView
            uniqueId
          }
        }
      }
    }
  }
  `)

  return (
    <>
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
    {data.object.edges.map((obj) => (
        <Box bg="blue.900" borderRadius="2.0em" margin="2em" padding="2em">
          <Box bg="gray.300" borderRadius="0.5em" margin="1em" padding="2em">
          {obj.node.frontmatter.isMainObject === true &&
          <Badge mr="5px" colorScheme="green">Main</Badge>
          }
          {obj.node.frontmatter.isPersistent === true &&
          <Badge colorScheme="blue" mr="5px">Persistent</Badge>
          }
          {obj.node.frontmatter.isInternal === true &&
          <Badge colorScheme="red" mr="5px">Internal</Badge>
          }
          {obj.node.frontmatter.isView === true &&
          <Badge colorScheme="orange" mr="5px">View</Badge>
          }
          <chakra.h2>
            Object: {obj.node.frontmatter.objectName}
          </chakra.h2>
          <chakra.p>Class: {obj.node.frontmatter.className}</chakra.p>
          <chakra.p>{obj.node.frontmatter.description}</chakra.p>
        </Box>
        </Box>
    ))}
    </SimpleGrid>
    </>
  )
};

export default Objects;