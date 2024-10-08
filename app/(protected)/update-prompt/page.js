"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Form from "@/app/components/Form";
import { useFormState, useFormStatus } from 'react-dom'
import { ForUpdatingPrompt } from '../../lib/actions/updatePrompts';

const UpdatePrompt = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({ prompt: "", tag: "", id: promptId });
  const [result, updatePrompt] = useFormState(ForUpdatingPrompt, undefined)
  const { pending } = useFormStatus()

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "GET",
      });
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tags,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);



  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Form
        type='Edit'
        post={post}
        setPost={setPost}
        submitting={pending}
        handleSubmit={updatePrompt}
      />
    </Suspense>  
    </>
  );
};

export default UpdatePrompt;
