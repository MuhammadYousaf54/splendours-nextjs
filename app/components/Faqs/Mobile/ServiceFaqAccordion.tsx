"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Image from "next/image";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    "&:not(:last-child)": {
        borderBottom: "none",
    },
    "&::before": {
        display: "none",
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
            {...rest}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end", // Ensure items align to the bottom
                padding: 0, // Remove padding
                paddingBottom: 2,
                borderBottom: expanded
                    ? "2px solid #DCC5BD"
                    : "2px solid #DCC5BD",
                backgroundColor: "#283C28",
                color: "white",
                "& .MuiAccordionSummary-expandIconWrapper": {
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease", // Add transition for smooth rotation
                },
            }}
        >
            <Box className="flex w-full justify-between items-end">
                <Box>
                    <Typography
                        variant="h3"
                        color="#DCC5BD"
                        sx={{
                            fontWeight: 300,
                            flexWrap: "wrap",
                            fontFamily: "Chronicle Display",
                            fontSize: "20px",
                        }}
                    >
                        DO YOU OFFER
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#DCC5BD"
                        sx={{
                            fontWeight: 300,
                            flexWrap: "wrap",
                            fontFamily: "Chronicle Display",
                            fontSize: "20px",
                        }}
                    >INSTALLATIOIN
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#DCC5BD"
                        sx={{
                            fontWeight: 300,
                            flexWrap: "wrap",
                            fontFamily: "Chronicle Display",
                            fontSize: "20px",
                        }}
                    >
                        SERVICES?
                    </Typography>
                </Box>
                {expanded ? (
                    <IndeterminateCheckBoxIcon
                        sx={{ fontSize: "30px", color: "#DCC5BD" }}
                    />
                ) : (
                    <AddBoxIcon sx={{ fontSize: "30px", color: "#DCC5BD" }} />
                )}
            </Box>
        </MuiAccordionSummary>
    );
})(() => ({
    "& .MuiAccordionSummary-content": {
        margin: 0, // Remove margin
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: "#283C28",
    color: "white",
    padding: 0, // Remove padding
}));

export default function StoneTypesFaqAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="px-3"> {/* Root component padding and margin set to 0 */}
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                style={{ backgroundColor: "transparent" }}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === "panel1"}
                >
                    <Box
                        className="flex w-full justify-between items-end"
                        sx={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}
                    >
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                flexWrap: "wrap",
                                fontFamily: "Chronicle Display",
                                fontSize: "20px",
                            }}
                        >
                            DO YOU OFFER INSTALLATION SERVICES FOR STONE PROJECTS?
                        </Typography>
                        {expanded ? (
                            <IndeterminateCheckBoxIcon
                                sx={{ fontSize: "30px", color: "#DCC5BD" }}
                            />
                        ) : (
                            <AddBoxIcon sx={{ fontSize: "30px", color: "#DCC5BD" }} />
                        )}
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex w-full flex-col justify-between py-5 gap-y-5">
                        <Box className="flex flex-col w-full justify-around">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: "start",
                                    fontFamily: "var(--font-montserrat)",
                                    fontSize: "13px",
                                }}
                            >
                                While we specialise in supplying premium natural stone, we can also help you with installation services by some of the best stone mansions in Australia.
                            </Typography>
                        </Box>
                        <Box className="flex w-full justify-between gap-x-[5px]">
                            <Box>
                                <Image
                                    src="/images/Faqs/Q4/1.jpg"
                                    alt="Stone1"
                                    width={90}
                                    height={90}
                                    className='rounded-full w-[90px] h-[90px]'
                                />
                            </Box>
                            <Box>
                                <Image
                                    src="/images/Faqs/Q4/2.jpg"
                                    alt="Stone1"
                                    width={90}
                                    height={90}
                                    className='rounded-full w-[90px] h-[90px]'
                                />
                            </Box>
                            <Box>
                                <Image
                                    src="/images/Faqs/Q4/3.jpg"
                                    alt="Stone1"
                                    width={90}
                                    height={90}
                                    className='rounded-full w-[90px] h-[90px]'
                                />
                            </Box>
                            <Box>
                                <Image
                                    src="/images/Faqs/Q4/4.jpg"
                                    alt="Stone1"
                                    width={90}
                                    height={90}
                                    className='rounded-full w-[90px] h-[90px]'
                                />
                            </Box>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
