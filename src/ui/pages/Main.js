import { Box } from "@mui/material/Box"


export function Main() {
    return (
        <div>
            Form
            <Box component={h6} sx={{ fontSize: "40px", lineHeight: 1, margin: 8 }}>
                Travel with
                <Box component={span}>Booking</Box>
            </Box>
        </div>
    )
}