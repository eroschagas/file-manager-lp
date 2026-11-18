import { downloadUrl, faqs, lakeImage, mountainImage } from "../data/landing";

export const useLandingSeo = (): void => {
  const siteUrl = "https://lumora-app-website.netlify.app/";
  const title = "Lunera — Photo & Video Organizer for Windows";
  const description =
    "Find duplicate photos and videos, organize files by date, and edit metadata in batches. Lunera is your local media organizer for Windows.";

  useSeoMeta({
    title,
    description,
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    themeColor: "#f8f9fb",
    ogType: "website",
    ogTitle: title,
    ogDescription: description,
    ogUrl: siteUrl,
    ogSiteName: "Lunera",
    ogLocale: "en_US",
    ogImage: `${siteUrl}images/alpine-lake.webp`,
    ogImageWidth: 600,
    ogImageHeight: 520,
    ogImageAlt: "An alpine lake reflecting the mountains, featured on Lunera",
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${siteUrl}images/alpine-lake.webp`,
    twitterImageAlt:
      "An alpine lake reflecting the mountains, featured on Lunera",
  });

  useHead({
    htmlAttrs: { lang: "en" },
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/lunera.svg" },
      { rel: "canonical", href: siteUrl },
      { rel: "preload", as: "image", href: lakeImage, fetchpriority: "high" },
      {
        rel: "preload",
        as: "image",
        href: mountainImage,
        fetchpriority: "high",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        key: "lunera-structured-data",
        textContent: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteUrl}#website`,
              url: siteUrl,
              name: "Lunera",
              description,
              inLanguage: "en",
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${siteUrl}#application`,
              name: "Lunera",
              url: siteUrl,
              description,
              operatingSystem: "Windows",
              applicationCategory: "UtilitiesApplication",
              downloadUrl,
              image: `${siteUrl}lunera.svg`,
              sameAs: "https://github.com/eroschagas/file-manager",
              featureList: [
                "Local duplicate photo and video detection",
                "File organization into year and month folders",
                "Batch photo and video metadata editing",
                "Preview changes before applying them",
                "Local processing without uploading your files",
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${siteUrl}#faq`,
              url: `${siteUrl}#faq`,
              isPartOf: { "@id": `${siteUrl}#website` },
              about: { "@id": `${siteUrl}#application` },
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }).replace(/</g, "\\u003c"),
      },
    ],
  });
};
