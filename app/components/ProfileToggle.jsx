
import Link from "next/link";
import Toggle from "./ui/Toggle";


export const DesktopProfileToggle = ({session}) => {
  return (

    <div className="flex items-center justify-center gap-4">
        <Link href={"/create-prompt"}>
          <div className="black_btn">
            Create Prompt
          </div>
        </Link>
        <Toggle session={session} />
    </div>
  )
}



export const MobileProfileToggle = ({session}) =>{
    return (
      <div className="flex items-center justify-center gap-4">
          <Link href={"/create-prompt"}>
            <div className="black_btn">
              Create Prompt
            </div>
          </Link>
          <Toggle session={session} />
      </div>
      )
}
