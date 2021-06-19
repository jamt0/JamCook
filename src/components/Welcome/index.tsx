import { FunctionComponent, useState } from "react";
import WelcomeView from "components/Welcome/WelcomeView";
import { useSettingsUser } from "context/settingsUser";

type Props = {
}
const data = [
    {
        image: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/Shrimp-Tacos.jpg",
        subTitle: "ASDADFASDFASDFASDF"
    },
    {
        image: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/Shrimp-Tacos.jpg",
        subTitle: "asdasd"
    },
    {
        image: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/Shrimp-Tacos.jpg",
        subTitle: "jkhnl-k"
    },
    {
        image: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/Shrimp-Tacos.jpg",
        subTitle: "ewwrtbv"
    },
]

const Welcome: FunctionComponent<Props> = () => {
    const [showModal, setShowModal] = useState(true);
    const {texts} = useSettingsUser()!;
    return (
        <WelcomeView setShowModal={setShowModal} showModal={showModal} data={data} texts={texts}/>
    );
};

export default Welcome;