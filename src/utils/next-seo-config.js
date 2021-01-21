// https://www.npmjs.com/package/next-seo#additional-meta-tags

const title = "";
const titleTemplate = "%s | Next SEO";
const description = "This example uses more of the available config options.";
const author = "huynguyen1305";

export default {
  title: title,
  description: description,
  titleTemplate: titleTemplate,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.url.ie/",
    site_name: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Jane Doe",
    },
    {
      name: "application-name",
      content: "NextSeo",
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ],
};
