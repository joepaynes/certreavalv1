import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';

import VerticalMenu from './vert_menu';

import { 
    Table,
    Grid,
    Container
} from 'semantic-ui-react';

class CertTable extends Component {

    state = {
        column: null,
        data: this.props.certificates,
        direction: null,
    }

    componentWillMount() {
        this.props.fetchCerts();
    }

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            data: _.sortBy(data, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          data: data.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
      }

    render() {
        const { column, data, direction } = this.state

        return(
        <Container className="dashboard">
            <Grid>
                <Grid.Column width={4}>
                    <VerticalMenu activeItem="Certificates" />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Table sortable celled fixed selectable>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell sorted={column === 'certificate' ? direction : null} onClick={this.handleSort('certificate')}>
                            Certificate
                            </Table.HeaderCell>
                            <Table.HeaderCell sorted={column === 'type' ? direction : null} onClick={this.handleSort('type')}>
                            Type
                            </Table.HeaderCell>
                            <Table.HeaderCell sorted={column === 'expiry' ? direction : null} onClick={this.handleSort('expiry')}>
                            Expiry Date
                            </Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {_.map(data, ({ type, expiry, certificate }) => (
                            <Table.Row key={certificate}>
                            <Table.Cell>{certificate}</Table.Cell>
                            <Table.Cell>{type}</Table.Cell>
                            <Table.Cell>{expiry}</Table.Cell>
                            </Table.Row>
                        ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
        </Container>
        );
    };
}
function mapStateToProps(state) {
    return {
        certificates: state.certificates
    };
}
export default connect(mapStateToProps, actions)(CertTable);

