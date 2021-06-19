import { FunctionComponent } from "react";
import {
  Center,
  Button,
  Modal,
  ButtonIcon,
  Slides,
  Slide,
  Image,
  SubTitle,
  ButtonLink,
} from "UI";
import { closeCircleOutline } from "ionicons/icons";
import Brand from "components/Brand";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  texts: any;
  data: {
    image: string;
    subTitle: string;
  }[];
};

const View: FunctionComponent<Props> = (props) => (
  <Modal isOpen={props.showModal}>
    <div>
      <Center justify="end" className="mt-4 mr-4">
        <ButtonIcon
          onClick={() => props.setShowModal(false)}
          icon={closeCircleOutline}
          color="primary"
          size="4xl"
        />
      </Center>
      <Slides options={{ slidesPerView: 1}}>
        {props.data.map((element, index) => (
          <Slide key={index}>
            <div className="w-full">
              <Image src={element.image} height={96} />
              <Brand texts={props.texts}></Brand>
              <SubTitle color="medium">{element.subTitle}</SubTitle>
              
            </div>
          </Slide>
        ))}
      </Slides>
      <Button>Siguiente</Button>
              <ButtonLink>Ya tengo una cuenta</ButtonLink>
    </div>
  </Modal>
);

export default View;
