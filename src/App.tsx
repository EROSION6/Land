import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

const App = () => {
	return (
		<div className='container'>
			<div className='block'>
				<Header position='fixed' zIndex={99999} />
				<div className='section'>
					<Outlet />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
