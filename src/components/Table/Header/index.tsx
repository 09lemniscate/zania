import { ChangeEvent, ForwardedRef, forwardRef } from "react";

interface Props {
    countSelected: number;
    availableDownload: ListItem[];
    onAllCheckboxClick: (e: ChangeEvent<HTMLInputElement>) => void;
    onDownload: () => void;
}

type ListItem = { name: string; device: string; path: string; status: string; };


const Header = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { countSelected, availableDownload, onAllCheckboxClick, onDownload } = props;

    return (
        <>
            <h1>Datagrid</h1>
            <div className="checkbox-container">
                <div>
                <input type="checkbox" onChange={onAllCheckboxClick} ref={ref}/>
                    {countSelected > 0 ? countSelected : 'None'} Selected
                </div>
                <button
                    className="download"
                    onClick={onDownload}
                    disabled={availableDownload.length === 0}
                >
                    Download Selected
                </button>
            </div>
        </>
    )
})

export default Header;