// src/pages/home/home.jsx
import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../service/apiService";



const getFullName = (userInfo) => {
    const {
        name: { first, last }
    } = userInfo;
    return `${first} ${last}`;
};


const Home = () => {
    const [nextPage, setNextPage] = useState(1);
    const [userInfos, setUserInfos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        const data = await fetchUserData(nextPage);

        if (data) {
            setUserInfos((prevUsers) => [...prevUsers, ...data.results]);
            setNextPage(data.info.page + 1); // Update to the next page
        } else {
            setError("Failed to fetch user data.");
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="home">
            <h1>User Profiles</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={fetchUsers} disabled={loading}>
                {loading ? "Loading..." : "Load More Profiles"}
            </button>

            <div style={{ marginTop: "20px" }}>
                {userInfos.map((userInfo, idx) => (
                    <div
                        key={idx}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "8px"
                        }}
                    >
                        <p>
                            <strong>Name:</strong> {getFullName(userInfo)}
                        </p>
                        <img
                            src={userInfo.picture.large}
                            alt={getFullName(userInfo)}
                            style={{ width: "100px", borderRadius: "50%" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;



