"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import WhiteCustomButton from '../../WhiteButton';
import FullCustomBrownDivider from '../../Divider/FullCustomBrownDivider';
import Image from 'next/image';
import Card3DEffect from '../../3dEffects/Card3DEffect';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 'none',
    },
    '&::before': {
        display: 'none',
    },
    padding: 0, // Set padding to 0 for Accordion
}));

interface CustomAccordionSummaryProps extends AccordionSummaryProps {
    expanded?: boolean; // Add your custom expanded prop
}

const AccordionSummary = styled((props: CustomAccordionSummaryProps) => {
    const { expanded, ...rest } = props;
    return (
        <MuiAccordionSummary
            expandIcon={
                expanded ? (
                    <IndeterminateCheckBoxIcon sx={{ fontSize: '30px', color: '#dbc6bc' }} />
                ) : (
                    <AddBoxIcon sx={{ fontSize: '30px', color: '#dbc6bc', marginBottom: '-30px' }} />
                )
            }
            {...rest}
        />
    );
})(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Added justify-content: space-between
    padding: 0, // Remove padding
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'relative',
        right: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0, // Remove margin
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: '#283C28',
    color: 'white',
    padding: 0, // Remove padding
}));

export default function TechnicalAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div style={{ padding: 0 }}> {/* Root component padding and margin set to 0 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === 'panel1'}
                    style={{
                        borderBottom: '1px solid #DBC6BC',
                        backgroundColor: '#283C28',
                        color: 'white',
                    }}
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '18px' },
                            }}
                        >
                            02
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: { xs: '20px', sm: '30px', md: '40px', lg: '55px' },
                            }}
                        >
                            TECHNICAL DRAWINGS
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex w-full justify-between">
                        
                        <Box className="flex flex-col w-1/3 justify-around py-9">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "16px"
                                    }
                                }}
                            >

                                Our conversation begins with a friendly call. We'll discuss your vision, understand your project scope, and answer any questions you may have about natural stone.
                            </Typography>
                            <WhiteCustomButton label={'Learn More'} iconSrc={'/images/vector.svg'} />
                        </Box>
                        <Box className="flex w-1/2">
                        <Card3DEffect>
                            <Image
                                src="/images/Home/Services/technical.png"
                                alt="technical"
                                className="flex w-full"
                                width={473}
                                height={220}
                            />
                            </Card3DEffect>
                        </Box>
                    </Box>
                    <FullCustomBrownDivider />
                    
                </AccordionDetails>
               
            </Accordion>
        </div>
    );
}
