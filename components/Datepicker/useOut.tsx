import {
  DependencyList,
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from "react"

export interface UseOutState {
  ref: MutableRefObject<HTMLDivElement | undefined>
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function useOut(deps: DependencyList): UseOutState {
  const [isOpen, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [isOpen, ...deps])

  const handleClickOutside = (event: any) => {
    const classname = event?.target?.className || ""

    const dropdown = classname.search ? classname.search("dropdown-close") : -1

    if (
      isOpen &&
      ref.current &&
      (!ref.current.contains(event.target as Node) || dropdown > -1)
    ) {
      setOpen(false)
    }
  }

  return {
    ref,
    isOpen,
    setOpen
  }
}
