import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const NAVIGATION = [
	{
		label: 'Как получить',
		to: '#obtain',
	},
	{
		label: 'Как вернуть',
		to: '#return',
	},
	{
		label: 'Пожаловаться',
		to: '/report',
	},
	{
		label: 'Отписаться от услуг',
		to: '/optout',
	},
	{
		label: 'О нас',
		to: '#aboutUs',
	},
]

interface IHeader {
	menu?: 'none' | 'flex'
	position?: 'relative' | 'fixed'
	zIndex?: number
}

export const Header = ({ menu, position, zIndex }: IHeader) => {
	const [isOpen, setOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add(styles.noScroll)
		} else {
			document.body.classList.remove(styles.noScroll)
		}
	}, [isOpen])

	return (
		<>
			<header
				className={styles.header}
				style={{ position: position, zIndex: zIndex }}
			>
				<div className={`${styles.left}`}>
					<Link to={'/'}>
						<h1>Борщ</h1>
					</Link>
					<nav>
						{NAVIGATION.map((nav, index) => (
							<a href={nav.to} key={index}>
								{nav.label}
							</a>
						))}
					</nav>
				</div>
				<div className={styles.right}>
					<div className={styles.contact}>
						<a href='#'>+8 (000) 0000-00-0</a>
						<span>borsch@gmail.ru</span>
					</div>
					<div className={styles.icons}>
						<img src='/src/assets/svg/contact/Vector (9).svg' alt='' />
						<img src='/src/assets/svg/contact/Vector (10).svg' alt='' />
					</div>
					<div className={styles.btns}>
						<Link to='/login'>
							<button>Вход</button>
						</Link>
						<Link to='/login'>
							<button>Регистрация</button>
						</Link>
					</div>

					<button
						className={styles.burger}
						onClick={() => setOpen(!isOpen)}
						style={{
							display: menu,
							background: !isOpen ? 'transparent' : 'rgb(234, 93, 57)',
						}}
					>
						{!isOpen ? (
							<img src='/src/assets/svg/Vector (23).svg' alt='' />
						) : (
							<img src='/src/assets/svg/Vector (24).svg' alt='' />
						)}
					</button>
				</div>
				<div
					className={`${styles.active}`}
					style={{
						transition: '.3s ease',
						transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
					}}
				>
					<nav>
						{NAVIGATION.map((nav, index) => (
							<a href={nav.to} key={index}>
								{nav.label}
							</a>
						))}
					</nav>
					<div className={styles.icons}>
						<img src='/src/assets/svg/contact/Vector (9).svg' alt='' />
						<img src='/src/assets/svg/contact/Vector (10).svg' alt='' />
					</div>
					<div className={styles.btnsActive}>
						<button>Вход</button>
						<button>Регистрация</button>
					</div>
				</div>
			</header>
		</>
	)
}
