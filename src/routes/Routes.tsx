import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Welcome from 'components/Welcome';
import {
	searchOutline,
	navigateOutline,
	basketOutline,
	personOutline,
} from 'ionicons/icons';
import { NoFound } from 'pages';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import routes from 'routes';
import namesRoutes from 'routes/names';

const Routes = () => {
	const { t } = useTranslation();
	const tabBarStyle = { display: 'none' };
	return (
		<IonReactRouter>
			<Welcome/>
			<IonTabs>
				<IonRouterOutlet>
					{routes.map((route) => (
						<Route exact path={route.path} key={route.path}>
							<route.component />
						</Route>
					))}
					<Route>
						<NoFound />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot='bottom' className='py-1' style={tabBarStyle}>
					<IonTabButton tab='search' href={namesRoutes.search}>
						<IonIcon icon={searchOutline} />
						<IonLabel>{t('page_buscar')}</IonLabel>
					</IonTabButton>
					<IonTabButton tab='explore' href={namesRoutes.explore}>
						<IonIcon icon={navigateOutline} />
						<IonLabel>{t('page_explorar')}</IonLabel>
					</IonTabButton>
					<IonTabButton tab='foodBasket' href={namesRoutes.foodBasket}>
						<IonIcon icon={basketOutline} />
						<IonLabel>{t('page_almacen')}</IonLabel>
					</IonTabButton>
					<IonTabButton tab='profile' href={namesRoutes.profile}>
						<IonIcon icon={personOutline} />
						<IonLabel>{t('page_perfil')}</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	);
};

export default Routes;
