import { Slider } from '@mui/material'
import { Block } from '../ui/Block/Block'
import { Button } from '../ui/Button/Button'
import styles from './welcomeSection.module.scss'

export const WelcomeSection = () => {
	return (
		<div className={styles.welcome}>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.title}>
						<h1>Онлайн займы на вашу карту</h1>
						<p>Первый займ может быть без процентов!</p>
					</div>

					<div className={styles.logo}>
						<b>Деньги у вас уже в 15:00</b>
						<img src='/public/logo.png' alt='logo' />
					</div>
					<img src='/public/girl.png' alt='girl' className={styles.girl} />
				</div>
				<div className={styles.right}>
					<Block className={styles.slider}>
						{['Требуемая сумма', 'Срок займа'].map((label, index) => (
							<div key={index} className={styles.sliderSum}>
								<div className={styles.text}>
									<span>{label}</span>
									<b>{label === 'Требуемая сумма' ? '35 000 ₽' : '7 дней'}</b>
								</div>
								<Slider
									aria-label={label}
									value={label === 'Требуемая сумма' ? 22 : 12}
									sx={{
										color: '#EA5D39',
										'& .MuiSlider-thumb': {
											backgroundColor: 'white',
										},
									}}
								/>
							</div>
						))}
						<div className={styles.footer}>
							<div className={styles.approved}>
								<span>Дата возврата:</span>
								<b>25 000 ₽</b>
							</div>
							<div className={styles.approved}>
								<span>К возврату:</span>
								<b>7 дней</b>
							</div>
						</div>
						<div className={styles.btn}>
							<Button>Получить сейчас</Button>
							<button>
								<a href=''>Получить через</a>
								<a href=''>
									ГОС<span>УСЛУГИ</span>
								</a>
							</button>
						</div>
					</Block>
				</div>
			</div>
		</div>
	)
}
