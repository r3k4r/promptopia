import {auth } from "@/auth"


const settings = async () => {
    const session = await auth()

return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}

export default settings