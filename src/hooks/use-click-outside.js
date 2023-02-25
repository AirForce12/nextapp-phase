import { useCallback, useEffect, useRef } from "react";

function useSticky(onClose) {
    const ref = useRef(null);
    const escapeListener = useCallback(
        (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );
    const clickListener = useCallback(
        (e) => {
            if (!ref.current?.contains(e.target)) {
                onClose?.();
            }
        },
        [onClose]
    );
    useEffect(() => {
        document.addEventListener("click", clickListener);
        document.addEventListener("keyup", escapeListener);
        return () => {
            document.removeEventListener("click", clickListener);
            document.removeEventListener("keyup", escapeListener);
        };
    }, [escapeListener, clickListener]);
    return ref;
}

export default useSticky;
