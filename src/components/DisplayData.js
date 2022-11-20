import React, { useEffect, useState } from "react";
import callApi from "../utilities/callApi";

const DisplayData = () => {
    const [reload, setReload] = useState(false);


    useEffect(() => {
        callApi();
    }, [reload]);

    const storedData = localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"));

    if (storedData) {
        return (<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {storedData.results.map(user => {
                const { title, first, last } = user.name;
                let fullName = `${title} ${first} ${last}`
                return (<div key={user.id} >
                    <h4>FullName: <span style={{ color: 'green' }}>{fullName}</span> </h4>
                    <h5>Email: <span style={{ color: 'green' }}>{user.email}</span></h5>
                </div>)
            })}
            <button onClick={() => { setReload(prevState => !prevState) }}>Click to reload</button>
        </div>)
    }
    else {
        <p>Loading.....</p>
    }
};

export default DisplayData;