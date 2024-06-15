import React from 'react'
import { dashboardCard, dashboardStats } from '../../../../data'
import StatsGroup from '../../../../components/stats_group/StatsGroup'
import { Core } from '../../../../components'


function Dashboard() {
    return (
        <>
            <Core.Card cardNumber={3} data={dashboardCard} />
            <StatsGroup data={dashboardStats} />
        </>
    )
}

export default Dashboard