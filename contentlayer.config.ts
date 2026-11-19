// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import { codeImport } from 'remark-code-import';
import rehypeSlug from 'rehype-slug';
import highlight from 'rehype-highlight';
import dart from 'highlight.js/lib/languages/dart.js';
import bash from 'highlight.js/lib/languages/bash.js';
import typescript from 'highlight.js/lib/languages/typescript.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import xml from 'highlight.js/lib/languages/xml.js';
import shell from 'highlight.js/lib/languages/shell.js';
import powershell from 'highlight.js/lib/languages/powershell.js';
import nginx from 'highlight.js/lib/languages/nginx.js';
import apache from 'highlight.js/lib/languages/apache.js';
import swift from 'highlight.js/lib/languages/swift.js';
import json from 'highlight.js/lib/languages/json.js';

export const Post = defineDocumentType(() => ({
  name: 'Docs',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  markdown: { fileExtensions: ['mdx', 'md'] }, // Ensure it watches these files
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      [
        highlight,
        {
          languages: {
            dart,
            bash,
            sh: bash,
            typescript,
            ts: typescript,
            tsx: typescript,
            javascript,
            js: javascript,
            xml,
            shell,
            cmd: shell,
            powershell,
            nginx,
            apache,
            swift,
            json,
            env: shell,
            txt: shell,
            md: shell,
          },
        },
      ],
    ],
  },
});
