import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import {useGetCryptoNewsQuery} from '.././services/cyptoNewsApi'
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data, isFetching} = useGetCryptoNewsQuery(10);
    console.log(data)
    return (
        <div>
            News
        </div>
    )
}

export default News
