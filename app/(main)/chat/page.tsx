"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChatMain, ChatSidebar } from "@/components/chat";

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full w-full overflow-hidden bg-gray-50">
      {/* Mobile Sidebar Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      {/* Left Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-full transform bg-gray-50 transition-transform duration-300 ease-in-out md:relative md:w-[30%] md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full w-full border-r border-gray-200">
          <ChatSidebar />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-full md:w-[70%]">
        <ChatMain />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
