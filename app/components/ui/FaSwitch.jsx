'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function FaSwitch() {
  const [enabled, setEnabled] = useState(false)
    console.log(enabled)

  return (
    <div className="flex items-start justify-between">
        <div>
            <p className="font-semibold">Two Factor Authentication</p>
        </div>

        <div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-blue-600' : 'bg-blue-300'}
                relative inline-flex h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
                <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
                    pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>

    </div>
  )
}
