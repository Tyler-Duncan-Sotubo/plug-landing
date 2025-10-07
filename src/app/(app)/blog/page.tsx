"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { axiosInstance, isAxiosError } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types/post";
import Loading from "@/components/ui/loading";

const BlogPosts = () => {
  const fetchPosts = async () => {
    try {
      const res = await axiosInstance.get("/api/posts");
      return res.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return [];
      }
    }
  };

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery<Post[]>({
    queryKey: ["blog-posts"],
    queryFn: fetchPosts,
    enabled: true,
  });

  if (isLoading) return <Loading />;

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <section className="mx-auto my-10 w-[92%] md:my-32">
      {/* blog posts */}
      <h1 className="mb-10 text-3xl md:text-5xl">Latest Articles</h1>
      <div className="gap-10 md:flex">
        <div>
          {posts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="cursor-pointer flex-col border-t border-gray py-10 md:flex"
            >
              <article className="mb-20 md:mb-0 md:flex">
                <div className="relative h-[250px] min-w-[300px]">
                  <Image
                    src={post.image}
                    alt="blog image"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:p-4">
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-primaryHover">
                    {format(new Date(post.publishedAt), "MMM dd, yyyy")}
                  </p>
                  <p className="mt-4 text-xl italic">{post.subtitle}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="md:w-[45%]">
          <Image
            src="https://tooxclusive-artist-profile.s3.amazonaws.com/blog/banner.jpg"
            alt="blog image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
