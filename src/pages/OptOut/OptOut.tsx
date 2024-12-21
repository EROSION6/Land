import { useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { CONTACT } from '../../constant/data'
import { useCard } from '../../Context/CardProvider'
import { ModalCard } from '../LoansApproved/LoansApproved'
import styles from './optOut.module.scss'

interface IModalContact {
	isOpenContact: boolean
	setOpenContact: (isOpen: boolean) => void
}

export const OptOut = () => {
	const [isOpenContact, setOpenContact] = useState(false)
	const { cardInfo, setOpenCard, isOpenCard, selectedCard, handleOpenCard } =
		useCard()
	return (
		<div className={styles.unsubscribe}>
			<h2>Отписаться</h2>

			<ModalContact
				isOpenContact={isOpenContact}
				setOpenContact={setOpenContact}
			/>
			<Block className={styles.formUnsubscribe}>
				<div className={styles.option}>
					<label htmlFor=''>Телефон *</label>
					<select>
						<option value=''>+8 (000) 0000-00-0</option>
					</select>
				</div>
				<Input
					name='Последние 4 цифры карты *'
					placeholder='Которую вы хотите отписать'
				/>
				<Input name='БИК банка, выпустившего карту' placeholder='Опционально' />
				<Button>Далее</Button>
				<p onClick={() => setOpenContact(true)}>
					Не можете отписаться самостоятельно? <a href='#'>Пишите</a>, мы
					поможем! Написать
				</p>
			</Block>

			<div className={styles.offerCard}>
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

const ModalContact = ({ isOpenContact, setOpenContact }: IModalContact) => (
	<div
		className={styles.modalContact}
		style={{ display: isOpenContact ? '' : 'none' }}
	>
		<div className={styles.content}>
			<div className={styles.text}>
				<p>Контакты</p>
				<button onClick={() => setOpenContact(false)}>X</button>
			</div>
			<div className={styles.btns}>
				{CONTACT.map((con, index) => (
					<button key={index}>
						<span>
							<img src={con.icon} alt={con.title} />
						</span>
						<strong>{con.title}</strong>
					</button>
				))}
			</div>
		</div>
	</div>
)
