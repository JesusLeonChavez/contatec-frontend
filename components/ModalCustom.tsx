import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure
} from "@chakra-ui/react"
import { useEffect } from "react"

interface ModalType {
  variant: string
  size?: string
  width?: string
  children?: any
  showModalButtonText: string
  type: string
  reset?: () => void
  resetError?: () => void
}

export default function ModalCustom({
  variant,
  size,
  width,
  showModalButtonText,
  // modalHeader,
  // modalBody,
  children,
  type,
  reset,
  resetError
}: ModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (reset && resetError) {
      if (type === "register") {
        console.log("register open: ", isOpen)
        if (!isOpen) {
          reset()
          resetError()
        }
      }
      if (type === "login") {
        if (!isOpen) {
          reset()
        }
      }
    }
  }, [isOpen])
  return (
    <>
      <Button variant={variant} size={size} w={width} onClick={onOpen}>
        {showModalButtonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>{modalHeader}</ModalHeader>
          <ModalBody>{modalBody}</ModalBody> */}
          {children}
        </ModalContent>
      </Modal>
    </>
  )
}
