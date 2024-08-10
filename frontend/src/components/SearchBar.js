import React from 'react';
import { InputBase, Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 300, boxShadow: 'none' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
