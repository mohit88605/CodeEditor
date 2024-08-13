
import React from 'react'
import Editor from './Editor'

import { useContext } from 'react'


import {Box , styled} from '@mui/material'
import {DataContext} from '../components/context/Data'   
const Container = styled(Box)`
      display:flex;
      background:#060606;
      height:55vh;
`

const Code = () => {

   const {html,setHtml,css,setcss,js,setjs} = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setcss}
        />
      <Editor
        heading="JAVASCRIPT"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setjs}
      />
    </Container>
  )
}

export default Code
