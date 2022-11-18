"use client"

import { useState } from "react"

const words = ["hello","hi", "cat", "house", "car", "table","audio","video"];

export default function WordGenerator(){
    const [word, setWord] = useState("Nothing yet :(");

    const generate = () => {
        const randmWord = words[Math.floor(Math.random() * words.length)];
        setWord(randmWord);
    }
    return(
        <div>
            <button onClick={generate}>Generate Word</button>
            <div>Generated: {word}</div>
        </div>
    )
}