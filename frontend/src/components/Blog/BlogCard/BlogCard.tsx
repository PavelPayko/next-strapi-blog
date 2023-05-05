import React from "react";
import Link from "next/link";
// import Image from "./image";
import Image from 'next/image'
import { Card as AntCard } from 'antd';
import { getStrapiMedia } from '@/lib/media';
import style from './BlogCard.module.scss'
import { ReadOutlined } from '@ant-design/icons';

const { Meta } = AntCard;

const BlogCard: React.FC<{
	article: any
}> = ({ article }) => {

	console.log('article', article);

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
							src={getStrapiMedia(image)}
							alt={alternativeText || ""}
							style={{ maxHeight: '400px', objectFit: 'cover', aspectRatio: '16 / 9' }}
						/>
						<div className={style.hover}><ReadOutlined /> Читать дальше</div>
					</div>
				}
			// actions={[
			// 	<SettingOutlined key="setting" />,
			// 	<EditOutlined key="edit" />,
			// 	<EllipsisOutlined key="ellipsis" />,
			// ]}
			>
				<Meta
					// avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
					title={article.attributes.title}
					description={article.attributes.category.data.attributes.name}

				/>
			</AntCard>
			{/* <a className="uk-link-reset">
				<div className="uk-card uk-card-muted">
					<div className="uk-card-media-top">
						<Image
							layout="responsive"
							width={width}
							height={height}
							objectFit="contain"
							src={getStrapiMedia(image)}
							alt={alternativeText || ""}
						/>
					</div>
					<div className="uk-card-body">
						<p id="category" className="uk-text-uppercase">
							{article.attributes.category.data.attributes.name}
						</p>
						<p id="title" className="uk-text-large">
							{article.attributes.title}
						</p>
					</div>
				</div>
			</a> */}
		</Link>
	);
};

export default BlogCard;