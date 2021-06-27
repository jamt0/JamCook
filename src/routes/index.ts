import names from './names';
import * as Pages from 'pages';

const routes = [
	{
		path: names.aboutUs,
		component: Pages.AboutUs,
	},
	{
		path: names.allergies,
		component: Pages.Allergies,
	},
	{
		path: names.comensals,
		component: Pages.Commensals,
	},
	{
		path: names.contactUs,
		component: Pages.ContactUs,
	},
	{
		path: names.cookiesPolicy,
		component: Pages.CookiesPolicy,
	},
	{
		path: names.cookingLevel,
		component: Pages.CookingLevel,
	},
	{
		path: names.diet,
		component: Pages.Diet,
	},
	{
		path: names.dislikeIngredient,
		component: Pages.DislikeIngredient,
	},
	{
		path: names.editProfile,
		component: Pages.EditProfile,
	},
	{
		path: names.explore,
		component: Pages.Explore,
	},
	{
		path: names.foodBasket,
		component: Pages.FoodBasket,
	},
	{
		path: names.foodBasketAdd,
		component: Pages.FoodBasketAdd,
	},
	{
		path: names.forgetPassword,
		component: Pages.ForgetPassword,
	},
	{
		path: names.forgetPasswordValidate,
		component: Pages.ForgetPasswordValidate,
	},
	{
		path: names.home,
		component: Pages.Search,
	},
	{
		path: names.language,
		component: Pages.Language,
	},
	{
		path: names.legalInformation,
		component: Pages.LegalInformation,
	},
	{
		path: names.listRecipes + ':id',
		component: Pages.ListRecipes,
	},
	{
		path: names.measurementUnits,
		component: Pages.MeasurementUnits,
	},
	{
		path: names.myObjectives,
		component: Pages.MyObjectives,
	},
	{
		path: names.newPassword,
		component: Pages.NewPassword,
	},
	{
		path: names.preferences,
		component: Pages.Preferences,
	},
	{
		path: names.privacyPolicy,
		component: Pages.PrivacyPolicy,
	},
	{
		path: names.profile,
		component: Pages.Profile,
	},
	{
		path: names.recipe + ':id',
		component: Pages.Recipe,
	},
	{
		path: names.search,
		component: Pages.Search,
	},
	{
		path: names.settings,
		component: Pages.Settings,
	},
	{
		path: names.signIn,
		component: Pages.SignIn,
	},
	{
		path: names.signUp,
		component: Pages.SignUp,
	},
	{
		path: names.termsAndConditions,
		component: Pages.TermsAndConditions,
	},
	{
		path: names.theme,
		component: Pages.Theme,
	},
];

export default routes;
