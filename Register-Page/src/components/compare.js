
import '../App';
export default function Compare({ check: { inf1, inf2, inf3, inf4 } }) {

    return (
        <div className="compare">
            <h3>Name</h3>
            <p className={inf1 ? "check" : null}>Minimum 3 characters</p>
            <p className={inf1 ? "check" : null}>Maximum 16 characters</p>
            <br />
            <h3>Password</h3>
            <p className={inf2 ? "check" : null}>Minimum 8 characters</p>
            <p className={inf2 ? "check" : null}>Maximum 16 characters</p>
            <p className={inf3 ? "check" : null}>Not equal each other</p>
        </div>
    )
}