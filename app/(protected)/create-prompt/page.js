
'use client'

import BackButton from "@/app/components/ui/BackButton"
import { useFormState, useFormStatus } from 'react-dom'
import {ForCreatingPrompts} from '@/app/lib/actions/createPrompt'
import Form from '../../components/Form';

const CreatePrompt = () => {
    const [result, createPrompt] = useFormState(ForCreatingPrompts, undefined)
    const { pending } = useFormStatus()




  return (
    <>
      <Form
        type='Create'
        submitting={pending}
        handleSubmit={createPrompt}
      />
    </>
  );
};

export default CreatePrompt;
