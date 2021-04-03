import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize1} from "../Shared/Styles"

const SearchGrid = styled.div `
    display: grid;
    grid-template-columns: 200px 1fr;

`

const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize1}
    height: 25px;
    color: white;
    place-self: center left;
`

export default function(){
    return (<SearchGrid>
             <h2>Search</h2> 
             <SearchInput/>
         </SearchGrid>)
}