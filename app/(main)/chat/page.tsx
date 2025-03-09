import { ChatMain, ChatSidebar } from "@/components/chat";

export default function ChatPage() {
  return (
    <div className="flex h-full w-full overflow-hidden bg-gray-50">
      {/* Left Sidebar (30% width) */}
      <div className="w-[30%] border-r border-gray-200">
        <ChatSidebar />
      </div>

      {/* Main Chat Area (70% width) */}
      <div className="w-[70%]">
        <ChatMain />
      </div>
    </div>
  );
}
