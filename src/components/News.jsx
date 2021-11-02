import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import {useGetCryptoNewsQuery} from '.././services/cyptoNewsApi'
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
    // const count = simplified ? 10 : 100;
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:"Cryptocurrency", count: simplified ? 10 : 100 });

    console.log(cryptoNews)
    return (
        <div>
            News
        </div>
    )
}

export default News
