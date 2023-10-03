"use client";

import Script from "next/script";

export default function GoogleScript() {
  return (
    <>
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=GTM-MB39XR7`}
      />
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5RWDDMQD');`,
        }}
      />
    </>
  );
}
