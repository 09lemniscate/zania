import { ListItem } from "../type";

interface Props {
    headers: Array<keyof ListItem>;
    hasCheckbox: boolean;
}
const TableHead = (props: Props) => {
    const { headers, hasCheckbox } = props;
    return (
        <thead>
            <tr>
                {hasCheckbox && <th></th>}
                {headers.map((header, index) => {
                    return (
                        <th key={index}>{header}</th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default TableHead;