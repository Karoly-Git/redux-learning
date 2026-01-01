import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import { fetchNameday } from "../../state/nameday/namedaySlice";
import './Nameday.css';

export default function Nameday() {

    // Get the typed dispatch function (Redux + TypeScript)
    const dispatch = useDispatch<AppDispatch>();

    // Select nameday slice state from the Redux store
    const { data, loading, error } = useSelector(
        (state: RootState) => state.nameday
    );

    // Fetch nameday data when the component mounts
    useEffect(() => {
        dispatch(fetchNameday({ month: "january", day: 1 }));
    }, [dispatch]);

    // Loading state
    if (loading) {
        return <div className="component nameday">Loading nameday…</div>;
    }

    // Error state
    if (error) {
        return <div className="component nameday">Error: {error}</div>;
    }

    // No data yet (initial render)
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
