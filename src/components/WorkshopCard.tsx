import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

// Define the types for props
interface WorkshopCardProps {
  type?: number; // Assuming 'type' is optional and a string, adjust if needed
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ type }) => {
    
    let title = "";
    let content: React.ReactNode;
    let imgPath: React.ReactNode;

    if(type == 1) {
        title = "Collection";
        content = (
            <>
              A drop is the release of a new project. This usually
              happens on a specified Date & Time.
            </>
        );
        imgPath = (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM16.25 3.75V11.875H14.0078C13.8437 11.8746 13.6812 11.9068 13.5297 11.9697C13.3781 12.0325 13.2406 12.1249 13.125 12.2414L11.6164 13.75H8.38359L6.875 12.2414C6.75935 12.1248 6.62168 12.0324 6.46999 11.9695C6.3183 11.9066 6.15562 11.8745 5.99141 11.875H3.75V3.75H16.25ZM16.25 16.25H3.75V13.125H5.99141L7.5 14.6336C7.61565 14.7502 7.75332 14.8426 7.90501 14.9055C8.0567 14.9684 8.21938 15.0005 8.38359 15H11.6164C11.7806 15.0005 11.9433 14.9684 12.095 14.9055C12.2467 14.8426 12.3843 14.7502 12.5 14.6336L14.0086 13.125H16.25V16.25Z" fill="black"/>
            </svg>
        );
    } else {
        title = "Edition";
        content = (
            <>
              Create new NFT collection or add an NFT to an existing one.
              Your items will display immediately.
            </>
        );
        imgPath = (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM3.75 3.75H16.25V9.79531L14.3211 7.86562C14.0867 7.63138 13.7689 7.4998 13.4375 7.4998C13.1061 7.4998 12.7883 7.63138 12.5539 7.86562L4.16953 16.25H3.75V3.75ZM16.25 16.25H5.9375L13.4375 8.75L16.25 11.5625V16.25ZM7.5 9.375C7.87084 9.375 8.23335 9.26503 8.54169 9.05901C8.85004 8.85298 9.09036 8.56014 9.23227 8.21753C9.37419 7.87492 9.41132 7.49792 9.33897 7.13421C9.26663 6.77049 9.08805 6.4364 8.82583 6.17417C8.5636 5.91195 8.22951 5.73337 7.86579 5.66103C7.50208 5.58868 7.12508 5.62581 6.78247 5.76773C6.43986 5.90964 6.14702 6.14996 5.94099 6.45831C5.73497 6.76665 5.625 7.12916 5.625 7.5C5.625 7.99728 5.82254 8.47419 6.17417 8.82583C6.52581 9.17746 7.00272 9.375 7.5 9.375ZM7.5 6.875C7.62361 6.875 7.74445 6.91166 7.84723 6.98033C7.95001 7.04901 8.03012 7.14662 8.07743 7.26082C8.12473 7.37503 8.13711 7.50069 8.11299 7.62193C8.08888 7.74317 8.02935 7.85453 7.94194 7.94194C7.85453 8.02935 7.74317 8.08888 7.62193 8.11299C7.50069 8.13711 7.37503 8.12473 7.26082 8.07743C7.14662 8.03012 7.04901 7.95001 6.98033 7.84723C6.91166 7.74445 6.875 7.62361 6.875 7.5C6.875 7.33424 6.94085 7.17527 7.05806 7.05806C7.17527 6.94085 7.33424 6.875 7.5 6.875Z" fill="black"/>
            </svg>
        );
    }

    return (
        <Box sx={{ maxWidth: '60%', paddingBottom: 2 }}>
            <Card sx={{ border: '1px solid', borderColor: '#BDBDBD', boxShadow: 'none', borderRadius: '8px'}}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {imgPath}
                            <Box sx={{ marginLeft: 1 }}>
                                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                    {title}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{paddingRight: 3}}>
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default WorkshopCard;