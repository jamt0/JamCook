import Container from 'components/Container/Container';
import React, { FunctionComponent } from 'react';

type Props = {}

const Error: FunctionComponent<Props> = ({children}) => {
  return (
    <Container color="danger" className="px-6 py-3">{children}</Container>
  );
}

export default Error;