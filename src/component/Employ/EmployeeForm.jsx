// src/components/emplForm.js
import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Table } from 'react-bootstrap';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const emplForm = () => {
  const [empls, setempls] = useState([]);
  const [empl, setempl] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setempl({ ...empl, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setempls(empls.map(emp => emp.id === empl.id ? empl : emp));
      setIsEditing(false);
    } else {
      setempls([...empls, { ...empl, id: uuidv4() }]);
    }
    setempl({ id: '', firstName: '', lastName: '', email: '', address: '', phone: '' });
  };

  const editempl = (id) => {
    const emp = empls.find(emp => emp.id === id);
    setempl(emp);
    setIsEditing(true);
  };

  const deleteempl = (id) => {
    setempls(empls.filter(emp => emp.id !== id));
  };

  return (
    <Container>
      <Card className="my-4 shadow-sm card-container">
        <Card.Header as="h5" className="bg-dark text-white">
          {isEditing ? 'Edit employee' : 'New employee'}
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={empl.firstName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Last Name</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={empl.lastName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="email"
                  name="email"
                  value={empl.email}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Address</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="address"
                  value={empl.address}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Phone</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  name="phone"
                  value={empl.phone}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Button variant="success" type="submit" className="mt-3">
                {isEditing ? 'Update' : 'Submit'}
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <div className='border border-top'></div>
      <h3 style={{ backgroundColor: 'purple', color: 'white' }} className='p-3'>
        Manage employee
      </h3>
      <div className='px-5'>
        <Table striped bordered hover className="mt-4 text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empls.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.address}</td>
                <td>{emp.phone}</td>
                <td className='d-flex justify-content-evenly'>
                  <Button variant="info">
                    <FaEye />
                  </Button>
                  <Button variant="warning" onClick={() => editempl(emp.id)} className="mr-2">
                    <FaEdit />
                  </Button>
                  <Button variant="danger" onClick={() => deleteempl(emp.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default emplForm;
