"use client";

import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const j2m = require("jira2md");

export default function Home() {
  const [markdown, setMarkdown] = useState(
    "# 마크다운2지라\n\n여기에 마크다운 문법으로 작성하세요..."
  );

  const copyToClipboard = () => {
    const jiraSyntax = j2m.to_jira(markdown);
    navigator.clipboard.writeText(jiraSyntax).then(() => {
      alert("복사 완료되었습니다!");
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] bg-white text-[#333333] font-mono">
      <div className="border-r border-gray-300 flex flex-col justify-between">
        <div>
          <div className="p-2 border-b border-gray-300">
            <h1 className="text-2xl font-bold">M2J</h1>
          </div>
        </div>
        <div className="p-2 border-t border-gray-300">
          <a
            href="https://github.com/yourusername/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 hover:underline text-sm"
          >
            GH
          </a>
          <a
            href="https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline text-sm"
          >
            Blog
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] h-screen">
        <div className="col-span-2 grid grid-cols-2 border-b border-gray-300">
          <h2 className="text-lg font-semibold p-2 border-r border-gray-300 text-[#333333]">
            Markdown Input
          </h2>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold p-2 text-[#333333]">
              Preview
            </h2>
            <button
              onClick={copyToClipboard}
              className="bg-[#333333] text-white font-mono py-1 px-2 m-2"
            >
              Copy as Jira
            </button>
          </div>
        </div>
        <div className="border-r border-gray-300 overflow-auto">
          <textarea
            className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-gray-400 bg-[#f9f8f5]"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div className="overflow-auto bg-[#f9f8f5]">
          <div className="markdown-body p-4">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {markdown}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
