"use client";

import { useEffect, useState } from "react";

const GlobalBody = ({
	children,
}: {
	children: React.ReactNode
}) => {
    const [gapNotSupported, setNotSupported] = useState(false);
    useEffect(() => {
        function testForFlexBox() {
            // see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/flexgap.js
            // create flex container with row-gap set

            var flex = document.createElement('div');
            flex.style.display = 'flex';
            flex.style.flexDirection = 'column';
            flex.style.rowGap = '1px';
        
            // create two elements inside it
            flex.appendChild(document.createElement('div'));
            flex.appendChild(document.createElement('div'));
        
            // append to the DOM (needed to obtain scrollHeight)
            document.documentElement.appendChild(flex);
            var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
            flex?.parentNode?.removeChild(flex);
        
            return isSupported;
        }

        if (window) {
            const gapSupported = testForFlexBox();

            setNotSupported(!gapSupported)
        }
    }, []);
    
    return (
        <body className={`text-white ${gapNotSupported ? 'flex-gap-not-supported' : ''}`}>
            {children}
        </body>
    )

};

export default GlobalBody;