/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // route the user to /form/Intro if they go to /form
  async redirects() {
    return [
      {
        source: "/form",
        destination: "/form/Intro",
        permanent: true,
      },
      // route the user to /form/Intro when they load into the site
      {
        source: "/",
        destination: "/form/Intro",
        permanent: true,
      }
    ];
  }
}

module.exports = nextConfig
