import React, { useState } from "react";
import { FaPlusSquare, FaTimes } from "react-icons/fa";
import { db, storage } from "../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const CreatePost = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handlePost = () => {
        if (!selectedFile || !description.trim()) {
            alert("Please add media and description.");
            return;
        }

        // Here you would typically upload to your backend or Firebase
        console.log("Posting:", { file: selectedFile, description });

        // Reset state
        setShowModal(false);
        setSelectedFile(null);
        setDescription("");
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="text-xl hover:text-blue-400 transition-colors cursor-pointer"
                title="Create Post"
            >
                <FaPlusSquare />
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-gray-200 bg-opacity-50 flex items-center justify-center px-4">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
                        >
                            <FaTimes size={18} />
                        </button>

                        <h2 className="text-xl font-bold mb-4">
                            Create a Post
                        </h2>

                        {/* Media Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Image/Media
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block w-full text-sm border rounded p-2"
                            />
                            {selectedFile && (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Preview"
                                    className="mt-3 rounded-lg w-full h-48 object-cover"
                                />
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                rows="3"
                                className="w-full border rounded p-2 text-sm"
                                placeholder="Write a caption..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 rounded bg-gray-200 cursor-pointer hover:bg-gray-300 text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handlePost}
                                className="px-4 py-2 rounded bg-blue-500 cursor-pointer hover:bg-blue-600 text-white text-sm"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreatePost;
