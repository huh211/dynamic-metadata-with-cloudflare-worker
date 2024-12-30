export const config = {
  domainSource: "https://www.iku-den.co.jp/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/details/[^/]+",
          metaDataEndpoint: "https://xghg-2p9b-ogfk.t7.xano.io/api:Z9ixkUX9/get_meta_by/{pageid}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
