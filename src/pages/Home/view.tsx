import {FunctionComponent} from 'react';
import {Route} from 'react-router-dom';
import {NoFound} from 'pages';
import routes from 'routes';
import namesRoutes from 'routes/names';
import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import {
	searchOutline,
	navigateOutline,
	basketOutline,
	personOutline,
} from 'ionicons/icons';

type Props = {
	texts: any;
	tabBarStyle: any;
};

const View: FunctionComponent<Props> = (props) => (
	<IonTabs>
		<IonRouterOutlet>
			{routes.map((route) => (
				<Route path={route.path} exact component={route.component} />
			))}
			<Route>
				<NoFound />
			</Route>
		</IonRouterOutlet>
		<IonTabBar slot='bottom' className='py-1' style={props.tabBarStyle}>
			<IonTabButton tab='search' href={namesRoutes.search}>
				<IonIcon icon={searchOutline} />
				<IonLabel>{props.texts.page_buscar}</IonLabel>
			</IonTabButton>
			<IonTabButton tab='explore' href={namesRoutes.explore}>
				<IonIcon icon={navigateOutline} />
				<IonLabel>{props.texts.page_explorar}</IonLabel>
			</IonTabButton>
			<IonTabButton tab='foodBasket' href={namesRoutes.foodBasket}>
				<IonIcon icon={basketOutline} />
				<IonLabel>{props.texts.page_almacen}</IonLabel>
			</IonTabButton>
			<IonTabButton tab='profile' href={namesRoutes.profile}>
				<IonIcon icon={personOutline} />
				<IonLabel>{props.texts.page_perfil}</IonLabel>
			</IonTabButton>
		</IonTabBar>
	</IonTabs>
);

export default View;
