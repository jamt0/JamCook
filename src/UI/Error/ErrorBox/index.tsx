import { FunctionComponent } from "react";
import { Container } from "UI";

type Props = {};

const Error: FunctionComponent<Props> = (props) => (
  <Container color="danger" className="px-6 py-3">
    {props.children}
  </Container>
);

export default Error;
