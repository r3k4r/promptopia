'use client'

import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { useSession } from 'next-auth/react'

export default function FaSwitch() {
  const { data: session } = useSession()
  const factorValue = session?.user?.isTwoFactorEnabled ?? false
  const userID = session?.user?.id
  const [isTwoFactor, setIsTwoFactor] = useState(factorValue ?? false)

  useEffect(() => {
    if (factorValue !== undefined) {
      setIsTwoFactor(factorValue)
    }
  }, [factorValue])

  useEffect(() => {
    async function updateTwoFactorStatus() {
      try {
        const response = await fetch(`/api/users/${userID}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            isTwoFactorEnabled: isTwoFactor,
            id: userID
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update two-factor status');
        }
      } catch (err) {
        console.log("Error updating two-factor status: " + err);
      }
    }

    if (userID !== undefined) {
      updateTwoFactorStatus();
    }
  }, [isTwoFactor, userID]);

  return (
    <div className="flex items-center justify-between gap-8 md:gap-0 p-2 border border-gray-200 dark:border-gray-700 rounded-lg dark:bg-white/10">
      <div >
        <p className="text-[12px] md:text-[15px] font-semibold">Two Factor Authentication</p>
        <p className="text-[11px] md:text-[12px] leading-[1rem] text-gray-600 dark:text-gray-400">Enable two factor authentication for your account</p>
      </div>

      <div>
        <Switch
          checked={isTwoFactor}
          onChange={setIsTwoFactor}
          className={`${isTwoFactor ? 'bg-blue-600' : 'bg-'}
          relative inline-flex h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
        >
          <span
            aria-hidden="true"
            className={`${isTwoFactor ? 'translate-x-6' : 'translate-x-0'}
              pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  )
}
