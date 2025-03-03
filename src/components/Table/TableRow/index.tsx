import { ChangeEvent } from "react";
import { ListItem } from "../type";

interface Props {
    list: ListItem;
    headers: Array<keyof ListItem>;
    hasCheckbox: boolean;
    onCheckboxClick: (index: number, checked: boolean)  => void;
    index: number;
    isChecked: boolean;
}

const TableRow = (props: Props) => {
    const {list, headers, hasCheckbox , index, isChecked,  onCheckboxClick} = props;

    const handleCheckBoxClick = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        onCheckboxClick(index, event.target.checked);
    }

    return (
        <tr>
            {hasCheckbox && <td><input type="checkbox" checked={isChecked} onChange={handleCheckBoxClick(index)}/></td>}
            {headers.map((head, index) => {
                return (<td key={index}>
                   {(head === 'status' && list[head] === 'available') ? <span className="status-dot"></span> : null}  {list[head]}
                </td>)
            })}
        </tr>
    )
}

export default TableRow;