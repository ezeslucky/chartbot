import { MainLayout } from "@/components/layout/main-layout";
import {
  AssistantsProvider,
  ChatProvider,
  FiltersProvider,
  PromptsProvider,
} from "@/context";
import React from "react";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChatProvider>
      <FiltersProvider>
        <AssistantsProvider>
          <PromptsProvider>
            <MainLayout>{children}</MainLayout>
          </PromptsProvider>
        </AssistantsProvider>
      </FiltersProvider>
    </ChatProvider>
  );
}
