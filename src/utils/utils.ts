import React from "react";

export const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.history.back()
}

export const serviceHandler = async (
    event: React.MouseEvent,
    id: string,
    service: (id: string) => Promise<string>,
    notify: (message: string) => void,
    details?: Book,
) => {
        event.stopPropagation();
        try {
                const res = await service(id);
                notify(res);
        } catch (err: any) {
                notify(err.message);
        }
};