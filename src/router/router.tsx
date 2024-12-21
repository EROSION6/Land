import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { AddressForm } from '../pages/AddressForm/AddressForm'
import { BankSelection } from '../pages/BankSelection/BankSelection'
import { Home } from '../pages/Home/Home'
import { LinkingCard } from '../pages/LinkingCard/LinkingCard'
import { LoanСheck } from '../pages/LoanCheck/LoanCheck'
import { LoansApproved } from '../pages/LoansApproved/LoansApproved'
import { LoginForm } from '../pages/LoginForm/LoginForm'
import { OfferSigning } from '../pages/OfferSigning/OfferSigning'
import { OptOut } from '../pages/OptOut/OptOut'
import { PassportInfo } from '../pages/PassportInfo/PassportInfo'
import { PersonalData } from '../pages/PersonalData/PersonalData'
import { ReportIssue } from '../pages/ReportIssue/ReportIssue'
import { SubscriptionNotFound } from '../pages/SubscriptionNotFound/SubscriptionNotFound'
import { SuccesUnsubscribe } from '../pages/SuccesUnsubscribe/SuccesUnsubscribe'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/login', element: <LoginForm /> },
			{ path: '/loansApproved', element: <LoansApproved /> },
			{ path: '/linkingcard', element: <LinkingCard /> },
			{ path: '/loancheck', element: <LoanСheck /> },
			{ path: '/offersigning', element: <OfferSigning /> },
			{ path: '/bank', element: <BankSelection /> },
			{ path: '/address', element: <AddressForm /> },
			{ path: '/optout', element: <OptOut /> },
			{ path: '/passport', element: <PassportInfo /> },
			{ path: '/users', element: <PersonalData /> },
			{ path: '/report', element: <ReportIssue /> },
			{ path: '/subnotfount', element: <SubscriptionNotFound /> },
			{ path: '/succesunsubscribe', element: <SuccesUnsubscribe /> },
		],
	},
])
