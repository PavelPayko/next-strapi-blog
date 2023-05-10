import React from "react";
import { Dropdown, MenuProps, Select, Space, Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import Link from 'next/link';
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons';
import style from './BlogCategorySelect.module.scss'


const BlogCategorySelect: React.FC<{
	categories: any
}> = ({ categories }) => {

	console.log('categories', categories);

	const catItems = categories.map((cat: any) => ({
		key: cat.id,
		label: <Link href={`blog/category/${cat.attributes.slug}`}>{cat.attributes.name}</Link>
	}))

	return (
		<div className={style.container}>
			<Dropdown menu={{ items: catItems }} className={style.dropdown}>
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						Category
						<CaretDownOutlined />
					</Space>
				</a>
			</Dropdown>
		</div>
	);
};

export default BlogCategorySelect;