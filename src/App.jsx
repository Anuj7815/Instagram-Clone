import React, { useState, useEffect } from "react";
import {
    FaHome,
    FaSearch,
    FaRegHeart,
    FaPaperPlane,
    FaUser,
    FaTimes,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState("activity");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 550);
            setIsTablet(window.innerWidth <= 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const feeds = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        username: "dogsofdurango",
        userImage: `https://i.pravatar.cc/150?img=${10 + i}`,
        postImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
        likes: 1576 + i,
        comment: "SNOW! Happy to be back in CO",
    }));

    return (
        <div className="flex flex-col h-screen overflow-hidden font-sans">
            {/* Top Navbar */}
            <header className="w-full bg-white py-4 shadow">
                <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Instagram</h1>
                    <div className="flex space-x-6 text-xl cursor-pointer">
                        <FaUser onClick={() => setShowSidebar(!showSidebar)} />
                    </div>
                </div>
            </header>

            {/* Left users sidebar above feed (for mobile only) */}
            {isMobile && (
                <div className="w-full px-4 py-3 overflow-x-auto whitespace-nowrap bg-white shadow z-10">
                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="story"
                                className="w-12 h-12 rounded-full border-2 border-pink-500"
                            />
                            <span className="text-xs mt-1">Your Story</span>
                        </div>
                        {[
                            "bax.te.r",
                            "pip.plus.puddles",
                            "teacupcoconut",
                            "marloandmaizy",
                            "pug.a.dub.dub",
                        ].map((user, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center"
                            >
                                <img
                                    src={`https://i.pravatar.cc/150?img=${
                                        i + 2
                                    }`}
                                    alt={user}
                                    className="w-10 h-10 rounded-full border-2 border-red-500"
                                />
                                <span className="text-xs mt-1 w-14 truncate">
                                    {user}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Main layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar (visible always but responsive width) */}
                <aside
                    className={`${
                        isTablet ? "w-1/3" : "w-1/4"
                    } min-w-[200px] max-w-[300px] h-full ml-10 p-4 overflow-hidden hidden sm:block`}
                >
                    <div
                        className="bg-white rounded-xl shadow-md h-full p-4 space-y-4 overflow-y-auto pr-2"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        <style>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="story"
                                className="w-12 h-12 rounded-full border-2 border-pink-500"
                            />
                            <span>Your Story</span>
                        </div>
                        {[
                            "bax.te.r",
                            "pip.plus.puddles",
                            "teacupcoconut",
                            "marloandmaizy",
                            "pug.a.dub.dub",
                            "bennetttheboston",
                            "bebop",
                            "doughedoodle",
                            "dogsofdurango",
                        ].map((user, i) => (
                            <div
                                key={i}
                                className="flex items-center space-x-3"
                            >
                                <img
                                    src={`https://i.pravatar.cc/150?img=${
                                        i + 2
                                    }`}
                                    alt={user}
                                    className="w-10 h-10 rounded-full border-2 border-red-500"
                                />
                                <span>{user}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Feed */}
                <main className="flex-1 p-4 space-y-6 overflow-y-auto h-full">
                    {feeds.map((feed) => (
                        <div
                            key={feed.id}
                            className="bg-white rounded-xl shadow-md p-4 max-w-lg mx-auto"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <img
                                    src={feed.userImage}
                                    alt="user"
                                    className="w-10 h-10 rounded-full"
                                />
                                <span className="font-semibold">
                                    {feed.username}
                                </span>
                            </div>
                            <img
                                src={feed.postImage}
                                alt="dogs"
                                className="w-full h-96 object-cover rounded mb-4"
                            />
                            <div className="flex items-center space-x-4 text-xl mb-2">
                                <FaRegHeart />
                                <FiSend />
                            </div>
                            <p className="text-sm font-semibold mb-1">
                                Liked by{" "}
                                <span className="font-bold">
                                    bennetttheboston
                                </span>{" "}
                                and {feed.likes} others
                            </p>
                            <p>
                                <span className="font-bold">
                                    {feed.username}
                                </span>{" "}
                                {feed.comment}
                            </p>
                        </div>
                    ))}
                </main>

                {!isTablet && (
                    <aside className="w-1/4 max-w-xs p-4 h-full mr-10 overflow-hidden">
                        <div className="bg-white rounded-xl shadow-md h-full p-4 space-y-6 overflow-y-auto pr-2">
                            {/* Activity Section */}
                            <div className="bg-white p-4 rounded-xl shadow">
                                <h2 className="font-bold mb-4">Activity</h2>
                                <p className="text-sm font-semibold">Today</p>
                                <div className="text-sm mb-4 space-y-2">
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
                                <p className="text-sm font-semibold">
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
                                        mentioned you in a comment: @goldielocks
                                        arf arf!{" "}
                                        <span className="text-gray-500">
                                            1d
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Messages Section */}
                            <div className="bg-white p-4 rounded-xl shadow">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="font-bold">Messages</h2>
                                    <button className="text-sm text-blue-500">
                                        ✏️
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full p-1 mb-3 border border-gray-300 rounded text-sm"
                                />
                                {[
                                    {
                                        name: "BAXTER",
                                        msg: "Great! We'll see you there",
                                        time: "1h",
                                        img: 30,
                                    },
                                    {
                                        name: "Marlo + Maizy",
                                        msg: "Great! We'll see you there",
                                        time: "1h",
                                        img: 31,
                                    },
                                    {
                                        name: "pip & puddles",
                                        msg: "Great! We'll see you there",
                                        time: "1h",
                                        img: 32,
                                    },
                                    {
                                        name: "CoCo 🌴",
                                        msg: "Active now",
                                        time: "",
                                        img: 33,
                                    },
                                ].map((chat, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center py-2 border-b"
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
                                        {chat.time ? (
                                            <span className="text-xs text-gray-400">
                                                {chat.time}
                                            </span>
                                        ) : (
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                )}
            </div>

            {/* Right section in popup for tablet/mobile */}
            {showSidebar && isTablet && (
                <div className="fixed inset-0 bg-white z-50 flex justify-center items-start pt-5 px-4">
                    <div className="bg-white w-full h-full max-w-screen-md rounded-none shadow-lg p-6 space-y-4 relative overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                            onClick={() => setShowSidebar(false)}
                        >
                            <FaTimes size={18} />
                        </button>
                        <div className="flex justify-around mb-4">
                            <button
                                className={`px-4 py-2 rounded font-medium ${
                                    activeTab === "activity"
                                        ? "bg-gray-200"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("activity")}
                            >
                                Activity
                            </button>
                            <button
                                className={`px-4 py-2 rounded font-medium ${
                                    activeTab === "messages"
                                        ? "bg-gray-200"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("messages")}
                            >
                                Messages
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            {activeTab === "activity" ? (
                                <>
                                    {/* <h2 className="font-bold mb-4">Activity</h2> */}
                                    <p className="text-sm font-semibold my-3">
                                        Today
                                    </p>
                                    <div className="text-sm mb-4 space-y-4">
                                        {[
                                            "bennetttheboston",
                                            "miloandmaizy",
                                        ].map((user, i) => (
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
                                        ))}
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
                                            mentioned you in a comment:
                                            @goldielocks arf arf!{" "}
                                            <span className="text-gray-500">
                                                1d
                                            </span>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* <h2 className="font-bold mb-2">Messages</h2> */}
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full p-1 mb-3 border border-gray-300 rounded text-sm"
                                    />
                                    {[
                                        {
                                            name: "BAXTER",
                                            msg: "Great! We'll see you there",
                                            time: "1h",
                                            img: 30,
                                        },
                                        {
                                            name: "Marlo + Maizy",
                                            msg: "Great! We'll see you there",
                                            time: "1h",
                                            img: 31,
                                        },
                                        {
                                            name: "pip & puddles",
                                            msg: "Great! We'll see you there",
                                            time: "1h",
                                            img: 32,
                                        },
                                        {
                                            name: "CoCo 🌴",
                                            msg: "Active now",
                                            time: "",
                                            img: 33,
                                        },
                                    ].map((chat, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between items-center py-2 my-2 border-b"
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
                                            {chat.time ? (
                                                <span className="text-xs text-gray-400">
                                                    {chat.time}
                                                </span>
                                            ) : (
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
