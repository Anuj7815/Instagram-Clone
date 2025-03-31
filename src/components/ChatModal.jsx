import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import UserProfile from "./UserProfile";

const ChatModal = ({
    selectedChatUser,
    setSelectedChatUser,
    sharedPosts,
    chatMessages,
    chatInput,
    setChatInput,
    handleSendMessage,
}) => {
    const [showProfile, setShowProfile] = useState(false);
    if (showProfile) {
        return (
            <UserProfile
                username={selectedChatUser}
                setShowProfile={setShowProfile}
            />
        );
    }
    return (
        <div
            className={`fixed z-50 shadow-lg flex flex-col border border-gray-200 bg-white transition-transform animate-slideIn ${
                window.innerWidth <= 1024
                    ? "top-0 left-0 w-full h-full"
                    : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] max-h-[90vh]"
            }`}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-100">
                <div
                    className="flex items-center space-x-3"
                    onClick={() => setShowProfile(true)}
                >
                    <img
                        src={`https://i.pravatar.cc/150?u=${selectedChatUser}`}
                        alt={selectedChatUser}
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-base font-semibold text-gray-800">
                        Chat with {selectedChatUser}
                    </span>
                </div>
                <button
                    onClick={() => setSelectedChatUser(null)}
                    className="text-gray-500 hover:text-gray-800"
                >
                    <FaTimes size={18} />
                </button>
            </div>

            {/* Shared Posts + Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {(sharedPosts[selectedChatUser] || []).length > 0 && (
                    <>
                        <p className="text-sm font-semibold text-gray-600">
                            Shared Posts
                        </p>
                        {sharedPosts[selectedChatUser].map((post, i) => (
                            <div
                                key={i}
                                className="rounded-lg overflow-hidden w-1/2 shadow border border-gray-100"
                            >
                                <img
                                    src={post.postImage}
                                    alt="Shared Post"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-3 bg-white">
                                    <p className="font-medium text-sm text-gray-700">
                                        @{post.username}
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        {post.comment}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                )}

                <div className="space-y-3 mt-6">
                    <p className="text-sm font-semibold text-gray-600">
                        Messages
                    </p>

                    {(chatMessages[selectedChatUser] || []).map((item, i) =>
                        item.type === "message" ? (
                            <div
                                key={i}
                                className={`p-2 rounded-lg text-sm max-w-[50%] ${
                                    item.sender === "you"
                                        ? "bg-blue-100 ml-auto text-right"
                                        : "bg-gray-100"
                                }`}
                            >
                                {item.text}
                            </div>
                        ) : (
                            <div
                                key={i}
                                className="rounded-lg overflow-hidden w-1/2 shadow border border-gray-100"
                            >
                                <img
                                    src={item.post.postImage}
                                    alt="Shared Post"
                                    className="w-full h-60 object-contain"
                                />
                                <div className="p-3 bg-white">
                                    <p className="font-medium text-sm text-gray-700">
                                        @{item.post.username}
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        {item.post.comment}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Chat Input */}
            <div className="border-t p-3 bg-white flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatModal;
