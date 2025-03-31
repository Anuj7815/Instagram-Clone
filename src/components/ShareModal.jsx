import React from "react";
import { FaTimes } from "react-icons/fa";

const ShareModal = ({
    usersList,
    handleSharePost,
    sharedCounts,
    setShowShareModal,
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-80 relative">
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={() => setShowShareModal(false)}
                >
                    <FaTimes />
                </button>
                <h2 className="text-lg font-bold mb-4">Share Post</h2>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {usersList.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
                            onClick={() => handleSharePost(user)}
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={`https://i.pravatar.cc/150?img=${user.img}`}
                                    className="w-8 h-8 rounded-full border"
                                    alt={user.name}
                                />
                                <span className="text-sm font-medium">
                                    {user.name}
                                </span>
                            </div>
                            <span className="text-xs text-gray-500">
                                {sharedCounts[user.name] || 0}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
