import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `SangeetSadhana - ${title}`;
    }, [title])
};

export default useTitle;