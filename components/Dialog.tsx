import React, { useRef } from "react"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Text
} from "@chakra-ui/react"

import ZIcon from "../components/Icon"
import { IconName } from "./Icon/types"
type Color = "info" | "danger" | "primary" | "warning" | "success"

interface DialogProps {
  title: string
  content: React.ReactElement<any, any>
  accept?: string
  cancel?: string
  callbackFunction: (a: boolean) => void
  color: Color
  icon: IconName
}
export default function Dialog({
  title,
  content,
  accept = "Sí, acepto",
  cancel = "No, cancelar",
  callbackFunction,
  color = "primary",
  icon = "trash"
}: DialogProps) {
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

        <AlertDialogContent py="4">
          <AlertDialogHeader
            d="flex"
            justifyContent="center"
            color={color}
            fontSize="2xl"
          >
            {title}
          </AlertDialogHeader>

          <AlertDialogBody
            d="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <ZIcon name={icon} size={50} color={color} />
            <Text align="center" p="4" color="primary">
              {content}
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter d="flex" justifyContent="center">
            <Button
              variant="light"
              ref={cancelRef}
              onClick={() => {
                callbackFunction(false)
              }}
            >
              {cancel}
            </Button>

            <Button
              variant={color}
              ml={3}
              onClick={() => {
                callbackFunction(true)
              }}
            >
              {accept}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
