import React from 'react';

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbfbc205261173983dd43fd5d6c462c37e2e87a4d9a05042dadf8250443df8e0?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", text: "Home", active: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c27c0c4fd44195156ee61d5ca90c60a9c7494ae8241856a6abdc26d76ed0489a?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", text: "Boards" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4c38191e1e0b805ec7c356849a8acfc6adff314df8c93471e81f02ed04b64ba?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", text: "Settings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79d99ac24097828647978d32badfe9b0aafdf7f70cf8c3a6a968bde1ad4e3650?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", text: "Teams" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2af0310c971f37e3fc2ac4b255ca9d1c6b3ac868610adb0eb8fe24cf1edbb588?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", text: "Analytics" }
];

function NavigationMenu() {
  return (
    <nav>
      {menuItems.map((item, index) => (
        <div key={index} className={`flex gap-3.5 py-2 mt-${index === 0 ? '4' : '2'} text-xl whitespace-nowrap ${item.active ? 'rounded border border-solid bg-zinc-100 border-zinc-300' : ''} text-neutral-500`}>
          <img loading="lazy" src={item.icon} className="shrink-0 w-6 aspect-square" alt="" />
          <div>{item.text}</div>
        </div>
      ))}
    </nav>
  );
}

export default NavigationMenu;