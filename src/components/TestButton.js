import { useEffect, useState } from "react";

const TestButton = () => {
    const [count, setCount] = useState(0);
    const [hasData, setHasData] = useState(false);

    console.log('Textbutton');

    useEffect(() => {
        console.log("useeffect körs");
    })

    useEffect(() => {
        // körs första gången komponenten renderas
        // passar bra att göra ett asyncront API anrop här
        console.log('useeffect []');
    }, [])

    useEffect(() =>  {
        // körs först gånegn koomponenten renderas
        // körs igen varje gång count updateras
        console.log('useeffect [count]');
    }, [count])

    useEffect(() =>  {
        // körs först gånegn koomponenten renderas
        // körs igen varje gång hasData updateras
        console.log('useeffect [hasData]');
    }, [hasData])



    return (
        <div>
            <button onClick={() => setCount(count + 1) }>Tryck!</button>
            {count}
            <button onClick={ () => setHasData(true)}>Simulate get data from API</button>
        </div>
    )
}

export default TestButton;