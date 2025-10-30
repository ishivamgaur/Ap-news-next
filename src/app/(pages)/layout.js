"use client";

import Breadcrumb from "@/components/Breadcrumb";

export default function PagesLayout({ children }) {
  return (
    <main className="flex-1 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <Breadcrumb />
        {children}
      </div>
    </main>
  );
}
