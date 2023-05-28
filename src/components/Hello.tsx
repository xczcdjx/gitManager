import React from "react";
// import PropTypes from "prop-types";
type Text={
    message?:string
}
export const Hello:React.FC<Text> = ({message}) => {
    return (
        <>{message}</>
    );
}
/*Hello.propTypes={
    message:PropTypes.string
}*/
Hello.defaultProps={
    message:'张三'
}
