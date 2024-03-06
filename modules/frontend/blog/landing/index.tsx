"use client";
import { Select } from "antd";
import { FiChevronRight } from "react-icons/fi";
import LatestBlog from "../@components/latest-blog";
import BlogHero from "./blog-hero";
import AdvertisementLeftSide from "../../@common/advertisement/left_side";
import AdvertisementSideSm from "../../@common/advertisement/side_sm";
import BlogCard from "../../@common/blog-card";

const BlogLanding = () => {
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
      category: "Nasa",
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
      category: "Nasa",
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
      category: "Nasa",
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
      category: "Nasa",
      title: "Guide To Your Australian Student Visa 2023: Detailed Guideline",
      desc: "Guide To Your Australian Student Visa 2023 will inform students who want to study in Australia must first secure a student visa. The sort of education they are pursuing will determine the precise visa required for their program’s level, length, and course of study. International students pursuing their studies in Australia must apply for a student (Subclass 500) Visa, regardless of the program, field, university, or tuition prices in effect.",
    },
  ];
  return (
    <>
      {data && <BlogHero data={data} />}
      <section className="pt-5 lg:pt-[80px]">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_320px] gap-[50px]">
            {data && (
              <div>
                <LatestBlog />
              </div>
            )}
            <div className="sticky top-[80px] self-start">
              <AdvertisementSideSm className="mt-[72px] flex items-center" />
              <div className="flex flex-col gap-4">
                {data?.slice(0, 5)?.map((item: any, i: any) => {
                  return (
                    <BlogCard
                      key={i}
                      data={item}
                      classes={{
                        root: "grid-cols-[110px_1fr] !gap-3",
                        imageWrapper: "!h-[62px]",
                        imageStyle: "!h-full",
                        title: "text-sm !mb-1",
                        category: "hidden",
                        descStyle: "hidden",
                        date: "text-xs",
                      }}
                    />
                  );
                })}
              </div>
              <AdvertisementSideSm className="mt-8 flex items-center" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLanding;
