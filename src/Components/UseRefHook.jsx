import React, { useState, useRef } from 'react'

export default function UseRefHook() {
  const [newProduct, setNewProduct] = useState(true)
  const [imageUrl, setImageUrl] = useState("")
  const imgRef = useRef(null)

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      setNewProduct(false)
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Profile Section</h2>

        <input
          type="file"
          ref={imgRef}
          accept="image/*"
          hidden
          onChange={handleImage}
        />

        {newProduct ? (
          <div
            style={styles.uploadBox}
            onClick={() => imgRef.current.click()}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = '#888'
              e.currentTarget.style.background = '#f0f0f0'
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = '#ccc'
              e.currentTarget.style.background = '#fafafa'
            }}
          >
            <div>upload image</div>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="Profile"
            style={styles.previewImg}
            onClick={() => imgRef.current.click()}
          />
        )}

        <p style={newProduct?styles.hint1:styles.hint2}>
          {newProduct ? 'Click to choose a photo' : 'Click photo to change'}
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#a3bbe0',
    border: '1px solid #e0e0e0',
    borderRadius: '16px',
    padding: '2rem 2.5rem',
    width: '320px',
    textAlign: 'center',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  },
  heading: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    
  },
  uploadBox: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '2px dashed #ccc',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: '0 auto 1rem',
    gap: '8px',
    transition: 'border-color 0.2s, background 0.2s',
  },
  uploadText: {
    fontSize: '12px',
    color: '#888',
  },
  previewImg: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
    border: '2.5px solid #ddd',
    margin: '0 auto 1rem',
    display: 'block',
  },
  hint1: {
    fontSize: '13px',
    color: '#c315a0',
    margin: '0',
    fontWeight:"700",
    fontFamily: 'Arial, sans-serif',
  },
  hint2: {
    fontSize: '13px',
    color: '#040a35',
    margin: '0',
    fontWeight:"700",
    fontFamily: 'Arial, sans-serif',
  },
}