import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import { Button, Result } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Custom404() {
	const router = useRouter();
	const { common: t } = router.locale === 'ru' ? ru : en;
	return <Result
		status="404"
		title="404"
		extra={<Button type="primary"><Link href={'/'}>{t.homeBtn}</Link></Button>}
	/>
}