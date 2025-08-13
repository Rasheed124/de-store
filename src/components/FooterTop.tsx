// footerIcons.tsx
import {  FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import React from "react";
import { MapIcon } from "lucide-react";

interface FooterIcon {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const footerIcons: FooterIcon[] = [
  {
    title: 'Address',
    subtitle: '123 Main St, Cityville, USA',
    icon: <MapIcon className="text-gray-600 group-hover:text-black transition-colors" />,
  },
  {
    title: 'Phone',
    subtitle: '+1 (123) 456-7890',
    icon: <FaPhoneAlt className="text-gray-600 group-hover:text-black transition-colors" />,
  },
  {
    title: 'Email',
    subtitle: 'contact@example.com',
    icon: <FaEnvelope className="text-gray-600 group-hover:text-black transition-colors" />,
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Fri: 9am - 5pm',
    icon: <FaClock className="text-gray-600 group-hover:text-black transition-colors" />,
  },
];
const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-b">
      {footerIcons.map((item, index) => (
        <ContactItem
          key={index}
          icon={item?.icon}
          title={item?.title}
          subtitle={item?.subtitle}
        />
      ))}
    </div>
  );
};

export default FooterTop;

const ContactItem = ({ icon, title, subtitle }: FooterIcon) => {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-50 p-4 transition-colors">
      {icon}
      <div>
        <h3 className="font-bold text-gray-900 transition-colors">
            {title}
        </h3>
        <p className="text-gray-960 text-sm mt-1 group-hover:text-gray-900 transition-colors">
            {subtitle}
        </p>
      </div>
    </div>
  );
};
