import React from 'react'

export default function Greetings(props) {
    return (
        <div>
            <h1>These greetings are from the API</h1>
            {props.greetings.map((greeting) => {
                return <div key={greeting.message}>
                    <h2>{greeting.message}</h2>
                    </div>
            })}
        </div>
    )
}
