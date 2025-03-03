import Header from "../Header";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import useDataTable from "./useDataTable";

const DataTable = () => {
    const {
        countSelected,
        availableDownload,
        handleAllCheckboxClick,
        handleDownload,
        checkRef,
        headers,
        dataDetails,
        selectedCheckbox,
        handleCheckboxClick,
    } = useDataTable();

    return (
        <div>
            <Header
                countSelected={countSelected}
                availableDownload={availableDownload} 
                onAllCheckboxClick={handleAllCheckboxClick}
                onDownload={handleDownload}
                ref={checkRef}
            />
            <div className="table-container">
                <table>
                    <TableHead headers={headers} hasCheckbox/>
                    <TableBody
                        tableList={dataDetails}
                        headers={headers}
                        hasCheckbox
                        selectedCheckbox={selectedCheckbox}
                        onCheckboxClick={handleCheckboxClick}/>
                </table>
            </div>
        </div>
    )
}

export default DataTable;