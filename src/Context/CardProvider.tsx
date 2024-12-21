import { createContext, useContext, useState } from 'react'
import { CARD_OFFER } from '../constant/data'
import { ICard } from '../types/card'

interface IState {
	selectedCard: ICard | null
	isOpenCard: boolean
	setOpenCard: (value: boolean) => void
	setSelectedCard: (value: ICard | null) => void
	cardInfo: ICard[]
	handleOpenCard: (id: number) => void
}

export const Context = createContext<IState | null>(null)

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
	const cardInfo = CARD_OFFER
	const [isOpenCard, setOpenCard] = useState(false)
	const [selectedCard, setSelectedCard] = useState<ICard | null>(null)

	const handleOpenCard = (id: number) => {
		const find = cardInfo.find(c => c.id === id)

		if (find) {
			setSelectedCard(find)
			setOpenCard(true)
		} else {
			setOpenCard(false)
		}
	}
	return (
		<Context.Provider
			value={{
				cardInfo,
				handleOpenCard,
				selectedCard,
				isOpenCard,
				setOpenCard,
				setSelectedCard,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useCard = () => {
	const context = useContext(Context)
	if (!context) {
		throw new Error('useCard must be used within a CardProvider')
	}
	return context as IState
}
