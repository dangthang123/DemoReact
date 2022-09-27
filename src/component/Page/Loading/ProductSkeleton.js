import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

ProductSkeleton.propTypes = {
    length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
    length: 8,
}

function ProductSkeleton({ length }) {
    return (
        <Box>
            <Grid container spacing={3}>
                {Array.from(new Array(length)).map((x, ind) => (
                    <Grid item key={ind} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" width='100%' height={200} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;
