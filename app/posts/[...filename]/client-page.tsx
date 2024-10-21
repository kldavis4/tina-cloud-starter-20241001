"use client";
import React from "react";
import Image from "next/image";
import { Section } from "../../../components/layout/section";
import { Container } from "../../../components/layout/container";
import { tinaField, useTina } from "tinacms/dist/react";
import { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "../../../components/mdx-components";


interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PostClientPage(props: ClientPostProps) {
  const { data } = useTina({ ...props });
  const post = data.post;

  let formattedDate = "";

  return (
    <Section className="flex-1">
      <Container width="small" className={`flex-1 pb-2`} size="large">
        <h2
          data-tina-field={tinaField(post, "title")}
          className={`w-full relative	mb-8 text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span >
            {post.title}
          </span>
        </h2>
        <div
          data-tina-field={tinaField(post, "author")}
          className="flex items-center justify-center mb-16"
        >
          {post.author && (
            <>
              <div className="flex-shrink-0 mr-4">
              </div>
              <p
                data-tina-field={tinaField(post.author, "name")}
                className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white"
              >
                {post.author.name}
              </p>
              <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
                —
              </span>
            </>
          )}
          <p
            data-tina-field={tinaField(post, "date")}
            className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150"
          >
            {formattedDate}
          </p>
        </div>
      </Container>
      {post.heroImg && (
        <div className="px-4 w-full">
          <div
            data-tina-field={tinaField(post, "heroImg")}
            className="relative max-w-4xl lg:max-w-5xl mx-auto"
          >
            <Image
              src={post.heroImg}
              alt={post.title}
              className="absolute block rounded-lg w-full h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              aria-hidden="true"
              width={500}
              height={500}
            />
            <Image
              src={post.heroImg}
              alt={post.title}
              width={500}
              height={500}
              className="relative z-10 mb-14 block rounded-lg w-full h-auto opacity-100"
            />
          </div>
        </div>
      )}
      <Container className={`flex-1 pt-4`} width="small" size="large">
        <div
          data-tina-field={tinaField(post, "_body")}
          className="prose dark:prose-dark w-full max-w-none"
        >
          <TinaMarkdown components={components} content={post._body} />
        </div>
      </Container>
    </Section>
  );
}
