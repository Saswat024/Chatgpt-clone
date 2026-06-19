import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import moment from 'moment'
import Markdown from 'react-markdown'
import Prism from 'prismjs'

const Message = ({ message }) => {

  useEffect(() => {
    Prism.highlightAll()
  }, [message.content])

  return (
    <div>
      {message.role === "user" ? (
        <div className="flex items-start justify-end my-4 gap-3">
          <div className="flex flex-col gap-2 p-2 px-4 bg-slate-200 dark:bg-[#57317C]/30 rounded-tl-lg rounded-br-lg rounded-bl-lg max-w-xl">
            <p className="text-md text-gray-700 dark:text-primary pr-2 font-medium">
              {message.content}
            </p>
            <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {moment(message.timestamp).fromNow()}
            </span>
          </div>
          <img src={assets.user_icon} alt="" className="w-8 rounded-full" />
        </div>
      ) : (
        <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-slate-600/20 dark:bg-[#AD74DE]/30 rounded-tr-lg rounded-br-lg rounded-bl-lg my-4">
          {message.isImage ? (
            <img
              src={message.content}
              className="w-full max-w-md mt-2 rounded-md"
              alt=""
            />
          ) : (
            <div className="text-md dark:text-primary reset-tw">
              <Markdown>{message.content}</Markdown>
            </div>
          )}
          <span className="text-xs text-gray-500 dark:text-[#B1A6C0]">
            {moment(message.timestamp).fromNow()}
          </span>
        </div>
      )}
    </div>
  );
}

export default Message