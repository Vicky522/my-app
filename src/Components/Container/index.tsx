import React from 'react';
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';

export interface ContainerProps extends ChakraContainerProps {}

const Container: React.FC<ContainerProps> = ({
  children,
  ...containerProps
}) => {
  return (
    <ChakraContainer
      maxWidth="1366px"
      px={{
        base: '24px',
        lg: '96px',
      }}
      {...containerProps}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;
