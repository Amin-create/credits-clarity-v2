import React from 'react';
import { Core } from '../../../../components';
import AllNotifications from '../../../../components/all_notifications/AllNotifications';
import { allNotifications } from '../../../../data';

function Notification() {

    const breadcrumb = [
        { label: "Notification", link: "/dashboard/notification" },
    ];
    return (
        <>
            <Core.Breadcrumb
                heading="Notification"
                breadcrumb={breadcrumb}
            />
            <AllNotifications data={allNotifications} />
        </>
    );
}

export default Notification;
