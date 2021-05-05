import React from "react"
import { FormLabel, FormControl, Input, FormHelperText } from "@chakra-ui/react"

interface IField {
  label: string
  helper?: string
  name: string
  type: "email" | "text" | "tel" | "number"
  placeholder: string
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
  value: string | number
}

export const InputField: React.FC<IField> = ({
  label,
  helper,
  name,
  type,
  placeholder,
  handleChange,
  value,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel textColor="brand.800" fontWeight="700">
        {label}
      </FormLabel>
      <Input
        type={type}
        name={name}
        colorScheme="brand"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {helper && <FormHelperText>{helper}</FormHelperText>}
    </FormControl>
  )
}
