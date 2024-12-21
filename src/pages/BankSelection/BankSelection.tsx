import { Checkbox, FormControlLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { CARDS_BANK } from '../../constant/data'
import styles from './bankSelection.module.scss'

interface IModalError {
	isErrorModal: boolean
}

interface IModalNoBank {
	isOpenModal: boolean
	setOpenModal: (value: boolean) => void
}

export const BankSelection = () => {
	const [isOpenModal, setOpenModal] = useState(false)
	const [isErrorModal, setErrorModal] = useState(false)

	useEffect(() => {
		if (isErrorModal) {
			const timer = setTimeout(() => {
				setErrorModal(false)
			}, 3000)
			return () => clearTimeout(timer)
		}
	}, [isErrorModal])

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<ModalError isErrorModal={isErrorModal} />
			<div
				className={styles.bankSelection}
				style={{
					transform: isErrorModal ? 'translateY(170px)' : 'translateY(0)',
				}}
			>
				<h3>Выбор банка</h3>
				<p className={styles.descript}>
					Выберите на карту какого банка вы хотите получить займ?
				</p>
				<Block className={styles.bankSelectionBlock}>
					<div className={styles.grid}>
						{CARDS_BANK.map((card, index) => (
							<article
								key={card.id}
								className={styles.cardBank}
								onClick={() => {
									if (index === 0) {
										setErrorModal(true)
									}
								}}
							>
								{index === 0 && (
									<span
										className={styles.error}
										style={{ display: isErrorModal ? '' : 'none' }}
									>
										X
									</span>
								)}
								<img src={card.icon} alt={card.title} />
								<span>{card.title}</span>
							</article>
						))}
					</div>

					<FormControlLabel
						control={
							<Checkbox
								checked={isOpenModal}
								onChange={() => setOpenModal(!isOpenModal)}
								sx={{
									color: 'rgb(61, 60, 65)',
								}}
							/>
						}
						sx={{
							color: 'white',
							my: 2,
						}}
						label='У меня нет карты'
					/>
					<Button>Далее</Button>
				</Block>
				<ModalNoBank isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
			</div>
		</div>
	)
}

const ModalNoBank = ({ isOpenModal, setOpenModal }: IModalNoBank) => (
	<div
		className={styles.modalNoBank}
		style={{ display: isOpenModal ? '' : 'none' }}
	>
		<div className={styles.content}>
			<div className={styles.text}>
				<p>Вы уверены? Без карты сложно выдать займ на карту</p>
				<button onClick={() => setOpenModal(false)}>X</button>
			</div>
			<div className={styles.btns}>
				<Button>Да, уверен</Button>
				<button>Есть карта</button>
			</div>
		</div>
	</div>
)

const ModalError = ({ isErrorModal }: IModalError) => (
	<div
		style={{
			transform: !isErrorModal ? 'translateX(-100rem)' : 'translateX(0)',
			transition: 'all 0.5s ease',
			zIndex: 999,
		}}
	>
		<Block className={styles.modalError}>
			<img src='/src/assets/svg/logo (7).svg' alt='error' />
			<span>X</span>
			<div className={styles.errorText}>
				<strong>Выберете другой банк</strong>
				<p>
					К сожалению, выбранный вами банк не поддерживается по техническим
					причинам со стороны банка. Пожалуйста, выберите карту другого банка
				</p>
			</div>
		</Block>
	</div>
)
