import { BarChart } from '@mui/x-charts';
import React from 'react'

const Barchart = () => {
  return (
    <>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Day 1', 'Day 2', 'Day 3'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={300}
        height={300}
      />
    </>
  )
}

export default Barchart