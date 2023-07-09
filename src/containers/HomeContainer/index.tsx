import { Card } from 'antd';
import Map from '@components/Map';
import SearchHistory from '@components/SearchHistory';
import styles from './styles';

const HomeContainer = () => {
    return (
        <Card bodyStyle={styles.cardBody}>
            {/* <AutoComplete />
            <NativeMap /> */}
            <SearchHistory />
            <Map />
        </Card>
    )
}

export default HomeContainer