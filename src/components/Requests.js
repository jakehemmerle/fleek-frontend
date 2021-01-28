import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { fetchAllRequests } from '../utils/api.requests';

export default class Requests extends React.Component {

  state = {
    requests: [],
  };

  componentDidMount() {
    fetchAllRequests()
      .then(requests => {
        this.setState({ requests });
      });
  }

  render() {
    console.log(this.state.requests);
    return (
      <React.Fragment>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Request ID</TableCell>
              <TableCell>Key ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Size (bytes)</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.keyId}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.size}</TableCell>
                <TableCell>{request.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}