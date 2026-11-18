import type { Tool } from "../types/Tool";
export const downloadUrl =
  "https://drive.google.com/file/d/1CxjKt6EgYZCdGNkx8BTbUbQunSPNY08U/view?usp=sharing";
export const lakeImage = "/images/alpine-lake.webp";
export const mountainImage = "/images/mountain-peaks.webp";
export const tools: Tool[] = [
  {
    title: "Find duplicates",
    icon: "▧",
    label: "KEEP THE MOMENT. LOSE THE COPIES.",
    heading: "Same memories. Less repetition.",
    description:
      "Spot identical and visually similar photos and videos, even when the filenames tell a different story. Compare the details and keep the version you love.",
    details: [
      "Four similarity levels for your collection",
      "Compare resolution, size, and video duration",
      "Review before moving files to the Recycle Bin",
    ],
    preview: "A familiar view. A few extra copies.",
    action: "Review selection",
  },
  {
    title: "Organize files",
    icon: "▱",
    label: "A LITTLE STRUCTURE GOES A LONG WAY",
    heading: "A collection that falls into place.",
    description:
      "Turn a jumble of files into year and month folders. Lunera reads capture dates when available and lets you preview the destination before making a move.",
    details: [
      "Clear year and month folders",
      "Preview the plan before moving files",
      "Name conflicts handled without overwriting",
    ],
    preview: "Every memory in its own time.",
    action: "Organize files",
  },
  {
    title: "Edit metadata",
    icon: "☷",
    label: "GET THE LITTLE DETAILS RIGHT",
    heading: "Every file has a story. Fill it in.",
    description:
      "Update dates, titles, descriptions, and camera details across photos and videos in one batch. Review your changes before writing them to your files.",
    details: [
      "Update shared information in batches",
      "Blank fields preserve existing values",
      "Edit without re-encoding your media",
    ],
    preview: "The details tell the story.",
    action: "Apply metadata",
  },
];
export const metadataFields = [
  { label: "Title", value: "Summer in the mountains" },
  { label: "Author", value: "Your name" },
  { label: "Capture date", value: "2026:06:21 10:30:00" },
];
export const steps = [
  {
    number: "01",
    title: "Choose your folders",
    text: "Point Lunera to the files that need a little attention. Subfolders are included, too.",
  },
  {
    number: "02",
    title: "See the bigger picture",
    text: "Compare duplicates, preview your folder structure, or review your metadata changes.",
  },
  {
    number: "03",
    title: "Make room for more",
    text: "Confirm your choices and let Lunera do the busywork. You stay in control.",
  },
];
export const faqs = [
  {
    question: "Do my files ever leave my computer?",
    answer:
      "No. Duplicate detection, file organization, and metadata editing run locally. Your files are not uploaded to an external service.",
  },
  {
    question: "Does Lunera delete files automatically?",
    answer:
      "Scanning does not change your files. Review your selected duplicates and confirm before moving them to the Windows Recycle Bin. Visual similarity is a suggestion, so compare files before removing them.",
  },
  {
    question: "Which files can I work with?",
    answer:
      "Duplicate detection and metadata editing work with photos and videos. Common formats include JPG, PNG, WebP, MP4, and MOV; support varies by format and codec. The file organizer also supports other files using their modification dates.",
  },
  {
    question: "Can I preview changes first?",
    answer:
      "Yes. Compare duplicate groups, preview destination folders, and confirm metadata changes before applying them. Metadata edits write directly to existing files without creating backup copies.",
  },
  {
    question: "Is Lunera available for Mac or Linux?",
    answer:
      "The current download is for Windows. Explore the source code and development instructions on GitHub.",
  },
];
