import React from 'react';

function DownloadAppPrompt() {
  return (
    <div className="flex gap-2 p-2 rounded-lg bg-zinc-100 mt-[544px] text-stone-500 max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/171ed8d131461054de6d4843cb33190efdeaa45988fc0b3ddfc2e3a29110b03c?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 my-auto w-10 aspect-square" alt="App icon" />
      <div className="flex flex-col flex-1">
        <div className="text-xl font-medium">Download the app</div>
        <div className="mt-1 text-sm">Get the full experience</div>
      </div>
    </div>
  );
}

export default DownloadAppPrompt;