import hljs from "highlight.js";
import { useEffect, useRef } from "react";

import { useClipboard } from "@/hooks/use-clipboard";
import { Copy01Icon, Tick01Icon } from "@hugeicons/react-pro-pro";
import { Button } from "./ui/button";
import { Tooltip } from "./ui/tooltip";
// import { Check, Copy } from "@phosphor-icons/react";
import { ibmPlex } from "@/app/fonts";

export type codeBlockProps = {
  lang?: string;
  code?: string;
};

export const CodeBlock = ({ lang, code }: codeBlockProps) => {
  const ref = useRef<HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { copiedText, copy, showCopied } = useClipboard();
  const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";

  useEffect(() => {
    if (ref?.current && code) {
      const highlightedCode = hljs.highlight(language, code).value;
      ref.current.innerHTML = highlightedCode;
    }
  }, [code, language]);

  return (
    <div className="not-prose bg-zinc-50/30 border overflow-hidden border-zinc-50 dark:border-white/5 text-zinc-600 dark:text-white dark:bg-black/20 rounded-xl w-full flex-shrink-0">
      <div className="p-1 w-full flex justify-between items-center border-b border-zinc-50 dark:border-white/5">
        <p className="text-xs px-2 text-zinc-500">{language}</p>
        <Tooltip content={showCopied ? "Copied!" : "Copy"}>
          <Button
            className="!text-xs"
            variant="text"
            size="sm"
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              code && copy(code);
            }}
          >
            {showCopied ? (
              <Tick01Icon size={14} variant="stroke" strokeWidth="2" />
            ) : (
              <Copy01Icon size={14} variant="stroke" strokeWidth="2" />
            )}{" "}
            Copy Code
          </Button>
        </Tooltip>
      </div>
      <pre className="w-full px-6 py-2">
        <code
          style={ibmPlex.style}
          className={`hljs language-${language} tracking-wide whitespace-pre-wrap break-words overflow-x-auto w-full inline-block pr-[100%] text-xs md:text-sm`}
          ref={ref}
        ></code>
      </pre>
    </div>
  );
};
