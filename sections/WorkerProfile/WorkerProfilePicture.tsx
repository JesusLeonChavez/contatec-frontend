import { Text, Flex, Avatar } from "@chakra-ui/react"
import styles from "../../styles/sections/WorkerProfile.module.css"

// import { useContext, useEffect, useState } from "react"
// import showToast from "../../components/Toast"
// import { useError } from "../../utils/hooks/useError"
// import { imageUpload } from "../../utils/imageUpload"
// import { patch } from "../../utils/http"
// import { DataContext } from "../../store/GlobalState"
// import { validImage } from "./utils/valid"

export default function ProfilePicture({ worker }) {
  return (
    <div
      className={styles.containerWithBackground}
      style={{ position: "relative" }}
    >
      <div className="generalWrapper" style={{ height: "300px" }}>
        <Flex align="flex-end" w="100%" h="100%">
          <Flex align="center" position="absolute" top="200px">
            <Avatar
              size="2xl"
              name={`${worker?.us_nombre} ${worker?.us_apellido}`}
              src={worker?.avatar}
              mx="1"
              position="relative"
            />
          </Flex>
          <Text
            color="primary"
            ml="40"
            py="2"
            className="bold500"
            fontSize="35px"
          >
            {`${worker?.us_nombre} ${worker?.us_apellido}`}
          </Text>
        </Flex>
      </div>
    </div>
  )
}
