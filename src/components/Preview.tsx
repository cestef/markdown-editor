import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { ScrollSyncPane } from "react-scroll-sync";
const md = new Remarkable("full", {
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch {}

        return "";
    },
    html: true,
});
const Preview = ({ text }: { text: string }) => {
    return (
        <ScrollSyncPane>
            <div
                className="editor"
                dangerouslySetInnerHTML={{ __html: md.render(text) }}
                id="preview"
            />
        </ScrollSyncPane>
    );
};

export default Preview;
