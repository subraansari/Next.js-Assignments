import Link from "next/link";
export default function Navbar(){
    return(
        
        <div className = " h-14 py-2 px-3 flex justify-around items-center bg-teal-600  text-zinc-50">
            <Link href="/" > <b>Home</b></Link>
            <Link href="/about" > <b>About</b></Link>
            <Link href="/job" > <b>Job</b></Link>
            <Link href="/job/programming" > <b>Programming</b></Link>
            <Link href="/services" > <b>Services</b></Link>
            <Link href="/contact" > <b>contact</b></Link>
            <br />
            </div>
    )
}
