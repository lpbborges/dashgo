import { 
  FormControl, 
  FormLabel, 
  Input as ChakraUiInput, 
  InputProps as ChakraUiInputProps 
} from "@chakra-ui/react";

interface InputProps extends ChakraUiInputProps{
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraUiInput 
        {...rest}
        id={name}
        name={name} 
        focusBorderColor="pink.500" 
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
      />
    </FormControl>
  );
}