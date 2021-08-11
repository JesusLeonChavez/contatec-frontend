import React from "react"

import { Box, Flex, Text } from "@chakra-ui/react"

type Step = { value: number; label: string }
interface SteperProps {
  steps: Step[]
  currentStep?: number
}
export default function Steper({ steps = [], currentStep = 1 }: SteperProps) {
  return (
    <Flex justify="center" align="center" pb="8">
      {steps.map((step, index) => (
        <>
          <Box
            borderRadius="50%"
            bg={`${step.value <= currentStep ? "secondary" : "white"}`}
            minW="8"
            minH="8"
            d="flex"
            justifyContent="center"
            alignItems="center"
            pointerEvents="none"
            position="relative"
          >
            <Text>{index + 1}</Text>
            <Text
              position="absolute"
              top="8"
              w="100px"
              textAlign="center"
              fontSize="xs"
              color="letter"
            >
              {step.label}
            </Text>
          </Box>
          {index !== steps.length - 1 && (
            <Box
              width="100%"
              height="1px"
              borderWidth="1px"
              borderColor={`${step.value <= currentStep ? "#FBD76D" : ""} `}
              // borderColor="yellow.400"
              borderStyle="dashed"
            ></Box>
          )}
        </>
      ))}
    </Flex>
  )
}
