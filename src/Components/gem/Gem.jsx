import React, { useContext, useEffect, useState } from "react";
import "./Gem.css";
import GemButtons from "./gem_buttons/GemButtons";
import GemImage from "./gem_image/GemImage";
import GemText from "./gem_text/GemText";
import { apiGetById } from "../../api_requests/ApiGetAll";
import Loading from "../catalogue/filters/loading_spinner/Loading";




export default function Gem(props) {

    const [gem, setGem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiGetById(props.id).then((result) =>
            setGem(result)
        );
        setLoading(false);
    }, []);


    return (
        <div className="body-d-div">
            <div className="c-l">
                {loading ? <Loading /> :
                    <div className="gem-div">
                        <div className="gem-d-div">
                            <GemImage gem={gem} />
                            <GemText gem={gem} />
                        </div>
                        <div className="gem-b-div">
                            <GemButtons gem={gem}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}