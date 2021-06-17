import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure
} from "@chakra-ui/react"

interface ModalType {
  variant: string
  size?: string
  width?: string
  children?: any
  showModalButtonText: string
}

export default function ModalCustom({
  variant,
  size,
  width,
  showModalButtonText,
  // modalHeader,
  // modalBody,
  children
}: ModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
