import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in to CPSLearn",
  description:
    "Sign in to your CPS programme. Access your modules, assessments, feedback and progress through CPSLearn.",
  robots: { index: false, follow: false }, // standalone login screen - keep out of search
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
