import { UserButton } from "@clerk/nextjs"

// Confirming if layout is working
async function Page() {
    return(
        <main>
            <h1 className="head-text">Onboarding</h1>
            <UserButton/>
        </main>
    )
}

export default Page