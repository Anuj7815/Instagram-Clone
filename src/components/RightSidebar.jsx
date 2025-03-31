import React from "react";

const RightSidebar = ({
    sharedCounts,
    usersList,
    messagesData,
    setSelectedChatUser,
}) => {
    return (
        <aside className="w-1/4 max-w-xs p-4 h-full mr-16 overflow-hidden">
            <div className="bg-white rounded-xl shadow-md h-full p-4 space-y-6 overflow-y-auto pr-2">
                {/* Activity Section */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-bold mb-4">Activity</h2>
                    <p className="text-sm font-semibold">Today</p>
                    <div className="text-sm mb-4 space-y-2">
                        {["bennetttheboston", "miloandmaizy"].map((user, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <img
                                    src={`https://i.pravatar.cc/150?img=${
                                        i + 20
                                    }`}
                                    className="w-8 h-8 rounded-full border"
                                    alt={user}
                                />
                                <p>
                                    <span className="font-bold">{user}</span>{" "}
                                    liked your{" "}
                                    {i === 0 ? "post" : "comment: woof!"}{" "}
                                    <span className="text-gray-500">
                                        {i === 0 ? "1h" : "3h"}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm font-semibold">Yesterday</p>
                    <div className="text-sm mt-2 flex items-start space-x-3">
                        <img
                            src="https://i.pravatar.cc/150?img=25"
                            className="w-8 h-8 rounded-full border"
                            alt="pug.a.dub.dub"
                        />
                        <p>
                            <span className="font-bold">pug.a.dub.dub</span>{" "}
                            mentioned you in a comment: @goldielocks arf arf!{" "}
                            <span className="text-gray-500">1d</span>
                        </p>
                    </div>
                </div>

                {/* Messages Section */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold">Messages</h2>
                        <button className="text-sm text-blue-500">✏️</button>
                    </div>
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
                                onClick={() =>
                                    setSelectedChatUser(chat.username)
                                }
                                className="flex justify-between cursor-pointer items-center py-2 border-b"
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
                </div>
            </div>
        </aside>
    );
};

export default RightSidebar;
