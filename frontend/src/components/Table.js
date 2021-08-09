import React from 'react';

//PROVINCE TABLES
const Table =(props)=>{
    return(
        <div className="TableArea">
             <table className="Table1">
                <tr>
                    <th>Province</th>
                    <th>{props.one}</th>
                    <th>{props.two}</th>
                    <th>Reported</th>
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "LS").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "CO").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "LP").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "CE").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "EA").map(province => <td>{province.reported}</td>)}
                </tr>
            </table>

            <table className="Table2">
                <tr>
                    <th>Province</th>
                    <th>{props.one}</th>
                    <th>{props.two}</th>
                    <th>Reported</th>
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "SO").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "NO").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "WE").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "NW").map(province => <td>{province.reported}</td>)}
                </tr>
                <tr>
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.Provincename}</td>)}
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.candidate1vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.candidate2vote}</td>)}
                {props.object.filter(data=>data.provinceCode === "MU").map(province => <td>{province.reported}</td>)}
                </tr>
            </table>

        </div>
           


    )
}
export default Table;