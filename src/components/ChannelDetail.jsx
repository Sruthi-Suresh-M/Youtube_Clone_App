import {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [ videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, 'c');
  console.log(videos,'v');

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) =>setChannelDetail(data?.items[0]));
    
      fetchFromAPI(`search?channelId${id}&part=snippet&order=date`)
      .then((data) =>setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ 
          background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,137,218,0.9248074229691877) 49%)',
          zIndex: 10,
          height: '300px'
        }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box  display="flex" p="2">
          <Box sx={{ mr: {sm: '250px'} }} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
