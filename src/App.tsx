import { useEffect } from 'react';
import { Home } from 'pages';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
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
			<IonReactRouter>
				<Home />
			</IonReactRouter>
		</IonApp>
	);
	// }
};

export default App;
