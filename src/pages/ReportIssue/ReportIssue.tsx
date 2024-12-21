import { Card } from '../../components/Card/Card'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { useCard } from '../../Context/CardProvider'
import { ModalCard } from '../LoansApproved/LoansApproved'
import styles from './reportIssue.module.scss'

const inputFields = [
	{ name: 'Имя *', placeholder: 'Введите имя' },
	{ name: 'Фамилия *', placeholder: 'Введите вашу фамилию' },
	{ name: 'Телефон *', placeholder: '+ 8 (---) -------' },
	{ name: 'Последние 4 цифры карты *', placeholder: 'С подпиской на услуги' },
	{ name: 'Почта *', placeholder: 'Введите вашу почту' },
	{ name: 'Повторите почту *', placeholder: 'Введите вашу почту' },
]

const authorities = [
	'Менеджменту нашего сервиса',
	'Финансовому управляющему, курирующему сервис',
	'В Центральный Банк',
	'В НСПК',
]

export const ReportIssue = () => {
	const { cardInfo, setOpenCard, isOpenCard, selectedCard, handleOpenCard } =
		useCard()
	return (
		<div className={styles.complain}>
			<h2>Пожаловаться</h2>
			<p>Недовольны нашим сервисом? Давайте составим жалобу</p>
			<Block className={styles.complainForm}>
				{inputFields.map((field, index) => (
					<Input
						key={index}
						name={field.name}
						placeholder={field.placeholder}
					/>
				))}
				<div className={styles.textarea}>
					<label htmlFor=''>Текст *</label>
					<textarea placeholder='Опишите вашу проблему'></textarea>
				</div>
				<p>Куда направить жалобу? Отметьте все нужные инстанции:</p>
				<div className={styles.insurance}>
					<ul>
						{authorities.map((aythor, index) => (
							<li key={index}>
								<img src='/src/assets/svg/Group  (1).svg' alt='' />
								<span>{aythor}</span>
							</li>
						))}
					</ul>
				</div>
				<Button>Отправить жалобу</Button>
			</Block>

			<div className={styles.offerCard}>
				<h2>Жаль, что вы расстроены</h2>
				<p>Попробуйте оформить займ здесь, это поднимет настроение</p>
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
