import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeModal = ({
  id,
  name,
  ingredients,
  instructions,
  time,
  skillLevel,
  showModal,
  handleCloseModal,
}) => {
  return (
    <Modal key={id} show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="recipe-ingrediants">{ingredients}</div>
        <div className="recipe-instructions">{instructions}</div>
        <div className="time">{time}</div>
        <div className="skill-level">{skillLevel}</div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RecipeModal;
