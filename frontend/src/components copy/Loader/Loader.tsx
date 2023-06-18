import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import K from '@/assets/images/K-2.png'
import style from './Loader.module.scss'

export default function Loader() {

	const init = useRef(false)
	const destroy = useRef(false)

	// useEffect(() => {
	// 	setTimeout(() => init.current = true, 0)
	// }, [])
	return (
		<div className={style.container}>
			<Image
				src={K} alt={'K'}
				className={`${style.loader} ${init ? style.init : ''} ${destroy ? style.destroy : ''}`} />
		</div>
	)
}
