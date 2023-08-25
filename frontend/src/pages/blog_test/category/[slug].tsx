import Seo from "@/components/seo";
import Layout from "@/components/layout";
import Articles from "@/components/Articles/Articles";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Link from 'next/link'

import { fetchAPI } from "@/lib/api";
import PageTitle from '@/components/PageTitle/PageTitle';

const Category: React.FC<{
	category: any,
	categories: any
}> = ({ category, categories }) => {
	const seo = {
		metaTitle: category.attributes.name,
		metaDescription: `All ${category.attributes.name} articles`,
	};

	return (
		<Layout categories={categories.data}>
			<Seo seo={seo} />
			<div >
				<PageTitle title={category.attributes.name} />
				<Breadcrumb
					style={{ padding: '0 40px' }}
					items={[
						{
							key: 'home',
							title: <Link href="/"><HomeOutlined /></Link>,
						},
						{
							key: 'home',
							title: <Link href="/blog">Blog</Link>,
						},
						{
							title: category.attributes.name,
						},
					]}
				/>

				<Articles articles={category.attributes.articles.data} />
			</div>

			<div className="uk-section">
				<div className="uk-container uk-container-large">

				</div>
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

	return {
		paths: categoriesRes.data.map((category: any) => ({
			params: {
				slug: category.attributes.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const matchingCategories = await fetchAPI("/categories", {
		filters: { slug: params.slug },
		populate: {
			articles: {
				populate: "*",
			},
		},
	});
	const allCategories = await fetchAPI("/categories");

	return {
		props: {
			category: matchingCategories.data[0],
			categories: allCategories,
		},
		revalidate: 1,
	};
}

export default Category;