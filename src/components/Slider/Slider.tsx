import React, { FunctionComponent } from 'react';
import { IonImg, IonItem, IonSlide, IonSlides } from '@ionic/react';
import Sopa from '../../assets/imgPrueba/sopa.jpg';
import Conchas from '../../assets/imgPrueba/conchas.jpg';
import Taco from '../../assets/imgPrueba/taco.jpg';

interface Props {
}

const Slider: FunctionComponent<Props> = ({ }) => {

    const slideOpts = {
        slidesPerView: 1.25,
        spaceBetween: 20,
    }

    return (
        <div>
            <div>
                <h5>Recetas Nuevas</h5>
                <h6>Ver Todas</h6>
            </div>
        <IonSlides options={slideOpts} className="z-0 my-4">
            <IonSlide>
            <div className="grid grid-flow-row auto-rows-max">
            <IonImg src={Taco}/>
                <h6>Tacos Mexicanos con carne</h6>
            </div>
            </IonSlide>
            <IonSlide>
                
                <IonImg src={Sopa} className="object-cover h-40" />
                <h6>Sopa Rusa con conchas</h6>
            </IonSlide>
            <IonSlide>
                <IonImg src={Conchas} className="object-cover h-40" />
                <h6>Pastas de con Verduras</h6>
            </IonSlide>
        </IonSlides>
        </div>
    );

};

export default Slider;