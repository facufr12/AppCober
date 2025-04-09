// Importa las librerías necesarias
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// Importa componentes personalizados
import ApexCharts from 'components/elements/charts/ApexCharts';

// Opciones del gráfico
const OverallProgressChartOptions = {
    chart: {
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '14px',
                    color: '#888',
                    offsetY: 5,
                },
                value: {
                    fontSize: '40px',
                    color: '#754ffe',
                    fontWeight: 'bold',
                    offsetY: 0,
                },
            },
            track: {
                background: '#e0e0e0',
                strokeWidth: '100%',
            },
        },
    },
    fill: {
        colors: ['#754ffe'],
    },
    labels: [''],
};

const OverallProgressChart = () => {
    const location = useLocation();
    const { prospecto } = location.state || {};

    // Multiplica por 100 y redondea
    const evolucion = Math.round(Number(prospecto?.evolucion ?? 0) * 100);

    return (
        <Card className="mb-4">
            <Card.Body>
                <h4 className="mb-3">Evolución</h4>
                <ApexCharts
                    options={OverallProgressChartOptions}
                    series={[evolucion]} // pasa valor ya multiplicado por 100
                    type="radialBar"
                    height={350}
                />
                <div
                    role="progressbar"
                    aria-valuenow={evolucion}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="sr-only"
                >
                    Evolución: {evolucion}%
                </div>
            </Card.Body>
        </Card>
    );
};

export default OverallProgressChart;
