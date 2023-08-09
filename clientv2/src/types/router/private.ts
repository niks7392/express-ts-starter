import React from "react";


export interface PrivateProps {
    Element: ({...props})=>React.JSX.Element,
    isAllowed : boolean
    props: any
    redirect :string
}