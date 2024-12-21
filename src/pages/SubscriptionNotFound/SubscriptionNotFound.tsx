import { Card } from '../../components/Card/Card'
import { Button } from '../../components/ui/Button/Button'
import { useCard } from '../../Context/CardProvider'
import { ModalCard } from '../LoansApproved/LoansApproved'
import styles from './subscriptionNotFound.module.scss'

export const SubscriptionNotFound = () => {
	const { cardInfo, setOpenCard, isOpenCard, selectedCard, handleOpenCard } =
		useCard()

	return (
		<div className={styles.subscriptionNotFound}>
			<div className={styles.examination}>
				<img src='/public/3 (1).png' alt='' />
				<h2>Подписка не найдена</h2>
				<p>
					Платная подписка не найдена, пожалуйста проверьте введенные данные или
					свяжитесь с нами. Предлагаем повторить попытку
				</p>
				<Button>Возобновить</Button>
				<p>
					Не можете отписаться самостоятельно? <b>Пишите</b>, мы поможем!{' '}
					<b>Написать</b>
				</p>
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
