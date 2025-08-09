import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React, { FC } from "react";

interface SocialMediaIcon {
  clasName?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

const socialIcons = [
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "YouTube",
    href: "https://youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "GitHub",
    href: "https://github.com",
    icon: <Github className="w-5 h-5" />,
  },

];

const SocialMedia: FC<SocialMediaIcon> = ({
  clasName,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", clasName)}>
        {socialIcons.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "border rounded-full p-2 hover:text-white hover:border-white hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn("text-white font-semibold", tooltipClassName)}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
