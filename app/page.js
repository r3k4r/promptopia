import Nav from "./components/Nav";
import Feed from "./components/Feed";

const page = () => {
  return (
    <>
    <Nav />

<section className='w-full flex justify-center items-center flex-col'>
    <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center dark:text-white'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center dark:text-gray-400'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section> 
  
</>
)
}

export default page