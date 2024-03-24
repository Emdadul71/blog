"use client";
import { Select } from "antd";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import BlogCard from "../../@common/blog_card";
import AdvertisementLeftSide from "../../@common/advertisement/left_side";
import AdvertisementSideSm from "../../@common/advertisement/side_sm";

const data = [
  {
    slug: "",
    featureImage: "/misc/blog-card.webp",
    publishedAt: "January 10, 2024",
    title:
      "Elon Musk Expands SpaceX Facility in Texas With Controversial Land Swap Deal",
    content:
      "The Texas Parks and Wildlife Commission authorized a land swap deal with SpaceX, granting Elon Musk’s rocket company 43 acres of land that were heavily sought after as part of conservation efforts in the area. The TPWD put the deal to a vote during a meeting in Austin, where most speakers opposed the land exchange, according to The Texas Tribune. “This land is our ancestral land. These were lands that were fishing areas for my people,” Juan Mancias, the Tribal Chair of the Esto’k Gna Tribal Nation of Texas, is quoted in The Texas Tribune as saying. “If you are looking at us as if we don’t exist, we are here.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",
    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",
    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",
    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",
    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
];

const BlogCategory = () => {
  return (
    <>
      <section className="pt-5 lg:pt-[100px]">
        <div className="container">
          <h3>Category Name</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-4 mb-[80px]">
            {data?.slice(0, 5)?.map((item: any, i: any) => {
              const isFirst = i == 0;
              return (
                <>
                  <BlogCard
                    key={i}
                    item={item}
                    classes={{
                      root: `${
                        isFirst ? "col-span-2 row-span-2 gap-5" : "gap-2"
                      }`,
                      title: `${
                        isFirst
                          ? "!text-3xl lg:!leading-[42px] !line-clamp-2"
                          : "!text-lg !line-clamp-2"
                      }`,
                      imageWrapper: "!h-full",
                      imageStyle: "!h-full",
                      description: `${
                        isFirst ? "!mb-1 !line-clamp-3" : "!mb-1 !line-clamp-2"
                      }`,
                      author: `${isFirst ? "" : "hidden"}`,
                      reading: `${isFirst ? "" : "!text-xs"}`,
                    }}
                  />
                </>
              );
            })}
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-[1fr_350px] gap-[30px]">
            {/* <div className="hidden xl:block sticky self-start top-[100px]">
              <AdvertisementLeftSide />
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[30px]">
              {data?.map((item: any, i: any) => {
                return (
                  <>
                    <BlogCard
                      key={i}
                      item={item}
                      classes={{
                        root: `
                       lg:grid-cols-[306px_1fr] !items-center gap-5`,
                        title: "text-xl",
                        imageWrapper: "!h-full",
                        imageStyle: "!h-full",
                        description: "!mb-1 !line-clamp-2",
                      }}
                    />
                  </>
                );
              })}
            </div>
            <div className="hidden xl:block sticky self-start top-[100px]">
              <AdvertisementSideSm />
              <div className="flex flex-col gap-3">
                {data?.slice(0, 5)?.map((item: any, i: any) => {
                  return (
                    <>
                      <BlogCard
                        key={i}
                        item={item}
                        classes={{
                          root: `
                       lg:grid-cols-[102px_1fr] !items-center gap-3`,
                          author: "hidden",
                          title: "text-sm !mb-1",
                          imageWrapper: "!h-full",
                          imageStyle: "!h-full",
                          description: "!mb-1 !line-clamp-2 !hidden",
                          reading: "!text-xs",
                        }}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCategory;
