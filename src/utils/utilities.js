export const formatDate = (date) => {
  if (!date) return '';

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date)
    .toLocaleDateString('en-GB', options)
    .replace(/\//g, '/');
};

export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return '#4caf50';
    case 'pending':
      return '#ff9800';
    case 'cancelled':
      return '#3f0f0f';
    case 'scheduled':
      return '#2196f3';
    case 'received':
      return '#9c27b0';
    case 'in progress':
      return '#c88f1c';
    case 'approved':
      return '#00897b';
    case 'assigned':
      return '#ffc107';
    default:
      return '#000';
  }
};
