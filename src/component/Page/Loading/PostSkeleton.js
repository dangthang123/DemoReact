import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';

PostSkeleton.propTypes = {
    length: PropTypes.number,
};
PostSkeleton.defaultProps = {
    length: 6,
};

function PostSkeleton({ length }) {
    return (
        <Card sx={{ maxWidth: 1140, m: 2 }}>

            <Box padding={1}>
                <CardContent>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                </CardContent>

                <Skeleton sx={{ height: 90 }} animation="wave" variant="rectangular" style={{ margin: '5px 50px 5px 50px' }} />
                <CardContent>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                </CardContent>

            </Box>
        </Card>
    );
}

export default PostSkeleton;