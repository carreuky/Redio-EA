import React from "react";

export default function SearchInput({setInput}) {
  return (
      <div class="mb-3 w-8/12  lg:pt-0 pt-2 right-0">
        <div class="w-full mb-4">
          <input
            onChange={(e)=>setInput(e.target.value)}
            type="search"
            class=" text-white min-w-0 w-full px-3 py-1.5 border  font-normal  bg-transparent rounded-full transition ease-in-out m-0"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
  );
}