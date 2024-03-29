const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },

  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  {
    key: "Cache-Control",
    value: "private",
  },
];

module.exports = {
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
