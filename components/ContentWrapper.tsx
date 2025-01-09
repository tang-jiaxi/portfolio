import React from "react"

interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <section className="flex flex-col gap-4 md:gap-12">
      {children}
    </section>
  )
}