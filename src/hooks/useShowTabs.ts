import { useIonViewWillEnter } from "@ionic/react";
import { useUI } from "context/UI";

const useShowTabs = (showTabs: boolean) => {

  const {setShowTabs} = useUI();
  
  useIonViewWillEnter(()=>{
    setShowTabs(showTabs);
  });

}

export default useShowTabs;