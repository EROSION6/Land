import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CardProvider } from './Context/CardProvider.tsx'
import './index.css'
import { router } from './router/router.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CardProvider>
			<RouterProvider router={router} />
		</CardProvider>
	</StrictMode>
)
