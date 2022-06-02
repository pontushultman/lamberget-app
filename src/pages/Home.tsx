// @flow 
import * as React from 'react';
import styled from 'styled-components';
import { Menu } from '../components/Menu';
import { Post } from '../components/Post';

const Div = styled.div`
margin-top: 80px;
margin-bottom: 80px;
`

type Props = {
    title: string
}

export const Home = ( {title} : Props) => {
    return (
        <>
        <Menu></Menu>
    </>
    );
};



