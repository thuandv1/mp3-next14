// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s120-ava-talk-zmp3.zmdcdn.me",
      "static-zmp3.zmdcdn.me",
      "photo-zmp3.zmdcdn.me",
      "photo-resize-zmp3.zmdcdn.me",
      "*"
    ]
  }
};

module.exports = nextConfig;
