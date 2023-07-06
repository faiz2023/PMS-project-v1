<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
=======
import React, { useState, useEffect } from "react"
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap"
import { toast } from "react-toastify"
import axios from "axios"
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e

// eslint-disable-next-line react/prop-types
const UpdateModal = ({ updateclose, update, id }) => {
<<<<<<< HEAD
  const [show, setShow] = useState(update);

  useEffect(() => {
    setShow(update);
  }, [update]);
=======
  const [show, setShow] = useState(update)

  useEffect(() => {
    setShow(update)
  }, [update])
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e

  const handleModalClose = () => {
    updateclose();
    setShow(false);
    
  };

<<<<<<< HEAD
  const [user, setUser] = useState({});
=======
  const [user, setUser] = useState({})
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e

  useEffect(() => {
    const showDetail = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(`http://localhost:3003/vendors/${id}`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    showDetail();
    
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
=======
        const response = await axios.get(`http://localhost:3003/vendors/${id}`)
        const data = response.data
        setUser(data)
      } catch (error) {
        console.error(error)
      }
    }

    showDetail()
  }, [id])

  const handleChange = event => {
    const { name, value } = event.target
    setUser(prevUser => ({
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
      ...prevUser,
      [name]: value,
    }));
    
  };

<<<<<<< HEAD
  const updateUser = async (user) => {
    try {
      const response = await axios.patch(`http://localhost:3003/vendors/${user._id}`, user);
      if (response.status === 200) {
        toast.success('User Successfully Updated!', {
          toastId: 'success',
=======
  const updateUser = async user => {
    try {
      const response = await axios.patch(
        `http://localhost:3003/vendors/${user._id}`,
        user
      )
      if (response.status === 200) {
        toast.success("User Successfully Updated!", {
          toastId: "success",
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
          position: toast.POSITION.TOP_RIGHT,
          
        });
      }
    } catch (error) {
<<<<<<< HEAD
      console.error(error);
    }
    location.reload();
  };
=======
      console.error(error)
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleModalClose}
        animation={false}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#40536e", color: "white" }}>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={12}>
                <Form action="">
                  <Form.Label className="ms-1">First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="First_name"
<<<<<<< HEAD
                    value={user.First_name || ''}
=======
                    value={user.First_name || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Last_name"
<<<<<<< HEAD
                    value={user.Last_name || ''}
=======
                    value={user.Last_name || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="Phone"
<<<<<<< HEAD
                    value={user.Phone || ''}
=======
                    value={user.Phone || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
<<<<<<< HEAD
                    value={user.email || ''}
                    onChange={handleChange}
                  /> <Form.Label className="ms-1 mt-2">Alternative No</Form.Label>
                  <Form.Control
                    type="text"
                    name="alternative_no"
                    value={user.alternative_no || ''}
=======
                    value={user.email || ""}
                    onChange={handleChange}
                  />{" "}
                  <Form.Label className="ms-1 mt-2">Alternative No</Form.Label>
                  <Form.Control
                    type="text"
                    name="alternative_no"
                    value={user.alternative_no || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="Address"
<<<<<<< HEAD
                    value={user.Address || ''}
=======
                    value={user.Address || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Id Proof</Form.Label>
                  <Form.Control
                    type="text"
                    name="Id_Proof"
<<<<<<< HEAD
                    value={user.Id_Proof || ''}
=======
                    value={user.Id_Proof || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Logo</Form.Label>
                  <Form.Control
                    type="text"
                    name="Logo"
<<<<<<< HEAD
                    value={user.Logo || ''}
=======
                    value={user.Logo || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Company_Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Name"
<<<<<<< HEAD
                    value={user.Company_Name || ''}
=======
                    value={user.Company_Name || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Products</Form.Label>
                  <Form.Control
                    type="text"
                    name="Products"
<<<<<<< HEAD
                    value={user.Products || ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Company_Lisence_Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Lisence_Number"
                    value={user.Company_Lisence_Number || ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Company Lisence_Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Lisence_Id"
                    value={user.Company_Lisence_Id || ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Product Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="Product_Category"
                    value={user.Product_Category || ''}
=======
                    value={user.Products || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">
                    Company_Lisence_Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Lisence_Number"
                    value={user.Company_Lisence_Number || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">
                    Company Lisence_Id
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Company_Lisence_Id"
                    value={user.Company_Lisence_Id || ""}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">
                    Product Category
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Product_Category"
                    value={user.Product_Category || ""}
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
<<<<<<< HEAD
                    value={user.status || ''}
                    onChange={handleChange}
                  >
                    <option style={{ backgroundColor: '#40536e' }} value="" className=" text-white">
                      {user.status}
                    </option>
                    <option className={user.status === 'Active' ? 'd-none' : 'd-block'} value="Active">
                      Active
                    </option>
                    <option className={user.status === 'Inactive' ? 'd-none' : 'd-block'} value="Inactive">
=======
                    value={user.status || ""}
                    onChange={handleChange}>
                    <option
                      style={{ backgroundColor: "#40536e" }}
                      value=""
                      className=" text-white">
                      {user.status}
                    </option>
                    <option
                      className={
                        user.status === "Active" ? "d-none" : "d-block"
                      }
                      value="Active">
                      Active
                    </option>
                    <option
                      className={
                        user.status === "Inactive" ? "d-none" : "d-block"
                      }
                      value="Inactive">
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
                      Inactive
                    </option>
                  </Form.Select>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="text-white"
            onClick={handleModalClose}>
            Close
          </Button>
          <Button
            className="text-white"
            variant="success"
            onClick={() => {
<<<<<<< HEAD
              handleModalClose();
              updateUser(user);
            }}
          >
=======
              handleModalClose()
              updateUser(user)
            }}>
>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
            Save
          </  Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateModal;
<<<<<<< HEAD
=======

>>>>>>> 1875405c3c21113d9da16e5b4a2e05b0ac94af4e
