import { IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';
import './Welcome.css';
import Lottie from 'react-lottie';
import animationData from '../../assets/26901-cooking.json';

const Welcome: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col justify-between content-between max-w-screen-md mx-auto py-4 h-full">
          <div>
            <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
              <IonText className="text-red-600">Jam</IonText>
              <IonText className="text-purple-600">Cook</IonText>
            </h1>
            <h6 className="text-center text-gray-600 text-xl md:text-2xl mx-4">Las mejores recetas con los ingredientes disponibles en tu refrigerador</h6>
          </div>
          <Lottie options={defaultOptions} height={350} width={350} />
          <div className="px-4 md:grid md:grid-cols-2 md:gap-4">
            <button className="border border-purple-500 py-4 mb-4 md:mb-0 bg-purple-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-purple-600 focus:outline-none focus:shadow-outline w-full">Ingresar</button>
            <button className="border border-red-500 py-4 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full">Registrarse</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
