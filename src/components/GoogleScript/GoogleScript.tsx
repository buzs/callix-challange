import Script from "next/script";

export default function GoogleScript() {
  return (
    <>
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=${process.env.GOOGLE_OPTIMIZE_ID}`}
      />
    </>
  );
}
