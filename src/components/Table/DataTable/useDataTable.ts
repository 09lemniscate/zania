import { useRef, useState, useMemo, ChangeEvent, useEffect } from "react";
import { ListItem } from "../type";
import { dataDetails, STATUS } from "../const";

const useDataTable = () => {
    const checkRef = useRef<HTMLInputElement | null>(null);
    const [selectedCheckbox, setSelectedCheckbox] = useState(new Array(dataDetails.length).fill(false));

    const headers = useMemo(()=> Object.keys(dataDetails[0]),[]) as Array<keyof ListItem>;

    const handleCheckboxClick = (index: number, checked: boolean) => {
        const updatedSelectedCheckbox = [...selectedCheckbox];
        updatedSelectedCheckbox[index] = checked;
        setSelectedCheckbox(updatedSelectedCheckbox);
    }

    const handleAllCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const updatedSelectedCheckbox = selectedCheckbox.map(() => checked);
        setSelectedCheckbox(updatedSelectedCheckbox);
    }

    const availableDownload = dataDetails.filter((list,index) => (list.status === STATUS.AVAILABLE && selectedCheckbox[index]));
    const countSelected = selectedCheckbox.filter((val) => val).length;
    
    const handleDownload = () => {
        if(availableDownload.length) {
            alert(JSON.stringify(availableDownload));
        }
    }

    useEffect(() => {
        const checked = selectedCheckbox.filter((val) => val).length;
        if(checkRef.current)
            if(checked>0 && checked<dataDetails.length) {
                checkRef.current.indeterminate = true;
            } else if(checked === dataDetails.length) {
                checkRef.current.checked = true;
                checkRef.current.indeterminate = false;
            } else {
                checkRef.current.checked = false;
                checkRef.current.indeterminate = false;
            }
    },[selectedCheckbox])

    return  {
        countSelected,
        availableDownload,
        checkRef,
        headers,
        dataDetails,
        selectedCheckbox,
        handleAllCheckboxClick,
        handleDownload,
        handleCheckboxClick,
    }

}

export default useDataTable;