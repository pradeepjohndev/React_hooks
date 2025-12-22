export default function W3school() {
    const cars = ["BMW", "VOLVO", "AUDI"]

    return (
        <>
            <h1>New cars are:</h1>
            <ul>
                {cars.map((car, index) => <li key={index}>my car is {car}</li>)}
            </ul>
        </>
    )
}