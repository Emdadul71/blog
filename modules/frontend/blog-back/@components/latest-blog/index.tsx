import API from "@/helpers/api";
import BlogCard from "@/modules/frontend/@common/blog_card";
import React, { useEffect, useState } from "react";

const data = [
  {
    featureImage: "/temp/blog-card-1.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-3.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-2.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-1.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-3.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-1.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-3.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-1.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
  {
    featureImage: "/temp/blog-card-3.jpg",
    category: "Tech info",
    title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
    desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
  },
];
const LatestBlog = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="h3 mb-0 text-primary">Latest Blogs</h2>
          <p className="mb-0">View All</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-[30px]">
          {data?.map((item: any, i: any) => {
            const isSmall = i == 2 || i == 3 || i == 4 || i == 5;
            return (
              <>
                <BlogCard
                  key={i}
                  data={item}
                  classes={{
                    root: `${
                      i > 5
                        ? `lg:grid-cols-[272px_1fr] lg:col-span-2 items-center `
                        : ``
                    } ${
                      isSmall
                        ? `lg:grid-cols-[146px_1fr] col-span-1 gap-5 items-center `
                        : ``
                    }`,

                    title: isSmall
                      ? "!lg:text-xs !mb-[2px]"
                      : i > 5
                      ? "!text-xl !mb-1"
                      : "!text-p1 !lg:text-lg",
                    imageWrapper: isSmall ? "" : i > 5 ? "!h-[170px]" : "",
                    imageStyle: isSmall ? "" : i > 5 ? "!h-full" : "",
                    category: `${isSmall ? `text-xs !mb-1` : ``}`,
                    descStyle: `${
                      i < 6 ? "lg:hidden" : i > 5 ? "!mb-1 text-base" : ""
                    }`,
                    date: `${isSmall ? `text-sm !leading-5` : ``}`,
                  }}
                />
                {i == 5 && <div className="h-[20px]"></div>}
              </>
            );
          })}
        </div>
        {/* {isLoading && (
          <div className="grid lg:grid-cols-[410px_1fr] gap-4 lg:gap-[20px] mt-[30px]">
            {new Array(6).fill(1).map((_, i) => {
              return (
                <div className="h-full grid grid-cols-[410px_1fr] " key={i}>
                  <Skeleton className={"h-[230px] dark:!bg-neutral-800"} />
                  <Skeleton className={"h-[230px]  dark:!bg-neutral-800"} />
                </div>
              );
            })}
          </div>
        )}
        {nextPage ? (
          <div className="flex justify-center mt-10">
            <button
              className="btn btn-primary"
              onClick={() => {
                setPage((prev: any) => prev + 1);
              }}
            >
              Load More
            </button>
          </div>
        ) : null} */}
      </div>
    </>
  );
};

export default LatestBlog;
