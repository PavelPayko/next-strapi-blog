import React from "react";
import Link from "next/link"
import Image from 'next/image'
import { Card as AntCard } from 'antd';
import { getStrapiMedia } from '@/lib/media';
import style from './BlogCard.module.scss'
import { ReadOutlined } from '@ant-design/icons';

const { Meta } = AntCard;

const BlogCard: React.FC<{
	article: any
}> = ({ article }) => {

	const image = article.attributes.image
	const { alternativeText, width, height } = image?.data?.attributes;

	return (
		<Link href={`/blog/article/${article.attributes.slug}`}>
			<AntCard
				style={{ width: '100%' }}
				className={style.card}
				hoverable
				cover={
					<div className={style.cover}>
						<Image
							layout="responsive"
							width={width}
							height={height}
							src={getStrapiMedia(image?.data)}
							alt={alternativeText || ""}
							style={{ maxHeight: '400px', objectFit: 'cover', aspectRatio: '16 / 9', objectPosition: 'top' }}
						/>
						<div className={style.hover}><ReadOutlined /> Читать дальше</div>
					</div>
				}
			>
				<Meta
					title={article.attributes.title}
					description={article.attributes.category.data.attributes.name}

				/>
			</AntCard>
		</Link>
	);
};

export default BlogCard;