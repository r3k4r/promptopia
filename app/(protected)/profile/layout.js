
import Nav from "@/app/components/Nav";


const ProfileLayout = ({children}) => {
    return(
        <section>
            <Nav />
            {children}
        </section>
    )
}

export default ProfileLayout