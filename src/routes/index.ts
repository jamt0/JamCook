import names from './names';
import * as pages from 'pages';

const routes = [
	{
		path: names.aboutUs,
		component: pages.AboutUs,
	},
	{
		path: names.allergies,
		component: pages.Allergies,
	},
	{
		path: names.comensals,
		component: pages.Commensals,
	},
	{
		path: names.contactUs,
		component: pages.ContactUs,
	},
	{
		path: names.cookiesPolicy,
		component: pages.CookiesPolicy,
	},
	{
		path: names.cookingLevel,
		component: pages.CookingLevel,
	},
	{
		path: names.diet,
		component: pages.Diet,
	},
	{
		path: names.dislikeIngredient,
		component: pages.DislikeIngredient,
	},
	{
		path: names.editProfile,
		component: pages.EditProfile,
	},
	{
		path: names.explore,
		component: pages.Explore,
	},
	{
		path: names.foodBasket,
		component: pages.FoodBasket,
	},
	{
		path: names.foodBasketAdd,
		component: pages.FoodBasketAdd,
	},
	{
		path: names.forgetPassword,
		component: pages.ForgetPassword,
	},
	{
		path: names.forgetPasswordValidate,
		component: pages.ForgetPasswordValidate,
	},
	{
		path: names.home,
		component: pages.Search,
	},
	{
		path: names.language,
		component: pages.Language,
	},
	{
		path: names.legalInformation,
		component: pages.LegalInformation,
	},
	{
		path: names.listRecipes + ':id',
		component: pages.ListRecipes,
	},
	{
		path: names.measurementUnits,
		component: pages.MeasurementUnits,
	},
	{
		path: names.myObjectives,
		component: pages.MyObjectives,
	},
	{
		path: names.newPassword,
		component: pages.NewPassword,
	},
	{
		path: names.preferences,
		component: pages.Preferences,
	},
	{
		path: names.privacyPolicy,
		component: pages.PrivacyPolicy,
	},
	{
		path: names.profile,
		component: pages.Profile,
	},
	{
		path: names.recipe + ':id',
		component: pages.Recipe,
	},
	{
		path: names.search,
		component: pages.Search,
	},
	{
		path: names.settings,
		component: pages.Settings,
	},
	{
		path: names.signIn,
		component: pages.SignIn,
	},
	{
		path: names.signUp,
		component: pages.SignUp,
	},
	{
		path: names.termsAndConditions,
		component: pages.TermsAndConditions,
	},
	{
		path: names.theme,
		component: pages.Theme,
	},
	{
		path: names.welcome,
		component: pages.Welcome,
	},
];

export default routes;
