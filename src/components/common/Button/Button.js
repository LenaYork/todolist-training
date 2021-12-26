import "./Button.css";

export function Button(props) {

    function showInnerText() {
        alert(props.text);
    }

    return(
        <button className={props.className} onClick={showInnerText}>
            {props.text} 
        </button> 
    )
}