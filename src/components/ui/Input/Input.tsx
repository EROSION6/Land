import styles from './input.module.scss'

interface IInput {
	name?: string
	htmlFor?: string
	id?: string
	placeholder?: string
	type?: string
	sx?: React.CSSProperties | undefined
}

export const Input = ({
	name,
	htmlFor,
	id,
	placeholder,
	type = 'text',
	sx,
}: IInput) => {
	return (
		<div className={styles.input} style={sx}>
			<label htmlFor={htmlFor}>{name}</label>
			<input type={type} id={id} placeholder={placeholder} />
		</div>
	)
}
