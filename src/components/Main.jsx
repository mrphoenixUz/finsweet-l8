import React from 'react'
import { HowWeWork } from "./How-we-work"
import { Features } from "./Features"

export function Main() {
    return (
        <div className='grow'>
            <section className='mx-auto container'>
                <HowWeWork />
            </section>
            <section className='mx-auto container'>
                <Features />
            </section>
        </div>
    )
}
