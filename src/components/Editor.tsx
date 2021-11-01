import { ScrollSyncPane } from "react-scroll-sync";
import "highlight.js/styles/atom-one-dark.css";
import CE from "react-simple-code-editor";
import styled from "styled-components";
import hljs from "highlight.js";

const CodeEditor = styled(CE)`
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
    font-size: 20px;
    white-space: pre;
    min-width: 100%;
    min-height: 100%;
    float: left;
    & > textarea,
    & > pre {
        outline: none;
        white-space: pre !important;
    }
`;

const Editor = ({
    text,
    setText,
}: {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <ScrollSyncPane>
            <div className="editor">
                <CodeEditor
                    value={text}
                    onValueChange={(e) => setText(e)}
                    highlight={(e) => hljs.highlight(e, { language: "md" }).value}
                    padding={"1rem"}
                />
            </div>
        </ScrollSyncPane>
    );
};

export default Editor;
