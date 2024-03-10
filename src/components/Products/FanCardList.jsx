import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import FanSpecCard from './FanSpecCard';
import * as images from '../../assets/assets';
import { useTranslation } from "react-i18next";
import theme from '../../Theme';
import { useNavigate } from 'react-router-dom';

export default function FanCardList() {
    const { t } = useTranslation();
    const fanCardsData = [
        {
            imageUrl: images.Fan60kg,
            title: t("fan60kg"),
            thrust: '60kg',
            diameter: '0.6m',
            speed: '4000rpm',
            power: '15KW',
            detailTitle: t('productFan60kgDetail'),
            maximumThrust: '60',
            bladeDiamter: '0.6',
            takeoffSpeed: '4000',
            motorPower: '15',
            exitDiameter: '0.72m',
            ductChord: '0.45m',
            hubDiameter: '0.24m',
            bladeNumber: '12',
            stutNumber: '7',
            cruiseSpeed: '2500rpm',
        },
        {
            imageUrl: images.Fan200kg,
            title: t("fan200kg"),
            thrust: '200kg',
            diameter: '1.2m',
            speed: '2500rpm',
            power: '50KW',
            detailTitle: t('productFan200kgDetail'),
            maximumThrust: '200',
            bladeDiamter: '1.2',
            takeoffSpeed: '2500',
            motorPower: '50',
            exitDiameter: '0.72m',
            ductChord: '0.45m',
            hubDiameter: '0.24m',
            bladeNumber: '12',
            stutNumber: '7',
            cruiseSpeed: '2500rpm',
        },
        {
            imageUrl: images.Fan500kg,
            title: t("fan500kg"),
            thrust: '500kg',
            diameter: '1.9m',
            speed: '1500rpm',
            power: '120KW',
            detailTitle: t('productFan500kgDetail'),
            maximumThrust: '500',
            bladeDiamter: '1.9',
            takeoffSpeed: '1500',
            motorPower: '120',
            exitDiameter: '0.72m',
            ductChord: '0.45m',
            hubDiameter: '0.24m',
            bladeNumber: '12',
            stutNumber: '7',
            cruiseSpeed: '2500rpm',
        },
        {
            imageUrl: images.Fan1000kg,
            title: t("fan1000kg"),
            thrust: '1000kg',
            diameter: '1.6m',
            speed: '2700rpm',
            power: '60KW',
            detailTitle: t('productFan1000kgDetail'),
            maximumThrust: '1000',
            bladeDiamter: '1.6',
            takeoffSpeed: '2700',
            motorPower: '60',
            exitDiameter: '0.72m',
            ductChord: '0.45m',
            hubDiameter: '0.24m',
            bladeNumber: '12',
            stutNumber: '7',
            cruiseSpeed: '2500rpm',
        }
    ]
    const isNarrowScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack 
          spacing={2} 
          sx={{
            marginX: theme.spacing(6),
            maxWidth: `calc(100% - ${theme.spacing(12)})`,
          }}
        >
            {fanCardsData.map((data, index) => (
                <FanSpecCard key={index} data={data} />
            ))}
        </Stack>
    )
}
