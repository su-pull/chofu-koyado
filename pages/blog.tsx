import client from "../libs/contentful";
import { GetStaticProps } from "next";
import Framerdiv from "../components/Sys/Framer";
import { Entry, EntryCollection } from "contentful";
import { IPostFields } from "../libs/types";
import Date from "../components/Sys/date";
import Head from "next/head";
import Link from "next/link";

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Blog: React.FC<Map> = ({ blog }) => {
  return (
    <Framerdiv>
      <Head>
        <title>koyado</title>
        <meta name="description" content="ログ" />
      </Head>
      <main className="textLeft margin50p inblo">
        <h1>開催後の感想などをアップしています。</h1>
        {blog.map((props: Entry<IPostFields>) => (
          <div className="hoverbob">
            <dl key={props.sys.id}>
              <Link href={`/blog/${props.fields.slug}`}>
                <a>
                  <dt className="dateST">
                    <Date dateString={props.fields.date} />
                  </dt>
                  <div className="PPx pinkLinks">{props.fields.title}</div>
                </a>
              </Link>
            </dl>
          </div>
        ))}
      </main>
    </Framerdiv>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const entries: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "koyado",
    order: "-fields.date",
    limit: 100,
  });
  return {
    props: {
      blog: entries.items,
    },
  };
};

export default Blog;
