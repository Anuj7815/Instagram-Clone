import React, { useState } from "react";
import {
    Home,
    Search,
    PlusSquare,
    Heart,
    MessageCircle,
    User,
} from "lucide-react";

const Instagram = () => {
    const [activeStory, setActiveStory] = useState(null);
    const stories = [
        {
            username: "bax.te.r",
            time: "12m",
            image: "/api/placeholder/40/40?text=BT",
        },
        {
            username: "pip.plus.puddles",
            time: "43m",
            image: "/api/placeholder/40/40?text=PP",
        },
        {
            username: "teacupcoconut",
            time: "2h",
            image: "/api/placeholder/40/40?text=TC",
        },
        {
            username: "marloandemaizy",
            time: "6h",
            image: "/api/placeholder/40/40?text=MM",
        },
        {
            username: "pug.a.dub.dub",
            time: "9h",
            image: "/api/placeholder/40/40?text=PD",
        },
    ];

    const post = {
        username: "dogsofdurango",
        likes: 1576,
        caption: "SNOW happy to be back in CO",
        image: "/api/placeholder/600/400?text=Snow Dogs",
        comments: [],
    };

    const activities = [
        { username: "bennetttheboston", action: "liked", time: "1h" },
        { username: "miloeandmaizy", action: "liked your comment", time: "1h" },
        { username: "pug.a.dub.dub", action: "mentioned you", time: "1h" },
    ];

    const messages = [
        {
            username: "BAXTER",
            preview: "Great! We'll see you there",
            time: "1h",
        },
        {
            username: "Mario + Maizy",
            preview: "Great! We'll see you there",
            time: "1h",
        },
        {
            username: "pip & puddles",
            preview: "Great! We'll see you there",
            time: "1h",
        },
        { username: "CoCo", preview: "Acting low", time: "1h" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-20 lg:w-64 border-r bg-white p-4 items-center lg:items-start">
                <div className="text-2xl font-bold mb-10 hidden lg:block">
                    Instagram
                </div>
                <nav className="space-y-6 w-full">
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Home className="w-6 h-6 mr-4" />
                        <span className="hidden lg:block">Home</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Search className="w-6 h-6 mr-4" />
                        <span className="hidden lg:block">Search</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <PlusSquare className="w-6 h-6 mr-4" />
                        <span className="hidden lg:block">Create</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Heart className="w-6 h-6 mr-4" />
                        <span className="hidden lg:block">Notifications</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <MessageCircle className="w-6 h-6 mr-4" />
                        <span className="hidden lg:block">Messages</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <User className="w-6 h-6 mr-4" />
                        <span className="hidden lg:block">Profile</span>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex max-w-5xl mx-auto">
                <div className="w-full md:w-2/3 lg:w-1/2 px-4">
                    {/* Stories */}
                    <div className="flex space-x-4 py-4 overflow-x-auto">
                        <div className="flex-shrink-0 text-center cursor-pointer">
                            <div className="w-16 h-16 rounded-full border-2 border-blue-500 p-1">
                                <img
                                    src="/api/placeholder/60/60?text=+"
                                    alt="Your Story"
                                    className="rounded-full"
                                />
                            </div>
                            <span className="text-xs">Your Story</span>
                        </div>
                        {stories.map((story) => (
                            <div
                                key={story.username}
                                className="flex-shrink-0 text-center cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-1">
                                    <img
                                        src={story.image}
                                        alt={story.username}
                                        className="rounded-full"
                                    />
                                </div>
                                <span className="text-xs">
                                    {story.username}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Post */}
                    <div className="bg-white border rounded-lg overflow-hidden mb-4">
                        <div className="flex items-center p-4">
                            <img
                                src="/api/placeholder/40/40?text=DD"
                                alt={post.username}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <span className="font-semibold">
                                {post.username}
                            </span>
                        </div>
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full object-cover"
                        />
                        <div className="p-4">
                            <div className="flex space-x-4 mb-2">
                                <Heart className="w-6 h-6 cursor-pointer" />
                                <MessageCircle className="w-6 h-6 cursor-pointer" />
                            </div>
                            <p className="font-semibold">{post.likes} likes</p>
                            <p>{post.caption}</p>
                        </div>
                    </div>
                </div>

                {/* Activity & Messages */}
                <div className="hidden md:block w-1/3 lg:w-1/2 p-4">
                    <div className="bg-white border rounded-lg p-4 mb-4">
                        <h3 className="font-semibold mb-4">Activity</h3>
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b last:border-b-0"
                            >
                                <div>
                                    <span className="font-semibold">
                                        {activity.username}
                                    </span>{" "}
                                    {activity.action}
                                </div>
                                <span className="text-sm text-gray-500">
                                    {activity.time}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                        <h3 className="font-semibold mb-4">Messages</h3>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b last:border-b-0"
                            >
                                <div>
                                    <span className="font-semibold">
                                        {message.username}
                                    </span>
                                    <p className="text-sm text-gray-500">
                                        {message.preview}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-500">
                                    {message.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;
