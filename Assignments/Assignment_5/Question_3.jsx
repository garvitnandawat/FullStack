import React from 'react';

const StatusMessage = ({ status }) => {
  if (status === 'success') {
    return <p>Operation was successful</p>;
  } else if (status === 'error') {
    return <p>There was an error</p>;
  }
  return null;
};

export default StatusMessage;
