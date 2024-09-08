import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 dark:text-white sm:text-xl max-w-2xl text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {
        data.length === 0 ? (
          <p className='desc dark:text-white text-left'>No prompts created</p>
        ):      
        data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))
        }
      </div>
    </section>
  );
};

export default Profile;
