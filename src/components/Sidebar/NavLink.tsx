import { 
  Icon, 
  Link as ChakraUiLink, 
  LinkProps as ChakraUiLinkProps, 
  Text, 
} from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraUiLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraUiLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraUiLink>
    </ActiveLink>
  );
}