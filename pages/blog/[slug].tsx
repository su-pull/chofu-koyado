import client from "../../libs/contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import Framerdiv from "../../components/Sys/Framer";
import styles from "./midasi.module.scss";
import { EntryCollection } from "contentful";
import { IPostFields } from "../../libs/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Date from "../../components/Sys/date";
import Head from "next/head";
import * as TYPES from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";

type Content = {
  blog: {
    fields: {
      slug: string;
      date: string;
      title: string;
      description: string;
      body: Document;
    };
  };
};

const Slug: React.FC<Content> = ({ blog }) => {
  const options: Options = {
    renderNode: {
      [TYPES.BLOCKS.EMBEDDED_ASSET]: (node) => {
        const src = "https://" + node.data.target.fields.file.url;
        const height = node.data.target.fields.file.details.height;
        const width = node.data.target.fields.file.details.width;
        return <img src={src} width={width} height={height} />;
      },
    },
  };
  return (
    <Framerdiv>
      <Head>
        <title>{blog.fields.title} - sou</title>
        <meta name="description" content={blog.fields.description} />
      </Head>
      <main className="Hlink list textLeft resizeimage margin inblo ">
        <div className={styles.Time2}>
          <Date dateString={blog.fields.date} />
        </div>
        <div className="pinkLinks">
          <h1 className={styles.h1}>{blog.fields.title}</h1>
        </div>
        <div className="triangle-bottom" />
        <div>{documentToReactComponents(blog.fields.body, options)}</div>
      </main>
    </Framerdiv>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "koyado",
    limit: 1000,
  });
  const paths = entries.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  const slug = context.params.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  const entries = await client.getEntries({
    content_type: "koyado",
    limit: 1000,
    "fields.slug": context.params.slug,
  });

  return {
    props: {
      blog: entries.items[0],
    },
  };
};

export default Slug;
