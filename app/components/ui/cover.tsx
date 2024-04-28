import React from 'react'

interface CoverProps {
  title?: string;
}

const Cover = ({ title }: CoverProps) => {
  return (
    <div className={"w-full h-[672px] relative"}>
      <div className={"w-full absolute flex top-0 left-0 right-0 justify-center mt-11"}>
        <h3 className="font-mossport text-5xl text-blue">ОК «ЛУЖНИКИ»</h3>
      </div>
      <div className={
        "bg-[url('/images/desktop/bg/cover-bg.svg')] bg-no-repeat bg-center w-full h-full absolute top-0 left-0 pt-60"
      }>
        {title
          ?
          <div className="z-20 flex justify-center items-center w-[100%] ">
            <h2 className="font-mossport text-8xl text-blue uppercase whitespace-pre-line">{title}</h2>
          </div>
          :
          <div className="bg-[url('/images/desktop/bg/cover-main-text.svg')] bg-no-repeat bg-center w-full h-full absolute top-0 left-0" />
        }
      </div>
      <div className={"absolute bottom-0 left-0 right-0 z-20"}>
        <div className={"flex flex-col justify-center items-center mb-32"}>
          <h2 className="font-mossport text-6xl text-white">
            1 ИЮНЯ
          </h2>
        </div>
      </div>
      {/* <div className="w-full h-full absolute top-0 left-0 z-10 flex">
        <div className={
          "bg-[url('/images/desktop/bg/cover-girl-bg.svg')] bg-no-repeat bg-center flex justify-center items-center w-full h-full"
        } />
        <div className={
          "bg-[url('/images/desktop/bg/cover-boy-bg.svg')] bg-no-repeat bg-center flex justify-center items-center w-full h-full"
        } />
      </div> */}
    </div>
  )
}

export default Cover