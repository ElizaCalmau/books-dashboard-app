import React from "react";

export const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        window.history.back()
}