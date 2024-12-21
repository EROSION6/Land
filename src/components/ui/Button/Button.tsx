import styles from './button.module.scss'

interface IButton {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

export const Button = ({ children, onClick }: IButton) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	)
}
