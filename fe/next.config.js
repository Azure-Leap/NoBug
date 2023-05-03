/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.pinimg.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "media.istockphoto.com",
      "flagcdn.com",
      "static.vecteezy.com",
      "img.freepik.com",
      "encrypted-tbn0.gstatic.com",
      "i0.wp.com",
      "maqe-com-4-media-uploads.s3.ap-southeast-1.amazonaws.com",
      "blog.flipsnack.com",
      "elements-cover-images-0.imgix.net",
      "assets.website-files.com",
    ],
  },
};

module.exports = nextConfig;
