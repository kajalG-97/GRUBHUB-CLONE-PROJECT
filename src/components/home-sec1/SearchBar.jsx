import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 100),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: 230,
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const [suggestions, setSuggestions] = React.useState("");

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const handleChange = (value) => {
        if (!value) {
            setSuggestions("");
            return;
        }
        fetch(
            `https://grubhub-backend-clone.herokuapp.com/restaurant_name/search?search=${value}`
        )
            .then((res) => res.json())
            .then((json) => setSuggestions(json));
    };


    const optimizedFn = useCallback(debounce(handleChange), []);

    return (

        <Box>
            <Box sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', display: { xs: "none", md: "flex" } }}>

                <Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => optimizedFn(e.target.value)}
                        />
                    </Search>
                    <Box>

                        {suggestions.length > 0 && (
                            <div className="autocomplete">
                                {suggestions.map((el, i) => (
                                    <div key={i} className="autocompleteItems">
                                        <Link to={`/restaurant/${el.restaurant_name}`}>
                                            {el.restaurant_name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                </Box>

                <Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => optimizedFn(e.target.value)}
                        />
                    </Search>
                    <Box>

                        {suggestions.length > 0 && (
                            <div className="autocomplete">
                                {suggestions.map((el, i) => (
                                    <div key={i} className="autocompleteItems">
                                        <Link to={`/restaurant/${el.restaurant_name}`}>
                                            {el.restaurant_name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                </Box>
                <Button variant="contained">Search Nearby</Button>

            </Box>

            <Box sx={{ flexGrow: 1, width: 300, justifyContent: 'center', display: { xs: "block", md: "none" } }}>


                <Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => optimizedFn(e.target.value)}
                        />
                    </Search>
                    <Box>

                        {suggestions.length > 0 && (
                            <div className="autocomplete">
                                {suggestions.map((el, i) => (
                                    <div key={i} className="autocompleteItems">
                                        <Link to={`/restaurant/${el.restaurant_name}`}>
                                            {el.restaurant_name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                </Box>

                <Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => optimizedFn(e.target.value)}
                        />
                    </Search>
                    <Box>

                        {suggestions.length > 0 && (
                            <div className="autocomplete">
                                {suggestions.map((el, i) => (
                                    <div key={i} className="autocompleteItems">
                                        <Link to={`/restaurant/${el.restaurant_name}`}>
                                            {el.restaurant_name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                </Box>

                <Button variant="contained">Search Nearby</Button>

            </Box>
        </Box>
    );
}
