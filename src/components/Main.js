import React from "react";
import {
  BookmarkIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/outline";

const Main = () => {
  return (
    <div className="space-y-3 p-7">
      <div className="space-y-2">
        <p className="text-4xl opacity-90">
          Creative work shows us what’s possible.
        </p>
        <p className="text-4xl">Help fund it here.</p>
      </div>
      <p className="text-slate-500 text-sm pt-5">WITHIN THE LAST DAY</p>
      <div className="grid grid-cols-3 divide-x border p-7 shadow-md mx-8">
        <div>
          <p className="text-3xl text-green-700">50</p>
          <p className="text-slate-500 text-sm">projects funded</p>
        </div>
        <div className="border-x-2">
          <p className="text-3xl text-green-700">$1,922,080</p>
          <p className="text-slate-500 text-sm">towards creative work</p>
        </div>
        <div>
          <p className="text-3xl text-green-700">17,826</p>
          <p className="text-slate-500 text-sm">backings</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 divide-x p-7">
        <div className="text-left space-y-4 cursor-pointer">
          <p className="text-slate-500 font-bold text-sm">FEATURED PROJECT</p>
          <img
            className="w-[40rem]"
            src="https://ksr-ugc.imgix.net/assets/036/763/562/b5222312211eac625e5f9b5b697b236e_original.jpeg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1648128345&auto=format&frame=1&q=92&s=81b5696f2186affcb030204881cff031"
            alt="poster"
          />
          <p className="text-3xl hover:text-green-700 hover:underline underline-offset-4 decoration-2">
            Gratuitous Ninja
          </p>
          <p className="text-lg">
            A sprawling, 600-page graphic novel about Brooklyn’s last shinobi
            family
          </p>
          <p className="text-slate-500 text-sm hover:underline">
            By Beehive Books
          </p>
        </div>
        <div className="text-left space-y-4 pl-16">
          <p className="text-slate-500 font-bold text-sm">
            RECOMMENDED FOR YOU
          </p>
          <div className="flex space-x-3">
            <img
              className="w-44 cursor-pointer"
              src="https://ksr-ugc.imgix.net/assets/036/332/904/e3c17bd3e886d36a0775360587c01850_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1644587733&auto=format&frame=1&q=92&s=df7e075105633fee7db46d164720c657"
              alt="img"
            />
            <div className="space-y-1">
              <p className="text-sm cursor-pointer hover:underline">
                We Cry In Silence By Smita Sharma
              </p>
              <p className="text-sm text-green-700 font-semibold">41% funded</p>
              <p className="text-xs text-slate-500 cursor-pointer hover:underline">
                By L'Association FotoEvidence
              </p>
              <div className="flex space-x-1.5">
                <BookmarkIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
                <ThumbUpIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
                <ThumbDownIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex space-x-3">
            <img
              className="w-44 cursor-pointer"
              src="https://ksr-ugc.imgix.net/assets/036/759/393/3d4956baeea88b86f027d56efd45b464_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1648090825&auto=format&frame=1&q=92&s=cd9dd4850252e86f356f043eb38fe2f8"
              alt="img"
            />
            <div className="space-y-1">
              <p className="text-sm cursor-pointer hover:underline">
                CheerTok: All-in-one Pocket Touchpad for
              </p>
              <p className="text-sm text-green-700 font-semibold">
                5,443% funded
              </p>
              <p className="text-xs text-slate-500 cursor-pointer hover:underline">
                By CheerDots
              </p>
              <div className="flex space-x-1.5">
                <BookmarkIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
                <ThumbUpIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
                <ThumbDownIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex space-x-3">
            <img
              className="w-44 cursor-pointer"
              src="https://ksr-ugc.imgix.net/assets/035/617/511/8a57f9b8434204e9e688fe4f70aab897_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1637184952&auto=format&frame=1&q=92&s=cc148fbcab82c36330c0d9630e2bd7a9"
              alt="img"
            />
            <div className="space-y-1">
              <p className="text-sm cursor-pointer hover:underline">
                Alter Ego
              </p>
              <p className="text-sm text-green-700 font-semibold">
                124% funded
              </p>
              <p className="text-xs text-slate-500 cursor-pointer hover:underline">
                By Linney Incorporated
              </p>
              <div className="flex space-x-1.5">
                <BookmarkIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
                <ThumbUpIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
                <ThumbDownIcon className="h-[1.7rem] w-[1.7rem] p-1 text-black border rounded-full hover:scale-110 cursor-pointer" />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex space-x-5 text-blue-700 justify-end pt-5">
            <ChevronLeftIcon className="w-4 text-slate-500 cursor-pointer" />
            <p className="underline decoration-2 underline-offset-8 cursor-pointer">
              1
            </p>
            <p className="cursor-pointer">2</p>
            <p className="cursor-pointer">3</p>
            <ChevronRightIcon className="w-4 cursor-pointer" />
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4 p-8">
        <div>
          <img
            className="w-[36rem] h-64"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUzuiNvTdi__nQ9hBYKhEchxeE9vUyZSF61t8PIj4azkPeViq"
            alt="big"
          />
        </div>
        <div className="text-left space-y-7">
          <div className="border-l-[6px] border-green-700 space-y-5 px-5">
            <p className="text-3xl hover:text-green-700 hover:underline decoration-2 cursor-pointer">
              Announcing the Kickstarter Community Advisory Council
            </p>
            <p className="text-lg">
              We’re looking to work with creators from across creative
              disciplines to make Kickstarter the best it can be.
            </p>
          </div>
          <p className="text-sm text-blue-700 cursor-pointer hover:underline">
            Learn more and apply
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
