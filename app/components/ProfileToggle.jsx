
import Toggle from "./ui/Toggle";


export const DesktopProfileToggle = ({session}) => {
  return (

    <div className="flex flex-row-reverse items-center justify-center gap-4">
      <div>
        <Toggle session={session} />
      </div>  
    </div>
  )
}



export const MobileProfileToggle = () =>{
    return (
        <div>hahah</div>
      )
}
