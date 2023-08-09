import { Navigate } from "react-router-dom"
import { PrivateProps } from "../../types/router/private"
import React from "react";


function Private({ Element, isAllowed, redirect, ...props }: PrivateProps) {
    if (!isAllowed) return <Navigate to={redirect} replace />
    return <Element {...props} />
}

export default Private