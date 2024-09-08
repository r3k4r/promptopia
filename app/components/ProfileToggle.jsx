
import Link from "next/link";
import {DesctopToggle , MobileToggle} from "./ui/Toggle";
import ThemeToggle from "./ThemeToggle";


export const DesktopProfileToggle = ({session}) => {
  return (

    <div className="flex items-center justify-center gap-4">
      <ThemeToggle />
        <Link href={`/create-prompt`}>
          <div className="rounded-full border border-black dark:border-white bg-black dark:bg-white py-1.5 px-5 text-white dark:text-black transition-all hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white text-center text-sm  flex items-center justify-center;
">
            Create Prompt
          </div>
        </Link>
        <DesctopToggle session={session} />
    </div>
  )
}



export const MobileProfileToggle = ({session}) =>{
    return (
      <div className="flex items-center justify-center gap-4">
         <ThemeToggle />
          <MobileToggle session={session} />
      </div>
      )
}
