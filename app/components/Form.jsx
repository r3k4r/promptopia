import Link from "next/link";

const Form = ({type, post, setPost, submitting, handleSubmit  }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        action={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className=' font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post?.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            name="text_area"
            placeholder='Write your post here'
            required
            className=' w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0'
          />
        </label>

        <label>
          <span className=' font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post?.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            name="tag"
            type='text'
            placeholder='#Tag'
            required
            className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
          />
        </label>
        <input type="hidden" name="id" value={post?.id} /> 

        <div className='flex items-center justify-start mx-3 mb-5 gap-4'>
          <Link href='/' className='text-red-600 text-sm font-semibold rounded-full transition-all duration-300 px-5 py-1.5 hover:bg-red-600 hover:text-white'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
