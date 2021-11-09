import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { init } from "./utils/functions";
import { useDropzone } from "react-dropzone";
import { ScrollSync } from "react-scroll-sync";
import { useHotkeys } from "react-hotkeys-hook";
import { saveAs } from "file-saver";

const App = () => {
    useEffect(() => {
        init();
    }, []);
    const [text, setText] = useState("");
    useHotkeys(
        "ctrl+s,command+s",
        (event, hotkeys) => {
            event.preventDefault();
            saveAs(new Blob([text], { type: "text/plain" }), "Document.md");
        },
        { enableOnTags: ["TEXTAREA"] }
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: async (files) => {
            const content = await files[0].text();
            setText(content);
        },
    });

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center">
                <div
                    {...getRootProps()}
                    className="mt-8 -mb-8 bg-gray-300 bg-opacity-5 p-5 rounded-md hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer"
                >
                    <input {...getInputProps()} accept=".md,.txt" multiple={false} />
                    {isDragActive ? (
                        <h3 className="dark:text-white">Drop the files here ...</h3>
                    ) : (
                        <h3 className="dark:text-white">
                            Drag 'n' drop some files here, or click to select files
                        </h3>
                    )}
                </div>
            </div>
            <ScrollSync>
                <div className="w-full h-full p-10 flex">
                    <Editor text={text} setText={setText} />
                    <Preview text={text} />
                </div>
            </ScrollSync>
        </>
    );
};

export default App;
