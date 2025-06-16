import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Starlly Solutions - Data, Media, Automation & AI Services",
  description: "Healthy machines create profitable business",
  icons: {
    icon: "/favicon.ico", // default size
    shortcut: "/favicon-16x16.png", // optional custom sizes
    apple: "/apple-touch-icon.png",
  },

  // Open Graph
  openGraph: {
    url: "https://starllysolutions.com",
    type: "website",
    title: "Automate post sales workflows, processes and tasks",
    description:
      "Starlly Solutions Pvt Ltd offers software services and resource augmentation services. Focused on providing the best digital/technology support for growing online businesses.",
    images: [
      {
        url: "https://starllysolutions.com/images/StarllySample.png",
        alt: "Starlly Solutions sample preview",
      },
    ],
  },

  // Twitter
  // twitter: {
  //   card: "summary_large_image",
  //   // url: "https://starllysolutions.com",
  //   title: "Starlly",
  //   description: "Automate post sales workflows, processes and tasks",
  //   images: ["/images/StarllySample.png"],
  // },


};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
