// import { useCamera } from '@ionic/react-hooks/camera';
// import { CameraResultType, CameraSource } from "@capacitor/core";

import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

const usePhoto = () => {

  // const { getPhoto } = useCamera();

  // const takePhoto = async () => {
  //   const cameraPhoto = await getPhoto({
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Camera,
  //     quality: 100
  //   });
  //   return cameraPhoto;
  // };


  const takePhoto = async () => {
    const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
    });
    return image;
  }

  return {
    takePhoto
  };
}

export {usePhoto};
