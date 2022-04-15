import { useState } from 'react';

export const Status = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
};

export const useStateMachineWithMessage = (
  initialStatus = Status.IDLE,
  initialMessage = '',
) => {
  const [status, setStatus] = useState(initialStatus);
  const [message, setMessage] = useState(initialMessage);
  return { status, setStatus, message, setMessage };
};
