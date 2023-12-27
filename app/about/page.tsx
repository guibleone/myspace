import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Metadata } from "next"

export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Sobre a NextSpace',
}

export default function About() {
    return (
        <main className="px-8 py-10">
            <MaxWidthWrapper>
            <h1 className="text-3xl font-bold">Sobre</h1>
            <p>Nós somos uma empresa de media digital!</p>
            </MaxWidthWrapper>
        </main>
    )
}