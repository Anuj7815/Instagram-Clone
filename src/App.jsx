import React, { useState, useEffect } from "react";
import LeftSidebar from "./components/LeftSidebar";
import FeedSection from "./components/FeedSection";
import RightSidebar from "./components/RightSidebar";
import ShareModal from "./components/ShareModal";
import ChatModal from "./components/ChatModal";
import MobileSidebarOverlay from "./components/MobileSidebarOverlay";
import { FaUser } from "react-icons/fa";
import { db } from "./firebaseConfig";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState("activity");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
    const [showShareModal, setShowShareModal] = useState(false);
    const [sharedPosts, setSharedPosts] = useState({});
    const [selectedChatUser, setSelectedChatUser] = useState(null);
    const [sharedCounts, setSharedCounts] = useState({});
    const [selectedPost, setSelectedPost] = useState(null);
    const [chatMessages, setChatMessages] = useState({});
    const [chatInput, setChatInput] = useState("");

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

    const usersList = [
        { id: 1, name: "bax.te.r", img: 2 },
        { id: 2, name: "pip.plus.puddles", img: 3 },
        { id: 3, name: "teacupcoconut", img: 4 },
        { id: 4, name: "marloandmaizy", img: 5 },
        { id: 5, name: "pug.a.dub.dub", img: 6 },
    ];

    const messagesData = [
        {
            name: "BAXTER",
            msg: "Great! We'll see you there",
            time: "1h",
            img: 30,
            username: "bax.te.r",
        },
        {
            name: "Marlo + Maizy",
            msg: "Great! We'll see you there",
            time: "1h",
            img: 31,
            username: "marloandmaizy",
        },
        {
            name: "pip & puddles",
            msg: "Great! We'll see you there",
            time: "1h",
            img: 32,
            username: "pip.plus.puddles",
        },
        {
            name: "CoCo 🌴",
            msg: "Active now",
            time: "",
            img: 33,
            username: "teacupcoconut",
        },
        {
            name: "Pug Dub",
            msg: "Hey there!",
            time: "3h",
            img: 34,
            username: "pug.a.dub.dub",
        },
    ];

    const handleSharePost = async (user) => {
        setSharedCounts((prev) => ({
            ...prev,
            [user.name]: (prev[user.name] || 0) + 1,
        }));

        try {
            await addDoc(collection(db, "chatHistory"), {
                sender: "you",
                receiver: user.name,
                type: "post",
                post: selectedPost,
                timestamp: serverTimestamp(),
            });
            setShowShareModal(false);
        } catch (error) {
            console.error("Error sharing post:", error.message);
        }
    };

    useEffect(() => {
        if (!selectedChatUser) return;
        const q = query(
            collection(db, "chatHistory"),
            orderBy("timestamp", "asc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const history = snapshot.docs
                .map((doc) => doc.data())
                .filter(
                    (item) =>
                        (item.sender === "you" &&
                            item.receiver === selectedChatUser) ||
                        (item.receiver === "you" &&
                            item.sender === selectedChatUser)
                );
            setChatMessages((prev) => ({
                ...prev,
                [selectedChatUser]: history,
            }));
        });
        return () => unsubscribe();
    }, [selectedChatUser]);

    const handleSendMessage = async () => {
        if (!chatInput.trim() || !selectedChatUser) return;
        const messageData = {
            sender: "you",
            receiver: selectedChatUser,
            type: "message",
            text: chatInput,
            timestamp: serverTimestamp(),
        };
        try {
            await addDoc(collection(db, "chatHistory"), messageData);
            setChatInput("");
        } catch (error) {
            console.error("Error sending message:", error.message);
        }
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden font-sans">
            <header className="w-full bg-white py-4 shadow">
                <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Instagram</h1>
                    <div className="flex space-x-6 text-xl cursor-pointer">
                        <FaUser onClick={() => setShowSidebar(!showSidebar)} />
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <LeftSidebar
                    isTablet={isTablet}
                    isMobile={isMobile}
                    usersList={usersList}
                />

                <FeedSection
                    feeds={feeds}
                    setShowShareModal={setShowShareModal}
                    setSelectedPost={setSelectedPost}
                />

                {!isTablet && (
                    <RightSidebar
                        sharedCounts={sharedCounts}
                        usersList={usersList}
                        messagesData={messagesData}
                        setSelectedChatUser={setSelectedChatUser}
                    />
                )}

                {showShareModal && (
                    <ShareModal
                        usersList={usersList}
                        handleSharePost={handleSharePost}
                        sharedCounts={sharedCounts}
                        setShowShareModal={setShowShareModal}
                        selectedPost={selectedPost}
                    />
                )}

                {selectedChatUser && (
                    <ChatModal
                        selectedChatUser={selectedChatUser}
                        setSelectedChatUser={setSelectedChatUser}
                        sharedPosts={sharedPosts}
                        chatMessages={chatMessages}
                        chatInput={chatInput}
                        setChatInput={setChatInput}
                        handleSendMessage={handleSendMessage}
                    />
                )}

                {showSidebar && isTablet && (
                    <MobileSidebarOverlay
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setShowSidebar={setShowSidebar}
                        sharedCounts={sharedCounts}
                        usersList={usersList}
                        messagesData={messagesData}
                        setSelectedChatUser={setSelectedChatUser}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
