export const config = {
  domainSource: "https://8b4ecbe3-ecc3-473b-8cb3-1115ba815bc5.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/detail0914/[^/]+",
          metaDataEndpoint: "https://xghg-2p9b-ogfk.t7.xano.io/api:Z9ixkUX9/get_single_wamnet"
      }
		// ,
  //     {
  //         pattern: "/team/profile/[^/]+",
  //         metaDataEndpoint: "https://xeo6-2sgh-ehgj.n7.xano.io/api:LjwxezTv/team/profile/{profile_id}/meta"
  //     }
  //     // Add more patterns and their metadata endpoints as needed
  ]
};
