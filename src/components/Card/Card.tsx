import { Block } from '../ui/Block/Block'
import { Button } from '../ui/Button/Button'

import styles from './card.module.scss'

interface ICard {
	id: number
	logo: string
	price: string
	openModal: (id: number) => void
}

export const Card = ({ id, logo, price, openModal }: ICard) => {
	return (
		<Block className={styles.card}>
			<div className={styles.logo}>
				<img src={logo} alt='' />
				<div className={styles.slider}>
					<span>Одобряемость</span>

					<div className={styles.sliders}>
						<div className={styles.value}></div>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<span>Одобрят до</span>
				<div className={styles.price}>
					<strong>Выдаёт под 0%</strong>
					<b>{price} ₽</b>
				</div>
				<span>Подробнее</span>
			</div>
			<Button onClick={() => openModal(id)}>Получить займ</Button>
		</Block>
	)
}
