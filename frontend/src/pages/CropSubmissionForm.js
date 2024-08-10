import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    styled,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
} from '@mui/material';
import { CloudUpload, AttachFile } from '@mui/icons-material';

// Styled components for the form
const FormContainer = styled(Box)(({ theme }) => ({
    width: '80%',
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    zIndex: 4,
    position: 'relative',
    overflow: 'hidden',
}));

const FormTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '2rem',
}));

const FormField = styled(TextField)(({ theme }) => ({
    marginBottom: '20px',
}));

const FileUploadButton = styled(Button)(({ theme }) => ({
    margin: '20px 0',
    backgroundColor: '#28a745',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#218838',
    },
}));

const FormActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
}));

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
    marginBottom: '20px',
}));

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
    color: '#333',
}));

const FormHelperTextStyled = styled(FormHelperText)(({ theme }) => ({
    color: '#e53935',
}));

const CropImagePreview = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px',
});

// Enhanced Crop Submission Form component
const CropSubmissionForm = () => {
    const [image, setImage] = React.useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <FormContainer>
            <FormTitle>Submit Your Crop Data</FormTitle>
            <form>
                <FormControl fullWidth variant="outlined">
                    <InputLabelStyled htmlFor="crop-image">Crop Image</InputLabelStyled>
                    <StyledInput
                        id="crop-image"
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleImageChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end">
                                    <AttachFile />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperTextStyled>Select an image of your crop.</FormHelperTextStyled>
                </FormControl>
                {image && <CropImagePreview src={image} alt="Crop Preview" />}
                <FormField
                    fullWidth
                    label="Crop Name"
                    variant="outlined"
                    margin="normal"
                />
                <FormField
                    fullWidth
                    label="Crop Details"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                />
                <FormField
                    fullWidth
                    label="Additional Notes"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                />
                <FormActions>
                    <FileUploadButton variant="contained" startIcon={<CloudUpload />}>
                        Upload
                    </FileUploadButton>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </FormActions>
            </form>
        </FormContainer>
    );
};

export default CropSubmissionForm;
