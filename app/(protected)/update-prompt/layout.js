
import Nav from "@/app/components/Nav";


const UpdateLayout = ({children}) => {
    return(
        <section className={`w-full`}>
            <Nav />
            {children}
        </section>
    )
}

export default UpdateLayout