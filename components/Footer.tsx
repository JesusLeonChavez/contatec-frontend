// import styles from "../styles/Home.module.css"
import { Box, Text, Flex, Grid, Center } from "@chakra-ui/react"
import ZIcon from "./Icon"
// import Image from "next/image"
import Link from "next/link"
export default function Footer() {
  return (
    <footer>
      <div className="generalWrapper">
        <Flex
          align="center"
          justify="space-between"
          py="1"
          direction={{ base: "column", xs: "column", sm: "row" }}
        >
          <Box>
            <Center>
              <ZIcon name="logo" className="mt1 mb1" />
            </Center>
          </Box>
          <Flex
            align="center"
            justify="center"
            direction={{ base: "column", xs: "column", sm: "row" }}
          >
            <Grid
              templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap="2"
              py="2"
              px="4"
            >
              <Link href="/">
                <a className="mt1 mb1 flexCenterCustom">First Link</a>
              </Link>
              <Link href="/">
                <a className="mt1 mb1 flexCenterCustom">Second Link</a>
              </Link>
            </Grid>
            <Grid
              templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap="2"
              py="2"
              px="4"
            >
              <Link href="/">
                <a className="mt1 mb1 flexCenterCustom">Third Link</a>
              </Link>
              <Link href="/">
                <a className="mt1 mb1  flexCenterCustom">Fourth Link</a>
              </Link>
            </Grid>
          </Flex>
          <Flex py="4" align="center" justify="center">
            <Link href="/">
              <a>
                <ZIcon name="facebook" color="primary" className="mr2 ml2" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <ZIcon name="instagram" color="primary" className="mr1 ml1" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <ZIcon name="twitter" color="primary" className="mr2 ml2" />
              </a>
            </Link>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          py="4"
          borderTop="1px"
          borderTopColor="gray.300"
          direction={{ base: "column", xs: "column", sm: "row" }}
        >
          <Text fontSize="xs" color="gray" px="8" py="1" align="center">
            &copy; 2021 For people studio
          </Text>
          <Text fontSize="xs" color="gray" px="8" py="1" align="center">
            Privacy policy
          </Text>
          <Text fontSize="xs" color="gray" px="8" py="1" align="center">
            Term of service
          </Text>
        </Flex>
      </div>
    </footer>
  )
}
