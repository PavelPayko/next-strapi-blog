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


	// const items: MenuProps['items'] = [
	// 	{
	// 		key: '1',
	// 		label: (
	// 			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
	// 				1st menu item
	// 			</a>
	// 		),
	// 	},
	// 	{
	// 		key: '2',
	// 		label: (
	// 			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
	// 				2nd menu item (disabled)
	// 			</a>
	// 		),
	// 		icon: <SmileOutlined />,
	// 		disabled: true,
	// 	},
	// 	{
	// 		key: '3',
	// 		label: (
	// 			<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
	// 				3rd menu item (disabled)
	// 			</a>
	// 		),
	// 		disabled: true,
	// 	},
	// 	{
	// 		key: '4',
	// 		danger: true,
	// 		label: 'a danger item',
	// 	},
	// ];
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