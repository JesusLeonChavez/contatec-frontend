import React, { useRef } from "react"

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Text
} from "@chakra-ui/react"

export default function ProgressDialog({ content }) {
  const { onClose } = useDisclosure()
  const cancelRef = useRef(null)
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={true}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent p="3">
          <AlertDialogBody
            d="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            {/* <ZIcon name={icon} size={50} color={color} /> */}

            <Text align="center" p="3" color="primary">
              {content}
            </Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
