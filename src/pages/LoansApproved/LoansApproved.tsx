import { Card } from '../../components/Card/Card'
import { Timer } from '../../components/Timer/Timer'
import { useCard } from '../../Context/CardProvider'
import { ICard } from '../../types/card'
import styles from './loansApproved.module.scss'

interface IModalCard {
	cardInfo: ICard | null
	isOpenCard: boolean
	setOpenCard: (value: boolean) => void
}

export const LoansApproved = () => {
	const { cardInfo, setOpenCard, isOpenCard, selectedCard, handleOpenCard } =
		useCard()
	return (
		<div className={styles.loansApproved}>
			<div className={styles.examination}>
				<h2>
					<span>Артём</span>, ваш кредитный скоринг составил всего{' '}
					<span>689</span> из <span>1000</span>
				</h2>
				<p>
					НО! Наши партнеры уже одобрили вам займ в размере{' '}
					<span>33000 ₽!</span> Заберите деньги!
				</p>

				<Timer />
			</div>

			<div className={styles.offerCard}>
				<div className={styles.gridOffer}>
					{[...cardInfo, ...cardInfo].map(card => (
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

export const ModalCard = ({
	cardInfo,
	isOpenCard,
	setOpenCard,
}: IModalCard) => (
	<div
		className={styles.modalCard}
		style={{ display: isOpenCard ? '' : 'none' }}
	>
		<div className={styles.content}>
			<div className={styles.text}>
				<p>Подробнее</p>
				<button onClick={() => setOpenCard(false)}>X</button>
			</div>
			<div className={styles.info}>
				{cardInfo && (
					<>
						<div className={styles.infoCard}>
							<p>Сумма займа:</p>
							<span>{cardInfo.price} ₽</span>
						</div>
						<div className={styles.infoCard}>
							<p>Срок займа:</p>
							<span>{cardInfo.deadlines} дней</span>
						</div>
						<div className={styles.infoCard}>
							<p>Ставка:</p>
							<span>{cardInfo.bid} %</span>
						</div>
						<div className={styles.infoCard}>
							<p>Одобрение:</p>
							<div className={styles.sliders}>
								<div
									className={styles.value}
									style={{ width: `${cardInfo.approval}px` }}
								></div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	</div>
)
