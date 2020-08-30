import React, {useEffect} from "react";

export default function () {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.heweather.net/standard/static/js/he-standard-common.js?v=1.1";
        document.body.appendChild(script);
    }, [])
    return <div id="he-plugin-standard"></div>
}