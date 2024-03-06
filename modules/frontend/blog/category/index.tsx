"use client";
import { Select } from "antd";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import BlogCard from "../../@common/blog-card";

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
const BlogCategory = () => {
  return (
    <>
      <section className="pt-5 lg:pt-[100px]">
        <div className="container">
          <h3>Category Name</h3>
          <div className="grid grid-cols-1  lg:grid-cols-[160px_1fr_370px] gap-[30px]">
            <div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[30px]">
              {data?.map((item: any, i: any) => {
                return (
                  <>
                    <BlogCard
                      key={i}
                      data={item}
                      classes={{
                        root: `
                       lg:grid-cols-[272px_1fr] !items-center `,
                        title: "text-xl",
                      }}
                    />
                  </>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCategory;
