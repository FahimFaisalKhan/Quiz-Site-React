import React from "react";

const Blog = () => {
  return (
    <section class="container mx-auto glass lg:h-screen mt-10 rounded-lg flex flex-col items-center justify-center text-neutral-content gap-y-5">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ What is the purpose of react-router?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">react-router:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL without visible
            reloading, and keeps the UI in sync with the URL.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          ♦ How does context-api work?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">context-api:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-primary bg-neutral rounded-box md:w-8/12"
      >
        <div class="collapse-title text-2xl font-medium">
          Q1.What is useRef in React?
        </div>
        <div class="collapse-content font-semibold">
          <p class="text-2xl">useRef:</p>
          <p class="bg-neutral-focus rounded-lg p-4 mt-2 text-xl">
            useRef is a hook which returns an object with a current property set
            to the value passed to the hook.This object is mutable so the
            current property can be changed. Importantly this object exists
            outside of React’s render cycle, so the value persists throughout a
            components lifecycle. It also provides a way for developers to
            interact directly with DOM nodes, outside of React’s management of
            the Virtual DOM. React describes this an <i>escape hatch</i>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
