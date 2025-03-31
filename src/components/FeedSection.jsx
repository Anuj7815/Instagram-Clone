import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const FeedSection = ({ feeds, setSelectedPost, setShowShareModal }) => {
    return (
        <main className="flex-1 p-4 space-y-6 overflow-y-auto h-full">
            {feeds.map((feed) => (
                <div
                    key={feed.id}
                    className="bg-white rounded-xl shadow-md p-4 max-w-lg mx-auto transition-all duration-300 hover:shadow-lg"
                >
                    <div className="flex items-center space-x-3 mb-4">
                        <img
                            src={feed.userImage}
                            alt="user"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-semibold">{feed.username}</span>
                    </div>
                    <img
                        src={feed.postImage}
                        alt="dogs"
                        className="w-full h-96 object-cover rounded mb-4"
                    />
                    <div className="flex items-center space-x-4 text-xl mb-2">
                        <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors" />
                        <FiSend
                            onClick={() => {
                                setSelectedPost(feed);
                                setShowShareModal(true);
                            }}
                            className="cursor-pointer hover:text-blue-500 transition-colors"
                        />
                    </div>
                    <p className="text-sm font-semibold mb-1">
                        Liked by{" "}
                        <span className="font-bold">bennetttheboston</span> and{" "}
                        {feed.likes} others
                    </p>
                    <p>
                        <span className="font-bold">{feed.username}</span>{" "}
                        {feed.comment}
                    </p>
                </div>
            ))}
        </main>
    );
};

export default FeedSection;
