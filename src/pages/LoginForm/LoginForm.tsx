import { Card } from '../../components/Card/Card'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { useCard } from '../../Context/CardProvider'
import { ModalCard } from '../LoansApproved/LoansApproved'
import styles from './loginForm.module.scss'

export const LoginForm = () => {
	const { cardInfo, setOpenCard, isOpenCard, selectedCard, handleOpenCard } =
		useCard()
	return (
		<div className={styles.login}>
			<h2>Вход в систему</h2>

			<Block className={styles.formLogin}>
				<Input name='Телефон *' placeholder='+ 8 (---) -------' />
				<Input name='Пароль *' placeholder='Которую вы хотите отписать' />
				<p>
					Забыли пароль? <a href='#'>Восстановить</a>
				</p>
				<Button>Войти</Button>
				<p>
					Нет аккаунта? <a href='#'>Зарегистрируйтесь</a>
				</p>
			</Block>

			<div className={styles.offerCard}>
				<h2>Предложения подобраны для вас</h2>
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
