import React from "react";

const LeftSidebar = ({ isTablet, isMobile, usersList }) => {
    if (isMobile) {
        return (
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
                    {usersList.map((user, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center"
                        >
                            <img
                                src={`https://i.pravatar.cc/150?img=${user.img}`}
                                alt={user.name}
                                className="w-10 h-10 rounded-full border-2 border-red-500"
                            />
                            <span className="text-xs mt-1 w-14 truncate">
                                {user.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <aside
            className={`${
                isTablet ? "w-1/3" : "w-1/4"
            } min-w-[200px] max-w-[300px] h-full ml-16 p-4 overflow-hidden hidden sm:block`}
        >
            <div className="bg-white rounded-xl shadow-md h-full p-4 space-y-4 overflow-y-auto pr-2">
                <div className="flex items-center space-x-3">
                    <img
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt="story"
                        className="w-12 h-12 rounded-full border-2 border-pink-500"
                    />
                    <span>Your Story</span>
                </div>
                {usersList.map((user, i) => (
                    <div
                        key={i}
                        className="flex items-center space-x-3 justify-between"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src={`https://i.pravatar.cc/150?img=${user.img}`}
                                alt={user.name}
                                className="w-10 h-10 rounded-full border-2 border-red-500"
                            />
                            <span>{user.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default LeftSidebar;
