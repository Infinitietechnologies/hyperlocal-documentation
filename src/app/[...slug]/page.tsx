import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx-components';
import Breadcrumb from '@/components/bread-crumb';
import Toc from '@/components/toc';

type tParams = Promise<{ slug: string[] }>;

export const generateStaticParams = async () => {
  return allDocs.map((doc) => {
    const slugArray = doc._raw.flattenedPath.split('/');
    return { slug: slugArray };
  });
};

export const generateMetadata = async ({ params }: { params: tParams }) => {
  const awaitedParams = await params;
  const path = awaitedParams.slug.join('/');

  // Ignore browser-specific or system paths
  if (
    path.startsWith('.well-known') ||
    path.includes('favicon') ||
    path.includes('robots')
  ) {
    return {};
  }

  const doc = allDocs.find((doc) => doc._raw.flattenedPath === path);

  if (!doc) {
    notFound();
  }
  return {
    title: `${doc.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: doc.description || 'A detailed guide to the topic.',
    openGraph: {
      title: `${doc.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
      description: doc.description || 'A detailed guide to the topic.',
    },
  };
};

const DocsPage = async ({ params }: { params: tParams }) => {
  const awaitedParams = await params;
  const path = awaitedParams.slug.join('/');
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === path);

  if (!doc) notFound();
  return (
    <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}>
      <article className="overflow-auto">
        <div className="mb-8 text-center">
          <Breadcrumb path={doc.url} />
        </div>
        <Mdx code={doc.body.code} />
      </article>

      <Toc doc={doc} />
    </div>
  );
};

export default DocsPage;
