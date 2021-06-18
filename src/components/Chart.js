import React from 'react'
import { ButtonGroup, Card, Button, Typography} from '@material-ui/core'
import { Line } from 'react-chartjs-2'

function Chart() {
    
    const labels = ['Dec10', 'Dec11', 'Dec12', 'Dec13', 'Dec15', 'Dec16', 'Dec17', 'Dec18']
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Type 1',
                borderColor: ['#2b79ff'],
                data: [0.1, 0.2, 0.27, 0.3, 0.5, 0.58, 0.65, 0.7, 0.70],
            },
            {
                label: 'Type 2',
                borderColor: ['#ff2b2b'],
                data: [0.13, 0.17, 0.19, 0.27, 0.5, 0.62, 0.75, 0.8],
            },
            {
                label: 'Type 3',
                borderColor: ['#a72bff'],
                data: [0.12, 0.2, 0.23, 0.32, 0.50, 0.57, 0.73, 0.77],
            },
        ]
    };
    return (
        <div>
        <Card className="p-4">
        <div style={{ display: "flex" }}>
          <Typography style={{ fontSize: "25px" }}>Analytics</Typography>
          <ButtonGroup size="small" style={{ marginLeft: "auto" }}>
            <Button>
                Heading 1 <br></br>
                24,350
            </Button>
            <Button>
                Heading 2 <br></br>
                12,360
            </Button>
            <Button>
                 Heading 3 <br></br>
                10,671
            </Button>
            <Button>
                 Heading 4 <br></br>
                6,562
            </Button>
          </ButtonGroup>
        </div>
        <Line
          className="mt-4"
          data={data}
          options={{ responsive: true, title: "Thickness" }}
        />
      </Card>
        </div>
    )
}

export default Chart
