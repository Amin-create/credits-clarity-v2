import React from 'react';
import AllNotifications from '../all_notifications/AllNotifications';
import { faqs } from '../../data';

function Faq() {
    return (
        <AllNotifications data={faqs} />
    )
}

export default Faq