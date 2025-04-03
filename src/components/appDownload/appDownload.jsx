import React from "react";
import './appDownload.css';
const AppDownload = () => {
    return (
        <div className={"appDownload"} id={"appDownload"}>
            <p> For the best experience download our app <br/> Tasty App</p>
                  <div className={"appDownload_platforms"}>
                      <img src={"./play_store.png" } alt={""}/>
                        <img src={"./app_store.png"} alt={"play"}/>

                  </div>
        </div>
    )

}
export default AppDownload;