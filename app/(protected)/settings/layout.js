
import Nav from "@/app/components/Nav";


const SettingLayout = ({children}) => {
    return(
        <section className={`w-full`}>
            <Nav />
            {children}
        </section>
    )
}

export default SettingLayout