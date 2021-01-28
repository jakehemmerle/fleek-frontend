import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { fetchAllKeys, disableKey } from '../utils/api.requests';

export default class Keys extends React.Component {

    state = {
        keys: []
    }

    componentDidMount() {
        fetchAllKeys()
          .then(keys => {
            console.log(keys);
            this.setState({ keys });
          });
      }
  
    render() {
        // const classes = useStyles();
        return (
          <React.Fragment>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Enabled</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Key</TableCell>
                  <TableCell>Request Count</TableCell>
                  <TableCell>Total Bytes Transfered</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.keys.map((key) => {
                    return (
                      <TableRow key={key.id}>
                        <TableCell>{key.enabled ? 'true' : 'false'}</TableCell>
                        <TableCell>{key.id}</TableCell>
                        <TableCell>{key.key}</TableCell>
                        <TableCell>{key.requestCount}</TableCell>
                        <TableCell>{key.totalBytesTransfered}</TableCell>
                        <TableCell>
                          <IconButton onClick={() => disableKey(key.id)} aria-label="delete">
                              <DeleteIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                    </TableRow>
                    )
                }
                )}
              </TableBody>
            </Table>
          </React.Fragment>
        )
    }
}