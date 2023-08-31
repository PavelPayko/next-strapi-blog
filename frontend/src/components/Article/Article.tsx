import React from "react";
import style from "./Article.module.scss";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "@/lib/media";
import rehypeRaw from "rehype-raw";
import Image from 'next/image';

const Article: React.FC<{
  article: any
}> = ({ article }) => {

  const author = article.attributes.author.data?.attributes
  
  const image = article?.attributes?.image
  const imageUrl = getStrapiMedia(image?.data);
	const { alternativeText, width, height } = image?.data?.attributes;

  return (
    <div className={style.container}>
           <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.attributes.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
        <Image
              layout="responsive"
							width={width}
							height={height}
							src={imageUrl}
							alt={alternativeText || ""}
							style={{ objectFit: 'cover', aspectRatio: '16 / 9', objectPosition: 'top' }}
						/>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
          >{article.attributes.content}</ReactMarkdown>
          <hr className="uk-divider-small" />
          {/* <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {author?.picture && (
                <Image
                  src={getStrapiMedia(
                    author.picture
                  )}
                  alt={
                    author.picture.data.attributes.alternativeText
                  }
                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
             {author && (
             <p className="uk-margin-remove-bottom">
                By {author.name}
              </p>
              )}
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Article;
