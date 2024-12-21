import React from 'react'
import styles from './block.module.scss'

interface IBlock {
	children: React.ReactNode
	className?: string
}

export const Block = ({ children, className }: IBlock) => {
	return <div className={`${styles.block} ${className}`}>{children}</div>
}
