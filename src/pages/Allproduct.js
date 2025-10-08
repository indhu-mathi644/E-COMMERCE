import React, { useState, useEffect } from 'react';
import './product.css';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [editingId, setEditingId] = useState(null); 
  const [editFormData, setEditFormData] = useState({});

  const API_URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products data');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleEditClick = (product) => {
    setEditingId(product.id);
    setEditFormData({
      title: product.title,
      description: product.description,
      price: product.price,
    });
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleSaveClick = (editedId) => {
    const dataToUpdate = {
      title: editFormData.title,
      price: parseFloat(editFormData.price),
      description: editFormData.description,
    };

    // API PUT Request to update the product
    fetch(`${API_URL}/${editedId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToUpdate),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update product on the server.');
      }
      return response.json();
    })
    .then(data => {
      // Update the Frontend State after successful API response
      const updatedProductList = products.map(product => 
        product.id === editedId 
          ? { ...product, ...dataToUpdate }
          : product
      );
      
      setProducts(updatedProductList);
      setEditingId(null); 
      setEditFormData({});
    })
    .catch(err => {
      alert(`Error saving product: ${err.message}`);
      setEditingId(null); 
      setEditFormData({});
    });
  };
  
  const handleDeleteClick = (productIdToDelete) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    
    if (isConfirmed) {
      // API DELETE Request to remove the product
      fetch(`${API_URL}/${productIdToDelete}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete product on the server.');
        }
        return response.json();
      })
      .then(data => {
        // Update the Frontend State after successful API response
        const newProductList = products.filter(
          (product) => product.id !== productIdToDelete
        );

        setProducts(newProductList);
        
        if (editingId === productIdToDelete) {
          setEditingId(null);
        }
      })
      .catch(err => {
        alert(`Error deleting product: ${err.message}`);
      });
    }
  };

  if (loading) {
    return <div className="loading-message">Loading all products...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div className="loading-message">No products found.</div>;
  }
  
  return (
    <div className="table-container">
      <h1 className='heading'>All Products🛍️</h1>
      <table className="products-table">
        <thead className='head'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const isEditing = product.id === editingId;
            
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                
                {/* Title Cell */}
                <td>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="title" 
                      value={editFormData.title}
                      onChange={handleEditFormChange}
                      className="edit-input"
                    />
                  ) : (
                    product.title
                  )}
                </td>

                <td>
                  <img src={product.image} alt={product.title} className="product-image" />
                </td>
                
                {/* Description Cell */}
                <td>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="description" 
                      value={editFormData.description}
                      onChange={handleEditFormChange}
                      className="edit-input"
                    />
                  ) : (
                    product.description
                  )}
                </td>

                {/* Price Cell */}
                <td>
                  {isEditing ? (
                    <input 
                      type="number" 
                      name="price" 
                      value={editFormData.price}
                      onChange={handleEditFormChange}
                      className="edit-input-small"
                    />
                  ) : (
                    `$${product.price}`
                  )}
                </td>
                
                {/* Actions Cell (Buttons) */}
                <td>
                  {/* Edit/Save Button */}
                  {isEditing ? (
                    <button 
                      className="edit-btn" 
                      onClick={() => handleSaveClick(product.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button 
                      className="edit-btn" 
                      onClick={() => handleEditClick(product)}
                    >
                      edit
                    </button>
                  )}
                  {/* Delete Button */}
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteClick(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllProducts;
