// Core
import React from 'react';
// Parts
import  Box  from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Button} from "./Button"
import { styled } from '@mui/system'

const Wrapper = styled(Box)({
    display: "flex",
    padding: "24px",
    justifyContent: "space-between",
    alignItems: "center,"
})

export function Header() {
    return (
        <Wrapper component="header">
            Header
            <Stack spacing={2} direction="row">
                <Button>Кнопка</Button>
                <Button>Кнопка</Button>
            </Stack>
        </Wrapper>
    )
}