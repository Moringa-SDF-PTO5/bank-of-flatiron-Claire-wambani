const BASE_URL = 'hhttps://json-server-3-pihv.onrender.com/';

const fetchTransactions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

const addTransaction = async (newTransaction) => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

const deleteTransaction = async (transactionId) => {
  try {
    await fetch(`${BASE_URL}/transactions/${transactionId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

export { fetchTransactions, addTransaction, deleteTransaction };
