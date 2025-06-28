import React, { useState } from "react";

const PostEditor = ({ onPublish, isAuthenticated, onRequireAuth }) => {
  const [text, setText] = useState("");

  const handlePublish = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      onRequireAuth();
      return;
    }
    if (text.trim()) {
      onPublish(text);
      setText("");
    }
  };

  const handleDelete = () => setText("");

  const notImplemented = () => alert("function not implemented");

  return (
    <form
      className="bg-white rounded-xl shadow-lg p-0 flex flex-col gap-0 w-full max-w-xl mx-auto"
      onSubmit={handlePublish}
    >
      <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b">
        <div className="flex items-center gap-2">
          <select
            className="border rounded px-2 py-1 text-sm"
            defaultValue="Paragraph"
            disabled
          >
            <option>Paragraph</option>
          </select>
          <button
            type="button"
            className="font-bold px-1 rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            onClick={notImplemented}
          >
            B
          </button>
          <button
            type="button"
            className="italic px-1 rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            onClick={notImplemented}
          >
            I
          </button>
          <button
            type="button"
            className="underline px-1 rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            onClick={notImplemented}
          >
            U
          </button>
          <button
            type="button"
            className="px-1 rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            onClick={notImplemented}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <circle cx="3" cy="6" r="1" />
              <circle cx="3" cy="12" r="1" />
              <circle cx="3" cy="18" r="1" />
            </svg>
          </button>
          <button
            type="button"
            className="px-1 rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            onClick={notImplemented}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 8h8v8H8z" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-100 p-2 rounded-full hover:bg-red-200 w-8 h-8 flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="red"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18" />
            <path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M5 6V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>

      <div className="flex items-start px-4 py-3">
        {/* <span className="text-2xl mt-1 mr-2">😊</span> */}
        <textarea
          className="w-full border-0 outline-none resize-none min-h-[40px] text-gray-700 text-base placeholder-gray-400 bg-transparent"
          placeholder="How are you feeling today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!isAuthenticated}
        />
      </div>

      <div className="flex items-center justify-between px-4 pb-4 pt-2 border-t">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={notImplemented}
            className="text-xl rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
          >
            +
          </button>
          <button
            type="button"
            onClick={notImplemented}
            className="text-xl rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zm-5 9v-2h-2v2h2z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={notImplemented}
            className="text-xl rounded hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 10.5V6c0-1.1-.9-2-2-2H5C3.9 4 3 4.9 3 6v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" />
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold disabled:opacity-50 flex items-center gap-2 hover:bg-indigo-700"
          disabled={!text.trim()}
        >
          <span className="hidden sm:inline">Publish</span>
          <span className="sm:hidden">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default PostEditor;
