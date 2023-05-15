import React from "react";
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { CaretDownOutlined } from '@ant-design/icons';
import style from './BlogCategorySelect.module.scss';

const BlogCategorySelect: React.FC<{
	categories: any,
	title: string
}> = ({ categories, title }) => {

	const catItems = categories.map((cat: any) => ({
		key: cat.id,
		label: <Link href={`blog/category/${cat.attributes.slug}`}>{cat.attributes.name}</Link>
	}))

	return (
		<div className={style.container}>
			<Dropdown menu={{ items: catItems }} className={style.dropdown}>
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						{title}
						<CaretDownOutlined />
					</Space>
				</a>
			</Dropdown>
		</div>
	);
};

export default BlogCategorySelect;