import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNameday } from "../../state/nameday/namedaySlice";
import "./Nameday.css";

export default function Nameday() {
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(
        (state) => state.nameday
    );

    useEffect(() => {
        dispatch(fetchNameday({ month: "january", day: 1 }));
    }, [dispatch]);

    if (loading) {
        return <div className="component nameday">Loading nameday…</div>;
    }

    if (error) {
        return <div className="component nameday">Error: {error}</div>;
    }

    if (!data) {
        return <div className="component nameday">No nameday data</div>;
    }

    return (
        <div className="component nameday">
            <h2>Nameday</h2>

            <div>
                <strong>Hungary (HU):</strong>
                <ul>
                    {data.hu.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>

            <div>
                <strong>Poland (PL):</strong>
                <ul>
                    {data.pl.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
