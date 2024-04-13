import React from 'react'
import { Card, Avatar, Text } from '@mantine/core';

export default function Comments() {
  return (
            <div
            // key={item.id}
            className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]"
          >
            <div className="flex items-center gap-2">
              <div className="avatar mx-2 mb-2">
                <div className="w-12 rounded">
                  <img
                     src='../src/assets/react.svg'
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-0">
                <div
                  className="text-black text-center font-semibold"
                  style={{ fontFamily: "Adamina" }}
                >
                  {/* {item.user.username} */}
                  name
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "Adamina" }}
                >
                  position
                </div>
              </div>
            </div>
            <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
            <div className="p-5" style={{ fontFamily: "Adamina" }}>
                comments go here
            </div>
           </div>
  )
}
