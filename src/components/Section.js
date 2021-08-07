import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>
            Section
        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
 width: 100vw;  // Our vertical width
 height: 100vh; // Our vertical height
 background: orange;
 background-image: url('/images/solar-roof.jpg')

`