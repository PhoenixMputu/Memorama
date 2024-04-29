/* eslint-disable no-unused-vars */
import React, { Children } from 'react';
import Head from 'next/head';
import { IMetadata } from '../utils/types';

const Metadata: React.FC<IMetadata> = ({
  title,
  description,
  author,
  articleAuthor,
  publicationDate,
  articlePublishedTime,
  keywords,
  siteUrl,
  canonicalUrl,
  articleModifiedTime,
  ogTwitterImage,
  ogType,
  ogImageUrl,
  ogLocale,
  ogUpdatedTime,
  children
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#00a671" />
      <meta name="description" content={description} />
      {author && <meta name="author" content={author} />}
      {articleAuthor && <meta name="article:author" content={articleAuthor} />}
      {publicationDate && <meta name="publication_date" content={publicationDate} />}
      {articlePublishedTime && <meta name="article:published_time" content={articlePublishedTime} />}
      {keywords && <meta name="article:modified_time" content={keywords} />}
      {siteUrl && <meta name="og:url" content={siteUrl} />}
      {canonicalUrl && <meta name="og:url" content={siteUrl} />}
      {siteUrl && <link rel="canonical" href={canonicalUrl} />}
      {articleModifiedTime && <meta name="article:modified_time" content={articleModifiedTime} />}
      {ogTwitterImage && <meta name="twitter:image" content={ogTwitterImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogLocale && <meta property="og:locale" content={ogLocale} />}
      {ogUpdatedTime && <meta property="og:updated_time" content={ogUpdatedTime} />}
      {children}
    </Head>
  );
};

export default Metadata;
