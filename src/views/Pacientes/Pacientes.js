import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const pacientesData = []

function PacienteRow(props) {
  const paciente = props.paciente
  const pacienteLink = `#/pacientes/${paciente.id}`

  const getBadge = (status) => {
    return status === 'Ativo' ? 'success' :
      status === 'Inativo' ? 'secondary' :
        'primary'
  }

  return (
    <tr key={paciente.id.toString()}>
        <th scope="row"><a href={pacienteLink}>{paciente.id}</a></th>
        <td><a href={pacienteLink}>{paciente.name}</a></td>
        <td>{paciente.registered}</td>
        <td><Badge href={pacienteLink} color={getBadge(paciente.status)}>{paciente.status}</Badge></td>
    </tr>
  )
}

class Pacientes extends Component {

  render() {

    const pacienteList = pacientesData.filter((paciente) => paciente.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Pacientes
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">Cadastrado</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pacienteList.map((paciente, index) =>
                      <PacienteRow key={index} paciente={paciente}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Pacientes;
