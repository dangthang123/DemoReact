import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../Controls/InputField';

QuantityForm.propTypes = {
    onSubmit: PropTypes.func,
};

function QuantityForm({ onSubmit = null }) {
    const schema = yup.object().shape({
        quantity: yup.number()
            .required('Please quantitty')
            .min(1, 'Please 1')
            .max(99, 'Max 99')
            .typeError('please type a quantity'),
    });
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        // const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="quantity" label="Quantity" form={form} />
            <Button type="submit" variant="contained" color="primary" size="large" style={{ marginTop: '20px', marginLeft: '20px', backgroundColor: '#546e7a' }}>ADD TO CART</Button>

        </form>
    );
}

export default QuantityForm;
