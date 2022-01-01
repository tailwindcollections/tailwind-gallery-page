<script setup>
import { onMounted, ref } from "vue";

import Logo from "./icons/logo.svg";
import ConversationIcon from "./icons/conversation.svg";
import FireIcon from "./icons/fire.svg";
import StarIcon from "./icons/star.svg";
import SpinnerIcon from "./icons/spinner.svg";
import MenuIcon from "./icons/menu.svg";

const images = ref([]);

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

onMounted(() => {
  fetch(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=people%20and%20nature`
  )
    .then((res) => res.json())
    .then((data) => {
      images.value = data.results;
    });
});
</script>

<template>
  <div class="w-full min-h-screen font-sans text-gray-900">
    <nav class="border-b border-gray-200">
      <div class="px-4 mx-auto max-w-7xl">
        <div class="flex gap-x-2 justify-between items-center md:gap-x-6 h-18">
          <button class="inline-block md:hidden" href="#">
            <MenuIcon class="w-6 h-6 text-gray-900" />
          </button>
          <a class="hidden md:inline-block" href="#"><Logo /> </a>
          <ul class="hidden text-gray-700 md:flex md:gap-x-8 md:items-center">
            <li><a class="font-medium hover:text-gray-900" href="#">Feed</a></li>
            <li><a class="hover:text-gray-900" href="#">Discover</a></li>
            <li><a class="hover:text-gray-900" href="#">Community</a></li>
          </ul>
          <input
            class="hidden sm:inline-block flex-1 py-1.5 px-4 mx-4 text-gray-700 bg-gray-100 rounded-full border border-gray-100 transition focus:outline-none focus:bg-white focus:border-gray-700"
            type="text"
            placeholder="Search"
          />
          <div class="flex flex-row-reverse gap-x-2 items-center md:gap-x-4 lg:flex-row">
            <button class="hidden lg:inline-block">
              <ConversationIcon class="w-7 h-7" />
            </button>
            <button
              class="hidden lg:inline-block py-1.5 px-5 rounded-full border border-gray-200"
            >
              Upload
            </button>
            <button
              class="object-cover overflow-hidden w-10 h-10 rounded-full border border-gray-200"
            >
              <img src="/img/avatar-1.jpeg" alt="" />
            </button>
            <span class="flex gap-x-1 items-center">
              <FireIcon class="w-7 h-7" />
              <button class="text-sm leading-none hover:underline">1,331</button>
            </span>
            <span class="flex gap-x-1 items-center">
              <StarIcon class="w-7 h-7" />
              <button class="text-sm leading-none hover:underline">15.8k</button>
            </span>
          </div>
        </div>
      </div>
    </nav>

    <main class="py-14 px-4 mx-auto max-w-7xl">
      <div>
        <div class="flex items-center">
          <h1 class="text-4xl font-medium">People & Nature</h1>
          <button
            class="ml-4 leading-6 py-1.5 px-5 text-sm text-white bg-indigo-600 rounded-full"
          >
            Follow
          </button>
          <button
            class="ml-2 leading-6 py-1.5 px-5 text-sm rounded-full border border-gray-200"
          >
            Edit
          </button>
        </div>
        <p class="pt-3 text-lg text-gray-700">
          Photos that look like taken straight out of fairy tale book.
        </p>
        <div class="inline-flex gap-x-2 items-center pt-2 text-sm text-gray-500">
          <span>36 photos from 24 people. Curated by</span>
          <img
            class="object-cover w-7 h-7 rounded-full"
            src="/img/avatar-2.jpeg"
            alt=""
          />
          <a href="#" class="hover:text-indigo-600">Alan Prince</a>
        </div>
      </div>

      <div class="flex gap-x-8 items-center pt-12">
        <a href="#" class="text-lg font-medium">Popular</a>
        <a href="#" class="text-lg text-indigo-500">Recent</a>
      </div>
      <div class="gap-6 pt-2 columns-3xs">
        <figure v-for="image in images" class="py-4 [break-inside:avoid]">
          <img
            class="rounded-md"
            :src="image.urls.regular"
            :alt="image.alt_description"
          />
          <figcaption class="mt-2">{{ image.user.name }}</figcaption>
          <p class="text-sm text-gray-500 line-clamp-2">{{ image.description }}</p>
        </figure>
      </div>
      <div class="flex justify-center items-center py-12">
        <SpinnerIcon class="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    </main>
  </div>
</template>
