
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
    <div className="absolute top-0 left-7 xl:left-0 mt-10">
     <BackButton />
     </div>

     <div className={`py-20 lg:pt-5`}>
    <Form
      type='Create'
      submitting={pending}
      handleSubmit={createPrompt}
    />
    </div>

    </>
  );
};

export default CreatePrompt;
