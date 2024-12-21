import { Card } from '../../components/Card/Card'
import { Button } from '../../components/ui/Button/Button'
import { useCard } from '../../Context/CardProvider'
import { ModalCard } from '../LoansApproved/LoansApproved'
import styles from './succesUnsubscribe.module.scss'

export const SuccesUnsubscribe = () => {
	const { cardInfo, setOpenCard, isOpenCard, selectedCard, handleOpenCard } =
		useCard()

	return (
		<div className={styles.succesUnsubscribe}>
			<div className={styles.examination}>
				<img src='/public/1.png' alt='' />
				<h2>Успешная отписка</h2>
				<p>Подписка от платных услуг по подбору займов отключена</p>
				<Button>Возобновить</Button>
			</div>

			<div className={styles.offerCard}>
				<h2>Стойте!</h2>
				<p>Попробуйте получить займ еще здесь:</p>
				<div className={styles.gridOffer}>
					{cardInfo.map(card => (
						<Card key={card.id} {...card} openModal={handleOpenCard} />
					))}
				</div>
				<button className={styles.more}>Еще предложения</button>
			</div>
			<ModalCard
				isOpenCard={isOpenCard}
				setOpenCard={setOpenCard}
				cardInfo={selectedCard}
			/>
		</div>
	)
}
