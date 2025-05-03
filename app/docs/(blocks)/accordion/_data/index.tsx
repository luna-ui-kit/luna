import {
  IconBrandOpenSource,
  IconColorSwatch,
  IconMoodHeart
} from '@tabler/icons-react'

export const AccordionData = (() => [
  {
    expanded: '1',
    icon: <IconBrandOpenSource />,
    title: `Can I use this template for commercial work?`,
    detail: `Yes, you're free to use it for both personal and commercial projects.`
  },
  {
    expanded: '2',
    icon: <IconColorSwatch />,
    title: `How do I customize the styles?`,
    detail: `Customizing is easy — just adjust the colors, fonts, spacing, and layout settings to match your brand or personal preferences. Most templates are built with flexibility in mind, so you can tweak things without having to start from scratch.`
  },
  {
    expanded: '3',
    icon: <IconMoodHeart />,
    title: `Is this layout mobile-friendly?`,
    detail: `Yes! All components and layouts are designed to be responsive. That means they adapt smoothly across desktop, tablet, and mobile screens — no extra work needed.`
  }
])()
