'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function YandexMetrika() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const url = `${pathname}?${searchParams}`
		//@ts-ignore
		ym(process.env.YM, 'hit', url);

	}, [pathname, searchParams])

	return null
}