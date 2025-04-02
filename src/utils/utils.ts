import React from "react";

export const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.history.back()
}