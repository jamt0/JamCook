import { IonContent } from '@ionic/react';
import React, { FunctionComponent } from 'react';

interface Props {
}
const usuario = {

    avatarUser: "https://picsum.photos/200/300?random=1",

}
const Commentary: FunctionComponent<Props> = ({ }) => {
    const estrellas = [];
    return (
        <>
            <div className="flex md:text-center flex-col md:mx-auto max-w-screen-md py-8 text-left text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
                comentarios
        </div>
            <div className="flex md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto">
                <div className="grid grid-flow-col auto-cols-max md:auto-rows-max md:grid-flow-row px-4 pb-4 md:justify-self-center">

                    <div
                        className="flex-1 md:grid h-4 w-4 md:h-16 md:w-16 bg-cover bg-center md:rounded-md mx-4"
                        style={{ backgroundImage: `url( ${usuario.avatarUser} )` }}
                    ></div>
                   <div className=" flex-1 md:grid ">

                       Leonardo Alberto Santos Franco
                   </div>
                </div>
            </div>
        </>
    );

};

export default Commentary;