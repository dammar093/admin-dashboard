import { PieChart } from '@mui/x-charts';
import React from 'react'

const Piechart = () => {
  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Active Uers' },
              { id: 1, value: 15, label: 'Sales' },
              { id: 2, value: 20, label: 'Products' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </>
  )
}

export default Piechart