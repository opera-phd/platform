import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 * edited 250126 23H15
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Platforma OPeRA",
    pageTitleSuffix: " | OPeRA",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "platform.opera-phd.org",
    ignorePatterns: ["private", "templates", "journal", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
/*
*****************************************************
** This is the important colors customization section
*****************************************************
*/
colors: {
  lightMode: {
    light: "#e4dac8", // page background
    lightgray: "#e5e5e5", //borders
    gray: "#b8b8b8", // graph links, heavier borders
    darkgray: "#341a1a", // body text
    dark: "#2b2b2b", // header text and icons
    secondary: "#7e5841", // links, current graph node
    tertiary: "#718c6f", // hover color visited graph nodes
    highlight: "rgba(143, 159, 169, 0.15)", // internal links bg, highlighted text and lines of code
    textHighlight: "#fff23688", // (with transparency) MD highlighted text bg
  },
  darkMode: {
    light: "#343434", // the background
    lightgray: "#393639",
    gray: "#646464",
    darkgray: "#ad9a69", // text
    dark: "#ebebec",
    secondary: "#7e5841", // links
    tertiary: "#718c6f", // hover color
    highlight: "#c2a26726",
    textHighlight: "#b08b1875",
  },
},
},
},
/*
*****************************************************
**** The plugins section - study before changing ****
*****************************************************
*/
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
