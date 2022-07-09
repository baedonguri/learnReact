import React from "react";

function Hello({color, name, isSpecial}) {
    return (
    <div style={{color}}>
        {/* {isSpecial ? <b>*</b> : null} */}
        {isSpecial && <b>*</b>}
        안녕하세요 {name}</div> // babel이 JSX를 JS로 변환해줌
    )
}

Hello.defaultProps = {
    name : 'UNKNOWN',
    color : 'aqua'
}

export default Hello;



