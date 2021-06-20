import { useEffect } from 'react';
import Routes from 'routes/Routes';
import { IonApp } from '@ionic/react';
import { Loading } from 'UI';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'theme/variables.css';

const App: React.FC = () => {
	// const { auth, initialize } = useAuth()!;
	// console.log(auth);

	// useEffect(() => {
	//   !auth.initialized && (async () => await initialize())();
	// }, [auth, initialize]);

	// if (!auth || !auth.initialized) {
	//   return (
	//     <IonApp>
	//       <Loading isOpen={true} />
	//     </IonApp>
	//   );
	// } else {
	return (
		<IonApp>
			<Routes/>
		</IonApp>
	);
	// }
};

export default App;
