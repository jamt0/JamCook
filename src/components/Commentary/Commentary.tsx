import { IonContent } from '@ionic/react';
import React, { FunctionComponent } from 'react';

interface Props {
}
const Usuario = {

    avatarUser: "https://picsum.photos/200/300?random=1",
    nombreUsuario: "Leonardo Santos Franco",
    fechaPublicacion: "Hace 4 dias",
    comentariosUsuario: "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",

}
const Commentary: FunctionComponent<Props> = ({ }) => {
    const estrellas = {
        valoracionEstrella: [1,1,1,0,0],
    };
    return (
        <>
            <h2><div className="text-lg font-bold text-center mb-3 mt-3 p-8">
                Comentarios
               </div>
            </h2>
            <div className="grid grid-cols-1 divide-y divide-black-500 ">

            <div className="md:flex md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto md:mx-4 md:p-4 ">
                <div className="flex">
                    <div
                        className=" md:grid h-8 w-8 md:h-12 md:w-12 bg-cover bg-center md:rounded-md mx-4 p-8"
                        style={{ backgroundImage: `url( ${Usuario.avatarUser} )` }}
                    ></div>
                    <div className="md:grid md:grid-rows-2 md:grid-col-2 md:flex md:gap-1 text-justify">
                        <h2 className="font-bold text-xl">{Usuario.nombreUsuario}</h2>
                        <h3 className="text-xs">{Usuario.fechaPublicacion}</h3>
                        <h3 className="text-xs">{Usuario.comentariosUsuario}</h3>
                        <div className="item-inner-highlight">{estrellas.valoracionEstrella}</div>

                    </div>
                </div>
            </div>
        
            <div className="md:flex md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto md:mx-4 md:p-4">
                <div className="flex">
                    <div
                        className=" md:grid h-8 w-8 md:h-12 md:w-12 bg-cover bg-center md:rounded-md mx-4 p-8"
                        style={{ backgroundImage: `url( ${Usuario.avatarUser} )` }}
                    ></div>
                    <div className="md:grid md:grid-rows-2 md:grid-col-2 md:flex md:gap-1 text-justify">
                        <h2 className="font-bold text-xl">{Usuario.nombreUsuario}</h2>
                        <h3 className="text-xs">{Usuario.fechaPublicacion}</h3>
                        <h3 className="text-xs">{Usuario.comentariosUsuario}</h3>
                        <div className="item-inner-highlight">......</div>

                    </div>
                </div>
            </div>


            <div className="md:flex md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto md:mx-4 md:p-4">
                <div className="flex">
                    <div
                        className=" md:grid h-8 w-8 md:h-12 md:w-12 bg-cover bg-center md:rounded-md mx-4 p-8"
                        style={{ backgroundImage: `url( ${Usuario.avatarUser} )` }}
                    ></div>
                    <div className="md:grid md:grid-rows-2 md:grid-col-2 md:flex md:gap-1 text-justify">
                        <h2 className="font-bold text-xl">{Usuario.nombreUsuario}</h2>
                        <h3 className="text-xs">{Usuario.fechaPublicacion}</h3>
                        <h3 className="text-xs">{Usuario.comentariosUsuario}</h3>
                        <div className="item-inner-highlight">......</div>
                        

                    </div>
                </div>
            </div>

            <div className="md:flex md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto md:mx-4 md:p-4">
                <div className="flex">
                    <div
                        className=" md:grid h-8 w-8 md:h-12 md:w-12 bg-cover bg-center md:rounded-md mx-4 p-8"
                        style={{ backgroundImage: `url( ${Usuario.avatarUser} )` }}
                    ></div>
                    <div className="md:grid md:grid-rows-2 md:grid-col-2 md:flex md:gap-1 text-justify">
                        <h2 className="font-bold text-xl">{Usuario.nombreUsuario}</h2>
                        <h3 className="text-xs">{Usuario.fechaPublicacion}</h3>
                        <h3 className="text-xs">{Usuario.comentariosUsuario}</h3>
                        <div className="item-inner-highlight">......</div>

                    </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default Commentary;