
import Nav from "@/app/components/Nav";


const ProfileLayout = ({children}) => {
    return(
        <section className={`w-full`}>
            <Nav />
            {children}
        </section>
    )
}

export default ProfileLayout