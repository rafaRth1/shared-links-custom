"use client";

import PreviewBio from "./_components/preview-bio";
import CustomBio from "./_components/custom-bio";
import AppProvider from "@/context/app-provider/app-provider";

export default function LinksProfile() {
  return (
    <section className="links-profile">
      <h1 className="bg-gradient-to-r text-2xl font-semibold from-primary to-[#feae56] inline-block text-transparent bg-clip-text">
        Personaliza tus enlaces sociales
      </h1>

      <div className="links-profile-content">
        <div className="flex flex-col-reverse lg:flex-row">
          <AppProvider>
            <CustomBio />
            <PreviewBio />
          </AppProvider>
        </div>
      </div>
    </section>
  );
}
