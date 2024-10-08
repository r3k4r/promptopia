"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [image, setImage] = useState(false)
  const [copied, setCopied] = useState("");
  const firstLetter = post?.creator?.FirstName.charAt(0).toUpperCase()
  const secondLetter = post?.creator?.LastName.charAt(0).toUpperCase()
  
  useEffect(() => {
    if(post?.creator?.image){
      setImage(true)
    }
  },[])


  const handleProfileClick = () => {

    if (post?.creator?.id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator.id}?name=${post?.creator?.FirstName}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='flex-1 break-inside-avoid rounded-lg border border-gray-300 dark:border-gray-600 bg-white/20 dark:bg-black/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          {
        image ? 
        <>
          <Image
          src={post?.creator?.image}
          width={40}
          height={40}
          quality={100}
          className='rounded-full'
          alt='profile'
          />
        </>
        :
        <>
        <div className={`w-[35px] h-[35px] p-[20px] rounded-full border-none bg-gray-300 text-black dark:bg-gray-500 dark:text-white  flex items-center justify-center text-md font-normal`}>
            {firstLetter  + secondLetter} 
        </div>
        </>
       }

          <div className='flex flex-col'>
            <h3 className=' font-bold text-gray-900 dark:text-gray-100'>
              {post?.creator?.name}
            </h3>
            <p className=' text-sm text-gray-500 dark:text-gray-400'>
              {post?.creator?.email}
            </p>
          </div>
        </div>

        <div className='w-7 h-7 rounded-full bg-white/10 dark:bg-black/5 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer' onClick={handleCopy}>
          <Image
            src={
              copied === post?.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post?.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className='my-4  text-sm text-gray-700 dark:text-gray-300'>{post?.prompt}</p>
      <p
        className=' text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post?.tags)}
      >
        #{post.tags}
      </p>

      {session?.user?.id === post?.creator?.id && pathName === "/profile" && (
        <div className='mt-5 flex gap-5 items-start justify-start border-t border-gray-100 dark:border-gray-800 pt-3'>
          <p
            className=' text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className=' text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
