import React from 'react'

interface CoverProps {
  title?: string;
}

const Cover = ({ title }: CoverProps) => {
  return (
    <div className={"w-full h-[489px] md:h-[720px] md:mb-16 relative"}>
      <div className={"w-full absolute flex top-0 left-0 right-0 justify-center md:mt-11 z-20"}>
        <h3 className="font-mossport text-5xl text-blue">ОК «ЛУЖНИКИ»</h3>
      </div>
      <div className={
        "bg-[url('/images/mobile/bg/cover-bg.svg')] md:bg-[url('/images/desktop/bg/cover-bg.svg')] bg-no-repeat bg-cover md:bg-contain bg-center w-full h-full absolute top-0 left-0"
      }>
        {title
          ?
          <div className="z-20 flex justify-center items-center h-[100%] w-[100%] ">
            <h2 className="font-mossport text-6xl md:text-8xl text-blue uppercase whitespace-pre-line">{title}</h2>
          </div>
          :
          <div className="bg-[url('/images/mobile/bg/cover-main-text.svg')] md:bg-[url('/images/desktop/bg/cover-main-text.svg')] bg-no-repeat bg-center w-full h-full absolute top-0 left-0" />
        }
      </div>
      <div className={"absolute bottom-0 left-0 right-0 z-20"}>
        <div className={"flex flex-col justify-center items-center mb-[90px] md:mb-32"}>
          <h2 className="font-mossport text-5xl md:text-6xl text-white">
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