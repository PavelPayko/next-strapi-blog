import React from 'react'
import style from './PageTitle.module.scss'
import classNames from 'classnames'

const PageTitle: React.FC<{
	title: string
	className?: string
}> = ({ title, className }) => {
	return <h2 className={classNames(style.title, className)}>{title}</h2>
}

export default PageTitle
