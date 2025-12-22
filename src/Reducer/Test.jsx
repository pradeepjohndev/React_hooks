/* export default function Test(props) {
    let val
    let {fruit} = props
    if (fruit < 10) {
        val = "less then 10"
    }
    else {
        val = "greater then 10"
    }

    return (
        <>
            <h1>{fruit}</h1>
            <h2>{val}</h2>
            <h1>{fruit<10?"less then 10":"less than 5"}</h1>
        </>
    )
} */
import False from './False'
import True from './True'

export default function Test(props) {
    const { val } = props.val
    if (val) {
        return <True />;
    }
    else {
        return <False />;
    }
}