import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { Button, Modal } from 'antd';
import { Input } from 'antd';
import axios from 'axios';

const Side = () => {
  return (
    <div className="w-[290px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[25px] pb-3.5 pr-[29px] pl-[30px] box-border gap-[10px] text-33xl text-steelblue-200">
              <div className="w-[290px] h-[360px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden" />
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[19px] text-xs ">
                <div className="relative uppercase inline-block min-w-[124px] z-[1]">
                  your dashboard
                </div>
                <div className="w-[88px] relative [text-decoration:underline] uppercase text-steelblue-200 text-right inline-block min-w-[88px] z-[1]">
                  go to stats
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px]">
                <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-200" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[60px] z-[1] mq450:text-12xl mq1050:text-23xl text-blue-600 text-4xl">
                  33
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-4 pl-[13px] mt-[-11px] text-sm ">
                  <div className="relative leading-[150%] inline-block min-w-[31px] z-[1]">
                    likes
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[52px] z-[1] mq450:text-12xl mq1050:text-23xl text-blue-600 text-4xl">
                  15
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 mt-[-11px] text-sm ">
                  <div className="relative leading-[150%] inline-block min-w-[77px] z-[1]">
                    posts feed
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[32px] z-[1] mq450:text-12xl mq1050:text-23xl text-blue-600 text-4xl">
                  9
                </div>
                <div className="relative text-sm leading-[150%]  z-[1] mt-[-4px]">
                  idea feed
                </div>
              </div>
            </div>
  )
}

export default Side