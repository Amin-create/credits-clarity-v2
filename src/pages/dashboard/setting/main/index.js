import React from 'react';
import { Core } from '../../../../components';
import AllSettings from '../../../../components/all_settings/AllSettings'; 

function Setting() {

    const breadcrumb = [
        { label: "Setting", link: "/dashboard/setting" },
        { label: "My Profile" },
    ];
    return (
        <>
            <Core.Breadcrumb
                heading="Setting"
                breadcrumb={breadcrumb}
            />
            <AllSettings />
        </>
    );
}

export default Setting;