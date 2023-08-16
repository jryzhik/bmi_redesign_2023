import React, { useEffect, useState } from 'react';
import { AddressElement, LinkAuthenticationElement } from '@stripe/react-stripe-js';

const AddressForm = ({ setReady }) => {
    const [emailReady, setEmailReady] = useState(false)
    const [addressReady, setAddressReady] = useState(false)

    useEffect(() => {
        if (emailReady && addressReady) {
            setReady(true)
        }
    },[emailReady, addressReady])
    return (
        <form>
            <LinkAuthenticationElement onChange={(event) => {
                if (event.complete) {
                    setEmailReady(true)
                }
            }} />
            <AddressElement options={{ mode: 'shipping' }} onChange={(event) => {
                if (event.complete) {
                    setAddressReady(true)
                }
            }} />
        </form>
    );
};

export default AddressForm;
