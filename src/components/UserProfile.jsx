import React from "react";
import { FaTimes } from "react-icons/fa";

const UserProfile = ({ username, setShowProfile }) => {
    const dummyProfile = {
        username: username,
        name: "Dog of Durango",
        profileImage: `https://i.pravatar.cc/150?u=${username}`,
        posts: 24,
        followers: 982,
        following: 115,
        bio: "Lover of snow 🐾 | Back in Colorado!",
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-200 bg-opacity-40 px-4">
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 relative overflow-auto max-h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={() => setShowProfile(false)}
                    className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-black"
                >
                    <FaTimes size={20} />
                </button>

                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 mb-6">
                    <img
                        src={dummyProfile.profileImage}
                        alt={dummyProfile.username}
                        className="w-24 h-24 rounded-full border-2 border-pink-400"
                    />
                    <div className="mt-4 sm:mt-0 text-center sm:text-left">
                        <h3 className="text-lg font-bold">
                            @{dummyProfile.username}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {dummyProfile.name}
                        </p>
                        <p className="text-sm mt-2 text-gray-700">
                            {dummyProfile.bio}
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-around text-center border-t border-b py-4 mb-6">
                    <div>
                        <p className="font-bold text-lg">
                            {dummyProfile.posts}
                        </p>
                        <p className="text-sm text-gray-500">Posts</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">
                            {dummyProfile.followers}
                        </p>
                        <p className="text-sm text-gray-500">Followers</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">
                            {dummyProfile.following}
                        </p>
                        <p className="text-sm text-gray-500">Following</p>
                    </div>
                </div>

                {/* User Posts Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-full aspect-square bg-gray-100 rounded-md hover:opacity-90 transition"
                        >
                            <img
                                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                                alt={`Post ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
