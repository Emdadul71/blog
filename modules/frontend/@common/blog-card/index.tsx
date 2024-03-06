import { excerpt, htmlParse } from "@/helpers/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { lazy } from "react";

interface propTypes {
  classes?: {
    root?: string;
    title?: string;
    imageWrapper?: string;
    imageStyle?: string;
    category?: string;
    description?: string;
    descStyle?: string;
    date?: string;
  };
  isCenter?: boolean;
  isFalse?: any;
  data?: any;
}

const BlogCard = ({ classes, isCenter, data }: propTypes) => {
  const cat = data?.categories?.length > 0 && data?.categories[0];
  const catLink = `/category/tech`;
  return (
    <div
      className={`grid gap-5 group 
       ${classes?.root ? classes.root : ""}`}
    >
      <Link
        href={`/blog/${data?.slug}`}
        className={`block w-full ${
          classes?.imageWrapper ? classes.imageWrapper : ""
        }`}
      >
        <Image
          src={data?.featureImage}
          width={635}
          height={360}
          alt="Testimonial"
          className={`object-cover w-full rounded ${
            classes?.imageStyle ? classes.imageStyle : ""
          }`}
          priority
        />
      </Link>

      <div>
        <Link
          href={catLink}
          className={`inline-block rounded transition-all mb-1.5  ${
            classes?.category ? classes.category : ""
          }`}
        >
          {cat?.title}
          {data?.category}
        </Link>
        <Link href={`/blog/${data?.slug}`} className="hover:text-inherit">
          <h3
            className={`line-clamp-2  mb-0 hover:text-secondary transition-all mb-2 ${
              classes?.title ? classes.title : ""
            }`}
          >
            {data?.title}
          </h3>
          <p
            className={`mb-2 line-clamp-2 ${
              classes?.descStyle ? classes.descStyle : ""
            }`}
          >
            {excerpt(data?.desc, 500)}
          </p>
          <span
            className={` ${isCenter ? "mt-[16px] block" : "block"} ${
              classes?.date ? classes.date : ""
            }`}
          >
            {moment(data?.publishedAt).format("LL")}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
