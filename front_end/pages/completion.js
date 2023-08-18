import React from 'react';
import { useRouter } from 'next/router';
import ThankyouSection from '../components/donations/thankyouSection';

export default function Completion() {
    const router = useRouter();
    const { query } = router;

    // Get values from query parameters
    const fund = query.fund;

    return (
        <div style={{paddingTop: "5em"}}>
            <ThankyouSection
                fund={fund}
            />
        </div>
    );
}