import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const RemoveChapter = ({ closeModal,chapterID }) => {
  const handleRemoveChapter = async () => {
      const id="67eaa843124eb85a51318454";
        const api = await axios.delete(
          `/api/chapterLecture/deleteChapter`,
          {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: chapterID,
          },
          }
        );
        console.log(api);
        closeModal();
      }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full sm:w-[500px] z-50 flex flex-col text-center shadow-lg hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-gray-500 transition-all justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-black underline text-white text-lg my-3">
          Remove Chapter
        </h3>
        <p className="text-sm mb-4">
          Are you sure you want to remove this chapter? This action cannot be
          undone.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
        <button
            className="m-2 rounded-lg p-2 bg-blue-400 w-fit hover:bg-gradient-to-r from-[#ee7f7f] via-[#a377ae] to-[#7bdcd3] hover:text-black font-bold cursor-pointer"
            onClick={handleRemoveChapter}
          >
            Remove
          </button>
          <button
            className="m-2 rounded-lg p-2 bg-blue-400 w-fit hover:bg-gradient-to-r from-[#ee7f7f] via-[#a377ae] to-[#7bdcd3] hover:text-black font-bold cursor-pointer"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default RemoveChapter;
