import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();

    function navigate_to() {
        navigate('/Contact')
    }
    return (
        <>
            <h1>home</h1>
            <button onClick={() => { navigate_to() }}>contact</button>
        </>
    )
}