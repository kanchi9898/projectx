import React, { ReactNode } from 'react'

interface Ichid {
    children: ReactNode
}
const Container: React.FC<Ichid> = ({ children }) => {
    return (
        <div className='px-2 sm:px-8 md:px-16 lg:px-24'>
            {children}
        </div>
    )
}

export default Container
