
import Link from "next/link";
import {DesctopToggle , MobileToggle} from "./ui/Toggle";
import ThemeToggle from "./ThemeToggle";


export const DesktopProfileToggle = ({session}) => {
  return (

    <div className="flex items-center justify-center gap-4">
      <ThemeToggle />
        <Link href={`/create-prompt`}>
          <div className="black_btn">
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
