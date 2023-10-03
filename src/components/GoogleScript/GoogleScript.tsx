"use client";

import Script from "next/script";

export default function GoogleScript() {
  return (
    <>
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=OPT-TRQ4PKP`}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-JRCF93LFQ7`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
					window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JRCF93LFQ7');
					`,
        }}
      />
    </>
  );
}
