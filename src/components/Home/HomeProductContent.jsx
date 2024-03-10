import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Tab, Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as images from '../../assets/assets';
import theme from '../../Theme';

const ProductTabs = styled(Tabs)({
  backgroundColor: 'clear'
});

const ProductTab = styled(Tab)({
  color: 'black',
  '&.Mui-selected': {
    color: '${theme.palette.primary.main}',
  },
});

const ProductContentContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LargeFanImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '50%',
  display: 'block',
});

const ContentBox = styled(Box)({
  flex: '1',
});

const SmallContentArea = styled(Card)({
  maxWidth: '30%',
  flexBasis: '30%',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
  },
});

const HomeProductContent = () => {
  const [tabValue, setTabValue] = useState(0);
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const preloadImages = [images.Fan60kg, images.Fan200kg, images.Fan500kg, images.Fan1000kg, images.Aircraft200kg, images.Aircraft260kg, images.Aircraft1600kg];
    preloadImages.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const fans = [{
    key: 'fan60kg',
    title: '电动涵道风扇标题',
    subtitle: '电动涵道风扇内容...',
    image: images.Fan60kg,
  },
  {
    key: 'fan200kg',
    title: '小风扇标题 1',
    subtitle: '小风扇介绍...',
    image: images.Fan200kg,
  },
  {
    key: 'fan500kg',
    title: '小风扇标题 2',
    subtitle: '小风扇介绍...',
    image: images.Fan500kg,
  },
  {
    key: 'fan1000kg',
    title: '小风扇标题 3',
    subtitle: '小风扇介绍...',
    image: images.Fan1000kg,
  },
]

const aircrafts = [{
  key: 'aircraft200kg',
  title: '电动涵道风扇标题',
  subtitle: '电动涵道风扇内容...',
  image: images.Aircraft200kg,
},
{
  key: 'aircraft260kg',
  title: '小风扇标题 1',
  subtitle: '小风扇介绍...',
  image: images.Aircraft260kg,
},
{
  key: 'aircraft1600kg',
  title: '小风扇标题 2',
  subtitle: '小风扇介绍...',
  image: images.Aircraft1600kg,
},
]

  return (
    <Box sx = {{
      backgroundColor: "#fafafa",
      padding: theme.spacing(6)
    }}>
      <ProductTabs value={tabValue} onChange={handleTabChange} centered>
        <ProductTab label={t('prodcuctFan')} disableRipple />
        <ProductTab label={t("productAircraft")} disableRipple />
      </ProductTabs>

      <TabPanel value={tabValue} index={0}>
        {/* Content for "电动涵道风扇" Tab */}
        <ProductContentContainer>
          <LargeFanImage src={images.Fan60kg} alt="60kg Fan" />
          <ContentBox ml={4}>
            <Typography variant="h4">电动涵道风扇标题</Typography>
            <Typography variant="body1">电动涵道风扇内容...</Typography>
            <Button variant="contained" color='primary'>
              Learn More
            </Button>
          </ContentBox>
        </ProductContentContainer>

        {/* Three small content areas */}
        <Box mt={4} display="flex" justifyContent="space-between">
          {fans.slice(-3).map((item => (
            <SmallContentArea key={item.key}>
              <img src={item.image} alt={`Fan ${item}`} style={{ width: '100%' }} align="center"/>
              <CardContent>
                <Typography variant="h6" align="center">{item.title}</Typography>
                <Typography variant="body2" align="center">{item.subtitle}</Typography>
              </CardContent>
            </SmallContentArea>
          )))}
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
      <Box mt={4} display="flex" justifyContent="space-between">
          {aircrafts.map((item) => (
            <SmallContentArea key={item.key}>
            <img src={item.image} alt={`Fan ${item}`} style={{ width: '100%' }} />
            <CardContent>
              <Typography variant="h6" align="center">{item.title}</Typography>
              <Typography variant="body2" align="center">{item.subtitle}</Typography>
            </CardContent>
          </SmallContentArea>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
};

const TabPanel = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default HomeProductContent;
