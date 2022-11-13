import { Box } from "@mui/material";
import CommentsSection from "./components/comments/CommentsSection";

function App() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <CommentsSection />
        </Box>
    );
}

export default App;
