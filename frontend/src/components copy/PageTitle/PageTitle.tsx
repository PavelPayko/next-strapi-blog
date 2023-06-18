import React from 'react'
import style from './PageTitle.module.scss'

const PageTitle: React.FC<{
	title: string
}> = ({ title }) => {
	return <h2 className={style.title}>{title}</h2>
}

export default PageTitle
