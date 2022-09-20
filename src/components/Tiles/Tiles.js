import React from "react";
import "./Tiles.css";

class Tiles extends React.Component {
    render() {
        return (
            // <div>ergergre</div>
            <section id="tile-space">
                <div className="flex flex-wrap">
                    <div id="tile-1" className="tiles outline w-40 pa3 mr2">
                        <h3><a className="links" href="#">.CSV</a></h3>
                        <span className="format-description">A comma-separated values (CSV) file is a delimited text file that uses a comma to separate values.</span>
                    </div>
                    <div id="tile-2" className="tiles outline w-40 pa3 mr2">
                        <h3><a className="links" href="#">.XLSX</a></h3>
                        <span className="format-description">XLSX files are created using the Open XML standard, commonly used to store financial data and to create simple or complex mathematical models.</span>
                    </div>
                    <div id="tile-3" className="tiles outline w-40 pa3 mr2">
                        <h3><a className="links" href="#">.PICKLE</a></h3>
                        <span className="format-description">The pickle module implements binary protocols for serializing and de-serializing a Python object structure.</span>
                    </div>
                    <div id="tile-4" className="tiles outline w-40 pa3 mr2">
                        <h3><a className="links" href="#">OTHERS</a></h3>
                        <span className="format-description">We support other files as well such as ...</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tiles;