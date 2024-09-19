"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/prompt");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAllPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchText) => {
    const trimmedText = searchText.trim().toLowerCase(); // Normalize the search text to lowercase
    return allPosts.filter(
      (item) =>
        item?.creator?.name?.toLowerCase().includes(trimmedText) ||
        item?.tags?.toLowerCase().includes(trimmedText) ||
        item?.prompt?.toLowerCase().includes(trimmedText)
    );
  };
  

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim() === "") {
      setSearchedResults([]);
      return;
    }

    setTimeout(() => {
      const searchResult = filterPrompts(text);
      setSearchedResults(searchResult);
    }, 500);
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    // Directly filter using the tagName
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          className='block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 py-2.5 pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
