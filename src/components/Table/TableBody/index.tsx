import TableRow from "../TableRow";
import { ListItem } from "../type";

interface Props {
    tableList: Array<ListItem>;
    headers: Array<keyof ListItem>;
    hasCheckbox: boolean;
    onCheckboxClick: (index: number, checked: boolean) => void;
    selectedCheckbox: boolean[];
}

const TableBody = (props: Props) => {
    const { tableList, headers, hasCheckbox, selectedCheckbox, onCheckboxClick } = props;
    return (
            <tbody>
                {tableList.map((list, index) => {
                    return (
                       <TableRow
                          key={index}
                          index={index}
                          list={list}
                          isChecked={selectedCheckbox[index]}
                          headers={headers}
                          hasCheckbox={hasCheckbox}
                          onCheckboxClick={onCheckboxClick}
                        />
                    )
                })}
            </tbody>
    )
}

export default TableBody;