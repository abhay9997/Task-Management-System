import React from 'react';

const features = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/99006e5727a7987d1dc4926ef781fa351deacabe20d386160842d9122113337d?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833",
    title: "Introducing tags",
    description: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e19363457f1663616f084d58fe351c8b2fab10ee443f3922ec030feb589189c?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833",
    title: "Share Notes Instantly",
    description: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/796f7b4ef85a326beb432b30fde8c7e67612a58a30a16d0c7e693528f0fd94f6?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833",
    title: "Access Anywhere",
    description: "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
  }
];

function FeatureCard({ image, title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-2.5 p-4 w-full bg-white rounded-lg border border-solid border-zinc-100 max-md:mt-2">
        <img loading="lazy" src={image} className="shrink-0 my-auto aspect-[1.27] w-[77px]" alt="" />
        <div className="flex flex-col flex-1">
          <div className="text-base font-semibold text-neutral-500">{title}</div>
          <div className="mt-1 text-sm text-zinc-500">{description}</div>
        </div>
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="mt-4 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;