/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
};
// export default million.next(
//   MillionLint.next({
//     rsc: true,
//   })(nextConfig),
//   {
//     auto: true,
//   },
// );
