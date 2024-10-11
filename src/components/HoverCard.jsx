import { cn } from "@/lib/utils";
import {
  IconHeart,
  IconLockFilled,
  IconShieldLockFilled,
  IconUserScan,
  IconKeyFilled,
  IconFingerprint,
  IconPointer,
  IconBellRingingFilled,
  IconWallet
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Private Transactions",
      description:
        "Utilize zkSNARKs to ensure transaction details are encrypted and only validated parties can verify them.",
      icon: <IconLockFilled />,
    },
    {
      title: "Enhanced Security",
      description:
        "Leverage Solana’s native security and use advanced authentication methods to ensure user identity protection.",
      icon: <IconShieldLockFilled />,
    },
    {
      title: "Anonymous User Identity",
      description:
        "Our app ensures that each transaction is unlinkable to personal identifiers, enhancing privacy and anonymity.",
      icon: <IconUserScan />,
    },
    {
      title: "Smart Contract Privacy",
      description: "Smart contracts are designed to handle private transactions with zero-knowledge proofs, ensuring that the logic and outcomes of contracts are executed without revealing sensitive information.",
      icon: <IconKeyFilled />,
    },
    {
      title: "Secure Wallet Integration",
      description: "Seamlessly integrate with secure wallets for managing private transactions.",
      icon: <IconWallet />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Navigate and manage private transactions with ease using an intuitive and user-friendly interface.",
      icon: <IconPointer />,
    },
    {
      title: "Real-Time Transaction Updates",
      description:
        "Users are notified of successful transactions or any issues without compromising confidentiality.",
      icon: <IconBellRingingFilled />,
    },
    {
      title: "And Moreeeeee....",
      description: "We are working on more cool features. Stay tuned.",
      icon: <IconHeart />,
    },
  ];
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
