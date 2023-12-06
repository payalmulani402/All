import { useState } from "react"


const MultiStates = () => {
    const [age, setage] = useState(18);
    const [name, setname] = useState("prashant");
    const [name1, setname1] = useState("ps");
    const [todos, settodos] = useState("sharp");

    function box1() {
        setage(age + 1)
    }
    function box2() {
        setname("payal")
    }
    function box3() {
        setname1("komal")
    }
    function box4() {
        settodos("smart komal!")
        settodos("intelligent payal!")
        settodos("clever sagar!")
    }

    function Reset() {
        setage(20)
        setname("urvish")
        setname1("jeni")
        settodos("hensome beby")
    }

    return (
        <div className="flex justify-between bg-slate-600 rounded-2xl">
            <button className="button" onClick={box1}>{age}</button>
            <button className="button" onClick={box2}>{name}</button>
            <button className="button" onClick={box3}>{name1}</button>
            <button className="button" onClick={box4}>{todos}</button>
            <button className="button" onClick={Reset}>reset</button>
        </div>
    )
}

export default MultiStates
