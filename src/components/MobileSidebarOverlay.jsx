import React from "react";
import { FaTimes } from "react-icons/fa";

const MobileSidebarOverlay = ({
    activeTab,
    setActiveTab,
    setShowSidebar,
    sharedCounts,
    usersList,
    messagesData,
    setSelectedChatUser,
}) => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex justify-center items-start pt-5 px-4">
            <div className="bg-white w-full h-full max-w-screen-md rounded-none shadow-lg p-6 space-y-4 relative overflow-y-auto">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-black"
                    onClick={() => setShowSidebar(false)}
                >
                    <FaTimes size={18} />
                </button>

                {/* Tabs */}
                <div className="flex justify-around mb-4">
                    <button
                        className={`px-4 py-2 rounded font-medium ${
                            activeTab === "activity" ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setActiveTab("activity")}
                    >
                        Activity
                    </button>
                    <button
                        className={`px-4 py-2 rounded font-medium ${
                            activeTab === "messages" ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setActiveTab("messages")}
                    >
                        Messages
                    </button>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    {activeTab === "activity" ? (
                        <>
                            <p className="text-sm font-semibold my-3">Today</p>
                            <div className="text-sm mb-4 space-y-4">
                                {["bennetttheboston", "miloandmaizy"].map(
                                    (user, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start space-x-3"
                                        >
                                            <img
                                                src={`https://i.pravatar.cc/150?img=${
                                                    i + 20
                                                }`}
                                                className="w-8 h-8 rounded-full border"
                                                alt={user}
                                            />
                                            <p>
                                                <span className="font-bold">
                                                    {user}
                                                </span>{" "}
                                                liked your{" "}
                                                {i === 0
                                                    ? "post"
                                                    : "comment: woof!"}{" "}
                                                <span className="text-gray-500">
                                                    {i === 0 ? "1h" : "3h"}
                                                </span>
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>

                            <p className="text-sm font-semibold my-3">
                                Yesterday
                            </p>
                            <div className="text-sm mt-2 flex items-start space-x-3">
                                <img
                                    src="https://i.pravatar.cc/150?img=25"
                                    className="w-8 h-8 rounded-full border"
                                    alt="pug.a.dub.dub"
                                />
                                <p>
                                    <span className="font-bold">
                                        pug.a.dub.dub
                                    </span>{" "}
                                    mentioned you in a comment: @goldielocks arf
                                    arf!{" "}
                                    <span className="text-gray-500">1d</span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-1 mb-3 border border-gray-300 rounded text-sm"
                            />
                            {messagesData.map((chat, i) => {
                                const correspondingUser = usersList.find(
                                    (user) => user.name === chat.username
                                );
                                const sharedCount = correspondingUser
                                    ? sharedCounts[correspondingUser.name] || 0
                                    : 0;

                                return (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedChatUser(chat.username);
                                            setShowSidebar(false);
                                        }}
                                        className="flex justify-between items-center py-2 my-2 border-b cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={`https://i.pravatar.cc/150?img=${chat.img}`}
                                                alt={chat.name}
                                                className="w-8 h-8 rounded-full border"
                                            />
                                            <div>
                                                <p className="font-bold text-sm">
                                                    {chat.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {chat.msg}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {sharedCount > 0 && (
                                                <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                                                    {sharedCount}
                                                </span>
                                            )}
                                            {chat.time ? (
                                                <span className="text-xs text-gray-400">
                                                    {chat.time}
                                                </span>
                                            ) : (
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileSidebarOverlay;
