import { List, Typography } from "antd"
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { setCenter, setZoom, HistoryProps } from '@redux/slicers/mapSlice';
import styles from "./styles";

const SearchHistory = () => {
    const histories = useAppSelector((state) => state.map.histories);
    const dispatch = useAppDispatch();

    const handleClick = (item: HistoryProps) => () => {
        dispatch(setCenter(item.center))
        dispatch(setZoom(16))
    }

    return (
        <List
            style={styles.body}
            header={<div>Search History</div>}
            bordered
            dataSource={histories}
            renderItem={(item) => (
                <List.Item onClick={handleClick(item)} style={styles.list}>
                    <Typography.Text>{`${item.name}`}</Typography.Text> 
                </List.Item>
                )}
            />
    )
}

export default SearchHistory