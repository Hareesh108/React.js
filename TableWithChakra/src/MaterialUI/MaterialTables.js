import dataDemo from './MOCK_DATA.json';
import MaterialTable from '@mui/material'

const MaterialTables = () => {
    return(
        <>
            <MaterialTable data={dataDemo}  >

            </MaterialTable>
        </>
    )
}

export default MaterialTables;