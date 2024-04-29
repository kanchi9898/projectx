import React, { ReactNode } from 'react'

interface Ichid {
    children: ReactNode
}
const Container: React.FC<Ichid> = ({ children }) => {
    return (
        <div className='px-24'>
            {children}
        </div>
    )
}

export default Container
