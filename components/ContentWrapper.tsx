import React from "react"

interface ContentWrapperProps {
  isBigGap?: boolean;
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ isBigGap = true, children }) => {
  return (
    <section className={`flex flex-col ${isBigGap ? 'gap-4 md:gap-12' : 'gap-[0.75rem] md:gap-6'}`}>
      {children}
    </section>
  )
}