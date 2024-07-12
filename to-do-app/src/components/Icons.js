import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

export const EditIcon = ({ onClick }) => (
  <FontAwesomeIcon icon={faEdit} onClick={onClick} />
);

export const DeleteIcon = ({ onClick }) => (
  <FontAwesomeIcon icon={faTrashAlt} onClick={onClick} />
);

export const CompleteIcon = ({ onClick }) => (
  <FontAwesomeIcon icon={faCheck} onClick={onClick} />
);

export const UndoIcon = ({ onClick }) => (
  <FontAwesomeIcon icon={faUndo} onClick={onClick} />
);



