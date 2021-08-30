import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    Tooltip,
    Grid,
    IconButton,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

import { StyledTableRow, StyledTypography, StyledIcon, StyledTooltip, StyledTableCell } from './style';

export default ({ items }, ref) => {

    const tableRowClasses = StyledTableRow();
    const iconClasses = StyledIcon();
    const tooltipClasses = StyledTooltip();

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">
                            <Grid container direction="row" alignItems="center" spacing={2}>
                                <Grid item>
                                    <StyledTypography variant="body2">Name</StyledTypography>
                                </Grid>

                                <Grid item>
                                    <IconButton size="small">
                                        <UnfoldMoreIcon color="primary" classes={iconClasses} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            <Grid container direction="row" alignItems="center" spacing={10} justifyContent="space-between">
                                <Grid item>
                                    <StyledTypography variant="body2">Description</StyledTypography>
                                </Grid>

                                <Grid item>
                                    <IconButton size="small">
                                        <UnfoldMoreIcon color="primary" classes={iconClasses} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {items.map((item, index) => (
                        <TableRow
                            key={item.name}
                            hover
                            classes={{ hover: tableRowClasses.hover }}
                        >
                            <StyledTableCell align="left">
                                <StyledTypography variant="body2">{item.name}</StyledTypography>
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={10}>
                                    <Grid item>
                                        <StyledTypography variant="body2">{item.description}</StyledTypography>
                                    </Grid>

                                    <Grid item>
                                        <Grid container direction="row" spacing={1}>
                                            <Grid item>
                                                <Tooltip arrow title="Delete" classes={tooltipClasses} placement="top">
                                                    <IconButton size="small">
                                                        <DeleteIcon color="primary" classes={iconClasses} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>

                                            <Grid item>
                                                <Tooltip arrow title="Share" classes={tooltipClasses} placement="top">
                                                    <IconButton size="small">
                                                        <ShareIcon color="primary" classes={iconClasses} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>

                                            <Grid item>
                                                <Tooltip arrow title="Edit" classes={tooltipClasses} placement="top">
                                                    <IconButton size="small">
                                                        <EditIcon color="primary" classes={iconClasses} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}